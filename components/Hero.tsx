"use client"
import React from 'react'
import CustomButton from './CustomButton'
import Image from 'next/image'

const Hero = () => {
    const handleScroll = () => {

    }
    return (
        <div className='hero'>
            <div className='flex-1  pt-36 justify-center'>
                <h2 className='hero_title'>Find, book, rent a car — quick and super easy!</h2>

                <p> Streamline your car rental experience with our effortless booking
                    process.</p>
                <CustomButton
                    title='Explore Cars'
                    containerStyles="bg-blue-600 text-white rounded-full mt-10 px-3"
                    handleClick={handleScroll}
                />
            </div>
            <div className='hero_image_container'>
                <div className='hero__image'>
                    <Image src="/hero.png" alt='hero' fill className='car-card__image' />
                </div>
                <div className='hero__image-overlay'></div>
            </div>

        </div>
    )
}

export default Hero