<template>
  <el-dialog
    v-model="dialogVisible"
    destroy-on-close
    custom-class="dialog"
    center
    top="10vh"
  >
    <template #title>
      <span>{{ pathItemInfo.name }}</span>
    </template>
    <el-scrollbar max-height="60vh">
      <VideoPreview
        v-if="pathItemInfo.mimeType?.startsWith('video')"
        :src="directLink"
      ></VideoPreview>
      <ImgPreview
        v-else-if="pathItemInfo.mimeType?.startsWith('image')"
        :src="directLink"
      ></ImgPreview>
      <TextPreview
        v-else-if="
          pathItemInfo.mimeType?.startsWith('text') ||
          pathItemInfo.mimeType?.endsWith('json')
        "
        :src="directLink"
      ></TextPreview>
      <AudioPreview
        v-else-if="pathItemInfo.mimeType?.startsWith('audio')"
        :src="directLink"
        :type="pathItemInfo.mimeType"
      ></AudioPreview>
      <div v-else>该文件不支持预览</div>
    </el-scrollbar>
    <template #footer>
      <a :href="directLink"><el-button>下载</el-button></a>
    </template>
  </el-dialog>
</template>
<script lang="ts">
import { defineAsyncComponent, defineComponent, PropType } from 'vue'
import { ElDialog, ElButton, ElScrollbar } from 'element-plus'
import { api, PathItemInfo } from '../../api'

export default defineComponent({
  props: {
    pathItemInfo: {
      type: Object as PropType<PathItemInfo>,
      required: true
    },
    visible: {
      type: Boolean,
      default: false
    }
  },
  components: {
    ElDialog, ElButton, ElScrollbar,
    VideoPreview: defineAsyncComponent(() => import('./VideoPreview.vue')),
    ImgPreview: defineAsyncComponent(() => import('./ImgPreview.vue')),
    TextPreview: defineAsyncComponent(() => import('./TextPreview.vue')),
    AudioPreview: defineAsyncComponent(() => import('./AudioPreview.vue'))
  },
  data() {
    return {
      dialogVisible: false
    }
  },
  watch: {
    dialogVisible(v: boolean) {
      this.$emit('update:visible', v)
    },
    visible(v: boolean) {
      this.dialogVisible = v
    }
  },
  computed: {
    directLink(): string {
      return api.getDirectLink(this.pathItemInfo.path)
    }
  }
})
</script>
<style>
.dialog {
  min-width: 350px;
  width: 70vw;
}
</style>