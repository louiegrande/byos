<script lang="ts">
  import AddStream from "./AddStream.svelte";
  import PlayerControl from "./PlayerControl.svelte";
  import { players } from "$lib/stores";
</script>

<div class="sidebar">
  <AddStream/>
  {#each $players.entries() as player (player[0])}
    <PlayerControl id={player[0]}/>
  {/each}
</div>
