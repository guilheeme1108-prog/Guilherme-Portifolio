import React, { useEffect, useRef } from 'react';
import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import { Code2, Server, TerminalSquare, Database } from 'lucide-react';

gsap.registerPlugin(ScrollTrigger);

const skillCategories = [
  {
    title: 'Frontend',
    icon: <Code2 className="neon-text" size={24} />,
    skills: [
      { name: 'React / Next.js', level: 90 },
      { name: 'HTML5 & CSS3', level: 95 },
      { name: 'JavaScript (ES6+)', level: 90 },
      { name: 'GSAP / Framer Motion', level: 80 }
    ]
  },
  {
    title: 'Backend',
    icon: <Server className="accent-green-text" size={24} />,
    skills: [
      { name: 'Node.js / Express', level: 85 },
      { name: 'Python / Django', level: 80 },
      { name: 'C++ / Java', level: 75 },
      { name: 'REST APIs / GraphQL', level: 85 }
    ]
  },
  {
    title: 'Ferramentas & DB',
    icon: <Database className="accent-purple-text" size={24} />,
    skills: [
      { name: 'SQL / PostgreSQL', level: 85 },
      { name: 'MongoDB', level: 80 },
      { name: 'Git / GitHub', level: 90 },
      { name: 'Docker / CI/CD', level: 70 }
    ]
  }
];

const Skills = () => {
  const containerRef = useRef(null);

  useEffect(() => {
    let ctx = gsap.context(() => {
      // Animate progress bars when scrolled into view
      gsap.fromTo('.progress-fill', 
        { width: "0%" },
        { 
          width: (i, el) => `${el.dataset.level}%`, 
          duration: 1.5,
          ease: "power3.out",
          scrollTrigger: {
            trigger: containerRef.current,
            start: "top 75%",
          }
        }
      );
    }, containerRef);
    return () => ctx.revert();
  }, []);

  return (
    <section id="skills" className="section-container skills-section" ref={containerRef}>
      <div className="section-header">
        <h2 className="neon-text mono-text">02. &lt;Habilidades /&gt;</h2>
        <div className="line-separator"></div>
      </div>

      <div className="skills-grid">
        {skillCategories.map((category, idx) => (
          <div key={idx} className="skill-card neon-border">
            <div className="card-header mono-text">
              {category.icon}
              <h3>{category.title}</h3>
            </div>
            <div className="card-body">
              {category.skills.map((skill, sIdx) => (
                <div key={sIdx} className="skill-item interactive">
                  <div className="skill-info">
                    <span className="skill-name mono-text">{skill.name}</span>
                    <span className="skill-percent mono-text">{skill.level}%</span>
                  </div>
                  <div className="progress-bar">
                    <div 
                      className="progress-fill" 
                      data-level={skill.level}
                      style={{ 
                        backgroundColor: idx === 0 ? 'var(--accent-neon)' : idx === 1 ? 'var(--accent-green)' : 'var(--accent-purple)',
                        boxShadow: `0 0 10px ${idx === 0 ? 'var(--accent-neon-glow)' : idx === 1 ? 'var(--accent-green-glow)' : 'rgba(181, 0, 255, 0.5)'}`
                      }}
                    ></div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        ))}
      </div>
    </section>
  );
};

export default Skills;
