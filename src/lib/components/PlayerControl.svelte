<script lang="ts">
  import { players, streams } from "$lib/stores";
  import { onMount } from "svelte";

  export let id: number;
  let player: Twitch.Player = $players.get(id);
  let paused: Boolean;
  let muted: Boolean;
  let channelName: string = "";

  onMount(async () => {
    player.addEventListener(Twitch.Player.READY, () => {
      paused = player.isPaused();
      muted = player.getMuted();
      channelName = player.getChannel();
    });

    player.addEventListener(Twitch.Player.PLAYING, () => {
      paused = false;
    });

    player.addEventListener(Twitch.Player.PAUSE, () => {
      paused = true;
    });
  });

  function mute() {
    muted = !player.getMuted();
    player.setMuted(muted);
  }

  function play() {
    if (player.isPaused()) {
      player.play();
    } else {
      player.pause();
    }
  }

  function remove() {
    streams.delete(id);
    players.delete(id);
  }
</script>

<div class="row singleRow">
  <p class="rowElement">{channelName}</p>
</div>
<div class="row singleRow">
  <button class="rowElement" on:click={play} style="width: 1.25rem">
    {#if paused}
      <img class="icon" src="icons/play.svg"/>
    {:else}
      <img class="icon" src="icons/pause.svg"/>
    {/if}
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
