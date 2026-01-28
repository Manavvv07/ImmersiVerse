import { useState } from 'react'
import Navbar from './components/Navbar'
import HeroSection from './components/HeroSection'
import FeatureSection from './components/FeatureSection'
import Wokrflow from './components/Wokrflow'
import Pricing from './components/Pricing'
import Testimonials from './components/Testimonials'
import Footer from './components/Footer'

function App() {
  const [count, setCount] = useState(0)

  return (
    <>
      <div>
        <Navbar/>
        <div className="max-w-7xl mx-auto pt-20 px-6">
          <HeroSection/>
        </div>
        <FeatureSection/>
        <Wokrflow/>
        <Pricing/>
        <Testimonials/>
        <Footer/>
      </div>
    </>
  )
}

export default App
