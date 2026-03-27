import React from 'react';
import { Download, FileText } from 'lucide-react';

const Resume = () => {
  return (
    <section id="resume" className="section-container resume-section">
      <div className="section-header">
        <h2 className="neon-text mono-text">04. &lt;Currículo /&gt;</h2>
        <div className="line-separator"></div>
      </div>

      <div className="resume-content">
        <div className="resume-viewer interactive neon-border">
          <div className="viewer-header mono-text">
            <span className="dot red"></span>
            <span className="dot yellow"></span>
            <span className="dot green"></span>
            <span className="filename">curriculum guilherme.pdf</span>
          </div>
          <div className="iframe-container">
            <iframe 
              src="/curriculum guilherme.pdf" 
              title="Currículo Guilherme Seixas" 
              className="pdf-iframe"
            ></iframe>
          </div>
        </div>

        <div className="resume-actions interactive">
          <p className="resume-summary">
            Tenho forte embasamento em sistemas e foco em criar aplicações modernas com alta performance e confiabilidade.
          </p>
          <a href="/curriculum guilherme.pdf" download className="cta-button primary with-icon">
            <Download size={20} />
            Baixar PDF
          </a>
          <a href="/curriculum guilherme.pdf" target="_blank" rel="noopener noreferrer" className="cta-button secondary with-icon">
            <FileText size={20} />
            Abrir no Navegador
          </a>
        </div>
      </div>
    </section>
  );
};

export default Resume;
