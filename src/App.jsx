// import { useState } from 'react'
// import reactLogo from './assets/react.svg'
// import viteLogo from '/vite.svg'
import './App.css';
import Navbar from './Components/Navbar';

import SectionTwo from './Components/SectionTwo';
import SectionThird from './Components/SectionThird'; 
// import ForthSection from './Components/forthSection';
import FiveSection from './Components/FiveSection';
import SixSection from './Components/SixSection';
import SevenSection from './Components/SevenSection';
// import EightSection from './Components/eightSection';
import NineSection from './Components/NineSection';
import SectionTen from './Components/SectionTen';
import FAQ from './Components/FAQ';
import ForthSection from './Components/ForthSection';
import EightSection from './Components/EightSection';
import Footer from './Components/Footer';


function App() {
  

  return (
    <>
      <Navbar/>  
      
     <SectionTwo/>
     <SectionThird/>
     <ForthSection/>
     <FiveSection/>
     <SixSection/>
     <SevenSection/>
     <EightSection/>
     <NineSection/>
     <SectionTen/>
     <FAQ/> 
     <Footer/>
    
      
    </>
  )
}

export default App
