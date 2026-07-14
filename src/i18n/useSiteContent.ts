import { content } from '../data/content';
import { profile } from '../data/profile';
import { useLanguage } from './LanguageContext';

export function useSiteContent() {
  const { lang, setLang } = useLanguage();
  return { lang, setLang, t: content[lang], profile };
}
