import { useEffect, useRef } from 'react';
import { usePrefersReducedMotion } from '../hooks/usePrefersReducedMotion';
import './CursorSpotlight.css';

export default function CursorSpotlight() {
  const ref = useRef<HTMLDivElement>(null);
  const reduced = usePrefersReducedMotion();

  useEffect(() => {
    if (reduced) return;
    if (!window.matchMedia('(pointer: fine)').matches) return;
    const node = ref.current;
    if (!node) return;

    let raf = 0;
    const handleMove = (e: MouseEvent) => {
      cancelAnimationFrame(raf);
      raf = requestAnimationFrame(() => {
        node.style.setProperty('--spot-x', `${e.clientX}px`);
        node.style.setProperty('--spot-y', `${e.clientY}px`);
        node.style.setProperty('--spot-opacity', '1');
      });
    };
    const handleLeave = () => node.style.setProperty('--spot-opacity', '0');

    window.addEventListener('mousemove', handleMove);
    document.documentElement.addEventListener('mouseleave', handleLeave);
    return () => {
      cancelAnimationFrame(raf);
      window.removeEventListener('mousemove', handleMove);
      document.documentElement.removeEventListener('mouseleave', handleLeave);
    };
  }, [reduced]);

  if (reduced) return null;

  return <div className="cursor-spotlight" ref={ref} aria-hidden="true" />;
}
