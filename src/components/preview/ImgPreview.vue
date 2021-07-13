<template>
  <div style="text-align: center">
    <el-image :src="src" fit="contain"> </el-image>
  </div>
</template>
<script lang="ts">
import { defineComponent } from 'vue'
import { ElImage } from 'element-plus'

export default defineComponent({
  props: {
    src: {
      type: String,
      required: true
    },
  },
  components: { ElImage }
})
</script>