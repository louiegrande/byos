<script lang="ts">
  import { players, streams } from "$lib/stores";
  import { onMount } from "svelte";

  export let id: number;
  let player: Twitch.Player = $players.get(id);
  let paused: Boolean;
  let muted: Boolean;
  let channelName: string = "";
  $: volume = 0.5;

  onMount(async () => {
    player.addEventListener(Twitch.Player.READY, () => {
      paused = player.isPaused();
      muted = player.getMuted();
      channelName = player.getChannel();
      volume = player.getVolume();
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

  function setVolume() {
    player.setVolume(volume);
    if (volume === 0) {
      player.setMuted(true);
      muted = true;
    } else {
      player.setMuted(false);
      muted = false;
    }
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
  <input
    class="rowElement volume"
    type="range"
    min="0"
    max="1"
    step="0.01"
    bind:value="{volume}"
    style="width: 10.25rem"
    on:change={setVolume}
  />
  <button class="rowElement" on:click={remove} style="width: 1.25rem">
    <img class="icon deleteIcon" src="icons/trash.svg"/>
  </button>
</div>
