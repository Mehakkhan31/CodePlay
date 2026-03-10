import { Button } from "@/components/ui/button"
import Image from 'next/image'
import React from 'react'

export const Hero = () => {
    return (
        <div className='w-full relative h-screen overflow-hidden'>
            <Image src={'/hero.gif'} alt='hero' width={1000} height={1000} 
            className='w-full h-full object-cover absolute inset-0'
            />

            <div className='absolute w-full flex flex-col items-center mt-24'>   
                <h2 className='font-bold text-7xl font-game'
                style={{
                    textShadow:"2px 2px 0 #000, -2px -2px 0 #000, 2px -2px 0 #000, -2px 2px 0 #000"
                }}
                >Strat Your</h2>
                <h2 className='font-bold text-8xl font-game text-yellow-400 '
                style={{
                    textShadow:"2px 2px 0 #000, -2px -2px 0 #000, 2px -2px 0 #000, -2px 2px 0 #000"
                }}
                >Coding Advanture</h2>

                <h2 className='mt-5 font-game text-4xl'>Beginner friendly coding courses and projects</h2>

                <Button className='font-game text-3xl p-6 mt-8'variant={'pixel'}>GET STARTED</Button>
            </div>
        </div>
    )
}