import React, { useState, useEffect } from 'react';

import {
  BlogCard,
  CardStripe,
  CardHeader,
  CardTitle,
  CardNumber,
  CardBody,
  CardInfo,
  CardFooter,
  ExternalLinks,
  PreviewButton,
  GridContainer,
  Hr,
  Tag,
  TagList,
  ModalOverlay,
  ModalContent,
  ModalImage,
  ModalTitle,
  ModalClose,
} from './ProjectsStyles';
import { Section, SectionDivider, SectionTitle } from '../../styles/GlobalComponents';
import { projects } from '../../constants/constants';
import { useTranslation } from '../../i18n/LanguageContext';

const Projects = () => {
  const { t } = useTranslation();
  const [preview, setPreview] = useState(null);

  // Close modal on Escape key
  useEffect(() => {
    const handleKey = (e) => {
      if (e.key === 'Escape') setPreview(null);
    };
    window.addEventListener('keydown', handleKey);
    return () => window.removeEventListener('keydown', handleKey);
  }, []);

  // Prevent body scroll when modal is open
  useEffect(() => {
    document.body.style.overflow = preview ? 'hidden' : '';
    return () => { document.body.style.overflow = ''; };
  }, [preview]);

  return (
    <Section id="projects">
      <SectionDivider />
      <SectionTitle main>{t.projects.title}</SectionTitle>

      <GridContainer>
        {projects.map((p, i) => {
          const itemTranslation = t.projects.items[p.id] || {};
          return (
            <BlogCard key={p.id}>
              <CardStripe />
              <CardHeader>
                <CardTitle>{p.title}</CardTitle>
                <CardNumber>0{i + 1}</CardNumber>
              </CardHeader>

              <CardBody>
                <CardInfo>{itemTranslation.description || p.description}</CardInfo>
                <TagList>
                  {p.tags.map((tag, j) => (
                    <Tag key={j}>{tag}</Tag>
                  ))}
                </TagList>
              </CardBody>

              <Hr />

              <CardFooter>
                <ExternalLinks href={p.visit} target="_blank" rel="noopener noreferrer">
                  {t.projects.livePreview}
                </ExternalLinks>

                {p.playStore && (
                  <ExternalLinks href={p.playStore} target="_blank" rel="noopener noreferrer">
                    Play Store
                  </ExternalLinks>
                )}

                {p.source && (
                  <ExternalLinks href={p.source} target="_blank" rel="noopener noreferrer">
                    {t.projects.sourceCode}
                  </ExternalLinks>
                )}

                <PreviewButton
                  onClick={() => setPreview(p)}
                  aria-label={`Ver preview do projeto ${p.title}`}
                >
                  🖼 Preview
                </PreviewButton>
              </CardFooter>
            </BlogCard>
          );
        })}
      </GridContainer>

      {/* Lightbox Modal */}
      {preview && (
        <ModalOverlay onClick={() => setPreview(null)} role="dialog" aria-modal="true" aria-label={`Preview: ${preview.title}`}>
          <ModalContent onClick={(e) => e.stopPropagation()}>
            <ModalClose onClick={() => setPreview(null)} aria-label="Fechar preview">✕</ModalClose>
            <ModalImage
              src={preview.image}
              alt={`Preview do projeto ${preview.title}`}
            />
            <ModalTitle>{preview.title}</ModalTitle>
          </ModalContent>
        </ModalOverlay>
      )}
    </Section>
  );
};

export default Projects;