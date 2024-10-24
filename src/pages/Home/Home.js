import React from 'react'
import './Home.css'
import Navbar from '../../components/Navbar/Navbar'
import hero_bannner from '../../assets/hero_banner.jpg'
import hero_title from '../../assets/hero_title.png'
import play from '../../assets/play_icon.png'
import info from '../../assets/info_icon.png'
import Title_cards from '../../components/Title_Cards/Title_Cards'
import Footer from '../../components/Footer/Footer'

const Home = () => {
  return (
    <div className='home'>
      <Navbar/>
      <div className='hero'>
        <img src={hero_bannner} alt='' className='banner-img'/>
        <div className='hero-caption'>
        <img src={hero_title} alt='' className='caption-img'/>
        <p>Discovering his ties to a secrets ancients order a young man living in morden Istumbul embark on a quest to save the city from the immortal enemy.</p>
        <div className='hero-btn'>

          <button className='btn'>
            Play<img src={play} alt=''/>
          </button>

          <button className='btn dark-btn'>
            More info<img src={info} alt=''/>
          </button>

        </div>

        <Title_cards/>
        </div>
      </div>

      <div className='more-cards'>
        <Title_cards title={"Blockbuster Movies"} cateory={"top_rated"}/>
        <Title_cards title={"Only On Netflix"} cateory={"popular"}/>
        <Title_cards title={"Upcoming"} cateory={"upcoming"}/>
        <Title_cards title={"Top Pics For You"} cateory={"now_playing"}/>
      </div>
      <Footer/>
    </div>
  )
}

export default Home