import React from "react";
import { Section, SectionDivider, SectionText, SectionTitle, } from "../../styles/GlobalComponents";
import { List, ListContainer, ListItem, ListParagraph, ListTitle, } from "./TechnologiesStyles";
import { Skills } from './Skills'
import { useTranslation } from '../../i18n/LanguageContext'

const Technologies = () => {
  const { t } = useTranslation();

  return (
    <Section id="skills">
      <SectionDivider divider />
      <SectionTitle>{t.skills.title}</SectionTitle>
      <SectionText>
        {t.skills.subtitle}
      </SectionText>
      <List>
        {Skills.map((Skill) => (
          <ListItem key={Skill.slug}>
            <picture>
              <Skill.Component size="3rem" />
            </picture>
            <ListContainer>
              <ListTitle>{t.skills.titles[Skill.slug] || Skill.slug}</ListTitle>
              <ListParagraph>
                {t.skills.items[Skill.slug] || ''}
              </ListParagraph>
            </ListContainer>
          </ListItem>
        ))}
      </List>
      <SectionDivider colorAlt />
    </Section>
  );
};

export default Technologies;
