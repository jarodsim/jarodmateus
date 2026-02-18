import React from 'react';

import { BlogCard, CardInfo, ExternalLinks, GridContainer, HeaderThree, Hr, Tag, TagList, TitleContent, UtilityList, Img } from './ProjectsStyles';
import { Section, SectionDivider, SectionTitle } from '../../styles/GlobalComponents';
import { projects } from '../../constants/constants';
import { useTranslation } from '../../i18n/LanguageContext';

const Projects = () => {
  const { t } = useTranslation();

  return (
    <Section id="projects">
      <SectionDivider />
      <SectionTitle main>{t.projects.title}</SectionTitle>
      <GridContainer>
        {projects.map((p, i) => {
          const itemTranslation = t.projects.items[p.id] || {};
          return (
            <BlogCard key={i}>
              <Img src={p.image} alt={`imagem do projeto ${p.title}`} />

              <HeaderThree title={p.title}>{p.title}</HeaderThree>
              <Hr />

              <CardInfo className="card-info">{itemTranslation.description || p.description}</CardInfo>
              <div>
                <TitleContent>{t.projects.techStack}</TitleContent>
                <Hr />
                <TagList>
                  {p.tags.map((tag, i) => {
                    return <Tag key={i}>{tag}</Tag>;
                  })}
                </TagList>
              </div>
              <UtilityList>
                <ExternalLinks href={p.visit}>{t.projects.livePreview}</ExternalLinks>
                {p.source && <ExternalLinks href={p.source}>{t.projects.sourceCode}</ExternalLinks>}
              </UtilityList>
            </BlogCard>
          );
        })}
      </GridContainer>
    </Section>
  );
};

export default Projects;