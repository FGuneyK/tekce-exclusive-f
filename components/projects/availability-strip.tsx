import type { Unit } from "@/lib/projects";

/**
 * The developer's unit table, drawn: one mark per home in unit order, filled
 * where the home is still for sale. Decorative on its own — the figure beside
 * it always carries the same information in words.
 */
export function AvailabilityStrip({
  units,
  className = "h-2.5",
}: {
  units: Unit[];
  className?: string;
}) {
  return (
    <div aria-hidden="true" className={`flex gap-px ${className}`}>
      {units.map((unit) => (
        <span
          key={unit.id}
          className={unit.sold ? "flex-1 bg-ink/15" : "flex-1 bg-ink"}
        />
      ))}
    </div>
  );
}
