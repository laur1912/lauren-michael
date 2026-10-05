// The skeleton key from "Recharge", with the flat painted shadow the objects cast.
function KeyShape({ color }) {
  return (
    <g fill={color} stroke={color}>
      <circle cx="13" cy="20" r="8.5" strokeWidth="5" fill="none" />
      <rect x="20.5" y="15" width="4" height="10" rx="1" stroke="none" />
      <rect x="24" y="17.6" width="42" height="4.8" rx="1.5" stroke="none" />
      <rect x="51" y="22" width="4.5" height="7" stroke="none" />
      <rect x="58.5" y="22" width="4.5" height="10.5" stroke="none" />
    </g>
  );
}

export default function KeyIcon({ className }) {
  return (
    <svg className={className} viewBox="0 0 72 40" aria-hidden="true" focusable="false">
      <g transform="translate(3 3)" opacity="0.5">
        <KeyShape color="var(--ink)" />
      </g>
      <KeyShape color="var(--tangerine)" />
    </svg>
  );
}
