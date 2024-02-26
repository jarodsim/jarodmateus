import React from 'react'

import Footer from '../components/Footer/Footer'
import Header from '../components/Header/Header'
import { Container } from './LayoutStyles'
import { Analytics } from "@vercel/analytics/react"

export const Layout = ({ children }) => {
  return (
    <Container>
      <Analytics />
      <Header />
      <main>{children}</main>
      <Footer />
    </Container>
  )
}
