import React from 'react'

import {
  Section,
  SectionDivider,
  SectionTitle,
} from '../../styles/GlobalComponents'
import { Box, Boxes, BoxNum, BoxText } from './AcomplishmentsStyles'
import { useTranslation } from '../../i18n/LanguageContext'

const data = [
  { number: 2 },
  { number: 10 },
  { number: 14 },
  { number: 124 },
]

const Acomplishments = () => {
  const { t } = useTranslation()

  return (
    <Section>
      <SectionTitle>{t.achievements.title}</SectionTitle>
      <Boxes>
        {data.map((card, index) => (
          <Box key={index}>
            <BoxNum>{`${card.number.toLocaleString('en-IN')}+`}</BoxNum>
            <BoxText>{t.achievements.items[index] || ''}</BoxText>
          </Box>
        ))}
      </Boxes>
      <SectionDivider />
    </Section>
  )
}

export default Acomplishments
