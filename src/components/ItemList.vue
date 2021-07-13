<template>
  <el-table
    :show-header="false"
    :data="pathInfo.items"
    @row-click="handleRowClick"
    :cell-style="{ cursor: 'pointer' }"
    v-loading.fullscreen.lock="loading"
  >
    <el-table-column prop="name" label="文件名" show-overflow-tooltip>
      <template #default="scope">
        <span v-if="scope.row.isDir" class="el-icon-folder"></span>
        <span v-else class="el-icon-tickets"></span
        ><span>&nbsp;{{ scope.row.name }}</span>
      </template>
    </el-table-column>
  </el-table>

  <Preview
    :pathItemInfo="currentPathItemInfo"
    v-model:visible="previewVisible"
  ></Preview>
</template>

<script lang="ts">
import { defineComponent } from 'vue'
import { api, PathInfo, PathItemInfo } from '../api'
import { ElTable, ElTableColumn, ElMessage } from 'element-plus'
import Preview from './preview/Preview.vue'

export default defineComponent({
  props: {
    path: {
      type: String,
      required: true
    }
  },
  components: { ElTable, ElTableColumn, Preview },
  data() {
    return {
      pathInfo: {} as PathInfo,
      loading: false,
      previewVisible: false,
      currentPathItemInfo: {} as PathItemInfo
    }
  },
  methods: {
    handleRowClick(row: unknown) {
      const p = row as PathItemInfo
      if (p.isDir) {
        this.$router.push({ path: '/', query: { path: p.path } })
      } else {
        // window.location.href = api.getDirectURL(p.path)
        this.currentPathItemInfo = p
        this.previewVisible = true
      }
    },
    async loadData(path: string) {
      this.loading = true
      try {
        this.pathInfo = await api.getPathInfo(path)
      } catch (err) {
        ElMessage.error(err.message)
      } finally {
        this.loading = false
      }
    }
  },
  async mounted() {
    await this.loadData(this.path)
  },
  watch: {
    async path(path: string) {
      await this.loadData(path)
    }
  }
})
</script>