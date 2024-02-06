import React from 'react';
import './About.css';

const About = () => {
  return (

    <div className="about">
    <h2 className="about-title">About Us</h2>

          <div className="split-about">
          {/* Left section */}
          <div className="left-aboutsection">
              {/* content for left section */}
              <div className='about-card'>
                  <img src="https://i.pinimg.com/564x/30/b3/0d/30b30d7a09b3e966cb13908d9b59cf70.jpg" 
                    alt='About Us'
                    className='about-img'/>
             
               <div className='avocado container'>
                
               </div>
              </div>


          </div>

          {/* Right section */}
          <div className="right-aboutsection">
              {/* content for right section */}
              <div className="about-text">
              <p>our platform connects farmers with avocado </p>
              <p>buyers, allowing seamless negotiation, booking and transactions</p>
              <p> Take control of your crop's destiny, from pricing discussions to scheduled</p>
              <p> fruit pickups, fostering a future where farming meets prosperity.</p>
                {/* <p>In addition to our recipes, we also offer a wealth of information on nutrition and healthy eating. Our blog features articles on topics such as meal planning, food prep, and healthy eating habits.</p> */}
                <p>Thank you for visiting our website and we wish you the best in your journey of shaping your destiny as farmers </p>
              </div>
             </div>
          </div>
    </div>

  );
}

export default About;