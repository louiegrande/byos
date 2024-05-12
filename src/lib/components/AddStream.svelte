<script lang="ts">
  import { StreamingService } from "$lib/stream";
  import { createEventDispatcher } from "svelte";

  const dispatch = createEventDispatcher();

  let streamingService: StreamingService;
  let channelName: string;


  function addStream() {
    dispatch('addStream', {
      streamingService: streamingService,
      channelName: channelName
    });
  }
</script>

<div>
  <select bind:value={streamingService}>
    {#each Object.values(StreamingService) as streamingService}
      <option value="{streamingService}">{streamingService}</option>
    {/each}
  </select>
  <input bind:value={channelName} placeholder="Enter Channel"/>
  <button on:click={addStream}>Add</button>
</div>
