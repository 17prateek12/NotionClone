import React from 'react'
import Page from './writeplanAi/Page'
import Patner from './Patners/Patner'
import  Block  from './Buildingblock/Block'
import TwoCard from './Twocards/TwoCard'
import Team from './Team/Team'
import Footer from './Footer/Footer'
import Join from './Join/Join'
import Review from './review/Review'
import Finalblock from './Final/Finalblock'

const Mainpage = () => {
  return (
    <div>
        <Page />
        <Patner />
        <Block />
        <TwoCard />
        <Team />
        <Join />
        <Review />
        <Finalblock />
        <Footer />
    </div>
  )
}

export default Mainpage