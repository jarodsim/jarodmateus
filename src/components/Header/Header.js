import Link from 'next/link'
import React from 'react'
import {
  AiFillGithub,
  AiFillInstagram,
  AiFillLinkedin,
} from 'react-icons/ai'
import {
  Container,
  Div1,
  Div2,
  Div3,
  NavLink,
  SocialIcons,
} from './HeaderStyles'
import LanguageSwitcher from './LanguageSwitcher'
import { useTranslation } from '../../i18n/LanguageContext'

const Header = () => {
  const { t } = useTranslation()

  return (
    <Container>
      <Div1>
        <Link
          href='/'
          style={{ display: 'flex', alignItems: 'center', color: 'white' }}>

          <img src='/logo.png' height={40} width={40} alt='imagem de logo' style={{
            borderRadius: 50,
          }} />{' '}
          <span style={{ marginLeft: 10, marginTop: 7, fontSize: 20 }}>
            Jarod Cavalcante
          </span>

        </Link>
      </Div1>
      <Div2>
        <li>
          <Link href='#projects' legacyBehavior>
            <NavLink>{t.nav.projects}</NavLink>
          </Link>
        </li>
        <li>
          <Link href='#skills' legacyBehavior>
            <NavLink>{t.nav.skills}</NavLink>
          </Link>
        </li>
        <li>
          <Link href='#about' legacyBehavior>
            <NavLink>{t.nav.about}</NavLink>
          </Link>
        </li>
      </Div2>
      <Div3>
        <SocialIcons href='https://github.com/jarodsim'>
          <AiFillGithub size='3rem' />
        </SocialIcons>
        <SocialIcons href='https://www.linkedin.com/in/jarodcavalcante/'>
          <AiFillLinkedin size='3rem' />
        </SocialIcons>
        <LanguageSwitcher />
      </Div3>
    </Container>
  )
}

export default Header
