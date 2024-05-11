declare namespace Twitch {
	interface PlayerOptions {
      channel?: string;
      video?: string;
      collection?: string;
	  width: string | number;
	  height: string | number;
	  autoplay?: boolean;
	  muted?: boolean;
      time?: string;
	  parent: string | string[];
	  playsinline?: boolean;
	}

    interface PlaybackStats {
      backendVersion: string;
      bufferSize: number;
      codecs: string;
      displayResolution: string;
      fps: number;
      hlsLatencyBroadcaster: number;
      playbackRate: number;
      skippedFrames: number;
      videoResolution: string;
    }

	class Player {
      constructor(id: string, options: PlayerOptions);

      disableCaptions(): void;
      enableCaptions(): void;

      isPaused(): Boolean;
      pause(): void;
      play(): void;

      getCurrentTime(): Float;
      seek(timestamp: Float): void;
      getDuration(): Float;
      getEnded(): Boolean;

      getChannel(): string;
      setChannel(channel: string): void;
      setCollection(collection_ID: string, video_ID: string): void;
      getVideo(): string;
      setVideo(video_ID: string, timestamp: Number): void;

      getQualities(): string[];
      getQuality(): string;
      setQuality(quality: string): void;

      getMuted(): Boolean;
      setMuted(muted: Boolean): void;
      getVolume(): Float;
      setVolume(volumelevel: Float): void;
      
      getPlaybackStats(): PlaybackStats;
	}
}
