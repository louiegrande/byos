<script lang="ts">
  let isFullscreen: boolean = false;

  function handleFullscreen() {
    if ( !isFullscreen ) {
      document.getElementById('container')?.requestFullscreen();
      isFullscreen = true;
    } else {
      document.exitFullscreen()
      isFullscreen = false;
    }
  }
</script>

<button class="fullscreen" on:click={handleFullscreen}>
  {#if isFullscreen}
    <img class="icon" src="icons/fullscreen.svg"/>
  {:else}
    <img class="icon" src="icons/fullscreen.svg"/>
  {/if}
</button>
