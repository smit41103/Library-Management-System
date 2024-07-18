import React from 'react'

import About from '../Components/About'
import Footer from '../Components/Footer'

import PopularBooks from '../Components/PopularBooks'
import RecentAddedBooks from '../Components/RecentAddedBooks'
import ReservedBooks from '../Components/ReservedBooks'
import Stats from '../Components/Stats'
import WelcomeBox from '../Components/WelcomeBox'

function Home() {
    return (
        <div id='home'>

            <WelcomeBox/>
            <About/>
            <Stats/>
            {/* <RecentAddedBooks/> */}
            {/* <PopularBooks/> */}
            <ReservedBooks/>
            <Footer/>
        </div>
    )
}

export default Home
