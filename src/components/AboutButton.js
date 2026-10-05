import EyeIcon from './EyeIcon';
import styles from './AboutButton.module.css';

export default function AboutButton({ onOpen }) {
  return (
    <button type="button" className={`${styles.button} eye-trigger`} onClick={onOpen}>
      <EyeIcon />
      <span>About</span>
    </button>
  );
}
