<script lang="ts">
  import { StreamingService } from "$lib/stream";
  import { createEventDispatcher } from "svelte";

  const dispatch = createEventDispatcher();

  let streamingService: StreamingService;
  let channelName: string;


  function addStream() {
    dispatch('addStream', {
      type: streamingService,
      name: channelName
    });
  }
</script>

<div>
  <select bind:value={streamingService}>
    {#each Object.keys(StreamingService) as streamingService}
      <option value="{streamingService}">{StreamingService[streamingService]}</option>
    {/each}
  </select>
  <input bind:value={channelName} placeholder="Stream"/>
  <button on:click={addStream}>Add</button>
</div>
