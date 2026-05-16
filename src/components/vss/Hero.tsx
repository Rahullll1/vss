import { useRef } from "react";
import { motion, useScroll, useTransform, useSpring } from "motion/react";

import dome from "@/assets/dome-camera.jpg";
import city from "@/assets/city-haze.jpg";
import lens from "@/assets/lens-portal.jpg";

interface HeroProps {
  onConsultationOpen?: () => void;
}

export function Hero({ onConsultationOpen }: HeroProps) {
  const ref = useRef<HTMLDivElement>(null);

  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ["start start", "end end"],
  });

  const p = useSpring(scrollYProgress, {
    stiffness: 90,
    damping: 22,
    mass: 0.6,
  });

  // Camera animation
  const cameraScale = useTransform(p, [0, 0.5, 1], [1, 2.2, 4.6]);

  const cameraRotate = useTransform(p, [0, 1], [0, 8]);

  const cameraOpacity = useTransform(
    p,
    [0, 0.75, 0.95],
    [1, 1, 0]
  );

  // City atmosphere
  const cityY = useTransform(p, [0, 1], ["0%", "-25%"]);

  const cityOpacity = useTransform(
    p,
    [0, 0.6],
    [0.55, 0]
  );

  // Typography phase
  const titleY = useTransform(
    p,
    [0, 0.4],
    [0, -120]
  );

  const titleOpacity = useTransform(
    p,
    [0, 0.35],
    [1, 0]
  );

  // Background transitions
  const bg = useTransform(
    p,
    [0, 0.5, 1],
    [
      "radial-gradient(120% 80% at 50% 40%, oklch(0.18 0.006 60) 0%, oklch(0.07 0.004 60) 70%)",
      "radial-gradient(120% 80% at 50% 50%, oklch(0.10 0.005 60) 0%, oklch(0.04 0.003 60) 70%)",
      "radial-gradient(120% 80% at 50% 50%, oklch(0.14 0.018 60) 0%, oklch(0.05 0.004 50) 70%)",
    ]
  );

  // Surveillance grid
  const gridOpacity = useTransform(
    p,
    [0.35, 0.6, 0.9],
    [0, 0.35, 0.15]
  );

  // Lens portal
  const lensScale = useTransform(
    p,
    [0.7, 1],
    [1.2, 1]
  );

  const lensOpacity = useTransform(
    p,
    [0.78, 0.95],
    [0, 0.9]
  );

  // Scroll hint
  const hintOpacity = useTransform(
    p,
    [0, 0.05],
    [1, 0]
  );

  return (
    <section
      id="top"
      ref={ref}
      className="relative h-[360vh]"
    >
      <motion.div
        className="sticky top-0 h-screen w-full overflow-hidden"
        style={{ background: bg }}
      >
        {/* CITY ATMOSPHERE */}
        <motion.div
          className="absolute inset-0"
          style={{
            y: cityY,
            opacity: cityOpacity,
            backgroundImage: `url(${city})`,
            backgroundSize: "cover",
            backgroundPosition: "center",
            filter: "grayscale(0.8) blur(6px) brightness(0.45)",
          }}
        />

        {/* WARM HAZE */}
        <div className="absolute inset-0 bg-[radial-gradient(60%_40%_at_50%_30%,oklch(0.82_0.035_75_/_0.08),transparent_60%)]" />

        {/* SURVEILLANCE GRID */}
        <motion.svg
          className="absolute inset-0 h-full w-full text-beige/30"
          style={{ opacity: gridOpacity }}
          aria-hidden
        >
          <defs>
            <pattern
              id="g"
              width="80"
              height="80"
              patternUnits="userSpaceOnUse"
            >
              <path
                d="M80 0H0V80"
                fill="none"
                stroke="currentColor"
                strokeWidth="0.5"
              />
            </pattern>
          </defs>

          <rect
            width="100%"
            height="100%"
            fill="url(#g)"
          />
        </motion.svg>

        {/* CAMERA */}
        <motion.div
          className="absolute inset-0 flex items-center justify-center"
          style={{
            scale: cameraScale,
            rotate: cameraRotate,
            opacity: cameraOpacity,
          }}
        >
          <div className="relative w-[min(82vw,980px)] aspect-[16/9]">
            <img
              src={dome}
              alt="Vision Security Systems dome camera"
              className="h-full w-full object-cover will-change-transform drop-shadow-[0_80px_180px_rgba(0,0,0,0.9)]"
              fetchPriority="high"
            />
          </div>
        </motion.div>

        {/* LENS PORTAL */}
        <motion.div
          className="absolute inset-0 flex items-center justify-center"
          style={{
            opacity: lensOpacity,
            scale: lensScale,
          }}
        >
          <div className="relative w-[140vmax] h-[140vmax] rounded-full overflow-hidden">
            <img
              src={lens}
              alt=""
              className="h-full w-full object-cover"
            />

            <div className="absolute inset-0 bg-[radial-gradient(circle_at_center,transparent_30%,oklch(0.05_0.003_60)_70%)]" />
          </div>
        </motion.div>

        {/* VIGNETTE */}
        <div className="pointer-events-none absolute inset-0 bg-[radial-gradient(ellipse_at_center,transparent_45%,oklch(0.04_0.003_60)_100%)]" />

        {/* Top markers/nav removed: use global `Nav` for header and status. */}

        {/* HERO CONTENT */}
        <motion.div
          style={{
            y: titleY,
            opacity: titleOpacity,
          }}
          className="absolute inset-0 z-20 flex items-center pt-24"
        >
          <div className="w-full max-w-[1600px] mx-auto px-8 md:px-16">
            <div className="grid grid-cols-1 lg:grid-cols-[1.2fr_0.8fr] items-end gap-10">

              {/* LEFT CONTENT */}
              <div className="relative z-10 max-w-[760px]">

                {/* SMALL LABEL */}
                <div className="mb-6">
                  <span className="text-[11px] tracking-[0.38em] uppercase text-champagne/60">
                    THIRD EYE FOR SECURITY
                  </span>
                </div>

                {/* MAIN HEADING */}
                <h1 className="text-beige font-light uppercase leading-[0.88] tracking-[-0.04em]">

                  <span className="block text-[clamp(4rem,9vw,8rem)]">
                    Vision
                  </span>

                  <span className="block text-[clamp(4rem,9vw,8rem)] text-champagne/85">
                    Security
                  </span>

                  <span className="block text-[clamp(4rem,9vw,8rem)]">
                    Systems
                  </span>
                </h1>

                {/* DESCRIPTION */}
                <div className="mt-8 max-w-[540px]">
                  <p className="text-[15px] md:text-[16px] leading-[1.8] text-beige/58 font-light">
                    Advanced end-to-end security and safety systems designed
                    for intelligent monitoring, enterprise protection, and
                    future-ready infrastructure.
                  </p>
                </div>

                {/* CTA */}
                <div className="mt-10 flex flex-wrap items-center gap-4">

                  <a
                    href="#systems"
                    className="group inline-flex items-center justify-center h-11 px-7 rounded-full bg-[#ebe7df] text-black text-[11px] tracking-[0.18em] uppercase transition-all duration-500 hover:bg-white"
                  >
                    Explore Systems
                  </a>

                  <button
                    onClick={() => onConsultationOpen?.()}
                    className="group inline-flex items-center justify-center h-11 px-7 border border-white/12 bg-white/[0.03] backdrop-blur-md text-beige rounded-full text-[11px] tracking-[0.18em] uppercase transition-all duration-500 hover:bg-white hover:text-black"
                  >
                    Request Consultation
                  </button>
                </div>
              </div>

              {/* RIGHT INFO PANEL */}
              <div className="hidden lg:flex justify-end">

                <div
                  className="
                    w-[280px]
                    border border-white/[0.08]
                    bg-white/[0.02]
                    backdrop-blur-2xl
                    p-7
                    relative
                    overflow-hidden
                  "
                >

                  {/* SUBTLE GLOW */}
                  <div className="absolute inset-0 bg-[radial-gradient(circle_at_top,rgba(255,220,180,0.06),transparent_65%)]" />

                  <div className="relative z-10">

                    {/* STATUS */}
                    <div className="flex items-center gap-2 mb-5">
                      <div className="w-2 h-2 rounded-full bg-champagne animate-pulse" />

                      <span className="text-[10px] tracking-[0.35em] uppercase text-beige/50">
                        Live Monitoring
                      </span>
                    </div>

                    {/* ACTIVE */}
                    <div className="text-[2.2rem] leading-none font-light text-beige mb-4">
                      ACTIVE
                    </div>

                    {/* DESCRIPTION */}
                    <div className="text-[11px] leading-[1.8] text-beige/38 mb-8">
                      Intelligent surveillance systems built for enterprise-grade monitoring and modern infrastructure protection.
                    </div>

                    {/* DIVIDER */}
                    <div className="w-full h-px bg-white/[0.08] mb-6" />

                    {/* TEAM */}
                    <div className="space-y-5">

                      {/* DIRECTOR */}
                      <div>
                        <div className="text-[9px] tracking-[0.3em] uppercase text-beige/30 mb-2">
                          Director
                        </div>

                        <div className="text-[14px] text-beige/78 font-light">
                          Rama Chandra.P
                        </div>
                      </div>

                      {/* PROPRIETOR */}
                      <div>
                        <div className="text-[9px] tracking-[0.3em] uppercase text-beige/30 mb-2">
                          Proprietor
                        </div>

                        <div className="text-[14px] text-beige/78 font-light">
                          Syamala.P
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </motion.div>

        {/* Removed extra micro labels to reduce visual clutter. */}

        {/* SCROLL HINT */}
        <motion.div
          style={{ opacity: hintOpacity }}
          className="absolute bottom-8 left-1/2 -translate-x-1/2 text-[0.6rem] tracking-[0.45em] uppercase text-beige/45"
        >
          Scroll to enter the system
        </motion.div>
      </motion.div>
    </section>
  );
}