"use client"
import React from 'react'
import { Boxes } from './acce-ui/boxes'
import { BackgroundBeamsWithCollision } from './acce-ui/beamswithcollsion'
import { AuroraBackground } from './acce-ui/aurora'
import {AnimatePresence, motion} from 'framer-motion'
import Navbar from './Navbar'

const HomePage = () => {
  return (
    <AuroraBackground className='max-w-screen'>
      <Navbar/>
      <motion.div
        initial={{ opacity: 0.0, y: 40 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{
          delay: 0.3,
          duration: 0.8,
          ease: "easeInOut",
        }}
        className="relative flex flex-col gap-4 items-center justify-center px-4"
      >
    <section className="bg-transparent text-white -mt-24">
  <div className="mx-auto px-4 lg:flex lg:h-screen lg:items-center">
    <div className="mx-auto max-w-3xl text-center -mt-10">
      <h1
        className="bg-gradient-to-r from-red-300 to-purple-500 bg-clip-text text-4xl font-extrabold text-transparent z-10"
      >
        Compare your code within seconds with AI

        <span className="sm:block bg-gradient-to-r from-green-300 via-blue-500 to-purple-600 bg-clip-text text-3xl font-extrabold text-transparent z-10"> Make your code efficient. </span>
      </h1>

      
      <p className="mx-auto mt-4 max-w-xl sm:text-xl/relaxed">
        Start using AI to write your code efficiently with the best practices.
      </p>

      <div className="mt-8 flex flex-wrap justify-center gap-4">
        <a
          className="block w-full rounded border border-yellow-600 bg-yellow-400 px-12 py-3 text-sm font-medium text-slate-700 hover:bg-transparent hover:text-white focus:outline-none focus:ring active:text-opacity-75 sm:w-auto z-10"
          href="#"
        >
          Get Started
        </a>

        <a
          className="block w-full rounded border border-yellow-600 px-12 py-3 text-sm font-medium text-white hover:text-black hover:bg-yellow-400 focus:outline-none focus:ring active:bg-blue-500 sm:w-auto z-10"
          href="#"
        >
          Learn More
        </a>
      </div>
    </div>
  </div>
</section>
</motion.div>
</AuroraBackground>

  )
}

export default HomePage