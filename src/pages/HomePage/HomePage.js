import React from 'react'
import Footer from '../../components/Footer/Footer'
import Header from '../../components/Header/Header'
import HomeView from '../../components/HomeView/HomeView'

const HomePage = () => {
  return (
    <div className="main-wrapper">
      <Header />
      <HomeView />
      <Footer />
    </div>
  )
}

export default HomePage