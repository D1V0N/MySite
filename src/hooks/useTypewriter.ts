import { useEffect, useState } from 'react';
import { usePrefersReducedMotion } from './usePrefersReducedMotion';

export function useTypewriter(text: string, speed = 18): string {
  const reduced = usePrefersReducedMotion();
  const [output, setOutput] = useState(reduced ? text : '');

  useEffect(() => {
    if (reduced) {
      setOutput(text);
      return;
    }
    setOutput('');
    let i = 0;
    const id = window.setInterval(() => {
      i += 1;
      setOutput(text.slice(0, i));
      if (i >= text.length) window.clearInterval(id);
    }, speed);
    return () => window.clearInterval(id);
  }, [text, speed, reduced]);

  return output;
}
