export type Stream = {
  id: number,
  streamingService: StreamingService,
  channelName: string
}

export enum StreamingService {
  TWITCH = "Twitch"
}
