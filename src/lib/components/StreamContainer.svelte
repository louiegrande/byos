<script lang="ts">
  import Draggable from "./Draggable.svelte"
  import TwtPlayer from "./player/TwtPlayer.svelte";
  import { StreamingService } from "$lib/stream";
  import { streams } from "$lib/stores";
</script>

<div class="streamContainer">
  {#each $streams as stream}
    <Draggable id={stream.id}>
    {#if stream.streamingService === StreamingService.TWITCH}
      <TwtPlayer
        id={stream.id}
        channel={stream.channelName}
        controls={false}
      />
    {/if}
    </Draggable>
  {/each}
</div>
