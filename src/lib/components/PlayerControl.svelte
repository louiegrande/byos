<script lang="ts">
  import { createEventDispatcher } from "svelte";

  export let id: number;
  export let player: Twitch.Player;
  let muted: Boolean = player.getMuted();

  let dispatch = createEventDispatcher();

  function mute() {
    muted = !player.getMuted()
    player.setMuted(muted);
  }

  function play() {
  }

  function remove() {
    dispatch('removePlayer',{
        id: id,
    });
  }
</script>

<div class="row singleRow">
  <p class="rowElement">{player.getChannel()}</p>
</div>
<div class="row singleRow">
  <button class="rowElement" on:click={play} style="width: 1.25rem">
    <img class="icon" src="icons/play.svg"/>
  </button>
  <button class="rowElement" on:click={mute} style="width: 1.25rem">
    {#if muted}
      <img class="icon" src="icons/mute.svg"/>
    {:else}
      <img class="icon" src="icons/unmute.svg"/>
    {/if}
  </button>
  <button class="rowElement" on:click={remove} style="width: 1.25rem">
    <img class="icon deleteIcon" src="icons/trash.svg"/>
  </button>
</div>
