'use client';

import { useRef, useId, useEffect, useState, type CSSProperties } from 'react';
import { animate, useMotionValue } from 'framer-motion';
import { cn } from "@/lib/utils";

interface AnimationConfig {
    scale: number;
    speed: number;
}

interface NoiseConfig {
    opacity: number;
    scale: number;
}

interface ShadowOverlayProps {
    sizing?: 'fill' | 'stretch';
    color?: string;
    animation?: AnimationConfig;
    noise?: NoiseConfig;
    style?: CSSProperties;
    className?: string;
    title?: string;
}

function mapRange(value: number, fromLow: number, fromHigh: number, toLow: number, toHigh: number): number {
    if (fromLow === fromHigh) return toLow;
    return toLow + ((value - fromLow) / (fromHigh - fromLow)) * (toHigh - toLow);
}

export function EtheralShadow({
    sizing = 'fill',
    color,
    animation = { scale: 100, speed: 50 },
    noise = { opacity: 0.2, scale: 1.2 },
    style,
    className,
    title
}: ShadowOverlayProps) {
    const id = useId().replace(/:/g, "");
    const feTurbulenceRef = useRef<SVGFETurbulenceElement>(null);
    const baseFreqX = useMotionValue(0.001);
    const baseFreqY = useMotionValue(0.003);

    // Initial check for theme
    const [currentBgColor, setCurrentBgColor] = useState<string>(color || 'rgba(0, 100, 255, 0.35)');

    useEffect(() => {
        const updateTheme = () => {
            const theme = document.documentElement.getAttribute('data-theme');
            if (theme === 'light') {
                setCurrentBgColor('#e0f2fe'); // Sky Blue for light mode
            } else {
                setCurrentBgColor('#001d3d'); // Deep Blue for dark mode
            }
        };

        const observer = new MutationObserver((mutations) => {
            mutations.forEach((mutation) => {
                if (mutation.attributeName === 'data-theme') {
                    updateTheme();
                }
            });
        });

        observer.observe(document.documentElement, { attributes: true });
        updateTheme();

        return () => observer.disconnect();
    }, [color]);

    // Animation Duration Calculation
    const animationSpeed = mapRange(animation.speed, 1, 100, 30, 5); // Faster is lower seconds

    useEffect(() => {
        // Animate Base Frequency for liquid movement
        const controlsX = animate(baseFreqX, [0.001, 0.002, 0.001], {
            duration: animationSpeed,
            repeat: Infinity,
            ease: "easeInOut",
            onUpdate: (v) => {
                if (feTurbulenceRef.current) {
                    const currentFreq = feTurbulenceRef.current.getAttribute("baseFrequency")?.split(",") || ["0.001", "0.003"];
                    feTurbulenceRef.current.setAttribute("baseFrequency", `${v},${currentFreq[1]}`);
                }
            }
        });

        const controlsY = animate(baseFreqY, [0.003, 0.005, 0.003], {
            duration: animationSpeed * 1.5,
            repeat: Infinity,
            ease: "easeInOut",
            onUpdate: (v) => {
                if (feTurbulenceRef.current) {
                    const currentFreq = feTurbulenceRef.current.getAttribute("baseFrequency")?.split(",") || ["0.001", "0.003"];
                    feTurbulenceRef.current.setAttribute("baseFrequency", `${currentFreq[0]},${v}`);
                }
            }
        });

        return () => {
            controlsX.stop();
            controlsY.stop();
        };
    }, [animationSpeed, baseFreqX, baseFreqY]);

    return (
        <div
            className={cn("bg-background transition-colors duration-500", className)}
            style={{
                overflow: "hidden",
                position: "fixed",
                inset: 0,
                width: "100%",
                height: "100%",
                zIndex: -1,
                ...style
            }}
        >
            {/* Dynamic ocean gradients - adjust based on theme if needed, but the mask does the heavy lifting */}
            <div className="absolute inset-0 bg-background pointer-events-none opacity-50" />
            
            <div
                style={{
                    position: "absolute",
                    inset: "-200px", 
                    filter: `url(#${id}) blur(4px)`,
                }}
            >
                <svg style={{ position: "absolute", width: 0, height: 0 }}>
                    <defs>
                        <filter id={id} colorInterpolationFilters="sRGB">
                            <feTurbulence
                                ref={feTurbulenceRef}
                                baseFrequency="0.001,0.003"
                                numOctaves="3"
                                seed="5"
                                type="fractalNoise"
                                result="noise"
                            />
                            <feDisplacementMap
                                in="SourceGraphic"
                                in2="noise"
                                scale="150"
                                xChannelSelector="R"
                                yChannelSelector="G"
                            />
                        </filter>
                    </defs>
                </svg>

                <div
                    style={{
                        backgroundColor: currentBgColor,
                        maskImage: `url('https://framerusercontent.com/images/ceBGguIpUU8luwByxuQz79t7To.png')`,
                        maskSize: sizing === "stretch" ? "100% 100%" : "cover",
                        maskRepeat: "no-repeat",
                        maskPosition: "center",
                        width: "100%",
                        height: "100%",
                        opacity: 0.6
                    }}
                />
            </div>

            {noise && noise.opacity > 0 && (
                <div
                    style={{
                        position: "absolute",
                        inset: 0,
                        backgroundImage: `url("https://framerusercontent.com/images/g0QcWrxr87K0ufOxIUFBakwYA8.png")`,
                        backgroundSize: noise.scale * 200,
                        backgroundRepeat: "repeat",
                        opacity: noise.opacity / 4,
                        pointerEvents: "none",
                        mixBlendMode: "overlay"
                    }}
                />
            )}
            
            <div className="absolute inset-0 bg-[radial-gradient(circle_at_top,_rgba(0,180,255,0.05)_0%,_transparent_60%)] pointer-events-none" />
        </div>
    );
}
