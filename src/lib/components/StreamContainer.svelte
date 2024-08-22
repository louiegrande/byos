<script lang="ts">
  import TwtPlayer from "./player/TwtPlayer.svelte";
  import { StreamingService } from "$lib/stream";
  import { streams } from "$lib/stores";
  import StreamControl from "./StreamControl.svelte";

  function toggleFullscreen() {
    if (!document.fullscreenElement) {
      document.getElementById('container')?.requestFullscreen();
    } else {
      document.exitFullscreen();
    }
  }
</script>

<div class="streamContainer" id="container">
  {#each $streams.entries() as stream (stream[0])}
    {#if stream[1].streamingService === StreamingService.TWITCH}
      <TwtPlayer
        id={stream[0]}
        channel={stream[1].channelName}
      />
    {/if}
  {/each}
  <StreamControl on:toggleFullscreen={toggleFullscreen}/>
</div>
