import { LangConfigType } from 'react-intl-lil';

import es from './messages/es';
import en from './messages/en';

export const langConfig: LangConfigType = {
  defaultLang: 'en',
  mode: 'local',
  languages: [{ en: en }, { es: es }],
};
