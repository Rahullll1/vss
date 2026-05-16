import { useRef } from "react";
import { motion, useScroll, useTransform } from "motion/react";
import corridor from "@/assets/project-corridor.jpg";
import smart from "@/assets/service-smarthome.jpg";
import industrial from "@/assets/service-industrial.jpg";
import network from "@/assets/service-network.jpg";

const projects = [
  { code: "VSS / 014", name: "Atrium Tower", scope: "Mixed-Use · 64 Floors", img: corridor, loc: "Riyadh" },
  { code: "VSS / 022", name: "Vault Residences", scope: "Private Estates", img: smart, loc: "Geneva" },
  { code: "VSS / 031", name: "Northport Refinery", scope: "Industrial Perimeter", img: industrial, loc: "Rotterdam" },
  { code: "VSS / 040", name: "Meridian Datacore", scope: "Tier IV Datacenter", img: network, loc: "Frankfurt" },
];

interface ProjectsProps {
  onConsultationOpen?: () => void;
}

export function Projects({ onConsultationOpen }: ProjectsProps) {
  const ref = useRef<HTMLDivElement>(null);
  const { scrollYProgress } = useScroll({ target: ref, offset: ["start start", "end end"] });
  const x = useTransform(scrollYProgress, [0, 1], ["0%", "-72%"]);

  return (
    <section id="projects" ref={ref} className="relative h-[360vh] bg-background">
      <div className="sticky top-0 h-screen overflow-hidden flex flex-col">
        <div className="flex items-end justify-between px-8 md:px-14 pt-24 pb-10">
          <div>
            <div className="text-eyebrow text-champagne mb-4">04 / Project Showcase</div>
            <h2 className="text-display text-beige text-[clamp(2rem,4.5vw,4rem)] max-w-2xl">
              Installations across<br />
              <span className="text-beige/40">enterprise &amp; sovereign estates.</span>
            </h2>
          </div>
          <div className="hidden md:block text-[0.65rem] tracking-[0.3em] uppercase text-beige/40 text-right">
            Scroll  →  Horizontal pan
          </div>
        </div>

        <motion.div style={{ x }} className="flex gap-6 md:gap-10 px-8 md:px-14 flex-1 items-center">
          {projects.map((p) => (
            <div key={p.code} className="relative h-[68vh] aspect-[4/5] flex-shrink-0 overflow-hidden bg-graphite group">
              <img src={p.img} alt={p.name} loading="lazy" className="absolute inset-0 h-full w-full object-cover transition-transform duration-[1800ms] group-hover:scale-105" />
              <div className="absolute inset-0 bg-gradient-to-t from-ink/85 via-ink/10 to-transparent" />
              <div className="absolute top-5 left-5 right-5 flex justify-between text-[0.6rem] tracking-[0.3em] uppercase text-beige/70">
                <span>{p.code}</span><span>{p.loc}</span>
              </div>
              <div className="absolute bottom-6 left-6 right-6">
                <div className="text-eyebrow text-champagne mb-2">{p.scope}</div>
                <div className="text-beige text-2xl md:text-3xl font-light tracking-tight">{p.name}</div>
              </div>
            </div>
          ))}
            <div className="h-[68vh] flex-shrink-0 flex flex-col justify-center px-12 max-w-md">
            <div className="text-eyebrow text-champagne mb-6">— Next</div>
            <h3 className="text-display text-beige text-4xl mb-6">Yours.</h3>
            <p className="text-beige/60 mb-8">A conversation begins where the public showcase ends.</p>
            <button
              onClick={() => onConsultationOpen?.()}
              className="btn-ghost solid w-fit"
            >
              Request Consultation
            </button>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
