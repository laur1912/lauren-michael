'use client';

import { useState } from 'react';
import Image from 'next/image';
import StripedWall from './StripedWall';
import Lightbox from './Lightbox';
import Tags from './Tags';
import { paintings, TAGS } from '@/content/paintings';
import { site } from '@/content/site';
import styles from './Gallery.module.css';

const FILTERS = [{ id: 'all', label: 'All works' }, ...Object.values(TAGS).map((t) => ({ id: t, label: t }))];

function details(p) {
  return [p.medium, p.size].filter(Boolean).join(', ');
}

export default function Gallery({ hidden, onReturn }) {
  const [filter, setFilter] = useState('all');
  const [openSlug, setOpenSlug] = useState(null);

  const shown = filter === 'all' ? paintings : paintings.filter((p) => p.tags.includes(filter));
  const openIndex = shown.findIndex((p) => p.slug === openSlug);

  const step = (dir) => {
    const next = (openIndex + dir + shown.length) % shown.length;
    setOpenSlug(shown[next].slug);
  };

  return (
    <div className={styles.page} inert={hidden}>
      <StripedWall
        base="var(--wall)"
        stripe="var(--wall-stripe)"
        count={12}
        width={100}
        seed={21}
        wobble={1.4}
        className={styles.wallpaper}
      />

      <header className={styles.header}>
        <h1 className={styles.name}>
          <button type="button" onClick={onReturn} aria-label={`${site.name}, back to the entrance`}>
            {site.name}
          </button>
        </h1>
        <div className={styles.filters} role="group" aria-label="Show series">
          {FILTERS.map((f) => (
            <button
              key={f.id}
              type="button"
              className={styles.filter}
              aria-pressed={filter === f.id}
              onClick={() => setFilter(f.id)}
            >
              {f.label}
            </button>
          ))}
        </div>
      </header>

      <main>
        <ul className={styles.wall}>
          {shown.map((p) => (
            <li key={p.slug} className={styles.item}>
              <figure>
                <button
                  type="button"
                  className={styles.frame}
                  onClick={() => setOpenSlug(p.slug)}
                  aria-label={`View ${p.title}`}
                >
                  <Image
                    src={p.image}
                    alt={p.alt}
                    placeholder="blur"
                    sizes="(max-width: 640px) 88vw, (max-width: 1100px) 44vw, 360px"
                    className={styles.image}
                  />
                </button>
                <figcaption className={styles.label}>
                  <span className={styles.title}>{p.title}</span>
                  <span className={styles.meta}>{details(p)}</span>
                  <Tags tags={p.tags} className={styles.tags} />
                </figcaption>
              </figure>
            </li>
          ))}
        </ul>
      </main>

      <footer className={styles.footer}>
        <a href={`mailto:${site.email}`}>{site.email}</a>
        {site.instagram.url && (
          <a href={site.instagram.url} target="_blank" rel="noreferrer">
            {site.instagram.handle}
          </a>
        )}
        <span>© {new Date().getFullYear()} {site.name}</span>
      </footer>

      {openIndex !== -1 && (
        <Lightbox
          painting={shown[openIndex]}
          position={openIndex + 1}
          total={shown.length}
          onPrev={() => step(-1)}
          onNext={() => step(1)}
          onClose={() => setOpenSlug(null)}
        />
      )}
    </div>
  );
}
