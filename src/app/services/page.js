import CareerGuidance from '@/components/services/CareerGuidance'
import ServicesFAQ from '@/components/services/Faq'
import LoveConsultation from '@/components/services/LoveConsultation'
import Pricing from '@/components/services/Pricing'
import Services from '@/components/services/ServicesCard'
import Hero from '@/components/services/ServicesHero'
import React from 'react'

export default function services() {
  return (
    <>
    <Hero/>
    <Services/>
    <CareerGuidance/>
    <LoveConsultation/>
    <Pricing/>
    <ServicesFAQ/>
    </>
  )
}
