'use client';

import { useEffect, useEffectEvent, useState } from 'react';
import Image from 'next/image';
import Modal from './Modal';
import Tags from './Tags';
import styles from './Lightbox.module.css';

const ZOOM = 2.6;

function Viewer({ painting }) {
  const views = [painting.image, ...painting.details];
  const [viewIndex, setViewIndex] = useState(0);
  const [zoomed, setZoomed] = useState(false);
  const [origin, setOrigin] = useState({ x: 50, y: 50 });

  // The point under the pointer becomes the zoom's anchor, so zooming works like a magnifying glass.
  // offsetLeft/offsetWidth ignore the CSS scale, which keeps the maths in unzoomed coordinates.
  const track = (e) => {
    const stage = e.currentTarget;
    const img = stage.querySelector('img');
    if (!img) return;
    const rect = stage.getBoundingClientRect();
    const x = ((e.clientX - rect.left - img.offsetLeft) / img.offsetWidth) * 100;
    const y = ((e.clientY - rect.top - img.offsetTop) / img.offsetHeight) * 100;
    setOrigin({ x: Math.min(100, Math.max(0, x)), y: Math.min(100, Math.max(0, y)) });
  };

  const choose = (i) => {
    setViewIndex(i);
    setZoomed(false);
  };

  return (
    <>
      <button
        type="button"
        className={styles.stage}
        data-zoomed={zoomed}
        aria-label={zoomed ? 'Zoom out' : 'Zoom in to see the brushwork'}
        onClick={(e) => {
          if (!zoomed) track(e);
          setZoomed((z) => !z);
        }}
        onPointerMove={(e) => {
          if (zoomed) track(e);
        }}
      >
        <Image
          key={viewIndex}
          src={views[viewIndex]}
          alt={viewIndex === 0 ? painting.alt : `Detail of ${painting.title}`}
          placeholder="blur"
          quality={90}
          sizes="(max-width: 900px) 200vw, 140vw"
          className={styles.photo}
          style={{
            '--ratio': views[viewIndex].width / views[viewIndex].height,
            transformOrigin: `${origin.x}% ${origin.y}%`,
            transform: zoomed ? `scale(${ZOOM})` : 'none',
          }}
        />
      </button>

      {views.length > 1 && (
        <div className={styles.thumbs} role="group" aria-label="Views">
          {views.map((v, i) => (
            <button
              key={i}
              type="button"
              className={styles.thumb}
              aria-pressed={i === viewIndex}
              aria-label={i === 0 ? 'Whole painting' : `Detail ${i}`}
              onClick={() => choose(i)}
            >
              <Image src={v} alt="" sizes="80px" />
            </button>
          ))}
        </div>
      )}
    </>
  );
}

export default function Lightbox({ painting, position, total, onPrev, onNext, onClose }) {
  const onArrow = useEffectEvent((e) => {
    if (e.key === 'ArrowLeft') onPrev();
    if (e.key === 'ArrowRight') onNext();
  });

  useEffect(() => {
    const handler = (e) => onArrow(e);
    document.addEventListener('keydown', handler);
    return () => document.removeEventListener('keydown', handler);
  }, []);

  return (
    <Modal onClose={onClose} labelledBy="painting-title" backdropClassName={styles.backdrop} panelClassName={styles.panel}>
      <div className={styles.viewer}>
        <Viewer key={painting.slug} painting={painting} />
      </div>

      <aside className={styles.info}>
        <button type="button" className={styles.close} onClick={onClose}>
          Close
        </button>
        <h2 id="painting-title" className={styles.title}>
          {painting.title}
        </h2>
        <p className={styles.meta}>{[painting.medium, painting.size].filter(Boolean).join(', ')}</p>
        <Tags tags={painting.tags} className={styles.tags} />
        <p className={styles.hint}>Click the painting to zoom in. Move across it to look around.</p>

        <nav className={styles.nav} aria-label="Paintings">
          <button type="button" onClick={onPrev}>
            Previous
          </button>
          <span aria-live="polite">
            {position} of {total}
          </span>
          <button type="button" onClick={onNext}>
            Next
          </button>
        </nav>
      </aside>
    </Modal>
  );
}
