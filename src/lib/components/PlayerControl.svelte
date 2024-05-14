<script lang="ts">
  import type { Stream } from "$lib/stream";
  import { players } from "$lib/stores";
  import { streams } from "$lib/stores";

  export let id: number;
  export let player: Twitch.Player;
  let stream_array: [Stream];
  let player_array: [{id: number, player: Twitch.Player}];
  let muted: Boolean = player.getMuted();

  function mute() {
    muted = !player.getMuted()
    player.setMuted(muted);
  }

  function play() {
  }

  function remove() {
    streams.subscribe((value: [Stream]) => {stream_array = value});
    players.subscribe((value: [{id: number, player: Twitch.Player}]) => {player_array =value});
    streams.set(stream_array.filter(stream => id !== stream.id));
    players.set(player_array.filter(player => id !== player.id));
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
