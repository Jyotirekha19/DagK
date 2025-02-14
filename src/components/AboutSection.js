// // import React from 'react';

// // const AboutSection = () => {
// //   return (
// //     <div className="about-section">
// //       <div className="container">
// //         <div className="about-content">
// //           <div className="about-text">
// //             <h2>Welcome to Your Legal Hub</h2>
// //             <p>Your one-stop destination for all your legal needs!</p>
// //             <p>Our goal is to make legal services accessible, convenient, and understandable for everyone.</p>
// //             <p>Join us on this journey towards legal empowerment, where knowledge meets opportunity.</p>
// //             <a href="#our-services" className="explore-services-btn">Signup</a>
// //           </div>
// //           <div className="about-image">
// //             <img src="/info.jpg" alt="Image Description" />
// //           </div>
// //         </div>
// //       </div>
// //     </div>
// //   );
// // };

// // export default AboutSection;




// // src/components/AboutSection.js

// import React from 'react';
// //import infoImage from '../assets/info.jpg'; // Correct path to your image
// //import './AboutSection.css'; // Import CSS for styling

// const AboutSection = () => {
//   return (
//     <div className="about-section">
//       <div className="container">
//         <div className="about-content">
//           <div className="about-text">
//             <h2>Welcome to Your Legal Hub</h2>
//             <p>Your one-stop destination for all your legal needs!</p>
//             <p>Our goal is to make legal services accessible, convenient, and understandable for everyone.</p>
//             <p>Join us on this journey towards legal empowerment, where knowledge meets opportunity.</p>
//             <a href="#our-services" className="explore-services-btn">Signup</a>
//           </div>
//           <div className="about-image">
//           <img src="info.jpg" alt="Legal Hub Info" />

//           </div>
//         </div>
//       </div>
//     </div>
//   );
// };

// export default AboutSection;

import React from 'react';
import { useNavigate } from 'react-router-dom';

const AboutSection = () => {
  const navigate = useNavigate();

  const handleSignupClick = () => {
    navigate('/signup'); // Redirects to the Sign-Up page
  };

  return (
    <div className="about-section">
      <div className="container">
        <div className="about-content">
          <div className="about-text">
            <h2>Welcome to Your Legal Hub</h2>
            <p>Your one-stop destination for all your legal needs!</p>
            <p>Our goal is to make legal services accessible, convenient, and understandable for everyone.</p>
            <p>Join us on this journey towards legal empowerment, where knowledge meets opportunity.</p>
            <button onClick={handleSignupClick} className="explore-services-btn">
              Signup
            </button>
          </div>
          <div className="about-image">
            <img src="info.jpg" alt="Legal Hub Info" />
          </div>
        </div>
      </div>
    </div>
  );
};

export default AboutSection;
