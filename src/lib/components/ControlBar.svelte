<script lang="ts">
  import AddStream from "./AddStream.svelte";
  import PlayerControl from "./PlayerControl.svelte";

  export let players: [{id: number, player: Twitch.Player}];
</script>

<div class="sidebar">
  <AddStream on:addStream/>
  {#if players}
    {#each players as player}
      <PlayerControl id={player.id} player={player.player} on:removePlayer/>
    {/each}
  {/if}
</div>
