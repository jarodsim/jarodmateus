import React from 'react';

import {
  Section,
  SectionText,
  SectionTitle,
} from '../../styles/GlobalComponents';
import Button from '../../styles/GlobalComponents/Button';
import { LeftSection } from './HeroStyles';
import Link from 'next/link';
import { detectLanguage, useTranslation } from '../../i18n/LanguageContext';

const Hero = (props) => {
  const { t } = useTranslation();
  const lang = detectLanguage();
  return (
    <>
      <Section row nopadding>
        <LeftSection>
          <SectionTitle main center>
            {t.hero.greeting} <br></br>
            {t.hero.name} <br />
            {t.hero.subtitle}
          </SectionTitle>
          <Button
            onClick={(e) => {
              e.preventDefault();
              window.location.href =
                lang === 'en'
                  ? '/files/jarod_cavalcante_curriculum_eng.pdf'
                  : '/files/jarod_cavalcante_curriculum_pt_br.pdf';
            }}
          >
            {t.hero.resumeButton}
          </Button>
          {t.hero.maintainer}{' '}
          <Link
            href={'https://www.npmjs.com/package/dom-watchdog'}
            target='_blank'
          >
            dom-watchdog
          </Link>
        </LeftSection>
      </Section>
    </>
  );
};

export default Hero;
