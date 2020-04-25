import { EqualizerBand } from "./misc";

interface PlayerRequest<OP> {
  op: OP;
  guildId: string;
}


export type PlayerStop = PlayerRequest<"stop">;
export type DestroyPlayer = PlayerRequest<"destroy">;

export interface VoiceUpdate extends PlayerRequest<"voiceUpdate"> {
  sessionId: string;
  event: string;
}

export interface PlayTrack extends PlayerRequest<"play"> {
  track: string;
  startTime: number;
  endTime: number;
  noReplace: boolean;
}

export interface PlayerPause extends PlayerRequest<"pause"> {
  pause: boolean;
}

export interface Seek extends PlayerRequest<"seek"> {
  position: number;
}

export interface Volume extends PlayerRequest<"volume"> {
  volume: number;
}


export interface Equalizer extends PlayerRequest<"equalizer"> {
  bands: EqualizerBand[];
}

export interface UnmarkFailedAddress {
  address: string;
}