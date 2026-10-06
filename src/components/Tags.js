import { TAGS } from '@/content/paintings';
import styles from './Tags.module.css';

const COLOR = { [TAGS.thrifted]: styles.thrifted, [TAGS.reading]: styles.reading, [TAGS.small]: styles.small };

export default function Tags({ tags, className = '' }) {
  return (
    <ul className={`${styles.tags} ${className}`}>
      {tags.map((t) => (
        <li key={t} className={`${styles.tag} ${COLOR[t] || ''}`}>
          {t}
        </li>
      ))}
    </ul>
  );
}
