import React from 'react';
import Header from './components/Header';
import Ticker from './components/Ticker';
import AboutSection from './components/AboutSection';
import Modules from './components/Modules';
import RecentUpdates from './components/RecentUpdates';
import Footer from './components/Footer';
import './App.css';  // Optional: If you want to move the styles to CSS.
//import './styles.css';
//import "https://unpkg.com/swiper/swiper-bundle.min.css";
//import "https://cdnjs.cloudflare.com/ajax/libs/font-awesome/5.15.4/css/all.min.css";


function App() {
  return (
    <div>
      <Header />
      <Ticker />
      <AboutSection />
      <Modules />
      <RecentUpdates />
      <Footer />
    </div>
  );

  
}

export default App;
