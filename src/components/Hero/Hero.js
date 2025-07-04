import React from 'react'

import {
  Section,
  SectionText,
  SectionTitle,
} from '../../styles/GlobalComponents'
import Button from '../../styles/GlobalComponents/Button'
import { LeftSection } from './HeroStyles'
import Link from 'next/link'

const Hero = (props) => (
  <>
    <Section row nopadding>
      <LeftSection>
        <SectionTitle main center>
          Hi, <br></br>
          I am Jarod Mateus. I'm a software developer.
        </SectionTitle>
        <Button
          onClick={(e) => {
            e.preventDefault()
            window.location.href = '/files/resume.pdf'
          }}
        >
          My Resume
        </Button>
        Maintainer of <Link href={'https://www.npmjs.com/package/dom-watchdog'} target='_blank' >dom-watchdog</Link>
      </LeftSection>
    </Section>
  </>
)

export default Hero
