<script lang="ts">
  import { StreamingService } from "$lib/stream";
  import type { Stream } from "$lib/stream";
  import { streams } from "$lib/stores";

  let streamingService: StreamingService;
  let channelName: string;
  let index: number = 0;

  function addStream() {
    streams.add(index, streamingService, channelName);
    index += 1;
  }
</script>

<div class="row singleRow">
  <input
    class="rowElement"
    bind:value={channelName}
    placeholder="Enter Channel"
    style="width: 7.125rem"
  />
  <select
    class="rowElement"
    bind:value={streamingService}
    style="width: 7.125rem"
  >
    {#each Object.values(StreamingService) as streamingService}
      <option value="{streamingService}">{streamingService}</option>
    {/each}
  </select>
</div>
<div class="row singleRow">
  <button
    class="rowElement"
    on:click={addStream}
    style="width: 14.5rem"
  >
    Add
  </button>
</div>
