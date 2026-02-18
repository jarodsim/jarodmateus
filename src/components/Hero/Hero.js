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
          I am Jarod Cavalcante. <br />
          Full Stack Developer. Building scalable web apps with Next.js and AWS Serverless.
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
