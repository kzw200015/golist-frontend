<template>
  <div style="text-align: center">
    <audio controls>
      <source :src="src" :type="type" />
    </audio>
  </div>
</template>
<script lang="ts">
import { defineComponent } from 'vue'

export default defineComponent({
  props: {
    src: {
      type: String,
      required: true
    },
    type: {
      type: String,
      required: true
    }
  }
})
</script>
