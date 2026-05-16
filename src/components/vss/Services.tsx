import { useRef } from "react";
import { motion, useScroll, useTransform } from "motion/react";
import access from "@/assets/service-access.jpg";
import fire from "@/assets/service-fire.jpg";
import smart from "@/assets/service-smarthome.jpg";
import industrial from "@/assets/service-industrial.jpg";
import network from "@/assets/service-network.jpg";
import dome from "@/assets/dome-camera.jpg";

const services = [
  { n: "01", title: "CCTV Surveillance", img: dome,
    desc: "AI-driven optical systems with edge analytics, low-light precision and forensic-grade retention. Every pixel auditable." },
  { n: "02", title: "Access Control", img: access,
    desc: "Biometric and credential layers across perimeters, vaults and executive floors. Frictionless for the trusted, opaque to the rest." },
  { n: "03", title: "Fire Safety", img: fire,
    desc: "Aspirating detection, addressable circuits and suppression — engineered to act in milliseconds and stay invisible the rest of the time." },
  { n: "04", title: "Smart Home Security", img: smart,
    desc: "Residential ecosystems where security is felt, not seen. Discreet sensors, ambient automation, single-pane control." },
  { n: "05", title: "Industrial Security", img: industrial,
    desc: "Perimeter intelligence for refineries, ports and logistics estates. Thermal, radar and PSIM unified into a single posture." },
  { n: "06", title: "Networking Infrastructure", img: network,
    desc: "Resilient backbones — fibre, switching, SD-WAN and zero-trust segmentation purpose-built for security workloads." },
];

function ServiceRow({ s, i }: { s: typeof services[number]; i: number }) {
  const ref = useRef<HTMLDivElement>(null);
  const { scrollYProgress } = useScroll({ target: ref, offset: ["start end", "end start"] });
  const imgY = useTransform(scrollYProgress, [0, 1], ["-12%", "12%"]);
  const titleX = useTransform(scrollYProgress, [0, 1], [i % 2 === 0 ? -30 : 30, i % 2 === 0 ? 30 : -30]);
  const reverse = i % 2 === 1;

  return (
    <div ref={ref} className="grid grid-cols-12 gap-6 md:gap-10 items-center py-32 md:py-44 border-t border-beige/10">
      <div className={`col-span-12 md:col-span-6 ${reverse ? "md:order-2" : ""}`}>
        <div className="relative aspect-[4/5] md:aspect-[5/6] overflow-hidden bg-graphite">
          <motion.img
            src={s.img}
            alt={s.title}
            loading="lazy"
            style={{ y: imgY }}
            className="absolute inset-0 h-[125%] w-full object-cover"
          />
          <div className="absolute inset-0 bg-gradient-to-t from-ink/60 via-transparent to-transparent" />
          <div className="absolute top-4 left-4 text-[0.6rem] tracking-[0.3em] uppercase text-beige/70">
            CAM — {s.n}
          </div>
        </div>
      </div>
      <div className={`col-span-12 md:col-span-6 ${reverse ? "md:order-1 md:pr-12" : "md:pl-12"}`}>
        <div className="text-eyebrow mb-6 text-champagne">{s.n} / System</div>
        <motion.h3
          style={{ x: titleX }}
          className="text-display text-beige text-[clamp(2.5rem,6vw,5.5rem)] mb-8"
        >
          {s.title}
        </motion.h3>
        <p className="text-beige/65 text-base md:text-lg leading-relaxed max-w-md mb-10">
          {s.desc}
        </p>
        <a href="#contact" className="btn-ghost">View Capability</a>
      </div>
    </div>
  );
}

export function Services() {
  return (
    <section id="systems" className="relative px-6 md:px-14 py-28 bg-background">
      <div className="max-w-[1600px] mx-auto">
        <div className="grid grid-cols-12 mb-20">
          <div className="col-span-12 md:col-span-4 text-eyebrow text-champagne mb-6 md:mb-0">
            02 / Systems
          </div>
          <div className="col-span-12 md:col-span-8">
            <h2 className="text-display text-beige text-[clamp(2.5rem,5.5vw,5rem)] max-w-3xl">
              Six disciplines.<br />
              <span className="text-beige/40">One coherent posture.</span>
            </h2>
          </div>
        </div>

        <div>
          {services.map((s, i) => <ServiceRow key={s.n} s={s} i={i} />)}
        </div>
      </div>
    </section>
  );
}
