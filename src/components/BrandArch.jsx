/**
 * The pointed arch from the logo, reused as the site's structural motif.
 *
 * ArchDefs   — the clip path itself. Rendered once, near the root.
 * ArchOutline — a decorative stroked copy, sat behind a photo and offset,
 *               echoing the double line in the logo's emblem.
 *
 * The clip is in objectBoundingBox units so one path fits any photo,
 * whatever its aspect ratio.
 */

const ARCH_UNIT =
  'M0,0.5 C0,0.25 0.12,0.11 0.3,0.06 C0.4,0.035 0.475,0.045 0.5,0 ' +
  'C0.525,0.045 0.6,0.035 0.7,0.06 C0.88,0.11 1,0.25 1,0.5 ' +
  'L1,0.955 C1,0.985 0.988,1 0.96,1 L0.04,1 C0.012,1 0,0.985 0,0.955 Z';

/* Same shape drawn in a 100×130 box so it can carry a stroke. */
const ARCH_BOX =
  'M0,65 C0,32.5 12,14.3 30,7.8 C40,4.55 47.5,5.85 50,0 ' +
  'C52.5,5.85 60,4.55 70,7.8 C88,14.3 100,32.5 100,65 ' +
  'L100,124.15 C100,128.05 98.8,130 96,130 L4,130 C1.2,130 0,128.05 0,124.15 Z';

export function ArchDefs() {
  return (
    <svg width="0" height="0" aria-hidden="true" style={{ position: 'absolute' }}>
      <defs>
        <clipPath id="pp-arch" clipPathUnits="objectBoundingBox">
          <path d={ARCH_UNIT} />
        </clipPath>
      </defs>
    </svg>
  );
}

export function ArchOutline({ className = '' }) {
  return (
    <svg
      className={className}
      viewBox="0 0 100 130"
      preserveAspectRatio="none"
      aria-hidden="true"
      focusable="false"
    >
      {/* non-scaling-stroke keeps the line even after the box is stretched */}
      <path
        d={ARCH_BOX}
        fill="none"
        stroke="currentColor"
        strokeWidth="1.5"
        vectorEffect="non-scaling-stroke"
      />
    </svg>
  );
}

/** The small four-petal diamond that divides the logo's wordmark. */
export function Flourish({ size = 11 }) {
  return (
    <svg
      width={size}
      height={size}
      viewBox="0 0 12 12"
      aria-hidden="true"
      focusable="false"
    >
      <path
        d="M6 0.6 7.1 4.9 11.4 6 7.1 7.1 6 11.4 4.9 7.1 0.6 6 4.9 4.9z"
        fill="currentColor"
      />
    </svg>
  );
}
