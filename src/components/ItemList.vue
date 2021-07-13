<template>
  <el-table :data="pathInfo.items" @row-click="handleRowClick">
    <el-table-column prop="name" label="文件名">
      <template #default="scope">
        <span v-if="scope.row.isDir" class="el-icon-folder"></span>
        <span v-else class="el-icon-tickets"></span
        ><span>&nbsp;{{ scope.row.name }}</span>
      </template>
    </el-table-column>
  </el-table>
</template>

<script lang="ts">
import { defineComponent } from 'vue'
import { api, backendURL, PathInfo, PathItemInfo } from "../api"
import { ElTable, ElTableColumn } from "element-plus"

export default defineComponent({
  props: ['path'],
  components: { ElTable, ElTableColumn },
  data() {
    return {
      pathInfo: {} as PathInfo
    }
  },
  methods: {
    handleRowClick(row: unknown) {
      const r = row as PathItemInfo
      if (r.isDir) {
        this.$router.push({ path: '/', query: { path: r.path } })
      } else {
        window.location.href = backendURL + '/file' + r.path
      }
    }
  },
  async mounted() {
    this.pathInfo = await api.getPathInfo(this.path)
  },
  watch: {
    async path(path: string) {
      this.pathInfo = await api.getPathInfo(path)
    }
  }
})
</script>
