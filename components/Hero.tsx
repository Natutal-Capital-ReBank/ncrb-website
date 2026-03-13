"use client";
import Link from "next/link";
import { useEffect, useRef } from "react";

type NodeType = "forest" | "ocean" | "carbon" | "bio";

interface Particle {
    x: number;
    y: number;
    vx: number;
    vy: number;
    r: number;
    type: NodeType;
    pulse: number;
    pulseSpeed: number;
}

interface OrbitNode {
    emoji: string;
    label: string;
}

interface OrbitDef {
    ring: number;
    speed: number;
    nodes: OrbitNode[];
}

interface DataLabel {
    text: string;
    x: number;
    y: number;
    color: string;
}

export default function HeroSection() {
    const canvasRef = useRef<HTMLCanvasElement>(null);

    useEffect(() => {
        const canvas = canvasRef.current;
        if (!canvas) return;
        const ctx = canvas.getContext("2d");
        if (!ctx) return;

        const resize = () => {
            canvas.width = canvas.offsetWidth * window.devicePixelRatio;
            canvas.height = canvas.offsetHeight * window.devicePixelRatio;
            ctx.scale(window.devicePixelRatio, window.devicePixelRatio);
        };
        resize();
        window.addEventListener("resize", resize);

        // Background floating particles
        const nodeCount = 28;
        const nodes: Particle[] = Array.from({ length: nodeCount }, () => ({
            x: Math.random() * 520,
            y: Math.random() * 520,
            vx: (Math.random() - 0.5) * 0.4,
            vy: (Math.random() - 0.5) * 0.4,
            r: Math.random() * 3 + 1.5,
            type: (["forest", "ocean", "carbon", "bio"] as NodeType[])[Math.floor(Math.random() * 4)],
            pulse: Math.random() * Math.PI * 2,
            pulseSpeed: 0.02 + Math.random() * 0.02,
        }));

        const glowColors: Record<NodeType, string> = {
            forest: "rgba(74,222,128,",
            ocean: "rgba(56,189,248,",
            carbon: "rgba(163,230,53,",
            bio: "rgba(52,211,153,",
        };

        const orbitDefs: OrbitDef[] = [
            {
                ring: 90, speed: 0.008, nodes: [
                    { emoji: "🌳", label: "Forest" },
                    { emoji: "🌊", label: "Ocean" },
                ]
            },
            {
                ring: 140, speed: -0.006, nodes: [
                    { emoji: "💨", label: "Carbon" },
                    { emoji: "🦋", label: "Bio" },
                    { emoji: "⚡", label: "Energy" },
                ]
            },
            {
                ring: 195, speed: 0.004, nodes: [
                    { emoji: "💧", label: "Water" },
                    { emoji: "🌾", label: "Soil" },
                    { emoji: "🏔️", label: "Land" },
                    { emoji: "☀️", label: "Solar" },
                ]
            },
        ];

        const dataLabels: DataLabel[] = [
            { text: "+$847M TVL", x: 0.06, y: 0.12, color: "#4ade80" },
            { text: "342 assets live", x: 0.58, y: 0.06, color: "#38bdf8" },
            { text: "99.2% uptime", x: 0.04, y: 0.86, color: "#34d399" },
            { text: "3 blockchains", x: 0.58, y: 0.88, color: "#a3e635" },
        ];

        let frame = 0;
        let animId: number;

        const draw = () => {
            const W = canvas.offsetWidth;
            const H = canvas.offsetHeight;
            ctx.clearRect(0, 0, W, H);
            frame++;

            const cx = W / 2;
            const cy = H / 2;

            // ── Background particles ──
            nodes.forEach((n) => {
                n.x += n.vx; n.y += n.vy; n.pulse += n.pulseSpeed;
                if (n.x < 0 || n.x > W) n.vx *= -1;
                if (n.y < 0 || n.y > H) n.vy *= -1;
                const alpha = 0.25 + 0.15 * Math.sin(n.pulse);
                ctx.beginPath();
                ctx.arc(n.x, n.y, n.r, 0, Math.PI * 2);
                ctx.fillStyle = glowColors[n.type] + alpha + ")";
                ctx.fill();
            });

            // Connection lines
            for (let i = 0; i < nodes.length; i++) {
                for (let j = i + 1; j < nodes.length; j++) {
                    const dx = nodes[i].x - nodes[j].x;
                    const dy = nodes[i].y - nodes[j].y;
                    const d = Math.sqrt(dx * dx + dy * dy);
                    if (d < 75) {
                        ctx.beginPath();
                        ctx.moveTo(nodes[i].x, nodes[i].y);
                        ctx.lineTo(nodes[j].x, nodes[j].y);
                        ctx.strokeStyle = `rgba(52,211,153,${0.1 * (1 - d / 75)})`;
                        ctx.lineWidth = 0.5;
                        ctx.stroke();
                    }
                }
            }

            // ── Orbit rings ──
            orbitDefs.forEach(({ ring }, i) => {
                ctx.beginPath();
                ctx.arc(cx, cy, ring, 0, Math.PI * 2);
                ctx.strokeStyle = `rgba(255,255,255,${0.05 + i * 0.02})`;
                ctx.lineWidth = 1;
                ctx.setLineDash([4, 10]);
                ctx.stroke();
                ctx.setLineDash([]);
            });

            // ── Center glow + globe ──
            const grd = ctx.createRadialGradient(cx, cy, 8, cx, cy, 80);
            grd.addColorStop(0, "rgba(52,211,153,0.35)");
            grd.addColorStop(0.5, "rgba(56,189,248,0.15)");
            grd.addColorStop(1, "rgba(0,0,0,0)");
            ctx.fillStyle = grd;
            ctx.beginPath();
            ctx.arc(cx, cy, 80, 0, Math.PI * 2);
            ctx.fill();

            ctx.beginPath();
            ctx.arc(cx, cy, 34, 0, Math.PI * 2);
            ctx.fillStyle = "rgba(10,28,22,0.9)";
            ctx.fill();
            ctx.strokeStyle = "rgba(52,211,153,0.8)";
            ctx.lineWidth = 2;
            ctx.stroke();

            ctx.font = "26px serif";
            ctx.textAlign = "center";
            ctx.textBaseline = "middle";
            ctx.fillText("🌍", cx, cy);

            // ── Orbiting asset nodes ──
            orbitDefs.forEach(({ ring, speed, nodes: orbitNodes }) => {
                const baseAngle = frame * speed;
                orbitNodes.forEach(({ emoji }, idx) => {
                    const angle = baseAngle + (idx / orbitNodes.length) * Math.PI * 2;
                    const nx = cx + Math.cos(angle) * ring;
                    const ny = cy + Math.sin(angle) * ring;

                    // glow halo
                    const halo = ctx.createRadialGradient(nx, ny, 2, nx, ny, 20);
                    halo.addColorStop(0, "rgba(52,211,153,0.35)");
                    halo.addColorStop(1, "rgba(52,211,153,0)");
                    ctx.fillStyle = halo;
                    ctx.beginPath();
                    ctx.arc(nx, ny, 20, 0, Math.PI * 2);
                    ctx.fill();

                    // node circle
                    ctx.beginPath();
                    ctx.arc(nx, ny, 15, 0, Math.PI * 2);
                    ctx.fillStyle = "rgba(8,24,18,0.92)";
                    ctx.fill();
                    ctx.strokeStyle = "rgba(52,211,153,0.55)";
                    ctx.lineWidth = 1.5;
                    ctx.stroke();

                    ctx.font = "13px serif";
                    ctx.textAlign = "center";
                    ctx.textBaseline = "middle";
                    ctx.fillText(emoji, nx, ny);
                });
            });

            // ── Floating data labels ──
            dataLabels.forEach(({ text, x, y, color }) => {
                const lx = x * W;
                const ly = y * H;
                ctx.font = "bold 10px monospace";
                ctx.textAlign = "left";
                ctx.textBaseline = "middle";
                const tw = ctx.measureText(text).width;
                ctx.fillStyle = "rgba(8,24,18,0.8)";
                ctx.beginPath();
                ctx.roundRect(lx - 5, ly - 9, tw + 10, 18, 4);
                ctx.fill();
                ctx.strokeStyle = color + "66";
                ctx.lineWidth = 1;
                ctx.stroke();
                ctx.fillStyle = color;
                ctx.fillText(text, lx, ly);
            });

            animId = requestAnimationFrame(draw);
        };

        draw();
        return () => {
            window.removeEventListener("resize", resize);
            cancelAnimationFrame(animId);
        };
    }, []);

    return (
        <section className="relative overflow-hidden min-h-screen flex items-center">
            {/* Background */}
            <div className="absolute inset-0 bg-gradient-to-br from-green-900 via-blue-900 to-teal-900" />
            <div
                className="absolute inset-0 opacity-[0.06]"
                style={{
                    backgroundImage: `radial-gradient(circle at 1px 1px, rgba(52,211,153,0.9) 1px, transparent 0)`,
                    backgroundSize: "32px 32px",
                }}
            />
            {/* Ambient blobs */}
            <div className="absolute top-0 left-1/3 w-[500px] h-[500px] bg-teal-500/10 rounded-full blur-3xl pointer-events-none" />
            <div className="absolute bottom-0 right-1/4 w-96 h-96 bg-green-500/10 rounded-full blur-3xl pointer-events-none" />

            <div className="relative container mx-auto px-6 py-16 md:py-20">
                <div className="grid md:grid-cols-2 gap-10 lg:gap-16 items-center">

                    {/* ─────────── LEFT: Text ─────────── */}
                    <div className="flex flex-col items-start text-left space-y-6">
                        {/* Badge */}
                        <div
                            className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full text-sm font-medium text-emerald-300 border border-emerald-500/30"
                            style={{ background: "rgba(52,211,153,0.08)" }}
                        >
                            <span className="w-2 h-2 bg-emerald-400 rounded-full animate-pulse" />
                            Institutional Natural Capital Infrastructure
                        </div>

                        {/* Headline */}
                        <h1
                            className="text-5xl md:text-6xl font-bold text-white leading-[1.08] tracking-tight"
                            style={{ fontFamily: "'Georgia', serif" }}
                        >
                            Natural Capital
                            <span
                                className="block"
                                style={{
                                    background: "linear-gradient(135deg, #4ade80 0%, #38bdf8 100%)",
                                    WebkitBackgroundClip: "text",
                                    WebkitTextFillColor: "transparent",
                                }}
                            >
                                Tokenization
                            </span>
                            <span>Platform</span>
                        </h1>

                        {/* Subheadline */}
                        <p className="text-lg text-slate-300 leading-relaxed max-w-lg">
                            Protecting <span className="text-emerald-400 font-semibold">$2.7T</span> in at-risk
                            economic value and unlocking the{" "}
                            <span className="text-sky-400 font-semibold">$10T</span> natural capital opportunity
                            through blockchain-powered verification and institutional-grade infrastructure.
                        </p>

                        <p className="text-lg text-slate-300 leading-relaxed max-w-lg">
                            Organizations seeking traditional purchase options for environmental credits can also contact us directly. We work with a network of trusted partners who can facilitate verified credit procurement and structured transactions aligned with institutional standards.
                        </p>

                        {/* Metric Cards */}
                        <div className="grid grid-cols-3 gap-3 w-full max-w-md">
                            {[
                                { icon: "💎", value: "$10T", label: "Market Size", color: "text-emerald-400" },
                                { icon: "🔒", value: "8-12x", label: "Target Returns", color: "text-sky-400" },
                                { icon: "🌱", value: "$1M", label: "Seed Round", color: "text-teal-400" },
                            ].map(({ icon, value, label, color }) => (
                                <div
                                    key={label}
                                    className="rounded-xl p-4 text-center border border-white/10 hover:border-emerald-500/40 transition-colors duration-200"
                                    style={{ background: "rgba(255,255,255,0.04)" }}
                                >
                                    <div className="text-xl mb-1">{icon}</div>
                                    <div className={`text-xl font-bold ${color}`}>{value}</div>
                                    <div className="text-xs text-slate-400 mt-0.5">{label}</div>
                                </div>
                            ))}
                        </div>

                        {/* CTAs */}
                        <div className="flex flex-col sm:flex-row gap-3 pt-1">
                            <Link
                                href="/investors"
                                className="group inline-flex items-center justify-center gap-2 px-6 py-3 rounded-xl font-bold text-green-950 text-sm transition-all hover:scale-105 hover:shadow-xl hover:shadow-emerald-500/25"
                                style={{ background: "linear-gradient(135deg, #4ade80, #34d399)" }}
                            >
                                <span>📊</span>
                                Download Investment Deck
                                <span className="group-hover:translate-x-0.5 transition-transform">→</span>
                            </Link>
                            <Link
                                href="/contact?type=investor"
                                className="inline-flex items-center justify-center gap-2 px-6 py-3 rounded-xl font-bold text-white text-sm border border-white/20 hover:bg-white/10 hover:border-white/40 transition-all hover:scale-105"
                                style={{ background: "rgba(255,255,255,0.06)" }}
                            >
                                <span>📞</span>
                                Schedule Investor Call
                            </Link>
                        </div>

                        {/* Trust chips */}
                        <div className="flex flex-wrap gap-x-5 gap-y-2 text-xs text-slate-400 pt-1">
                            {["Blockchain-Powered Verification", "Institutional-Grade Infrastructure", "11 Asset Types"].map((t) => (
                                <span key={t} className="flex items-center gap-1.5">
                                    <span className="text-emerald-500">✓</span> {t}
                                </span>
                            ))}
                        </div>
                    </div>

                    {/* ─────────── RIGHT: Canvas ─────────── */}
                    <div className="relative flex items-center justify-center order-first md:order-last">
                        <div
                            className="relative w-full max-w-[520px] mx-auto rounded-2xl overflow-hidden border border-emerald-500/20"
                            style={{
                                background: "rgba(8,22,18,0.65)",
                                boxShadow: "0 0 80px rgba(52,211,153,0.08), inset 0 0 40px rgba(52,211,153,0.04)",
                                aspectRatio: "1 / 1",
                            }}
                        >
                            {/* HUD top bar */}
                            <div
                                className="absolute top-0 left-0 right-0 z-10 flex items-center justify-between px-4 py-2.5 border-b border-white/5"
                                style={{ background: "rgba(8,22,18,0.85)" }}
                            >
                                <div className="flex items-center gap-2">
                                    <span className="w-2 h-2 bg-emerald-400 rounded-full animate-pulse" />
                                    <span className="text-xs font-mono text-emerald-400 tracking-widest">LIVE NETWORK</span>
                                </div>
                                <div className="flex gap-3 text-xs font-mono text-slate-500">
                                    <span>9 asset classes</span>
                                    <span className="text-emerald-500">●</span>
                                    <span>real-time</span>
                                </div>
                            </div>

                            <canvas ref={canvasRef} className="w-full h-full block" />

                            {/* HUD bottom bar */}
                            <div
                                className="absolute bottom-0 left-0 right-0 z-10 flex items-center justify-between px-4 py-2.5 border-t border-white/5"
                                style={{ background: "rgba(8,22,18,0.85)" }}
                            >
                                <span className="text-xs font-mono text-slate-500">Natural Capital Tokenization Network</span>
                                <span className="text-xs font-mono text-emerald-400 animate-pulse">● VERIFIED</span>
                            </div>
                        </div>

                        {/* Corner accent brackets */}
                        {["-top-px -left-px border-t-2 border-l-2 rounded-tl-2xl",
                            "-top-px -right-px border-t-2 border-r-2 rounded-tr-2xl",
                            "-bottom-px -left-px border-b-2 border-l-2 rounded-bl-2xl",
                            "-bottom-px -right-px border-b-2 border-r-2 rounded-br-2xl",
                        ].map((cls, i) => (
                            <div key={i} className={`absolute w-7 h-7 border-emerald-500/60 pointer-events-none ${cls}`} />
                        ))}
                    </div>
                </div>
            </div>
        </section>
    );
}