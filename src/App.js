// import React from 'react';
// import Header from './components/Header';
// import Ticker from './components/Ticker';
// import AboutSection from './components/AboutSection';
// import Modules from './components/Modules';
// import RecentUpdates from './components/RecentUpdates';
// import Footer from './components/Footer';
// import './App.css';  // Optional: If you want to move the styles to CSS.
// //import './styles.css';
// //import "https://unpkg.com/swiper/swiper-bundle.min.css";
// //import "https://cdnjs.cloudflare.com/ajax/libs/font-awesome/5.15.4/css/all.min.css";


// function App() {
//   return (
//     <div>
//       <Header />
//       <Ticker />
//       <AboutSection />
//       <Modules />
//       <RecentUpdates />
//       <Footer />
//     </div>
//   );

  
// }

// export default App;


// import React from 'react';
// import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
// import Header from './components/Header';
// import Ticker from './components/Ticker';
// import AboutSection from './components/AboutSection';
// import Modules from './components/Modules';
// import SignupPage from './components/SignupPage';
// import RecentUpdates from './components/RecentUpdates';
// import Footer from './components/Footer';
// import './App.css';

// function App() {
//   return (
//     <Router> {/* Wrap everything inside Router */}
//       <div>
//         <Header />
//         <Ticker />
//         <Routes>
//         <Route path="/" element={<AboutSection />} />  {/* ✅ Route to About Section */}
//         <Route path="/signup" element={<SignupPage />} />  {/* ✅ Route to Signup Page */}
//       </Routes>
//         <Modules />
//         <RecentUpdates />
//         <Footer />
//       </div>
//     </Router>
//   );
// }

// export default App;


import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Header from './components/Header';
import Ticker from './components/Ticker';
import AboutSection from './components/AboutSection';
import Modules from './components/Modules';
import SignupPage from './components/SignupPage';
import RecentUpdates from './components/RecentUpdates';
import Footer from './components/Footer';
import CaseHistories from './components/CaseHistories';  // ✅ Import CaseHistories Component
import './App.css';

function App() {
  return (
    <Router> {/* Wrap everything inside Router */}
      <div>
        <Header />
        <Ticker />
        <Routes>
          <Route path="/" element={<AboutSection />} />  {/* ✅ Route to About Section */}
          <Route path="/signup" element={<SignupPage />} />  {/* ✅ Route to Signup Page */}
          <Route path="/case-histories" element={<CaseHistories />} />  {/* ✅ Route to Case Histories Page */}
        </Routes>
        <Modules />
        <RecentUpdates />
        <Footer />
      </div>
    </Router>
  );
}

export default App;
