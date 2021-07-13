<template>
  <el-container>
    <el-header>
      <Header></Header>
    </el-header>
    <el-main>
      <el-scrollbar
        ><el-row justify="center"
          ><el-col
            :xs="{ span: 24 }"
            :sm="{ span: 20 }"
            :md="{ span: 16 }"
            :lg="{ span: 12 }"
            :xl="{ span: 12 }"
          >
            <router-view></router-view></el-col
        ></el-row> </el-scrollbar
    ></el-main>
  </el-container>
</template>

<script lang="ts">
import { defineComponent } from 'vue'
import Header from './components/Header.vue'
import { ElContainer, ElHeader, ElMain, ElRow, ElCol, ElScrollbar } from 'element-plus'

export default defineComponent({
  components: { Header, ElContainer, ElHeader, ElMain, ElRow, ElCol, ElScrollbar }
})
</script>

<style>
body {
  margin: 0;
}
.el-container {
  height: 100vh;
}
</style>
