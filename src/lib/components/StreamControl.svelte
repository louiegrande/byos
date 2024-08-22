<script lang="ts">
  import { createEventDispatcher, onMount } from 'svelte';

  const dispatch = createEventDispatcher();

  let isFullscreen: boolean = false;
  
  function toggleFullscreen() {
    dispatch('toggleFullscreen');
  }

  function updateFullscreenState() {
    isFullscreen = Boolean(document.fullscreenElement);
  }

  onMount(() => {
    document.addEventListener("fullscreenchange",updateFullscreenState);
  });

</script>

<button class="fullscreen" on:click={toggleFullscreen}>
  {#if isFullscreen}
    <img class="icon" src="icons/exitFullscreen.svg"/>
  {:else}
    <img class="icon" src="icons/fullscreen.svg"/>
  {/if}
</button>
