<script lang="ts">
  import Draggable from "$lib/components/Draggable.svelte";
  import TwtPlayer from "$lib/components/player/TwtPlayer.svelte";
</script>

<Draggable>
  <span>Drag me</span>
</Draggable>
<TwtPlayer channel="tarik" id="1"/>
<button/> 
