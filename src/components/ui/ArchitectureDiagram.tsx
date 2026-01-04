import { motion } from 'framer-motion'

interface Node {
    id: string
    label: string
    x: number
    y: number
    type: 'client' | 'gateway' | 'service' | 'data'
}

interface Connection {
    from: string
    to: string
}

export function ArchitectureDiagram() {
    const nodes: Node[] = [
        // Client Layer
        { id: 'web', label: 'Web App', x: 50, y: 150, type: 'client' },
        { id: 'mobile', label: 'Mobile App', x: 50, y: 250, type: 'client' },
        { id: 'api-client', label: 'API Client', x: 50, y: 350, type: 'client' },

        // Gateway Layer
        { id: 'gateway', label: 'API Gateway', x: 300, y: 250, type: 'gateway' },

        // Service Layer
        { id: 'auth', label: 'Auth Service', x: 550, y: 100, type: 'service' },
        { id: 'business', label: 'Business Logic', x: 550, y: 250, type: 'service' },
        { id: 'analytics', label: 'Analytics', x: 550, y: 400, type: 'service' },

        // Data Layer
        { id: 'cache', label: 'Cache', x: 800, y: 150, type: 'data' },
        { id: 'database', label: 'Database', x: 800, y: 350, type: 'data' },
    ]

    const connections: Connection[] = [
        // Client to Gateway
        { from: 'web', to: 'gateway' },
        { from: 'mobile', to: 'gateway' },
        { from: 'api-client', to: 'gateway' },

        // Gateway to Services
        { from: 'gateway', to: 'auth' },
        { from: 'gateway', to: 'business' },
        { from: 'gateway', to: 'analytics' },

        // Services to Data
        { from: 'auth', to: 'cache' },
        { from: 'business', to: 'cache' },
        { from: 'business', to: 'database' },
        { from: 'analytics', to: 'database' },
    ]

    const getNodeColor = (type: Node['type']) => {
        switch (type) {
            case 'client':
                return 'stroke-calm/80 dark:stroke-calm/60 fill-calm/10 dark:fill-calm/5'
            case 'gateway':
                return 'stroke-precision dark:stroke-precision/80 fill-precision/15 dark:fill-precision/10'
            case 'service':
                return 'stroke-calm/70 dark:stroke-calm/50 fill-calm/5 dark:fill-calm/5'
            case 'data':
                return 'stroke-calm/60 dark:stroke-calm/40 fill-calm/10 dark:fill-calm/5'
        }
    }

    const getNodePosition = (nodeId: string) => {
        const node = nodes.find(n => n.id === nodeId)
        return node ? { x: node.x, y: node.y } : { x: 0, y: 0 }
    }

    return (
        <div className="w-full h-auto">
            <svg
                viewBox="0 0 900 500"
                className="w-full h-auto"
                style={{ maxHeight: '500px' }}
            >
                {/* Background grid */}
                <defs>
                    <pattern
                        id="grid"
                        width="40"
                        height="40"
                        patternUnits="userSpaceOnUse"
                    >
                        <path
                            d="M 40 0 L 0 0 0 40"
                            fill="none"
                            stroke="currentColor"
                            strokeWidth="0.5"
                            className="text-structural/20 dark:text-structural/10"
                        />
                    </pattern>

                    {/* Arrow marker */}
                    <marker
                        id="arrowhead"
                        markerWidth="10"
                        markerHeight="10"
                        refX="9"
                        refY="3"
                        orient="auto"
                    >
                        <polygon
                            points="0 0, 10 3, 0 6"
                            className="fill-structural/50 dark:fill-structural/40"
                        />
                    </marker>

                    {/* Glow filter */}
                    <filter id="glow">
                        <feGaussianBlur stdDeviation="3" result="coloredBlur" />
                        <feMerge>
                            <feMergeNode in="coloredBlur" />
                            <feMergeNode in="SourceGraphic" />
                        </feMerge>
                    </filter>
                </defs>

                {/* Grid background */}
                <rect width="900" height="500" fill="url(#grid)" />

                {/* Connections */}
                <g className="connections">
                    {connections.map((conn, idx) => {
                        const from = getNodePosition(conn.from)
                        const to = getNodePosition(conn.to)

                        return (
                            <motion.line
                                key={`${conn.from}-${conn.to}`}
                                x1={from.x}
                                y1={from.y}
                                x2={to.x}
                                y2={to.y}
                                className="stroke-structural/40 dark:stroke-structural/30 hover:stroke-precision/70 dark:hover:stroke-precision/50 transition-colors duration-300"
                                strokeWidth="2"
                                markerEnd="url(#arrowhead)"
                                initial={{ pathLength: 0, opacity: 0 }}
                                animate={{ pathLength: 1, opacity: 1 }}
                                transition={{
                                    duration: 0.8,
                                    delay: 0.5 + idx * 0.05,
                                    ease: "easeOut"
                                }}
                            />
                        )
                    })}
                </g>

                {/* Animated data flow particles - Realistic flow */}
                {connections.map((conn, idx) => {
                    const from = getNodePosition(conn.from)
                    const to = getNodePosition(conn.to)

                    return (
                        <motion.circle
                            key={`particle-${conn.from}-${conn.to}`}
                            r="3"
                            className="fill-precision"
                            filter="url(#glow)"
                            initial={{
                                cx: from.x,
                                cy: from.y,
                                opacity: 0
                            }}
                            animate={{
                                cx: [from.x, to.x],
                                cy: [from.y, to.y],
                                opacity: [0, 0.8, 0.8, 0]
                            }}
                            transition={{
                                duration: 2.5,
                                delay: idx * 0.4,
                                repeat: Infinity,
                                repeatDelay: 1.5,
                                ease: "easeInOut",
                                times: [0, 0.3, 0.7, 1]
                            }}
                        />
                    )
                })}

                {/* Nodes */}
                <g className="nodes">
                    {nodes.map((node, idx) => (
                        <g key={node.id}>
                            <motion.g
                                initial={{ opacity: 0, scale: 0 }}
                                animate={{ opacity: 1, scale: 1 }}
                                transition={{
                                    duration: 0.4,
                                    delay: 0.3 + idx * 0.08,
                                    ease: "backOut"
                                }}
                                className="cursor-pointer"
                                whileHover={{ scale: 1.1 }}
                            >
                                {/* Node glow on hover */}
                                <circle
                                    cx={node.x}
                                    cy={node.y}
                                    r="35"
                                    className="fill-precision/0 hover:fill-precision/20 dark:hover:fill-precision/10 transition-all duration-300"
                                    filter="url(#glow)"
                                />

                                {/* Node circle */}
                                <circle
                                    cx={node.x}
                                    cy={node.y}
                                    r="25"
                                    className={`${getNodeColor(node.type)} transition-all duration-300`}
                                    strokeWidth="2.5"
                                />

                                {/* Pulse animation for gateway */}
                                {node.type === 'gateway' && (
                                    <motion.circle
                                        cx={node.x}
                                        cy={node.y}
                                        r="25"
                                        className="stroke-precision fill-none"
                                        strokeWidth="2"
                                        initial={{ scale: 1, opacity: 0.6 }}
                                        animate={{
                                            scale: [1, 1.4, 1],
                                            opacity: [0.6, 0, 0.6]
                                        }}
                                        transition={{
                                            duration: 2,
                                            repeat: Infinity,
                                            ease: "easeInOut"
                                        }}
                                    />
                                )}

                                {/* Node label */}
                                <text
                                    x={node.x}
                                    y={node.y + 50}
                                    textAnchor="middle"
                                    className="text-xs font-medium fill-calm/90 dark:fill-calm/70 pointer-events-none"
                                >
                                    {node.label}
                                </text>

                                {/* Node icon (simple dot) */}
                                <circle
                                    cx={node.x}
                                    cy={node.y}
                                    r="4"
                                    className="fill-calm/60 dark:fill-foundation/80 pointer-events-none"
                                />
                            </motion.g>
                        </g>
                    ))}
                </g>

                {/* Layer labels */}
                <text
                    x="50"
                    y="30"
                    textAnchor="middle"
                    className="text-sm font-semibold fill-calm/70 dark:fill-calm/50"
                >
                    Client Layer
                </text>
                <text
                    x="300"
                    y="30"
                    textAnchor="middle"
                    className="text-sm font-semibold fill-calm/70 dark:fill-calm/50"
                >
                    Gateway
                </text>
                <text
                    x="550"
                    y="30"
                    textAnchor="middle"
                    className="text-sm font-semibold fill-calm/70 dark:fill-calm/50"
                >
                    Services
                </text>
                <text
                    x="800"
                    y="30"
                    textAnchor="middle"
                    className="text-sm font-semibold fill-calm/70 dark:fill-calm/50"
                >
                    Data Layer
                </text>
            </svg>
        </div>
    )
}
