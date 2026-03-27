import React, { useRef, useEffect, useState } from 'react';
import { TypeAnimation } from 'react-type-animation';

const Hero = () => {
  const videoRef = useRef(null);
  const [isVideoPlaying, setIsVideoPlaying] = useState(false);

  useEffect(() => {
    const playVideo = () => {
      if (videoRef.current) {
        // Forçar "muted" diretamente no DOM (ignora o atraso do React no mobile)
        videoRef.current.defaultMuted = true;
        videoRef.current.muted = true;
        
        videoRef.current.play()
          .then(() => {
            setIsVideoPlaying(true);
          })
          .catch(() => {
            // Silent catch to prevent console spam
            setIsVideoPlaying(false);
          });
      }
    };

    // Tenta tocar na montagem
    playVideo();

    // Fallback: se o navegador bloquear, toca no compasso da primeira interação
    const handleInteraction = () => {
       playVideo();
       window.removeEventListener('touchstart', handleInteraction);
       window.removeEventListener('scroll', handleInteraction);
       window.removeEventListener('click', handleInteraction);
    };
    
    window.addEventListener('touchstart', handleInteraction, { once: true });
    window.addEventListener('scroll', handleInteraction, { once: true });
    window.addEventListener('click', handleInteraction, { once: true });

    return () => {
      window.removeEventListener('touchstart', handleInteraction);
      window.removeEventListener('scroll', handleInteraction);
      window.removeEventListener('click', handleInteraction);
    };
  }, []);

  return (
    <section className="hero-section">
      {/* Background 3D CPU Video Auto-playing Loop */}
      <video
        ref={videoRef}
        className="hero-video"
        src="/cpu_anim_keyframe.mp4"
        autoPlay
        loop
        muted
        defaultMuted
        playsInline
        preload="auto"
        controls={false}
        disablePictureInPicture
        style={{ 
          pointerEvents: 'none', 
          userSelect: 'none', 
          outline: 'none',
          opacity: isVideoPlaying ? 0.4 : 0,
          transition: 'opacity 1s ease'
        }}
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
