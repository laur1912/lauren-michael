'use client';

import Modal from './Modal';
import { site } from '@/content/site';
import styles from './AboutDialog.module.css';

export default function AboutDialog({ onClose }) {
  const { instagram } = site;
  return (
    <Modal
      onClose={onClose}
      labelledBy="about-title"
      backdropClassName={styles.backdrop}
      panelClassName={styles.plaque}
    >
      <button type="button" className={styles.close} onClick={onClose}>
        Close
      </button>
      <h2 id="about-title" className={styles.name}>
        {site.name}
      </h2>
      <p className={styles.medium}>{site.medium}</p>
      <div className={styles.body}>
        {site.about.map((paragraph, i) => (
          <p key={i}>{paragraph}</p>
        ))}
      </div>
      <dl className={styles.contact}>
        <div>
          <dt>Email</dt>
          <dd>
            <a href={`mailto:${site.email}`}>{site.email}</a>
          </dd>
        </div>
        {instagram.url && (
          <div>
            <dt>Instagram</dt>
            <dd>
              <a href={instagram.url} target="_blank" rel="noreferrer">
                {instagram.handle}
              </a>
            </dd>
          </div>
        )}
      </dl>
    </Modal>
  );
}
