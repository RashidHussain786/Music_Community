import React from 'react'
import { Footer } from '../../Components/Footer/Footer'
import { Hero } from '../../Components/HeroSection/Hero'
import {NavBar} from '../../Components/NavBar/NavBar'

export const Landing = () => {
  return (
    <div>
    <NavBar/>
    <Hero/>
    <Footer/>
    </div>
  )
}
