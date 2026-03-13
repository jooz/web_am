"use client";

import { useEffect, useRef, useState } from "react";

export default function HeroSection() {
    const videoRef = useRef<HTMLVideoElement>(null);
    const [isMuted, setIsMuted] = useState(true);

    useEffect(() => {
        const video = videoRef.current;
        if (!video) return;

        // Browsers require `muted` for autoplay to work.
        // We start muted, user can unmute via the button.
        video.muted = true;
        video.play().catch(() => {
            // autoplay still blocked – nothing critical
        });
    }, []);

    const toggleMute = () => {
        const video = videoRef.current;
        if (!video) return;
        video.muted = !video.muted;
        setIsMuted(video.muted);
    };

    return (
        <section
            className="relative w-full bg-black overflow-hidden"
            style={{ aspectRatio: "1080 / 617" }}
        >
            {/* Video */}
            <video
                ref={videoRef}
                src="/video_portada.mp4"
                autoPlay
                muted
                playsInline
                loop
                className="absolute inset-0 w-full h-full object-cover"
                preload="auto"
            />

            {/* Mute / Unmute button */}
            <button
                onClick={toggleMute}
                aria-label={isMuted ? "Activar sonido" : "Silenciar"}
                className="absolute bottom-4 right-4 z-30 flex items-center justify-center w-10 h-10 rounded-full bg-black/50 hover:bg-black/70 text-white transition-all duration-200 backdrop-blur-sm border border-white/20"
            >
                {isMuted ? (
                    /* Speaker off */
                    <svg xmlns="http://www.w3.org/2000/svg" className="w-5 h-5" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                        <polygon points="11 5 6 9 2 9 2 15 6 15 11 19 11 5" />
                        <line x1="23" y1="9" x2="17" y2="15" />
                        <line x1="17" y1="9" x2="23" y2="15" />
                    </svg>
                ) : (
                    /* Speaker on */
                    <svg xmlns="http://www.w3.org/2000/svg" className="w-5 h-5" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                        <polygon points="11 5 6 9 2 9 2 15 6 15 11 19 11 5" />
                        <path d="M19.07 4.93a10 10 0 0 1 0 14.14" />
                        <path d="M15.54 8.46a5 5 0 0 1 0 7.07" />
                    </svg>
                )}
            </button>
        </section>
    );
}