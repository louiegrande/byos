<script lang="ts">
  import AddStream from "./AddStream.svelte";
  import PlayerControl from "./PlayerControl.svelte";
  import { players } from "$lib/stores";
</script>

<div class="sidebar">
  <AddStream/>
  {#each $players.entries() as player}
    <PlayerControl id={player[0]} player={player[1]}/>
  {/each}
</div>
