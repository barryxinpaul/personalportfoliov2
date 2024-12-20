import React from 'react'
import { Spotlight } from './ui/Spotlight'
import { TextGenerateEffect } from './ui/text-generate-effect'
import MagicButton from './ui/MagicButton'
import { VscAccount } from "react-icons/vsc";

const Hero = () => {
  return (
    <div className="pb-20 pt-36">
      <div>
        <Spotlight className='-top-40 -left-10 md:-left-32 md:-top-20 h-screen' fill='orange'/>

        <Spotlight className='top-10 left-full h-[80vf] w-[50vw]' fill='white'/>

        <Spotlight className='top-28 left-80 h-[80vf] w-[50vw]' fill='purple'/>
      </div>

      {/* Grid */}
      <div className="h-screen w-full dark:bg-black-100 bg-white  dark:bg-grid-white/[0] bg-grid-black/[0.2] flex items-center justify-center absolute top-0 left-0">
        {/* Radial gradient for the container to give a faded look */}
        <div className="absolute pointer-events-none inset-0 flex items-center justify-center dark:bg-black-100 bg-white [mask-image:radial-gradient(ellipse_at_center,transparent_20%,black)]"/>
      </div>
    
      <div className='flex justify-center relative my-20 z-10'>
        <div className='max-w-[89vw] md:max-w-2xl lg:max-w-[60vw] flex flex-col items-center justify-center'>
          <h1 className='uppercase tracking-widest text-xl text-center text-blue-100 max-w-80'>Barry Paul</h1>
          <TextGenerateEffect 
            className='text-center text-[40px] font-bold md:text-[5xl] lg:text-[6xl]'
            words='passionate about building products & innovations that will simplify lives'
          />
          <p className='text-center md:tracking-wider mb-4 text-sm md:text-lg lg:text-xl'>Coding my imagination</p>
          <a href="#about">
            <MagicButton
            title='Learn About Me'
            icon={<VscAccount />}
            position='right'
            />
          </a>
        </div>
      </div>
    </div>
  )
}

export default Hero