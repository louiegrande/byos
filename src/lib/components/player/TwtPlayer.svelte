<script lang="ts">
  import { createEventDispatcher, onMount } from 'svelte';

  export let channel = 'louiegrande';
  export let width = '100%';
  export let height = '100%';
  export let autoplay = true;
  export let muted = true;
  export let parent = 'localhost';
  export let id: string;

  let player: Twitch.Player;

  const dispatch = createEventDispatcher();

  onMount(async () => {
    player = new Twitch.Player(`twitch-player-${id}`, {
  	  channel,
  	  width,
  	  height,
  	  autoplay,
  	  muted,
  	  parent
    });
    dispatch('playerCreated', {
      player: player
    });
  });
</script>

<div id="twitch-player-{id}"></div>
