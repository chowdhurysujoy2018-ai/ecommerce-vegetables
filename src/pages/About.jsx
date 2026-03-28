import React from 'react'
import InsideHeroBanner from '../components/InsideHeroBanner'
import FeatureCard from '../components/aboutUs/FeatureCard'
import WorldPremiumDesign from '../components/aboutUs/WorldPremiumDesign'
import AboutProductCard from '../components/aboutUs/AboutProductCard'
import HappyClientSays from '../components/aboutUs/HappyClientSays'
import WeProvideGoodSolution from '../components/aboutUs/WeProvideGoodSolution'
import WhoWeAre from '../components/aboutUs/WhoWeAre'

const About = () => {
  return (
    <>
      <InsideHeroBanner />
      <FeatureCard />
      <WorldPremiumDesign />
      <AboutProductCard />
      <HappyClientSays />
      <WeProvideGoodSolution />
      <WhoWeAre />
    </>
  )
}

export default About