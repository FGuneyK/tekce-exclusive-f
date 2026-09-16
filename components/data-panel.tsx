export type PanelRow = {
  label: string;
  value: string;
  marker?: "check" | "square" | "lock";
};

export type PanelData = { title: string; tag?: string; rows: PanelRow[] };

function Marker({ type }: { type: PanelRow["marker"] }) {
  if (type === "check") {
    return (
      <svg width="12" height="12" viewBox="0 0 12 12" fill="none" aria-hidden="true">
        <path
          d="M2.5 6.25L5 8.75L9.5 3.25"
          stroke="currentColor"
          strokeWidth="1.5"
          strokeLinecap="square"
        />
      </svg>
    );
  }
  if (type === "lock") {
    return (
      <svg width="12" height="12" viewBox="0 0 12 12" fill="none" aria-hidden="true">
        <rect x="2.25" y="5.25" width="7.5" height="5.5" stroke="currentColor" strokeWidth="1.5" />
        <path d="M4 5.25V3.75a2 2 0 0 1 4 0v1.5" stroke="currentColor" strokeWidth="1.5" />
      </svg>
    );
  }
  if (type === "square") {
    return <span className="block size-1.5 bg-ink" aria-hidden="true" />;
  }
  return null;
}

/**
 * The small product-style panel laid over photographs to show what a stage or
 * feature produces. Purely illustrative, so hidden from assistive tech; the
 * surrounding copy carries the meaning. Position it with `className`.
 */
export function DataPanel({
  panel,
  className = "",
}: {
  panel: PanelData;
  className?: string;
}) {
  return (
    <div
      aria-hidden="true"
      className={`border border-ink/10 bg-paper shadow-[0_16px_40px_-16px_rgba(28,34,72,0.45)] ${className}`}
    >
      <div className="flex h-10 items-center justify-between border-b border-ink/10 px-4">
        <span className="text-xs font-medium tracking-tight text-ink">
          {panel.title}
        </span>
        {panel.tag && (
          <span className="text-xs tracking-tight text-ink/50">{panel.tag}</span>
        )}
      </div>
      <ul>
        {panel.rows.map((row) => (
          <li
            key={row.label}
            className="flex h-9 items-center justify-between gap-4 border-b border-ink/5 px-4 last:border-b-0"
          >
            <span className="text-[13px] tracking-tight text-ink/60">{row.label}</span>
            <span className="flex items-center gap-2 text-[13px] font-medium tracking-tight text-ink tabular-nums">
              <Marker type={row.marker} />
              {row.value}
            </span>
          </li>
        ))}
      </ul>
    </div>
  );
}
