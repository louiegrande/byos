<script lang="ts">
  import HLSPlayer from "$lib/components/player/HLSPlayer.svelte";
  import AddStream from "$lib/components/AddStream.svelte";
  import type { Stream } from "$lib/stream";

  let streams: [string];

  function addStream() {
    if (!streams) {
      streams = ["http://localhost:8080/hls/louisj.m3u8"];
    } else {
      streams = [...streams, "http://localhost:8080/hls/louisj.m3u8"];
    }
  }
</script>

<div>
  {#if streams}
    {#each streams as stream}
      <HLSPlayer src="{stream}"/>
    {/each}
  {/if}
</div>
<AddStream on:addStream={addStream}/>
