"use client";

import { useEffect, useRef } from "react";
import { useTheme } from "next-themes";

interface Particle {
    x: number;
    y: number;
    dx: number;
    dy: number;
    size: number;
}

export function ParticleNetwork() {
    const canvasRef = useRef<HTMLCanvasElement>(null);
    const { theme } = useTheme();
    const containerRef = useRef<HTMLDivElement>(null);

    useEffect(() => {
        const canvas = canvasRef.current;
        const container = containerRef.current;
        if (!canvas || !container) return;

        const ctx = canvas.getContext("2d");
        if (!ctx) return;

        let animationFrameId: number;
        let particles: Particle[] = [];
        let mouse = { x: -1000, y: -1000 };

        // Configuration
        const particleCount = window.innerWidth < 768 ? 40 : 80;
        const connectionDistance = 150;
        const mouseDistance = 150;

        // Colors based on theme (approximate values, will update on render)
        let particleColor = "rgba(59, 130, 246, 0.5)"; // blue-500
        let lineColor = "rgba(59, 130, 246, 0.15)";

        const updateColors = () => {
            const isDark = document.documentElement.classList.contains("dark");
            if (isDark) {
                particleColor = "rgba(96, 165, 250, 0.5)"; // blue-400
                lineColor = "rgba(96, 165, 250, 0.15)";
            } else {
                particleColor = "rgba(37, 99, 235, 0.5)"; // blue-600
                lineColor = "rgba(37, 99, 235, 0.15)";
            }
        };

        // Resize handler
        const resize = () => {
            canvas.width = container.offsetWidth;
            canvas.height = container.offsetHeight;
            initParticles();
        };

        // Initialize particles
        const initParticles = () => {
            particles = [];
            const count = window.innerWidth < 768 ? 40 : 80;
            for (let i = 0; i < count; i++) {
                particles.push({
                    x: Math.random() * canvas.width,
                    y: Math.random() * canvas.height,
                    dx: (Math.random() - 0.5) * 1, // Speed
                    dy: (Math.random() - 0.5) * 1,
                    size: Math.random() * 2 + 1,
                });
            }
        };

        // Animation loop
        const animate = () => {
            ctx.clearRect(0, 0, canvas.width, canvas.height);
            updateColors();

            particles.forEach((p, index) => {
                // Determine effective position (with mouse interaction)
                let effectiveX = p.x;
                let effectiveY = p.y;

                // Mouse repulsion/attraction effect
                const dxMouse = mouse.x - p.x;
                const dyMouse = mouse.y - p.y;
                const distMouse = Math.sqrt(dxMouse * dxMouse + dyMouse * dyMouse);

                if (distMouse < mouseDistance) {
                    const forceDirectionX = dxMouse / distMouse;
                    const forceDirectionY = dyMouse / distMouse;
                    const force = (mouseDistance - distMouse) / mouseDistance;
                    const direction = -1; // -1 = repel, 1 = attract

                    // Gentle push
                    effectiveX += forceDirectionX * force * 20 * direction;
                    effectiveY += forceDirectionY * force * 20 * direction;
                }

                // Update actual position
                p.x += p.dx;
                p.y += p.dy;

                // Bounce off edges
                if (p.x < 0 || p.x > canvas.width) p.dx *= -1;
                if (p.y < 0 || p.y > canvas.height) p.dy *= -1;

                // Draw particle
                ctx.beginPath();
                ctx.arc(effectiveX, effectiveY, p.size, 0, Math.PI * 2);
                ctx.fillStyle = particleColor;
                ctx.fill();

                // Draw connections
                for (let j = index + 1; j < particles.length; j++) {
                    const p2 = particles[j];

                    // Calculate distance between particles (using effective positions would be smoother but let's use actual for stability)
                    const dx = p.x - p2.x;
                    const dy = p.y - p2.y;
                    const distance = Math.sqrt(dx * dx + dy * dy);

                    if (distance < connectionDistance) {
                        ctx.beginPath();
                        ctx.strokeStyle = lineColor;
                        ctx.lineWidth = 1 - distance / connectionDistance;
                        ctx.moveTo(effectiveX, effectiveY);
                        // We need p2's effective position too for lines to look attached
                        // Re-calculate p2 effective pos
                        let p2EffectiveX = p2.x;
                        let p2EffectiveY = p2.y;

                        const dxMouse2 = mouse.x - p2.x;
                        const dyMouse2 = mouse.y - p2.y;
                        const distMouse2 = Math.sqrt(dxMouse2 * dxMouse2 + dyMouse2 * dyMouse2);

                        if (distMouse2 < mouseDistance) {
                            const forceDirectionX = dxMouse2 / distMouse2;
                            const forceDirectionY = dyMouse2 / distMouse2;
                            const force = (mouseDistance - distMouse2) / mouseDistance;
                            p2EffectiveX += forceDirectionX * force * 20 * -1;
                            p2EffectiveY += forceDirectionY * force * 20 * -1;
                        }

                        ctx.lineTo(p2EffectiveX, p2EffectiveY);
                        ctx.stroke();
                    }
                }
            });

            animationFrameId = requestAnimationFrame(animate);
        };

        // Event listeners
        const handleMouseMove = (e: MouseEvent) => {
            const rect = canvas.getBoundingClientRect();
            mouse.x = e.clientX - rect.left;
            mouse.y = e.clientY - rect.top;
        };

        const handleMouseLeave = () => {
            mouse.x = -1000;
            mouse.y = -1000;
        };

        window.addEventListener("resize", resize);
        container.addEventListener("mousemove", handleMouseMove);
        container.addEventListener("mouseleave", handleMouseLeave);

        // Initial setup
        resize();
        animate();

        return () => {
            window.removeEventListener("resize", resize);
            container.removeEventListener("mousemove", handleMouseMove);
            container.removeEventListener("mouseleave", handleMouseLeave);
            cancelAnimationFrame(animationFrameId);
        };
    }, [theme]);

    return (
        <div ref={containerRef} className="absolute inset-0 z-0 pointer-events-auto">
            <canvas ref={canvasRef} className="block w-full h-full" />
        </div>
    );
}
