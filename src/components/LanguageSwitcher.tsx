import type { Lang } from '../data/types';
import SegmentedControl from './SegmentedControl';

const options: { value: Lang; label: string }[] = [
  { value: 'en', label: 'EN' },
  { value: 'ru', label: 'RU' },
];

interface LanguageSwitcherProps {
  lang: Lang;
  onChange: (lang: Lang) => void;
  ariaLabel: string;
}

export default function LanguageSwitcher({ lang, onChange, ariaLabel }: LanguageSwitcherProps) {
  return (
    <SegmentedControl
      options={options}
      value={lang}
      onChange={onChange}
      ariaLabel={ariaLabel}
      size="sm"
    />
  );
}
