import React, { useRef, useEffect } from 'react';

const TransparentImage = ({ src, alt, className, style }) => {
  const canvasRef = useRef(null);

  useEffect(() => {
    const img = new Image();
    img.src = src;
    img.crossOrigin = 'Anonymous';
    img.onload = () => {
      const canvas = canvasRef.current;
      if (!canvas) return;
      
      // Downscale a bit for faster processing if needed, but original is fine
      canvas.width = img.width;
      canvas.height = img.height;
      const ctx = canvas.getContext('2d');
      ctx.drawImage(img, 0, 0);
      
      const imageData = ctx.getImageData(0, 0, canvas.width, canvas.height);
      const data = imageData.data;
      const width = canvas.width;
      const height = canvas.height;
      
      // Basic Flood Fill to remove outer white background
      const visited = new Uint8Array(width * height);
      // Start from corners
      const queue = [[0, 0], [width-1, 0], [0, height-1], [width-1, height-1]];
      
      const getIndex = (x, y) => (y * width + x) * 4;
      const isWhite = (x, y) => {
        const i = getIndex(x, y);
        // high tolerance for white/off-white artifacts
        return data[i] > 230 && data[i+1] > 230 && data[i+2] > 230; 
      };

      while(queue.length > 0) {
        const [x, y] = queue.pop();
        if (x < 0 || x >= width || y < 0 || y >= height) continue;
        
        const vIdx = y * width + x;
        if (visited[vIdx]) continue;
        visited[vIdx] = 1;
        
        if (isWhite(x, y)) {
          const i = getIndex(x, y);
          data[i + 3] = 0; // Se to transparent
          
          queue.push([x + 1, y]);
          queue.push([x - 1, y]);
          queue.push([x, y + 1]);
          queue.push([x, y - 1]);
        }
      }
      
      // Clean up stray semi-white pixels at edges using a slight feathering
      for (let i = 0; i < data.length; i += 4) {
        if (data[i] > 240 && data[i+1] > 240 && data[i+2] > 240 && data[i+3] > 0) {
           data[i+3] = 0; // aggressive fallback threshold
        }
      }

      ctx.putImageData(imageData, 0, 0);
    };
  }, [src]);

  return <canvas ref={canvasRef} className={className} style={style} aria-label={alt} />;
};

const About = () => {
  return (
    <section id="about" className="section-container about-section">
      <div className="section-header">
        <h2 className="neon-text mono-text">01. &lt;SobreMim /&gt;</h2>
        <div className="line-separator"></div>
      </div>
      
      <div className="about-content">
        <div className="about-text-box">
          <p className="comment mono-text">/**</p>
          <p className="comment mono-text"> * @name Guilherme Seixas</p>
          <p className="comment mono-text"> * @role Programador / Desenvolvedor</p>
          <p className="comment mono-text"> * @bio Analítico, voltado a entregar produtos</p>
          <p className="comment mono-text"> * robustos, performáticos e modernos. </p>
          <p className="comment mono-text"> */</p>
          <br />
          <p>
            Sou um desenvolvedor apaixonado por tecnologia e arquitetura de sistemas.
            Meu objetivo é projetar e implementar soluções que sejam não apenas funcionais, mas visualmente deslumbrantes.
          </p>
          <p>
            Minhas áreas de atuação incluem desenvolvimento Frontend e Backend, 
            integração de APIs de inteligência artificial, e criação de interfaces fluidas como esta.
          </p>
        </div>
        
        <div className="about-image-wrapper interactive">
          <div className="image-frame neon-border">
            <TransparentImage 
              src="/profile.png" 
              alt="Guilherme Seixas" 
              className="profile-img"
              style={{
                filter: 'drop-shadow(0 0 30px rgba(0, 243, 255, 0.2)) brightness(0.95)',
                WebkitMaskImage: 'radial-gradient(circle at center, black 40%, transparent 100%)',
                maskImage: 'radial-gradient(circle at center, black 40%, transparent 100%)',
              }}
            />
            <div className="image-overlay"></div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;
