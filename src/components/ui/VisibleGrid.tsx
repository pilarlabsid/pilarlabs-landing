
export function VisibleGrid() {
    return (
        <div className="fixed inset-0 z-0 pointer-events-none">
            {/* Base Background Color */}
            <div className="absolute inset-0 bg-foundation" />

            {/* Abstract Grid Pattern (Small squares) */}
            <div
                className="absolute inset-0 opacity-[0.03]"
                style={{
                    backgroundImage: `linear-gradient(#415A77 1px, transparent 1px), linear-gradient(90deg, #415A77 1px, transparent 1px)`,
                    backgroundSize: '40px 40px'
                }}
            />

            {/* Radial Mask to fade out edges for "abstract" feel */}
            <div className="absolute inset-0 bg-foundation [mask-image:radial-gradient(ellipse_at_center,transparent_20%,black)]" />

            {/* Structural Column Lines (The original "Pilar" concept) */}
            <div className="absolute inset-0 flex justify-between max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                {[...Array(13)].map((_, i) => (
                    <div key={i} className="h-full w-[1px] bg-structural/5 hidden md:block" />
                ))}

                {/* Mobile lines */}
                {[...Array(5)].map((_, i) => (
                    <div key={i} className="h-full w-[1px] bg-structural/5 block md:hidden" />
                ))}
            </div>

            {/* Ambient Gradient Orbs for depth */}
            <div className="absolute top-0 left-0 w-[500px] h-[500px] bg-precision/5 rounded-full blur-[100px] -translate-x-1/2 -translate-y-1/2" />
            <div className="absolute bottom-0 right-0 w-[500px] h-[500px] bg-structural/5 rounded-full blur-[100px] translate-x-1/2 translate-y-1/2" />
        </div>
    )
}
