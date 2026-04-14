type BrandWordmarkProps = {
  /** Extra classes on the outer span (e.g. text size). */
  className?: string;
};

/** Readable word spacing, Inter + Playfair, theme gold for contrast on the navy header/footer. */
export default function BrandWordmark({ className = "" }: BrandWordmarkProps) {
  return (
    <span
      className={`inline-flex items-baseline gap-x-1.5 whitespace-nowrap text-white ${className}`}
    >
      <span className="font-bold tracking-tight">Sister Orlando</span>
      <span className="font-[family-name:var(--font-serif)] text-[1.08em] font-semibold leading-none tracking-tight text-gold drop-shadow-[0_1px_1px_rgba(26,39,68,0.12)]">
        Villas
      </span>
    </span>
  );
}
