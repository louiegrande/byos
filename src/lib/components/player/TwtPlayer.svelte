<script lang="ts">
  import { onMount } from 'svelte';
  import { players } from '$lib/stores';
  import { dragElement } from '$lib/positioning';

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

    players.put(id, player);

    const draggableElement = document.getElementById(`twitch-module-${id}`);

    if (draggableElement != null) {
      dragElement(draggableElement);
    }
  });
</script>

<div id="twitch-module-{id}" class="draggable">
  <div id="twitch-player-{id}"/>
  <div id="twitch-module-{id}-header" class="dragHeader"/>
</div>
