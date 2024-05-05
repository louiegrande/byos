<script>
  import { page } from '$app/stores';
  import HLSPlayer from '$lib/components/HLSPlayer.svelte';
</script>

<HLSPlayer src="http://localhost:8080/hls/{$page.params.user}.m3u8" />
