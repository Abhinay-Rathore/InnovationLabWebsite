import React from 'react';
import '../styles/about-info-section.css';

const AboutInfoSection = () => {
  return (
    <div className="bg-neutralWhite py-12">
      <div className="px-6 lg:px-16 max-w-screen-xl mx-auto">
        <div className="flex flex-col md:flex-row justify-between items-center gap-16">
          {/* Text Section */}
          <div className="md:w-1/2">
            <h2 className="text-5xl text-neutralDGrey font-bold mb-6 leading-tight">
              Discover the Story Behind Us
            </h2>
            <p className="text-base text-neutralGrey leading-relaxed md:w-4/5 mb-6">
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Officiis
              possimus totam sunt deleniti distinctio fugit accusantium maxime. 
              Iusto laborum consectetur beatae quia nulla placeat eaque, autem 
              ab natus quidem ut. Necessitatibus eum! Optio omnis excepturi 
              voluptatum quae consequatur provident facere delectus, vero tenetur, 
              iure corporis, sapiente fugit sunt?
            </p>
          </div>

          {/* Image Section */}
          <div className="md:w-1/2">
            <img
              src="./assets/images/about.jpg"
              alt="About Us"
              className="rounded-lg shadow-lg w-full h-auto object-cover"
            />
          </div>
        </div>
      </div>
    </div>
  );
};

export default AboutInfoSection;
