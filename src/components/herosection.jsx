import React, { useEffect, useRef } from 'react';
import { gsap } from 'gsap';
import Particles from 'react-particles';
import { loadFull } from 'tsparticles';
import '../styles/herosection.css'; // Import the CSS file

const HeroSection = () => {
  const videoRef = useRef(null);
  const textRef = useRef(null);

  useEffect(() => {
    // Create a timeline for the animations
    const tl = gsap.timeline({ delay: 4 });

    // Animation for the video/gif to move upward and fade out
    tl.to(videoRef.current, {
      y: -150, // Moves video upwards
      opacity: 0,
      duration: 0.5,
      ease: 'power2.out',
    });

    // Animation for text to fade in
    tl.to(textRef.current, {
      opacity: 1,
      y: 0,
      duration: 1,
      ease: 'power2.in',
    });
  }, []);

  // Particles setup with your provided options
  const particlesInit = async (main) => {
    await loadFull(main);
  };

  const particlesLoaded = (container) => {
    console.log(container);
  };

  return (
    <div className="hero-section-wrapper">
      <div className="hero-section">
        {/* Particle background */}
        <Particles
          id="tsparticles"
          init={particlesInit}
          loaded={particlesLoaded}
          options={{
            autoPlay: true,
            background: {
              color: { value: '#000000' },
              opacity: 1,
            },
            fullScreen: { enable: false, zIndex: 0 }, // Disable full-screen particles
            detectRetina: true,
            fpsLimit: 120,
            interactivity: {
              events: {
                onClick: { enable: true, mode: 'push' },
                onHover: { enable: true, mode: 'repulse' },
                resize: { enable: true },
              },
              modes: {
                repulse: {
                  distance: 200,
                  duration: 0.4,
                },
              },
            },
            particles: {
              number: { value: 80, density: { enable: true, area: 800 } },
              color: { value: '#ff0000', animation: { h: { enable: true, speed: 20, sync: true } } },
              shape: { type: 'circle' },
              opacity: { value: 0.5 },
              size: { value: { min: 1, max: 3 } },
              move: { enable: true, speed: 6 },
              links: { enable: true, distance: 150, color: '#ffffff', opacity: 0.4, width: 1 },
            },
          }}
        />

        {/* Video/GIF that will animate */}
        <div ref={videoRef}>
          <video
            src="./assets/videos/hero_animation.mp4"
            autoPlay
            loop
            muted
          />
          {/* You can replace this with a <img src="your-gif.gif" /> for a GIF */}
        </div>

        {/* Text that appears after video moves out */}
        <div ref={textRef} className="text-content">
          <h1>Your Hero Title</h1>
          <p>Your subtitle or description here</p>
        </div>
      </div>
    </div>
  );
};

export default HeroSection;
