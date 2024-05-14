<script lang="ts">
  import { dragElement } from "$lib/positioning";
  import { onMount } from "svelte";

  export let id: string | number;

  onMount(async () => {
    const draggableElement = document.getElementById(`draggable-div-${id}`);

    if (draggableElement != null) {
      dragElement(draggableElement);
    }
  });
</script>

<div id="draggable-div-{id}" class="draggable">
  <slot/>
</div>
