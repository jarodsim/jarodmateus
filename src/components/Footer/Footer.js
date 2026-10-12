import React from 'react'
import {
  AiFillGithub,
  AiFillLinkedin,
} from 'react-icons/ai'
import { Link } from '../../styles/GlobalComponents'
import { SocialIcons } from '../Header/HeaderStyles'
import {
  CompanyContainer,
  FooterWrapper,
  LinkColumn,
  LinkItem,
  LinkList,
  LinkTitle,
  Slogan,
  SocialContainer,
  SocialIconsContainer,
} from './FooterStyles'
import { useTranslation } from '../../i18n/LanguageContext'

const Footer = () => {
  const { t } = useTranslation()

  return (
    <FooterWrapper>
      <LinkList>
        <LinkColumn>
          <LinkTitle>{t.footer.email}</LinkTitle>
          <LinkItem href='mailto:jarodsim@gmail.com'>
            jarodsim@gmail.com
          </LinkItem>
        </LinkColumn>
      </LinkList>
      <SocialIconsContainer>
        <CompanyContainer>
          <Slogan>
            &copy; {new Date().getFullYear()}
            <Link href='https://jarod.dev'> Jarod Cavalcante</Link>
            {t.footer.copyright}
          </Slogan>
        </CompanyContainer>
        <SocialContainer>
          <SocialIcons href='https://github.com/jarodsim' aria-label="GitHub" target="_blank" rel="noopener noreferrer">
            <AiFillGithub size='2.2rem' />
          </SocialIcons>
          <SocialIcons href='https://www.linkedin.com/in/jarodcavalcante/' aria-label="LinkedIn" target="_blank" rel="noopener noreferrer">
            <AiFillLinkedin size='2.2rem' />
          </SocialIcons>
        </SocialContainer>
      </SocialIconsContainer>
    </FooterWrapper>
  )
}

export default Footer
