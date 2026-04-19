import React, { useState } from 'react'
import { motion, AnimatePresence } from 'framer-motion'
import Navbar from './components/Navbar'
import Ventures from './components/Ventures'
import Profile from './components/Profile'
import Hero from './components/Hero'
import Timeline from './components/Timeline'
import Footer from './components/Footer'

function App() {
  const [activeView, setActiveView] = useState('cv');

  return (
    <div className="min-h-screen-dvh bg-background w-full relative">
      <Navbar activeView={activeView} setActiveView={setActiveView} />

      <AnimatePresence mode="wait">
        {activeView === 'ventures' && <Ventures key="ventures" />}
        {activeView === 'profile' && <Profile key="profile" />}
        
        {activeView === 'cv' && (
          <motion.div 
            key="cv"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.4 }}
            className="w-full"
          >
            <Hero />
            <Timeline />
            <div className="w-full px-6 sm:px-10">
              <Footer />
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  )
}

export default App
