import React, { createContext, useContext, useState, useEffect } from 'react'
import en from './en'
import ptBR from './pt-br'

const translations = { en, 'pt-BR': ptBR }

const LanguageContext = createContext()

export function detectLanguage() {
    // Check localStorage first
    if (typeof window !== 'undefined') {
        const saved = localStorage.getItem('preferred-language')
        if (saved && translations[saved]) return saved
    }

    // Auto-detect from browser
    if (typeof navigator !== 'undefined') {
        const browserLang = navigator.language || navigator.userLanguage || ''
        if (browserLang.toLowerCase().startsWith('pt')) return 'pt-BR'
    }

    // Fallback to English
    return 'en'
}

export function LanguageProvider({ children }) {
    const [language, setLanguageState] = useState('en')
    const [mounted, setMounted] = useState(false)

    useEffect(() => {
        setLanguageState(detectLanguage())
        setMounted(true)
    }, [])

    const setLanguage = (lang) => {
        setLanguageState(lang)
        if (typeof window !== 'undefined') {
            localStorage.setItem('preferred-language', lang)
        }
    }

    const t = translations[language] || translations.en

    return (
        <LanguageContext.Provider value={{ t, language, setLanguage, mounted }}>
            {children}
        </LanguageContext.Provider>
    )
}

export function useTranslation() {
    const context = useContext(LanguageContext)
    if (!context) {
        throw new Error('useTranslation must be used within a LanguageProvider')
    }
    return context
}
