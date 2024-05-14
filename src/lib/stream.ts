export type Stream = {
  streamingService: StreamingService,
  channelName: string
}

export enum StreamingService {
  TWITCH = "Twitch"
}
