import { X } from "lucide-react";

interface ConsultationModalProps {
  open: boolean;
  onClose: () => void;
}

export function ConsultationModal({
  open,
  onClose,
}: ConsultationModalProps) {
  if (!open) return null;

  return (
    <div className="fixed inset-0 z-[999] flex items-center justify-center">

      {/* BACKDROP */}
      <div
        onClick={onClose}
        className="absolute inset-0 bg-black/70 backdrop-blur-xl"
      />

      {/* MODAL */}
      <div
        className="
          relative
          w-[92vw]
          max-w-[520px]
          border border-white/10
          bg-white/[0.04]
          backdrop-blur-2xl
          p-8 md:p-10
          shadow-[0_40px_120px_rgba(0,0,0,0.6)]
        "
      >

        {/* CLOSE BUTTON */}
        <button
          onClick={onClose}
          className="
            absolute top-5 right-5
            text-beige/50
            hover:text-beige
            transition-colors duration-300
          "
        >
          <X size={18} />
        </button>

        {/* LABEL */}
        <div className="mb-4 text-[11px] tracking-[0.35em] uppercase text-champagne/60">
          Request Consultation
        </div>

        {/* TITLE */}
        <h2 className="text-[2.2rem] leading-[1] font-light text-beige mb-4">
          Let's Secure
          <br />
          Your Space.
        </h2>

        {/* DESCRIPTION */}
        <p className="text-sm leading-[1.8] text-beige/50 mb-10 max-w-[420px]">
          Connect with Vision Security Systems for intelligent surveillance,
          enterprise-grade monitoring, and future-ready protection systems.
        </p>

        {/* FORM */}
        <form className="space-y-5">

          <div>
            <input
              type="text"
              placeholder="Full Name"
              className="
                w-full
                h-14
                border border-white/10
                bg-white/[0.03]
                px-5
                text-sm
                text-beige
                placeholder:text-beige/30
                outline-none
                focus:border-champagne/40
                transition-colors duration-300
              "
            />
          </div>

          <div>
            <input
              type="email"
              placeholder="Email Address"
              className="
                w-full
                h-14
                border border-white/10
                bg-white/[0.03]
                px-5
                text-sm
                text-beige
                placeholder:text-beige/30
                outline-none
                focus:border-champagne/40
                transition-colors duration-300
              "
            />
          </div>

          <div>
            <input
              type="tel"
              placeholder="Phone Number"
              className="
                w-full
                h-14
                border border-white/10
                bg-white/[0.03]
                px-5
                text-sm
                text-beige
                placeholder:text-beige/30
                outline-none
                focus:border-champagne/40
                transition-colors duration-300
              "
            />
          </div>

          <div>
            <textarea
              placeholder="Tell us about your requirement..."
              rows={5}
              className="
                w-full
                border border-white/10
                bg-white/[0.03]
                p-5
                text-sm
                text-beige
                placeholder:text-beige/30
                outline-none
                resize-none
                focus:border-champagne/40
                transition-colors duration-300
              "
            />
          </div>

          {/* SUBMIT */}
          <button
            type="submit"
            className="
              w-full
              h-14
              bg-[#ebe7df]
              text-black
              text-[11px]
              tracking-[0.32em]
              uppercase
              transition-all duration-500
              hover:bg-white
            "
          >
            Submit Request
          </button>
        </form>
      </div>
    </div>
  );
}
