<script lang="ts">
  import AddStream from "$lib/components/AddStream.svelte";
  import TwtPlayer from "$lib/components/player/TwtPlayer.svelte";
  import Draggable from "$lib/components/Draggable.svelte";
  import type { Stream } from "$lib/stream";
  import { StreamingService } from "$lib/stream";

  let streams: [Stream];

  function addStream(event: CustomEvent) {
    const stream: Stream = event.detail;
    if (!streams) {
      streams = [stream];
    } else {
      streams = [...streams, stream];
    }
  }
</script>

<div>
  {#if streams}
    {#each streams as stream, id}
      <Draggable>
      {#if stream.streamingService === StreamingService.TWITCH}
        <TwtPlayer id={id} channel={stream.channelName} controls={false}/>
      {/if}
      </Draggable>
    {/each}
  {/if}
</div>
<AddStream on:addStream={addStream}/>
