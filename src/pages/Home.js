import React from 'react'
import About from '../components/About'
import Features from '../components/Features'
import Layout from '../components/Layout'
import Service from '../components/Service'
import Work from '../components/Work'

const Home = () => {
  return (
    <div>
        <Layout/>
        <Service/>
        <About/>
        <Features/>
        <Work/>
    </div>
  )
}

export default Home