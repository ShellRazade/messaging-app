import React from 'react'
import Footer from '../../components/Footer';
import Landingbar from '../../components/Landingbar';
import { Link } from 'react-router-dom';
import Shelly from '../../assets/images/Shelly.jpeg'
import Sherry from '../../assets/images/Sherry.jpg'
// import general from '../../assets/images/general.jpg'
const Landing = () => {
    return (
        <div>
            <div className='land'>
                <Landingbar />
                {/* <img src={general} alt="" /> */}
                <p className='text-4xl text-center pt-28 pb-5'>Welcome to Chat-App</p>
                <div className="flex w-full justify-center items-center">
                    <Link to='/register' className="border rounded p-2 hover:bg-[#e19a12] items-center " > Access Dashboard</Link></div>
            </div>

            {/* Quote section */}
            <div className='p-16'>
                <p className='text-3xl justify-center text-center hover:italic'>"Chat apps have revolutionized communication, making it more accessible and immediate than ever before." </p>
            </div>

            {/* Creators section */}
            <div className='flex gap-10 p-10 justify-center'>
                <div>
                    <img src={Sherry} alt="Sherry" className='w-64 h-80' />
                    <p className='text-2xl p-5'>Scherazade L.D. Odoi</p>
                    <p>Frontend Developer</p>
                </div>

                <div>
                    <img src={Shelly} alt="Shelly" className='w-64 h-80' />
                    <p className='text-2xl p-5'>Shelly O. Banahene</p>
                    <p>Backend Developer</p>
                </div>
            </div>

            <Footer />
        </div>
    )
}

export default Landing;