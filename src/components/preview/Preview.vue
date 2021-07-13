<template>
  <el-dialog
    v-model="dialogVisible"
    destroy-on-close
    custom-class="dialog"
    center
  >
    <template #title>
      <span>{{ pathItemInfo.name }}</span>
    </template>
    <el-scrollbar max-height="40vh">
      <VideoPreview
        v-if="pathItemInfo.mimeType?.startsWith('video')"
        :src="previewSrc"
      ></VideoPreview>
      <ImgPreview
        v-else-if="pathItemInfo.mimeType?.startsWith('image')"
        :src="previewSrc"
      ></ImgPreview>
      <TextPreview
        v-else-if="
          pathItemInfo.mimeType?.startsWith('text') ||
          pathItemInfo.mimeType?.endsWith('json')
        "
        :src="previewSrc"
      ></TextPreview>
      <div v-else>该文件不支持预览</div>
    </el-scrollbar>
    <template #footer>
      <el-button @click="handleDownload">下载</el-button>
    </template>
  </el-dialog>
</template>
<script lang="ts">
import { defineComponent, PropType } from 'vue'
import { ElDialog, ElButton, ElScrollbar } from 'element-plus'
import { api, PathItemInfo } from '../../api'
import VideoPreview from './VideoPreview.vue'
import ImgPreview from './ImgPreview.vue'
import TextPreview from './TextPreview.vue'

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
  components: { ElDialog, ElButton, VideoPreview, ImgPreview, TextPreview, ElScrollbar },
  data() {
    return {
      dialogVisible: false
    }
  },
  methods: {
    handleDownload() {
      window.location.href = api.getDirectURL(this.pathItemInfo.path)
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
    previewSrc(): string {
      return api.getDirectURL(this.pathItemInfo.path)
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