"use client"

import Navbar from "../../components/landing-page/Navbar"
import Footer from "../../components/landing-page/Footer"

export default function LandingPageLayout({ children }) {
  return (
    <>
        <Navbar />
        {children}
        <Footer />
    </>
    
  )
}
