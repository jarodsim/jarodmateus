import Link from 'next/link'
import React from 'react'
import {
  AiFillGithub,
  AiFillLinkedin,
} from 'react-icons/ai'
import {
  Container,
  Div1,
  Div2,
  Div3,
  SocialIcons,
} from './HeaderStyles'
import LanguageSwitcher from './LanguageSwitcher'
import { useTranslation } from '../../i18n/LanguageContext'

const Header = () => {
  const { t } = useTranslation()

  return (
    <Container as="header">
      <Div1>
        <Link
          href='/'
          className="brand">
          <img src='/logo.png' height={36} width={36} alt='' />
          <span>
            Jarod Cavalcante
          </span>

        </Link>
      </Div1>
      <Div2 as="nav" aria-label="Principal">
        <Link href='#projects'>{t.nav.projects}</Link>
        <Link href='#skills'>{t.nav.skills}</Link>
        <Link href='#about'>{t.nav.about}</Link>
      </Div2>
      <Div3>
        <SocialIcons href='https://github.com/jarodsim' aria-label="GitHub" target="_blank" rel="noopener noreferrer">
          <AiFillGithub size='2.2rem' />
        </SocialIcons>
        <SocialIcons href='https://www.linkedin.com/in/jarodcavalcante/' aria-label="LinkedIn" target="_blank" rel="noopener noreferrer">
          <AiFillLinkedin size='2.2rem' />
        </SocialIcons>
        <LanguageSwitcher />
      </Div3>
    </Container>
  )
}

export default Header
