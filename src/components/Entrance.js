'use client';

import { useCallback, useEffect, useRef, useState } from 'react';
import StripedWall from './StripedWall';
import KeyIcon from './KeyIcon';
import { site } from '@/content/site';
import { lockScroll, unlockScroll } from '@/lib/scrollLock';
import styles from './Entrance.module.css';

const OPEN_AT = 0.28; // how far a scroll/swipe must push the doors before they swing open
const OPEN_MS = 1100; // keep in sync with .opening in Entrance.module.css
const PEEK = 0.035; // how far the doors part while hovering the key

export default function Entrance({ paused, onEntered }) {
  const [progress, setProgress] = useState(0);
  const [peek, setPeek] = useState(false);
  const [opening, setOpening] = useState(false);
  const progressRef = useRef(0);
  const openingRef = useRef(false);
  const settleTimer = useRef(null);

  const open = useCallback(() => {
    if (openingRef.current) return;
    openingRef.current = true;
    setOpening(true);
    const reduced = window.matchMedia('(prefers-reduced-motion: reduce)').matches;
    window.setTimeout(onEntered, reduced ? 50 : OPEN_MS);
  }, [onEntered]);

  // Scrolling or swiping pushes the doors apart. Let go early and they drift shut.
  const push = useCallback(
    (amount) => {
      if (openingRef.current) return;
      const next = Math.min(1, Math.max(0, progressRef.current + amount));
      progressRef.current = next;
      setProgress(next);
      if (next >= OPEN_AT) {
        open();
        return;
      }
      window.clearTimeout(settleTimer.current);
      settleTimer.current = window.setTimeout(() => {
        progressRef.current = 0;
        setProgress(0);
      }, 450);
    },
    [open]
  );

  useEffect(() => {
    lockScroll();
    return () => {
      unlockScroll();
      window.clearTimeout(settleTimer.current);
    };
  }, []);

  useEffect(() => {
    if (paused) return;
    let lastY = null;
    const onWheel = (e) => push(e.deltaY / 900);
    const onTouchStart = (e) => {
      lastY = e.touches[0].clientY;
    };
    const onTouchMove = (e) => {
      if (lastY === null) return;
      const y = e.touches[0].clientY;
      push((lastY - y) / 450);
      lastY = y;
    };
    const onKey = (e) => {
      if (e.key === 'ArrowDown' || e.key === 'PageDown') {
        e.preventDefault();
        open();
      }
    };
    window.addEventListener('wheel', onWheel, { passive: true });
    window.addEventListener('touchstart', onTouchStart, { passive: true });
    window.addEventListener('touchmove', onTouchMove, { passive: true });
    window.addEventListener('keydown', onKey);
    return () => {
      window.removeEventListener('wheel', onWheel);
      window.removeEventListener('touchstart', onTouchStart);
      window.removeEventListener('touchmove', onTouchMove);
      window.removeEventListener('keydown', onKey);
    };
  }, [paused, push, open]);

  const amount = opening ? 1 : Math.max(progress, peek ? PEEK : 0);
  const glow = amount > 0 && amount < 0.6 ? Math.min(1, amount * 25) * (1 - amount / 0.6) : 0;

  return (
    <section
      className={`${styles.entrance} ${opening ? styles.opening : ''}`}
      style={{ '--p': amount, '--fade': opening ? 1 : progress, '--glow': glow }}
      aria-label="Entrance"
    >
      <div className={styles.light} aria-hidden="true" />

      <div className={`${styles.door} ${styles.left}`}>
        <StripedWall base="var(--periwinkle)" stripe="var(--ink)" count={20} wobble={1.6} viewX={0} viewWidth={100} className={styles.wall} />
        <span className={styles.panel} aria-hidden="true" />
      </div>
      <div className={`${styles.door} ${styles.right}`}>
        <StripedWall base="var(--periwinkle)" stripe="var(--ink)" count={20} wobble={1.6} viewX={100} viewWidth={100} className={styles.wall} />
        <span className={styles.panel} aria-hidden="true" />
      </div>

      <div className={styles.content}>
        <div className={styles.plaque}>
          <h1 className={styles.name}>{site.name}</h1>
          <p className={styles.medium}>{site.medium}</p>
          <p className={styles.statement}>{site.statement}</p>
        </div>

        <button
          type="button"
          className={styles.enter}
          onClick={open}
          onMouseEnter={() => setPeek(true)}
          onMouseLeave={() => setPeek(false)}
          onFocus={() => setPeek(true)}
          onBlur={() => setPeek(false)}
        >
          <KeyIcon className={styles.key} />
          <span>Enter the gallery</span>
        </button>
        <p className={styles.hint}>or scroll to open the doors</p>
      </div>
    </section>
  );
}
