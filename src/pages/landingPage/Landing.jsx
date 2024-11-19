import React from 'react'
import Footer from '../../components/Footer';
import Landingbar from '../../components/Landingbar';
// import general from '../../assets/images/general.jpg'
const Landing = () => {
  return (
    <div>
        <div className='land'>
        <Landingbar/>
            {/* <img src={general} alt="" /> */}
            <p className='text-4xl text-center'>Welcome to Chat-App</p>
        </div>
        <Footer/>
    </div>
  )
}

export default Landing;