import { writable } from 'svelte/store';
import type { Writable } from 'svelte/store';
import type { Stream, StreamingService } from '$lib/stream';

function createStreams(init: Map<number,Stream>): Writable<Map<number,Stream>> {
  const { subscribe, update }: Writable<Map<number,Stream>> = writable(init);

  return {
    subscribe,
    put: (id: number, streamingService: StreamingService, channelName: string) => {
      update((streams) => streams.set(id, {streamingService, channelName}));
    },
    delete: (id: number) => {
      update((streams) => {
        streams.delete(id);
        return streams;
      });
    },
    entries: () => {
      let entries;
      subscribe((streams) => entries = streams.entries());
      return entries;
    }
  };
}

function createPlayers(init: Map<number,Twitch.Player>): Writable<Map<number,Twitch.Player>> {
  const { subscribe, update }: Writable<Map<number,Twitch.Player>> = writable(init);

  return {
    subscribe,
    put: (id: number, player: Twitch.Player) => {
      update((streams) => streams.set(id, player));
    },
    delete: (id: number) => {
      update((players) => {
        players.delete(id);
        return players;
      });
    },
    get: (id: number) => {
      let player;
      subscribe((players) => player = players.get(id));
      return players;
    },
    entries: () => {
      let entries;
      subscribe((players) => entries = players.entries());
      return entries;
    }
  };
}

export const streams: Writable<Map<number,Stream>> = createStreams(new Map<number,Stream>());
export const players: Writable<Map<number,Twitch.Player>> = createPlayers(new Map<number,Twitch.Player>());

