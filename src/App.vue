<template>
  <el-container>
    <el-header>
      <Header></Header>
    </el-header>
    <el-main><router-view></router-view></el-main>
  </el-container>
</template>

<script lang="ts">
import { defineComponent } from 'vue'
import Header from "./components/Header.vue"
import { ElContainer, ElHeader, ElMain } from "element-plus"

export default defineComponent({
  components: { Header, ElContainer, ElHeader, ElMain }
})
</script>

<style>
</style>
