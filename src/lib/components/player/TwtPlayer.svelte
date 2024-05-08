<script lang="ts">
	import { onMount } from 'svelte';

	export let channel = 'wirtual';
	export let width = '100%';
	export let height = '100%';
	export let autoplay = true;
	export let muted = true;
	export let parent = 'localhost';
    export let id: string;

	let player: Twitch.Player;

	onMount(async () => {
		player = new Twitch.Player(`twitch-embed-${id}`, {
			channel,
			width,
			height,
			autoplay,
			muted,
			parent
		});
	});
</script>

<div id="twitch-embed-{id}"></div>
