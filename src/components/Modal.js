'use client';

import { useEffect, useEffectEvent, useRef } from 'react';
import { lockScroll, unlockScroll } from '@/lib/scrollLock';

const FOCUSABLE = 'button:not([disabled]), [href], [tabindex]:not([tabindex="-1"])';

// Shared shell for the About window and the painting viewer:
// locks scrolling, keeps keyboard focus inside, closes on Escape or backdrop click.
export default function Modal({ onClose, labelledBy, backdropClassName, panelClassName, children }) {
  const panelRef = useRef(null);
  const close = useEffectEvent(() => onClose());

  useEffect(() => {
    const previous = document.activeElement;
    const panel = panelRef.current;
    lockScroll();
    panel.querySelector(FOCUSABLE)?.focus();

    const onKey = (e) => {
      if (e.key === 'Escape') {
        e.preventDefault();
        close();
        return;
      }
      if (e.key !== 'Tab') return;
      const items = [...panel.querySelectorAll(FOCUSABLE)];
      if (items.length === 0) return;
      const first = items[0];
      const last = items[items.length - 1];
      if (e.shiftKey && document.activeElement === first) {
        e.preventDefault();
        last.focus();
      } else if (!e.shiftKey && document.activeElement === last) {
        e.preventDefault();
        first.focus();
      }
    };

    document.addEventListener('keydown', onKey);
    return () => {
      document.removeEventListener('keydown', onKey);
      unlockScroll();
      previous?.focus?.();
    };
  }, []);

  return (
    <div
      className={backdropClassName}
      onClick={(e) => {
        if (e.target === e.currentTarget) onClose();
      }}
    >
      <div ref={panelRef} className={panelClassName} role="dialog" aria-modal="true" aria-labelledby={labelledBy}>
        {children}
      </div>
    </div>
  );
}
