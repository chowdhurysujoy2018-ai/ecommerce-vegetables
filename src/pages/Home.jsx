import React from 'react'
import HeroBanner from '../components/HeroBanner'
import FreshProduct from '../components/FreshProduct'
import FeatureProduct from '../components/FeatureProduct'
import ChoooseEnjoyCategory from '../components/ChoooseEnjoyCategory'
import OrganicNatural from '../components/OrganicNatural'
import OurServicesInfo from '../components/OurServicesInfo'
import OfferTimer from '../components/OfferTimer'
import CustomerReview from '../components/CustomerReview'
import RecentBlog from '../components/RecentBlog'
import InstaFeed from '../components/InstaFeed'

const Home = () => {
  return (
    <>
      <HeroBanner />
      <ChoooseEnjoyCategory />
      <FreshProduct />
      <OrganicNatural />
      <OurServicesInfo />
      <OfferTimer />
      <FeatureProduct />
      <CustomerReview />
      <RecentBlog />
      <InstaFeed />
    </>
  )
}

export default Home