'use client';

import { useState } from 'react';
import Image from 'next/image';
import Link from 'next/link';
import StripedWall from './StripedWall';
import Lightbox from './Lightbox';
import { site } from '@/content/site';
import styles from './Submission.module.css';

export default function Submission({ application }) {
  const { works } = application;
  const [open, setOpen] = useState(-1);
  const step = (dir) => setOpen((i) => (i + dir + works.length) % works.length);

  return (
    <div className={styles.page}>
      <StripedWall
        base="var(--wall)"
        stripe="var(--wall-stripe)"
        count={12}
        width={100}
        seed={21}
        wobble={1.4}
        className={styles.wallpaper}
      />

      <header className={styles.plaque}>
        <p className={styles.for}>
          Submission to {application.venue}, {application.call.toLowerCase()}
        </p>
        <h1 className={styles.name}>{site.name}</h1>
        <p className={styles.medium}>{site.medium}</p>
        {site.about.map((p, i) => (
          <p key={i} className={styles.bio}>
            {p}
          </p>
        ))}
        <div className={styles.links}>
          <a href={`mailto:${site.email}`}>{site.email}</a>
          {site.instagram.url && (
            <a href={site.instagram.url} target="_blank" rel="noreferrer">
              {site.instagram.handle}
            </a>
          )}
          <Link href="/" className={styles.gallery}>
            See the full gallery
          </Link>
        </div>
      </header>

      <main>
        <ul className={styles.works}>
          {works.map((w, i) => (
            <li key={w.slug}>
              <figure>
                <button
                  type="button"
                  className={styles.frame}
                  onClick={() => setOpen(i)}
                  aria-label={`View ${w.title} larger`}
                >
                  <Image
                    src={w.image}
                    alt={w.alt}
                    placeholder="blur"
                    preload
                    sizes="(max-width: 700px) 88vw, 460px"
                    className={styles.image}
                  />
                </button>
                <figcaption className={styles.label}>
                  <span className={styles.entry}>Entry {w.entry}</span>
                  <span className={styles.title}>{w.title}</span>
                  <span>{site.name}</span>
                  <span>{w.medium}</span>
                  <span>{w.size}, including frame</span>
                  <span>{w.year}</span>
                  <span className={styles.price}>{w.price}</span>
                </figcaption>
              </figure>
            </li>
          ))}
        </ul>
      </main>

      {open !== -1 && (
        <Lightbox
          painting={{ ...works[open], size: [works[open].size, works[open].year, works[open].price].join(', ') }}
          position={open + 1}
          total={works.length}
          onPrev={() => step(-1)}
          onNext={() => step(1)}
          onClose={() => setOpen(-1)}
        />
      )}
    </div>
  );
}
