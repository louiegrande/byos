import { writable } from 'svelte/store';
import type { Writable } from 'svelte/store';
import type { Stream, StreamingService } from '$lib/stream';

function createStreams(init: [Stream]): Writable<[Stream]> {
  const { subscribe, update }: Writable<[Stream]> = writable(init);

  return {
    subscribe,
    add: (id: number, streamingService: StreamingService, channelName: string) => {
      update((streams) => [...streams, {id, streamingService, channelName}]);
    },
    remove: (id: number) => {
      update((streams) => streams.filter((stream) => stream.id !== id));
    }
  };
}

function createPlayers(init: [{id: number, player: Twitch.Player}]): Writable<[{id: number, player: Twitch.Player}]> {
  const { subscribe, update }: Writable<[{id: number, player: Twitch.Player}]> = writable(init);

  return {
    subscribe,
    add: (id: number, player: Twitch.Player) => {
      update((streams) => [...streams, {id, player}]);
    },
    remove: (id: number) => {
      update((players) => players.filter((player) => player.id !== id));
    }
  };
}

export const streams: Writable<[Stream]> = createStreams([]);
export const players: Writable<[{id: number, player: Twitch.Player}]> = createPlayers([]);

