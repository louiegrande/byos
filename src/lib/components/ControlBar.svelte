<script lang="ts">
  import AddStream from "./AddStream.svelte";
  import PlayerControl from "./PlayerControl.svelte";
  import { players } from "$lib/stores";
</script>

<div class="sidebar">
  <AddStream/>
  {#if $players}
    {#each $players as player}
      <PlayerControl id={player.id} player={player.player} on:removePlayer/>
    {/each}
  {/if}
</div>
