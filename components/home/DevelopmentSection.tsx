"use client";

import Image from "next/image";

const bioItems = [
    { icon: "🎂", text: "Nacido el 10 de octubre de 1983 en Coro" },
    {
        icon: "🎓",
        text: "Docente universitario en el área de las Ciencias de la Salud",
    },
    {
        icon: "⚖️",
        text: "Secretario General de Gobierno del Estado",
    },
];

const touristTags = [
    "Zona Colonial",
    "Los Médanos de Coro",
    "Turismo Cultural",
    "Patrimonio UNESCO",
];

export default function DevelopmentSection() {
    return (
        <section className="py-12 bg-gray-50 overflow-hidden">
            <div className="max-w-[1500px] mx-auto px-4 md:px-6">

                {/* ═══════════════════════════════════════════
            BANNER PRINCIPAL
        ═══════════════════════════════════════════ */}
                <div className="relative rounded-3xl overflow-hidden shadow-2xl border border-white/20"
                    style={{ minHeight: "320px" }}
                >

                    {/* ── FONDO: Imagen colonial de alta resolución ── */}
                    <div className="absolute inset-0 z-0">
                        <Image
                            src="/banner_colonial.png"
                            alt="Zona Colonial y Turística del Municipio Miranda - Coro Venezuela"
                            fill
                            quality={100}
                            priority
                            sizes="100vw"
                            className="object-cover object-center"
                        />
                        {/* Overlay: azul oscuro izq → transparente derecho */}
                        <div
                            className="absolute inset-0"
                            style={{
                                background:
                                    "linear-gradient(105deg, rgba(5,15,50,0.95) 0%, rgba(10,25,70,0.85) 35%, rgba(5,15,45,0.60) 60%, rgba(0,5,20,0.30) 100%)",
                            }}
                        />
                    </div>

                    {/* ── Franja dorada superior ── */}
                    <div
                        className="absolute top-0 left-0 right-0 z-10"
                        style={{
                            height: "5px",
                            background: "linear-gradient(to right, #b8860b, #ffd700, #f5c542, #ffd700, #b8860b)",
                        }}
                    />
                    {/* ── Franja dorada inferior ── */}
                    <div
                        className="absolute bottom-0 left-0 right-0 z-10"
                        style={{
                            height: "5px",
                            background: "linear-gradient(to right, #b8860b, #ffd700, #f5c542, #ffd700, #b8860b)",
                        }}
                    />

                    {/* ═══════════════════════════════════════════
              LAYOUT: foto | divider | texto
          ═══════════════════════════════════════════ */}
                    <div className="relative z-20 flex flex-col md:flex-row items-stretch">

                        {/* ── FOTO DEL ALCALDE (izquierda) ── */}
                        <div
                            className="flex-shrink-0 flex items-end justify-center self-end"
                            style={{ width: "clamp(180px, 24vw, 340px)" }}
                        >
                            {/* Sombra ambiental bajo la foto */}
                            <div
                                className="relative w-full"
                                style={{ height: "clamp(260px, 35vw, 490px)" }}
                            >
                                {/* Brillo radial detrás del alcalde */}
                                <div
                                    className="absolute inset-x-0 bottom-0 z-0"
                                    style={{
                                        height: "70%",
                                        background:
                                            "radial-gradient(ellipse at 50% 100%, rgba(245,197,66,0.18) 0%, transparent 70%)",
                                    }}
                                />
                                <Image
                                    src="/alcalde_henry.jpg"
                                    alt="Henry Hernández - Alcalde Bolivariano del Municipio Miranda"
                                    fill
                                    quality={100}
                                    priority
                                    sizes="(max-width: 768px) 70vw, 24vw"
                                    className="object-contain object-bottom z-10"
                                    style={{
                                        filter: "drop-shadow(0 8px 32px rgba(0,0,0,0.6))",
                                    }}
                                />
                            </div>
                        </div>

                        {/* ── DIVIDER DORADO VERTICAL ── */}
                        <div
                            className="hidden md:flex flex-shrink-0 items-stretch mx-2 py-8"
                            aria-hidden="true"
                        >
                            <div
                                className="w-px"
                                style={{
                                    background:
                                        "linear-gradient(to bottom, transparent, rgba(245,197,66,0.7) 20%, rgba(245,197,66,0.9) 50%, rgba(245,197,66,0.7) 80%, transparent)",
                                }}
                            />
                        </div>

                        {/* ── TEXTO INFORMATIVO (derecha) ── */}
                        <div className="flex-1 flex flex-col justify-center py-8 pr-6 pl-4 md:pl-3">

                            {/* Etiqueta institucional */}
                            <div className="flex items-center gap-3 mb-4">
                                <div
                                    className="h-px w-8 flex-shrink-0 opacity-70"
                                    style={{ background: "#ffd700" }}
                                />
                                <span
                                    className="text-xs font-bold tracking-[0.22em] uppercase"
                                    style={{ color: "#ffd700" }}
                                >
                                    Municipio Miranda · Estado Falcón
                                </span>
                            </div>

                            {/* Nombre principal */}
                            <h2
                                className="font-extrabold leading-[1.1] mb-2"
                                style={{
                                    color: "#ffffff",
                                    fontSize: "clamp(1.75rem, 3.8vw, 3rem)",
                                    textShadow: "0 2px 16px rgba(0,0,0,0.7)",
                                    letterSpacing: "-0.02em",
                                }}
                            >
                                Henry Hernández
                            </h2>

                            {/* Cargo */}
                            <p
                                className="font-semibold mb-5 leading-snug"
                                style={{
                                    color: "#ffd700",
                                    fontSize: "clamp(0.8rem, 1.5vw, 1.05rem)",
                                    textShadow: "0 1px 8px rgba(0,0,0,0.5)",
                                }}
                            >
                                Alcaldía Bolivariana del Municipio Miranda · 2025-2029
                            </p>

                            {/* Línea decorativa */}
                            <div
                                className="h-0.5 w-20 rounded-full mb-5"
                                style={{
                                    background:
                                        "linear-gradient(to right, #ffd700, rgba(255,215,0,0.2))",
                                }}
                            />

                            {/* Bio items */}
                            <ul className="space-y-3 mb-6">
                                {bioItems.map((item, i) => (
                                    <li key={i} className="flex items-start gap-3">
                                        <span
                                            className="flex-shrink-0 mt-0.5 w-8 h-8 rounded-full flex items-center justify-center text-base"
                                            style={{
                                                background: "rgba(255,215,0,0.12)",
                                                border: "1px solid rgba(255,215,0,0.30)",
                                                boxShadow: "0 0 12px rgba(255,215,0,0.08)",
                                            }}
                                        >
                                            {item.icon}
                                        </span>
                                        <span
                                            className="text-white/90 leading-snug pt-1"
                                            style={{ fontSize: "clamp(0.78rem, 1.25vw, 0.95rem)" }}
                                        >
                                            {item.text}
                                        </span>
                                    </li>
                                ))}
                            </ul>

                            {/* Tags turísticos */}
                            <div className="flex flex-wrap gap-2">
                                {touristTags.map((tag) => (
                                    <span
                                        key={tag}
                                        className="px-3 py-1 rounded-full text-xs font-semibold tracking-wide"
                                        style={{
                                            background: "rgba(255,215,0,0.12)",
                                            border: "1px solid rgba(255,215,0,0.35)",
                                            color: "#ffe680",
                                            backdropFilter: "blur(6px)",
                                        }}
                                    >
                                        {tag}
                                    </span>
                                ))}
                            </div>
                        </div>
                    </div>
                </div>

            </div>
        </section>
    );
}
