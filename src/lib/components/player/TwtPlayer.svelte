<script lang="ts">
  import { onMount } from 'svelte';
  import { players } from '$lib/stores';

  export let channel: string = 'louiegrande';
  export let width: string = '100%';
  export let height: string = '100%';
  export let autoplay: boolean = true;
  export let muted: boolean = true;
  export let parent: string = 'localhost';
  export let id: string | number;
  export let controls: boolean = true;

  let player: Twitch.Player;

  onMount(async () => {
    player = new Twitch.Player(`twitch-player-${id}`, {
  	  channel,
  	  width,
  	  height,
  	  autoplay,
  	  muted,
  	  parent,
      controls
    });

    players.add(id, player);
  });
</script>

<div id="twitch-player-{id}"></div>
