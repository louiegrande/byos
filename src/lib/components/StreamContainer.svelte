<script lang="ts">
  import TwtPlayer from "./player/TwtPlayer.svelte";
  import { StreamingService } from "$lib/stream";
  import { streams } from "$lib/stores";
</script>

<div class="streamContainer">
  {#each $streams.entries() as stream (stream[0])}
    {#if stream[1].streamingService === StreamingService.TWITCH}
      <TwtPlayer
        id={stream[0]}
        channel={stream[1].channelName}
        controls={false}
      />
    {/if}
  {/each}
</div>
