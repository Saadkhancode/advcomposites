import React from 'react'
import Header from './components/Header/Header'
import HomeCarousel from './components/HomeCarousel/HomeCarousel'
import Footer from './components/Footer/Footer'
import Trending from './components/Trending/Trending'
import StayConnected from './components/connected/StayConnected'
import MobileApp from './components/mobileApp/MobileApp'
import Notbar from './components/notbar/Notbar'
import Empowerment from './components/Empowerment/Empowerment'
import Testimonials from './components/Testimonails/Testimonails'
import NewCollection from './components/NewCollection/NewCollection'
import BackInStock from './components/backInStock/BackInStock'
import BestSellers from './components/bestSellers/BestSellers'

function App() {
  return (
    <>
      <Notbar />
      <Header />
      <HomeCarousel />
      <Trending />
      <BestSellers />
      <BackInStock />
      <NewCollection />
      <Testimonials />
      <Empowerment />
      <MobileApp />
      <StayConnected />
      <Footer />
    </>
  )
}

export default App
