import React from 'react';

import { SectionTitle } from '../../styles/GlobalComponents';
import { LeftSection, HeroIntro, HeroText, HeroActions, ResumeLink, Maintainer } from './HeroStyles';
import Link from 'next/link';
import { useTranslation } from '../../i18n/LanguageContext';

const Hero = () => {
  const { t, language } = useTranslation();
  return (
    <LeftSection>
      <HeroIntro>{t.hero.greeting}</HeroIntro>
      <SectionTitle as="h1" $main>{t.hero.name}</SectionTitle>
      <HeroText>{t.hero.subtitle}</HeroText>
      <HeroActions>
        <ResumeLink href={language === 'en' ? '/files/jarod_cavalcante_curriculum_eng.pdf' : '/files/jarod_cavalcante_curriculum_pt_br.pdf'}>
          {t.hero.resumeButton} <span aria-hidden="true">↗</span>
        </ResumeLink>
        <Maintainer>{t.hero.maintainer} <Link href="https://www.npmjs.com/package/dom-watchdog" target="_blank" rel="noopener noreferrer">dom-watchdog</Link></Maintainer>
      </HeroActions>
    </LeftSection>
  );
};

export default Hero;
