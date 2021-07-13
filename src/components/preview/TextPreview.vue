<template>
  <highlightjs :code="text" autodetect></highlightjs>
</template>
<script lang="ts">
import axios from 'axios'
import { defineComponent } from 'vue'

export default defineComponent({
  props: {
    src: {
      type: String,
      required: true
    },
  },
  data() {
    return {
      text: ''
    }
  },
  async mounted() {
    const resp = await axios.get<string>(this.src, {
      transformResponse: data => data
    })
    this.text = resp.data
  }
})
</script>
