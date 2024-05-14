<script lang="ts">
  import ControlBar from "$lib/components/ControlBar.svelte";
  import TwtPlayer from "$lib/components/player/TwtPlayer.svelte";
  import Draggable from "$lib/components/Draggable.svelte";
  import type { Stream } from "$lib/stream";
  import { StreamingService } from "$lib/stream";
	import PlayerControl from "$lib/components/PlayerControl.svelte";

  let streams: [Stream] = [];
  let players: [{id: number, player: Twitch.Player}] = [];
  let index: number = 0;

  function addStream(event: CustomEvent) {
    const stream: Stream = {
      id: index,
      channelName: event.detail.channelName,
      streamingService: event.detail.streamingService
    };
    streams = [...streams, stream];
  }

  function addPlayer(event: CustomEvent) {
    const player: {id: number, player: Twitch.Player} = {
      id: index,
      player: event.detail.player
    };
    players = [...players, player];
    index += 1;
  }

  function removePlayer(event: CustomEvent) {
    const id = event.detail.id;
    streams = streams.filter(stream => id !== stream.id);
    players = players.filter(player => id !== player.id);
  }
</script>

<div class="streamContainer">
  {#each streams as stream}
    <Draggable id={stream.id}>
    {#if stream.streamingService === StreamingService.TWITCH}
      <TwtPlayer
        id={stream.id}
        channel={stream.channelName}
        controls={false}
        on:playerCreated={addPlayer}
      />
    {/if}
    </Draggable>
  {/each}
</div>
<ControlBar 
  players={players}
  on:addStream={addStream}
  on:removePlayer={removePlayer}
/>
