import { writable } from 'svelte/store';
import type { Stream } from '$lib/stream';

export const streams: [Stream] = writable([]);
export const players: [{id: number, player: Twitch.Player}] = writable([]);
