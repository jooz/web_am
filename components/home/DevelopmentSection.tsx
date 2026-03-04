"use client";

import Image from "next/image";

const bioItems = [
    { icon: "🎂", text: "Nacido el 10 de octubre de 1983 en Coro" },
    {
        icon: "🎓",
        text: "Docente universitario en el área de las Ciencias de la Salud",
    },
    {
        icon: "🏛️",
        text: "Secretario General de Gobierno del Estado",
    },
    {
        icon: "⚕️",
        text: "Autoridad única de salud",
    },
    {
        icon: "🤝",
        text: "Jefe del gabinete social del estado",
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

                {/* ═══ BANNER PRINCIPAL ═══ */}
                <div className="relative rounded-3xl overflow-hidden shadow-2xl border border-white/20">

                    {/* ── FONDO COLONIAL (posición absoluta, cubre todo) ── */}
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
                        {/* Overlay degradado oscuro izquierda → semitransparente derecha */}
                        <div
                            className="absolute inset-0"
                            style={{
                                background:
                                    "linear-gradient(105deg, rgba(4,12,45,0.97) 0%, rgba(8,20,65,0.88) 30%, rgba(4,12,40,0.65) 60%, rgba(0,4,18,0.28) 100%)",
                            }}
                        />
                    </div>

                    {/* ── Franja dorada superior ── */}
                    <div
                        className="absolute top-0 left-0 right-0 z-10"
                        style={{
                            height: "5px",
                            background:
                                "linear-gradient(to right, #a06000, #ffd700, #f5c542, #ffd700, #a06000)",
                        }}
                    />
                    {/* ── Franja dorada inferior ── */}
                    <div
                        className="absolute bottom-0 left-0 right-0 z-10"
                        style={{
                            height: "5px",
                            background:
                                "linear-gradient(to right, #a06000, #ffd700, #f5c542, #ffd700, #a06000)",
                        }}
                    />

                    {/* ════════════════════════════════════
                        LAYOUT RESPONSIVE
                        · Móvil/tablet (<md): columna → foto arriba, texto abajo
                        · Desktop (≥md): fila → foto izquierda | texto derecho
                    ════════════════════════════════════ */}
                    <div className="relative z-20 flex flex-col md:flex-row">

                        {/* ──────────────────────────────────
                            FOTO DEL ALCALDE
                            La foto original es vertical (~3:4).
                            · Móvil: contenedor 100% ancho, altura 360px.
                              Imagen centrada horizontalmente, anclada a 10% desde arriba
                              para mostrar cara + busto + banda, no las banderas del techo.
                            · Desktop: columna fija, imagen completa.
                        ────────────────────────────────── */}

                        {/* === MÓVIL: foto full-width === */}
                        <div
                            className="md:hidden relative w-full overflow-hidden"
                            style={{ height: "360px", padding: "1% 0" }}
                        >
                            {/* Degradado inferior para fusionar foto con sección de texto */}
                            <div
                                className="absolute inset-x-0 bottom-0 z-10"
                                style={{
                                    height: "45%",
                                    background:
                                        "linear-gradient(to bottom, transparent 0%, rgba(4,12,45,0.98) 95%)",
                                }}
                            />
                            <div className="relative w-full h-[98%] top-[1%]">
                                <Image
                                    src="/alcalde_henry.jpg"
                                    alt="Henry Hernández - Alcalde Bolivariano del Municipio Miranda"
                                    fill
                                    quality={100}
                                    priority
                                    sizes="98vw"
                                    className="object-cover"
                                    style={{ objectPosition: "50% 12%" }}
                                />
                            </div>
                        </div>

                        {/* === DESKTOP (≥768px): foto columna lateral === */}
                        <div
                            className="hidden md:flex flex-shrink-0 items-end justify-center"
                            style={{ width: "clamp(220px, 28vw, 360px)" }}
                        >
                            {/* Contenedor con aspect-ratio de la foto original ~3:4 */}
                            <div
                                className="relative w-full"
                                style={{
                                    /* Altura = ancho × (4/3) para respetar el aspect ratio */
                                    aspectRatio: "3 / 4",
                                    maxHeight: "480px",
                                }}
                            >
                                {/* Resplandor dorado detrás */}
                                <div
                                    className="absolute inset-x-0 bottom-0 z-0"
                                    style={{
                                        height: "60%",
                                        background:
                                            "radial-gradient(ellipse at 50% 100%, rgba(245,197,60,0.22) 0%, transparent 70%)",
                                    }}
                                />
                                <div className="absolute inset-0 z-10" style={{ height: "98%", top: "1%" }}>
                                    <Image
                                        src="/alcalde_henry.jpg"
                                        alt="Henry Hernández - Alcalde Bolivariano del Municipio Miranda"
                                        fill
                                        quality={100}
                                        priority
                                        sizes="(max-width: 1024px) 28vw, 360px"
                                        className="object-cover"
                                        style={{
                                            objectPosition: "50% 5%",
                                            filter: "drop-shadow(0 6px 24px rgba(0,0,0,0.5))",
                                        }}
                                    />
                                </div>
                            </div>
                        </div>

                        {/* ── DIVIDER DORADO VERTICAL (solo desktop) ── */}
                        <div
                            className="hidden md:flex flex-shrink-0 items-stretch mx-3 py-8"
                            aria-hidden="true"
                        >
                            <div
                                className="w-px"
                                style={{
                                    background:
                                        "linear-gradient(to bottom, transparent, rgba(245,197,66,0.75) 20%, rgba(245,197,66,0.95) 50%, rgba(245,197,66,0.75) 80%, transparent)",
                                }}
                            />
                        </div>

                        {/* ── TEXTO INFORMATIVO ── */}
                        <div className="flex-1 flex flex-col justify-center py-6 md:py-8 px-5 md:pr-8 md:pl-2">

                            {/* Etiqueta institucional */}
                            <div className="flex items-center gap-3 mb-3 md:mb-4">
                                <div
                                    className="h-px w-8 flex-shrink-0 opacity-75"
                                    style={{ background: "#ffd700" }}
                                />
                                <span
                                    className="text-xs font-bold tracking-[0.20em] uppercase"
                                    style={{ color: "#ffd700" }}
                                >
                                    Municipio Miranda · Estado Falcón
                                </span>
                            </div>

                            {/* Nombre */}
                            <h2
                                className="font-extrabold leading-[1.05] mb-2"
                                style={{
                                    color: "#fff",
                                    fontSize: "clamp(1.6rem, 3.5vw, 2.8rem)",
                                    textShadow: "0 2px 14px rgba(0,0,0,0.7)",
                                    letterSpacing: "-0.02em",
                                }}
                            >
                                Henry Hernández
                            </h2>

                            {/* Cargo */}
                            <p
                                className="font-semibold mb-4 leading-snug"
                                style={{
                                    color: "#ffd700",
                                    fontSize: "clamp(0.78rem, 1.4vw, 1rem)",
                                    textShadow: "0 1px 8px rgba(0,0,0,0.5)",
                                }}
                            >
                                Alcaldía Bolivariana del Municipio Miranda · 2025-2029
                            </p>

                            {/* Línea decorativa */}
                            <div
                                className="h-[2px] w-16 rounded-full mb-4"
                                style={{
                                    background:
                                        "linear-gradient(to right, #ffd700, rgba(255,215,0,0.15))",
                                }}
                            />

                            {/* Bio items */}
                            <ul className="space-y-2.5 mb-5">
                                {bioItems.map((item, i) => (
                                    <li key={i} className="flex items-start gap-3">
                                        <span
                                            className="flex-shrink-0 mt-0.5 w-7 h-7 md:w-8 md:h-8 rounded-full flex items-center justify-center text-sm"
                                            style={{
                                                background: "rgba(255,215,0,0.11)",
                                                border: "1px solid rgba(255,215,0,0.28)",
                                            }}
                                        >
                                            {item.icon}
                                        </span>
                                        <span
                                            className="text-white/90 leading-snug pt-1"
                                            style={{ fontSize: "clamp(0.76rem, 1.2vw, 0.92rem)" }}
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
                                            background: "rgba(255,215,0,0.11)",
                                            border: "1px solid rgba(255,215,0,0.32)",
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
