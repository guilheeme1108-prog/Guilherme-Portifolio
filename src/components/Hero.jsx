import React from 'react';
import { TypeAnimation } from 'react-type-animation';

const Hero = () => {
  return (
    <section className="hero-section">
      {/* Background 3D CPU Video Auto-playing Loop */}
      <video
        className="hero-video"
        src="/cpu_anim_keyframe.mp4"
        autoPlay
        loop
        muted
        playsInline
      />
      
      {/* Overlay Content */}
      <div className="hero-content">
        <div className="text-content">
          <h2 className="greeting mono-text neon-text">{"<Hello World />"}</h2>
          <h1 className="name">Guilherme Seixas</h1>
          
          <div className="typing-container mono-text">
            <span>&gt; </span>
            <TypeAnimation
              sequence={[
                'Desenvolvedor Fullstack',
                1000,
                'Criando soluções inteligentes',
                1000,
                'Construindo soluções a partir de código.',
                3000
              ]}
              wrapper="span"
              speed={50}
              className="typing-text"
              repeat={Infinity}
            />
            <span className="cursor-blink">_</span>
          </div>

          <div className="cta-container interactive">
            <a href="#projects" className="cta-button primary neon-border interactive">
              .verProjetos()
            </a>
            <a href="#contact" className="cta-button secondary interactive">
               .contato()
            </a>
          </div>
        </div>
      </div>
      
      {/* Scroll indicator overlay */}
      <div className="scroll-indicator mono-text">
        <span>Scroll para ver mais</span>
        <div className="mouse-icon">
          <div className="wheel"></div>
        </div>
      </div>
    </section>
  );
};

export default Hero;
