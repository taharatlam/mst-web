"use client"
import React from "react"
import MainHeader from "../../components/MainHeader"
import MainFooter from "../../components/MainFooter"
import Footer from "../../components/landing-page/Footer"
export default function MainAppLayout({ children }) {
  return (
    <>
        <MainHeader />
        {children}
        <Footer />
    </>
    
  )
}
