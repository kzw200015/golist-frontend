<template>
  <el-menu mode="horizontal">
    <el-menu-item>我的文件</el-menu-item>
  </el-menu>
</template>

<script lang="ts">
import { defineComponent } from 'vue'
import { ElMenu, ElMenuItem } from 'element-plus'

export default defineComponent({
  components: {
    ElMenu,
    ElMenuItem
  }
})
</script>
