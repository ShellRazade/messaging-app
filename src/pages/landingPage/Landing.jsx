import React from 'react'
import Footer from '../../components/Footer';
import Landingbar from '../../components/Landingbar';
import { Link } from 'react-router-dom';
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
            <Footer />
        </div>
    )
}

export default Landing;