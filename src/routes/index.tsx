import { createFileRoute } from "@tanstack/react-router";
import { useState } from "react";
import { SmoothScroll } from "@/components/vss/SmoothScroll";
import { Nav } from "@/components/vss/Nav";
import { Hero } from "@/components/vss/Hero";
import { Services } from "@/components/vss/Services";
import { CommandCenter } from "@/components/vss/CommandCenter";
import { Projects } from "@/components/vss/Projects";
import { Footer } from "@/components/vss/Footer";
import { ConsultationModal } from "@/components/ConsultationModal";

export const Route = createFileRoute("/")({
  head: () => ({
    meta: [
      { title: "Vision Security Systems — Third Eye for Security" },
      { name: "description", content: "Advanced end-to-end security and safety systems: CCTV surveillance, access control, fire safety, smart home, industrial and networking infrastructure." },
      { property: "og:title", content: "Vision Security Systems" },
      { property: "og:description", content: "Cinematic, end-to-end security and safety systems for enterprise and sovereign estates." },
    ],
  }),
  component: Index,
});

function Index() {
  const [consultationOpen, setConsultationOpen] = useState(false);

  return (
    <main className="relative bg-background text-foreground grain">
      <SmoothScroll />
      <Nav />
      <Hero onConsultationOpen={() => setConsultationOpen(true)} />
      <Services />
      <CommandCenter />
      <Projects onConsultationOpen={() => setConsultationOpen(true)} />
      <Footer onConsultationOpen={() => setConsultationOpen(true)} />

      <ConsultationModal open={consultationOpen} onClose={() => setConsultationOpen(false)} />
    </main>
  );
}
