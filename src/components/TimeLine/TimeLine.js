import React from 'react';
import { Section, SectionDivider, SectionText, SectionTitle } from '../../styles/GlobalComponents';
import { TimeLineData } from '../../constants/constants';
import { useTranslation } from '../../i18n/LanguageContext';
import { TimelineList, TimelineItem, TimelineYear, TimelineDescription } from './TimeLineStyles';

const Timeline = () => {
  const { t } = useTranslation();

  return (
    <Section id="about">
      <SectionDivider />
      <SectionTitle>{t.timeline.title}</SectionTitle>
      <SectionText>{t.timeline.subtitle}</SectionText>
      <TimelineList>
        {TimeLineData.map((item, index) => (
          <TimelineItem key={`${item.year}-${index}`}>
            <TimelineYear>{item.year === '2021 - Current' ? `2021 – ${t.timeline.current}` : item.year}</TimelineYear>
            <TimelineDescription>{t.timeline.items[index] || item.text}</TimelineDescription>
          </TimelineItem>
        ))}
      </TimelineList>
    </Section>
  );
};

export default Timeline;
