<script lang="ts">
  import { StreamingSite } from "$lib/stream";
  import { createEventDispatcher } from "svelte";

  const dispatch = createEventDispatcher();

  let streamType: StreamingSite;
  let streamName: string;


  function addStream() {
    dispatch('addStream', {
      type: streamType,
      name: streamName
    });
  }
</script>

<div>
  <select bind:value={streamType}>
    {#each Object.keys(StreamingSite) as streamingSite}
      <option value="{streamingSite}">{StreamingSite[streamingSite]}</option>
    {/each}
  </select>
  <input bind:value={streamName} placeholder="Stream"/>
  <button on:click={addStream}>Add</button>
</div>
