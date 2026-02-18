import React from 'react'
import styled from 'styled-components'
import { useTranslation } from '../../i18n/LanguageContext'

const SwitcherButton = styled.button`
  background: rgba(255, 255, 255, 0.1);
  border: 1px solid rgba(255, 255, 255, 0.2);
  border-radius: 8px;
  color: white;
  cursor: pointer;
  font-size: 14px;
  padding: 6px 12px;
  display: flex;
  align-items: center;
  gap: 6px;
  transition: all 0.3s ease;
  white-space: nowrap;

  &:hover {
    background: rgba(255, 255, 255, 0.2);
    border-color: rgba(255, 255, 255, 0.4);
    transform: scale(1.05);
  }
`

const LanguageSwitcher = () => {
    const { language, setLanguage, mounted } = useTranslation()

    if (!mounted) return null

    const toggleLanguage = () => {
        setLanguage(language === 'en' ? 'pt-BR' : 'en')
    }

    return (
        <SwitcherButton onClick={toggleLanguage} aria-label="Switch language">
            {language === 'en' ? '🇧🇷 PT' : '🇺🇸 EN'}
        </SwitcherButton>
    )
}

export default LanguageSwitcher
