// The closed, lashed eye from the corner of "Recharge". It opens on hover.
import styles from './EyeIcon.module.css';

export default function EyeIcon() {
  return (
    <svg className={styles.eye} viewBox="0 0 40 26" aria-hidden="true" focusable="false">
      <g className={styles.closed} fill="none" stroke="currentColor" strokeWidth="2.6" strokeLinecap="round">
        <path d="M5 9 Q20 21 35 9" />
        <path d="M9.5 12.6 L7 17.5" />
        <path d="M14.5 15 L13.2 20.4" />
        <path d="M20 15.9 L20 21.6" />
        <path d="M25.5 15 L26.8 20.4" />
        <path d="M30.5 12.6 L33 17.5" />
      </g>
      <g className={styles.open}>
        <path d="M4 13 Q20 1 36 13 Q20 25 4 13 Z" fill="none" stroke="currentColor" strokeWidth="2.6" strokeLinejoin="round" />
        <circle cx="20" cy="13" r="5" fill="currentColor" />
        <circle cx="21.8" cy="11.3" r="1.4" fill="var(--plaque)" />
      </g>
    </svg>
  );
}
