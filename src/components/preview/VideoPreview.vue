<template>
  <div id="dplayer"></div>
</template>
<script lang="ts">
import { defineComponent } from 'vue'
import DPlayer from 'dplayer'
import FlvJs from 'flv.js'

export default defineComponent({
  props: {
    src: {
      type: String,
      required: true
    },
  },
  mounted() {
    let type = 'auto'
    if (this.src.endsWith('.flv')) {
      type = 'customFlv'
    }

    new DPlayer({
      container: document.getElementById('dplayer'),
      autoplay: true,
      video: {
        url: this.src,
        type: type,
        customType: {
          customFlv: function (video: HTMLVideoElement) {
            const flvPlayer = FlvJs.createPlayer({
              type: 'flv',
              url: video.src,
            })
            flvPlayer.attachMediaElement(video)
            flvPlayer.load()
          },
        },
      }
    })
  }
})
</script>
