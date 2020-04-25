export interface MemoryStats {
    /**
     * The free memory.
     */
    free: number;
    /**
     * The used memory.
     */
    used: number;
    /**
     * The allocated memory.
     */
    allocated: number;
    /**
     * The reservable memory.
     */
    reservable: number;
}

export interface CPUStats {
    /**
     * The amount of cores on the CPU.
     */
    cores: number;
    /**
     * The system load on the cores on the CPU.
     */
    systemLoad: number;
    /**
     * The lavalink load on the cores on the CPU.
     */
    lavalinkLoad: number;
}

export interface FrameStats {
    /**
     * The amount of sent frames.
     */
    sent?: number;
    /**
     * The amount of nulled frames.
     */
    nulled?: number;
    /**
     * The amount of deficit frames.
     */
    deficit?: number;
}

export interface NodeStats {
    /**
     * The amount of players on the node.
     */
    players: number;
    /**
     * The amount of players playing on the node.
     */
    playingPlayers: number;
    /**
     * The duration the node has been up.
     */
    uptime: number;
    /**
     * The nodes memory stats.
     */
    memory: MemoryStats;
    /**
     * The nodes CPU stats.
     */
    cpu: CPUStats;
    /**
     * The nodes frame stats.
     */
    frameStats?: FrameStats;
}