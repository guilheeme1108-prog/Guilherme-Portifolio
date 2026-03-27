import React from 'react';
import { ExternalLink, FolderGit2 } from 'lucide-react';

const GithubIcon = ({ size, className }) => (
  <svg xmlns="http://www.w3.org/2000/svg" width={size} height={size} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className={className}>
    <path d="M15 22v-4a4.8 4.8 0 0 0-1-3.2c3 0 6-2 6-5.5.08-1.25-.27-2.48-1-3.5.28-1.15.28-2.35 0-3.5 0 0-1 0-3 1.5-2.64-.5-5.36-.5-8 0C6 2 5 2 5 2c-.3 1.15-.3 2.35 0 3.5A5.403 5.403 0 0 0 4 9c0 3.5 3 5.5 6 5.5-.39.49-.68 1.05-.85 1.65-.17.6-.22 1.23-.15 1.85v4"></path>
    <path d="M9 18c-4.51 2-5-2-7-2"></path>
  </svg>
);

const projectsData = [
  {
    id: 1,
    title: 'Sistema de Agendamento Moderno',
    description: 'Um sistema de agendamento completo com frontend em React e backend em Node.js. Integração com IA para atendimento via chatbot e design voltado a alta conversão.',
    techs: ['React', 'Node.js', 'PostgreSQL', 'Tailwind'],
    github: '#',
    live: '#'
  },
  {
    id: 2,
    title: 'Chatbot Full-Stack',
    description: 'Aplicação de chatbot baseada em IA com painel administrativo seguro. Gerenciamento de chaves de API, banco de dados local (SQLite) e autenticação robusta.',
    techs: ['Express', 'SQLite', 'Vanilla JS', 'JWT'],
    github: '#',
    live: '#'
  },
  {
    id: 3,
    title: 'Dashboard Analítico',
    description: 'Interface de dashboard construída com componentes complexos e animações fluidas, projetada para visualização de grandes volumes de dados de forma intuitiva.',
    techs: ['Next.js', 'Chart.js', 'GSAP', 'CSS Modules'],
    github: '#',
    live: '#'
  }
];

const Projects = () => {
  return (
    <section id="projects" className="section-container projects-section">
      <div className="section-header">
        <h2 className="neon-text mono-text">03. &lt;ProjetosDeDestaque /&gt;</h2>
        <div className="line-separator"></div>
      </div>

      <div className="projects-grid">
        {projectsData.map((project) => (
          <div key={project.id} className="project-card interactive">
            <div className="project-card-inner">
              <div className="project-top">
                <FolderGit2 className="neon-text" size={32} />
                <div className="project-links">
                  <a href={project.github} target="_blank" rel="noopener noreferrer" aria-label="Github Repo">
                    <GithubIcon size={20} className="hover-neon" />
                  </a>
                  <a href={project.live} target="_blank" rel="noopener noreferrer" aria-label="Live Demo">
                    <ExternalLink size={20} className="hover-neon" />
                  </a>
                </div>
              </div>
              
              <h3 className="project-title">{project.title}</h3>
              <p className="project-description text-secondary">
                {project.description}
              </p>
              
              <ul className="project-tech-list mono-text">
                {project.techs.map((tech, i) => (
                  <li key={i}>{tech}</li>
                ))}
              </ul>
            </div>
          </div>
        ))}
      </div>
      
      <div className="github-more interactive">
        <a href="https://github.com/guilheeme1108-prog" target="_blank" rel="noopener noreferrer" className="cta-button primary">
          .verMaisNoGithub()
        </a>
      </div>
    </section>
  );
};

export default Projects;
