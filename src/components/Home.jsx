import React from 'react'
import HeroSection from './HeroSection'
import Services from './Services'
import Trusted from './Trusted'

const Home = () => {
    const data = {
        name: 'UNIQUE STORE',
        image_url: 'https://ivabqohtumjadxnipnsa.supabase.co/storage/v1/object/public/images/shopping_image.jpg'
    }
    return (
        <>
            <HeroSection myData={data} />
            <Services />
            <Trusted />
        </>
    )
}

export default Home