import React, { useState, useEffect, useRef } from 'react';

import {
  BlogCard,
  CardMedia,
  CardHeader,
  CardTitle,
  CardNumber,
  CardBody,
  CardInfo,
  CardFooter,
  ExternalLinks,
  GridContainer,
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
  const closeRef = useRef(null);

  useEffect(() => {
    if (!preview) return;
    const previousFocus = document.activeElement;
    closeRef.current?.focus();
    const handleKey = (e) => {
      if (e.key === 'Escape') setPreview(null);
      if (e.key === 'Tab') {
        e.preventDefault();
        closeRef.current?.focus();
      }
    };
    window.addEventListener('keydown', handleKey);
    return () => {
      window.removeEventListener('keydown', handleKey);
      previousFocus?.focus();
    };
  }, [preview]);

  useEffect(() => {
    document.body.style.overflow = preview ? 'hidden' : '';
    return () => { document.body.style.overflow = ''; };
  }, [preview]);

  return (
    <Section id="projects">
      <SectionDivider />
      <SectionTitle>{t.projects.title}</SectionTitle>

      <GridContainer>
        {projects.map((p, i) => {
          const itemTranslation = t.projects.items[p.id] || {};
          return (
            <BlogCard key={p.id}>
              <CardMedia type="button" onClick={() => setPreview(p)} aria-label={`${t.projects.preview}: ${p.title}`}>
                <img src={p.image} alt="" loading={i === 0 ? 'eager' : 'lazy'} />
              </CardMedia>
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

              <CardFooter>
                {p.visit !== '#' && <ExternalLinks href={p.visit} target="_blank" rel="noopener noreferrer">
                  {t.projects.livePreview} <span aria-hidden="true">↗</span>
                </ExternalLinks>}

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

              </CardFooter>
            </BlogCard>
          );
        })}
      </GridContainer>

      {preview && (
        <ModalOverlay onClick={() => setPreview(null)} role="dialog" aria-modal="true" aria-label={`${t.projects.preview}: ${preview.title}`}>
          <ModalContent onClick={(e) => e.stopPropagation()}>
            <ModalClose ref={closeRef} onClick={() => setPreview(null)} aria-label={t.projects.closePreview}>✕</ModalClose>
            <ModalImage
              src={preview.image}
              alt={`${t.projects.imageAlt}: ${preview.title}`}
            />
            <ModalTitle>{preview.title}</ModalTitle>
          </ModalContent>
        </ModalOverlay>
      )}
    </Section>
  );
};

export default Projects;
