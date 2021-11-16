import React from 'react'

import {
  Section,
  SectionText,
  SectionTitle,
  Link,
} from '../../styles/GlobalComponents'
import Button from '../../styles/GlobalComponents/Button'
import { LeftSection } from './HeroStyles'

const Hero = (props) => (
  <>
    <Section row nopadding>
      <LeftSection>
        <SectionTitle main center>
          Hi,
        </SectionTitle>
        <SectionText>
          Hello how are you? I am Jarod Mateus. I'm a software developer and
          also a flutter newbie.
        </SectionText>
        <Button
          onClick={(e) => {
            e.preventDefault()
            window.location.href = '/files/resume.pdf'
          }}
        >
          My Resume
        </Button>
      </LeftSection>
    </Section>
  </>
)

export default Hero
