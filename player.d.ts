import { Severity } from "./misc";

export interface PlayerUpdate {
  op: "playerUpdate";
  /**
   * The guild this player belongs to.
   */
  guildId: string;
  /**
   * Current State of the Player.
   */
  state: PlayerState;
}

export interface PlayerState {
  /**
   * Timestamp of when the player first started.
   */
  time: number;
  /**
   * The position of the current playing track.
   */
  position: number;
}

export type PlayerEventType =
  | "TrackStartEvent"
  | "TrackEndEvent"
  | "TrackExceptionEvent"
  | "TrackStuckEvent"
  | "WebSocketClosedEvent";
export type TrackEndReason =
  | "FINISHED"
  | "LOAD_FAILED"
  | "STOPPED"
  | "REPLACED"
  | "CLEANUP";
export type Event =
  | TrackStartEvent
  | TrackEndEvent
  | TrackExceptionEvent
  | TrackStuckEvent
  | WebSocketClosedEvent;

export interface PlayerEvent {
  op: "event";
  /**
   * The type of player event.
   */
  type: PlayerEventType;
}

export interface TrackStartEvent extends PlayerEvent {
  type: "TrackStartEvent";
  /**
   * The track that started playing.
   */
  track: string;
}

export interface TrackEndEvent extends PlayerEvent {
  type: "TrackEndEvent";
  /**
   * Reason the track ended.
   */
  reason: TrackEndReason;
  /**
   * The track that ended.
   */
  track: string;
}

export interface Exception {
  /**
   * Exception Severity.
   */
  severity: Severity;
  /**
   * The exception message.
   */
  message: string;
  /**
   * The cause of this exception.
   */
  cause: string;
}

export interface TrackExceptionEvent extends PlayerEvent {
  type: "TrackExceptionEvent";
  exception?: Exception;
  error: string;
}

export interface TrackStuckEvent extends PlayerEvent {
  type: "TrackStuckEvent";
  thresholdMs: number;
}

export interface WebSocketClosedEvent extends PlayerEvent {
  type: "WebSocketClosedEvent";
  code: number;
  byRemote: boolean;
  reason: string;
}
