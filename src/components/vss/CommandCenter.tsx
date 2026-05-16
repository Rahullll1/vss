import { useRef } from "react";
import { motion, useScroll, useTransform } from "motion/react";
import command from "@/assets/command-center.jpg";

export function CommandCenter() {
  const ref = useRef<HTMLDivElement>(null);
  const { scrollYProgress } = useScroll({ target: ref, offset: ["start end", "end start"] });
  const scale = useTransform(scrollYProgress, [0, 1], [1.15, 1]);
  const overlayOpacity = useTransform(scrollYProgress, [0, 0.5, 1], [0.85, 0.4, 0.85]);

  return (
    <section id="command" ref={ref} className="relative h-[180vh]">
      <div className="sticky top-0 h-screen w-full overflow-hidden bg-ink">
        <motion.div style={{ scale }} className="absolute inset-0">
          <img src={command} alt="" className="h-full w-full object-cover" loading="lazy" />
        </motion.div>
        <motion.div style={{ opacity: overlayOpacity }} className="absolute inset-0 bg-gradient-to-b from-ink/60 via-ink/30 to-ink/90" />

        {/* Frame markers */}
        <div className="absolute top-8 left-8 md:left-14 text-[0.6rem] tracking-[0.3em] uppercase text-beige/60">
          SECTOR — 03 / Command Center
        </div>
        <div className="absolute top-8 right-8 md:right-14 text-[0.6rem] tracking-[0.3em] uppercase text-beige/60 flex items-center gap-2">
          <span className="h-1.5 w-1.5 rounded-full bg-champagne animate-pulse" />
          12 SITES MONITORED
        </div>

        {/* Floating UI cards */}
        {/* <div className="absolute top-1/4 left-8 md:left-14 max-w-xs space-y-3">
          {[
            ["UPTIME", "99.998%"],
            ["EVENTS / 24H", "12,408"],
            ["MTTR", "00:01:42"],
          ].map(([k, v]) => (
            <div key={k} className="backdrop-blur-md bg-ink/40 border border-beige/15 px-5 py-4 flex items-baseline justify-between">
              <span className="text-[0.6rem] tracking-[0.3em] uppercase text-beige/60">{k}</span>
              <span className="text-beige text-lg font-light tabular-nums">{v}</span>
            </div>
          ))}
        </div> */}

        <div className="absolute inset-0 flex items-end pb-24 md:pb-32 px-8 md:px-14">
          <div className="max-w-4xl">
            <div className="text-eyebrow text-champagne mb-6">Inside the room</div>
            <h2 className="text-display text-beige text-[clamp(2.5rem,6vw,6rem)]">
              The Command Center.<br />
              <span className="text-beige/40">Always watching, never seen.</span>
            </h2>
            <p className="text-beige/70 mt-8 max-w-xl text-base md:text-lg leading-relaxed">
              A 24/7 manned operations theatre where every feed, every credential and every alarm
              converges. Calm by design. Decisive by training.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}
