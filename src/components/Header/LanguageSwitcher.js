import React from 'react'
import styled from 'styled-components'
import { useTranslation } from '../../i18n/LanguageContext'

const SwitcherButton = styled.button`
  background: transparent;
  border: 1px solid ${({ theme }) => theme.colors.border};
  border-radius: 5px;
  color: ${({ theme }) => theme.colors.primary1};
  cursor: pointer;
  font-size: 13px;
  min-height: 44px;
  padding: 6px 12px;
  display: flex;
  align-items: center;
  gap: 6px;
  transition: border-color .18s ease, color .18s ease;
  white-space: nowrap;

  &:hover {
    border-color: ${({ theme }) => theme.colors.accent1};
    color: ${({ theme }) => theme.colors.accent1};
  }
`

const LanguageSwitcher = () => {
    const { language, setLanguage, mounted } = useTranslation()

    if (!mounted) return null

    const toggleLanguage = () => {
        setLanguage(language === 'en' ? 'pt-BR' : 'en')
    }

    return (
        <SwitcherButton onClick={toggleLanguage} aria-label={language === 'en' ? 'Mudar idioma para português' : 'Switch language to English'}>
            {language === 'en' ? 'PT' : 'EN'}
        </SwitcherButton>
    )
}

export default LanguageSwitcher
