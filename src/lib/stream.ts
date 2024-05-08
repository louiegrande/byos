export type Stream = {
  type: StreamingSite,
  name: string
}

export enum StreamingSite {
  BYOS = "Byos",
  TWITCH = "Twitch"
}
