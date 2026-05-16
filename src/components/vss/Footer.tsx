import { Download } from "lucide-react";

interface FooterProps {
  onConsultationOpen?: () => void;
}

export function Footer({ onConsultationOpen }: FooterProps) {
  return (
    <footer id="contact" className="relative bg-ink px-8 md:px-14 pt-32 pb-12 border-t border-beige/10">
      <div className="max-w-[1600px] mx-auto">
        <div className="grid grid-cols-12 gap-10 mb-24">
          <div className="col-span-12 md:col-span-7">
            <div className="text-eyebrow text-champagne mb-6">05 / Begin</div>
            <h2 className="text-display text-beige text-[clamp(2.5rem,7vw,7rem)] mb-10">
              Let&apos;s design<br />your security posture.
            </h2>
            <div className="flex flex-wrap gap-3">
              <button
                onClick={() => onConsultationOpen?.()}
                className="btn-ghost solid"
              >
                Request Consultation
              </button>
              <a
                href="/capability-deck.pdf"
                target="_blank"
                rel="noopener noreferrer"
                className="btn-ghost flex items-center gap-2"
              >
                <Download size={14} />
                Capability Deck
              </a>
            </div>
          </div>
          <div className="col-span-12 md:col-span-5 md:pl-12 grid grid-cols-2 gap-8 self-end">
            {[
              ["ADDRESS", "Chinnamusidiwada · Visakhapatnam "],
              ["EMAIL", "rama.chandra@visionsecuritysystem.com"],
              ["MOBILE", "+91 8247047337"],
              ["P.Rama Chandra", "Service Engineer"],
            ].map(([k, v]) => (
              <div key={k}>
                <div className="text-eyebrow mb-2">{k}</div>
                <div className="text-beige/80 text-sm">{v}</div>
              </div>
            ))}
          </div>
        </div>

        <div className="rule mb-8" />
        <div className="flex flex-col md:flex-row md:items-center md:justify-between gap-4 text-[0.65rem] tracking-[0.3em] uppercase text-beige/40">
          <div className="flex items-center gap-3">
            <span className="h-2 w-2 rounded-full bg-champagne" />
            Vision Security Systems  ·  © {new Date().getFullYear()}
          </div>
          <div className="flex gap-6">
            <span>ISO 27001</span>
            <span>SOC 2 Type II</span>
            <span>Tier IV Certified</span>
          </div>
        </div>
      </div>
    </footer>
  );
}
