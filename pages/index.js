import Head from 'next/head'
import Image from 'next/image'
import  Header  from './components/Header'
import { HeroSection } from './components/HeroSection'
import { ContentSection } from './components/ContentSection'
import { InfoSection } from './components/InfoSection'
import { LowerSection } from './components/LowerSection'
import { Footer } from './components/Footer'

export default function Home() {
  return (
    <>
     <Header />
     <HeroSection /> 
     <ContentSection />
     <InfoSection />
     <LowerSection />
     <Footer />
    </>
  )
}




