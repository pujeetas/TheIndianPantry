/**
 * One stroke-drawn icon set for the whole site.
 *
 * Everything is a 24×24 outline at a 1.6 stroke, inheriting currentColor —
 * which is the point: emoji render differently on every OS and instantly
 * read as clip-art, so the site draws its own.
 */

const paths = {
  // The logo's milk can — the brand's own mark, reused as an icon.
  milk: (
    <>
      <path d="M10 3.5h4v3h-4z" />
      <path d="M8.2 10.2 9.4 6.5h5.2l1.2 3.7" />
      <path d="M7.6 10.2h8.8v8.9a2.4 2.4 0 0 1-2.4 2.4h-4a2.4 2.4 0 0 1-2.4-2.4z" />
      <path d="M7.6 14.9h8.8" />
    </>
  ),
  leaf: (
    <>
      <path d="M4.8 20.6C4.4 11.8 8.6 5.2 19.3 3.8c1.1 9.3-4.3 15.2-14.5 16.8z" />
      <path d="M5.2 20.4c2.6-4.9 5.6-8 9.4-10.2" />
    </>
  ),
  clock: (
    <>
      <circle cx="12" cy="12" r="8.6" />
      <path d="M12 7.1V12l3.3 2" />
    </>
  ),
  truck: (
    <>
      <path d="M2.6 6.6h10.6v9.9H2.6z" />
      <path d="M13.2 10.1h3.9l3.3 3.3v3.1h-7.2" />
      <circle cx="7" cy="18.4" r="1.9" />
      <circle cx="16.6" cy="18.4" r="1.9" />
      <path d="M8.9 18.4h5.8" />
    </>
  ),
  home: (
    <>
      <path d="M3.4 10.4 12 3.3l8.6 7.1v9.1a1.2 1.2 0 0 1-1.2 1.2H4.6a1.2 1.2 0 0 1-1.2-1.2z" />
      <path d="M9.4 20.7v-6.1h5.2v6.1" />
    </>
  ),
  chat: (
    <>
      <path d="M20.8 11.6a8.3 8.3 0 0 1-12 7.4l-5 1.8 1.9-5.1a8.3 8.3 0 1 1 15.1-4.1z" />
      <path d="M8.6 11.6h.01M12 11.6h.01M15.4 11.6h.01" />
    </>
  ),
  check: (
    <>
      <circle cx="12" cy="12" r="8.6" />
      <path d="m8.2 12.3 2.6 2.6 5-5.5" />
    </>
  ),
  basket: (
    <>
      <path d="M3.1 8.9h17.8l-1.6 9.5a2.1 2.1 0 0 1-2.1 1.8H6.8a2.1 2.1 0 0 1-2.1-1.8z" />
      <path d="M8.6 8.9 11.1 3.6M15.4 8.9 12.9 3.6" />
      <path d="M9.8 12.6v3.6M14.2 12.6v3.6" />
    </>
  ),
  pin: (
    <>
      <path d="M12 21.2s7.1-6.2 7.1-11.1a7.1 7.1 0 1 0-14.2 0c0 4.9 7.1 11.1 7.1 11.1z" />
      <circle cx="12" cy="10" r="2.6" />
    </>
  ),
  calendar: (
    <>
      <rect x="3.4" y="5.1" width="17.2" height="15.5" rx="2.2" />
      <path d="M3.4 10.1h17.2M8.1 2.9v4.3M15.9 2.9v4.3" />
    </>
  ),
  card: (
    <>
      <rect x="2.6" y="5.4" width="18.8" height="13.2" rx="2.4" />
      <path d="M2.6 10.1h18.8M6.4 14.7h4.2" />
    </>
  ),
  heart: (
    <path d="M12 20.5C5 16 2.6 12.4 2.6 9.3A4.7 4.7 0 0 1 12 7a4.7 4.7 0 0 1 9.4 2.3c0 3.1-2.4 6.7-9.4 11.2z" />
  ),
  fridge: (
    <>
      <path d="M12 2.6v18.8M2.6 12h18.8" />
      <path d="M5.3 5.3l13.4 13.4M18.7 5.3 5.3 18.7" />
    </>
  ),
  sparkle: (
    <path d="m12 2.8 2 6.1 6.2 2-6.2 2-2 6.2-2-6.2-6.2-2 6.2-2z" />
  ),
  shield: (
    <>
      <path d="m12 2.6 8 3v5.9c0 5-3.4 9-8 10.1-4.6-1.1-8-6.1-8-10.1V5.6z" />
      <path d="m8.9 11.9 2.2 2.2 4-4.3" />
    </>
  ),
  arrowRight: <path d="M4 12h14.5M12.8 6.3 19 12l-6.2 5.7" />,
  chevron: <path d="m6.5 9.3 5.5 5.4 5.5-5.4" />,
  plus: <path d="M12 5.2v13.6M5.2 12h13.6" />,
  close: <path d="M6 6l12 12M18 6 6 18" />,
  menu: <path d="M3.5 7h17M3.5 12h17M3.5 17h17" />,
};

export default function Icon({ name, size = 24, strokeWidth = 1.6, ...rest }) {
  const d = paths[name];
  if (!d) return null;

  return (
    <svg
      width={size}
      height={size}
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth={strokeWidth}
      strokeLinecap="round"
      strokeLinejoin="round"
      aria-hidden="true"
      focusable="false"
      {...rest}
    >
      {d}
    </svg>
  );
}
