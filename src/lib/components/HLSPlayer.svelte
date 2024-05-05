<script lang="ts">
  import videojs from 'video.js';
  import 'video.js/dist/video-js.min.css';
  import { onMount, onDestroy } from 'svelte';
  import type Player from 'video.js/dist/types/player';

  export let src;
  let player: Player;

  onMount(() => {
    player = videojs('my-video');
  });
  
  onDestroy(() => {
    if (player) player.dispose();
  });
</script>
<video
  id="my-video"
  class="video-js"
  controls
  preload="auto"
  width="640"
  height="264"
>
  <source {src} type="application/x-mpegURL">
</video>
