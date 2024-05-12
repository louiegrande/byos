<script lang="ts">
  import { dragElement } from "$lib/positioning";
  import { onMount } from "svelte";

  onMount(async () => {
    const draggableElement = document.getElementById("draggable-div");

    if (draggableElement != null) {
      dragElement(draggableElement);
    }
  });
</script>

<div id="draggable-div" class="draggable">
  <slot/>
</div>
