import { useLayoutEffect, useRef, useState } from 'react';
import './SegmentedControl.css';

interface Option<T extends string> {
  value: T;
  label: string;
}

interface SegmentedControlProps<T extends string> {
  options: Option<T>[];
  value: T;
  onChange: (value: T) => void;
  ariaLabel: string;
  size?: 'md' | 'sm';
}

export default function SegmentedControl<T extends string>({
  options,
  value,
  onChange,
  ariaLabel,
  size = 'md',
}: SegmentedControlProps<T>) {
  const containerRef = useRef<HTMLDivElement>(null);
  const btnRefs = useRef<Map<string, HTMLButtonElement>>(new Map());
  const [thumb, setThumb] = useState<{ left: number; width: number } | null>(null);

  useLayoutEffect(() => {
    const measure = () => {
      const container = containerRef.current;
      const btn = btnRefs.current.get(value);
      if (!container || !btn) return;
      const containerBox = container.getBoundingClientRect();
      const btnBox = btn.getBoundingClientRect();
      setThumb({ left: btnBox.left - containerBox.left, width: btnBox.width });
    };

    measure();

    const container = containerRef.current;
    if (!container || typeof ResizeObserver === 'undefined') return;
    const observer = new ResizeObserver(measure);
    observer.observe(container);
    return () => observer.disconnect();
  }, [value, options]);

  return (
    <div
      className={`segmented segmented--${size}`}
      role="tablist"
      aria-label={ariaLabel}
      ref={containerRef}
    >
      {thumb && (
        <span
          className="segmented__thumb"
          style={{ transform: `translateX(${thumb.left}px)`, width: `${thumb.width}px` }}
          aria-hidden="true"
        />
      )}
      {options.map((opt) => (
        <button
          key={opt.value}
          ref={(el) => {
            if (el) btnRefs.current.set(opt.value, el);
            else btnRefs.current.delete(opt.value);
          }}
          type="button"
          role="tab"
          aria-selected={value === opt.value}
          className={`segmented__tab${value === opt.value ? ' is-active' : ''}`}
          onClick={() => onChange(opt.value)}
        >
          {opt.label}
        </button>
      ))}
    </div>
  );
}
