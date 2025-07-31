import { useState, useEffect } from 'react';
import { FaChevronLeft, FaChevronRight } from 'react-icons/fa';
import './Main.css';

function App() {
  const [activeSection, setActiveSection] = useState('home');
  const [project2VideoIndex, setProject2VideoIndex] = useState(0);

  const project2Videos = [
    "https://www.youtube.com/embed/amH7XbiMAts",
    "https://www.youtube.com/embed/Zc62WK-Cruk",
    "https://www.youtube.com/embed/mSU-FnGXxqM"
  ];

  useEffect(() => {
    const handleScroll = () => {
      const scrollY = window.scrollY;
      const windowHeight = window.innerHeight;
    
      const sections = ['about', 'portfolio', 'experience', 'contact'];
      const visibleSections = sections.map(id => {
        const el = document.getElementById(id);
        if (!el) return { id, visible: false };
    
        const rect = el.getBoundingClientRect();
        const isVisible = rect.top <= windowHeight / 2 && rect.bottom > windowHeight / 2;
        return { id, visible: isVisible };
      });
    
      const currentlyVisible = visibleSections.find(s => s.visible);
      if (scrollY < 200) {
        setActiveSection('home');
      } else if (currentlyVisible) {
        setActiveSection(currentlyVisible.id);
      }
    };
    

    window.addEventListener('scroll', handleScroll);
    handleScroll();
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const handleArrowClick = (direction) => {
    setProject2VideoIndex((prevIndex) => {
      const total = project2Videos.length;
      return (direction === 'left')
        ? (prevIndex - 1 + total) % total
        : (prevIndex + 1) % total;
    });
  };

  return (
    <div className="hero-wrapper" id="top">
      <div className="hero-watermark">DEVELOPER</div>

      <nav className="navbar">
        <div className="logo">JR</div>
        <ul className="nav-links">
          <li className={activeSection === 'home' ? 'active' : ''}>
            <a href="#top">Home</a>
          </li>
          <li className={activeSection === 'about' ? 'active' : ''}>
            <a href="#about">About Me</a>
          </li>
          <li className={activeSection === 'portfolio' ? 'active' : ''}>
            <a href="#portfolio">Portfolio</a>
          </li>
          <li className={activeSection === 'experience' ? 'active' : ''}>
            <a href="#experience">Experience</a>
          </li>
          <li className={`contact-link ${activeSection === 'contact' ? 'active' : ''}`}>
            <a href="#contact">Contact</a>
          </li>
        </ul>
      </nav>

      <div className="hero-section">
        <p className="hero-subtitle">I'm a</p>
        <h1 className="hero-title">
          Game Developer <br />
          & Aspiring Software <br />
          <span className="hero-last-line">
            Engineer<span className="dot">.</span>
          </span>
        </h1>
        <button className="projects-btn">
          <a href="#portfolio">Previous Projects</a>
        </button>
      </div>

      <div id="about" className="about-section">
        <div className="about-container">
          <div className="about-image-wrapper">
            <img src="/my professional photo.png" alt="Profile" className="about-image" />
            <div className="about-image-frame"></div>
          </div>
          <div className="about-content">
            <h2>ABOUT ME</h2>
            <p>
              I'm a Computer Science student at the University of Nebraska–Lincoln with a strong interest in full-stack
              development, game design, and building interactive user experiences. I'm passionate about creating things
              that people genuinely enjoy using, and I thrive when working on complex systems that require both
              creativity and problem-solving.
            </p>
            <div className="about-buttons">
            <a href="#contact">
              <button className="hire-btn">HIRE ME</button>
            </a>

            <a
              href="/resume.pdf"
              target="_blank"
              rel="noopener noreferrer"
            >
              <button className="resume-btn">RESUME</button>
            </a>

            </div>
          </div>
        </div>
      </div>

      <div id="portfolio" className="portfolio-section">
        <h2 className="portfolio-header">PORTFOLIO</h2>

        <div className="project">
          <div className="project-text">
            <p className="project-label">PROJECT 1</p>
            <h3>Basketball Game</h3>
            <p className="project-description">
             I designed and developed STREETBALL, a competitive online basketball game on Roblox built for high-level,
              skill-based play. I coded all core gameplay mechanics, UIs, and progression systems. The game has built a
              loyal following and is recognized for its depth, polish, and balance, making it one of the most
              competitive basketball experiences on the platform.
            </p>
            <div className="read-more">
              <a
                href="https://www.roblox.com/games/6569480109/STREETBALL"
                target="_blank"
                rel="noopener noreferrer"
                className="read-more"
              >
                <span className="arrow">→</span> Play here
              </a>
            </div>



          </div>
          <div className="project-video-wrapper">
            <div className="video-frame"></div>
            <iframe
              className="project-video"
              src="https://www.youtube.com/embed/aFh3z1PEtig"
              title="Basketball Game"
              allowFullScreen
              loading="lazy"
            ></iframe>
          </div>
        </div>

        <div className="project flipped">
          <div className="project-video-wrapper flipped-frame">
            <div className="video-frame"></div>
            <iframe
              className="project-video"
              src={project2Videos[project2VideoIndex]}
              title="Football League"
              allowFullScreen
              loading="lazy"
            ></iframe>
           <div className="video-arrows">
              <button className="arrow-btn left" onClick={() => handleArrowClick('left')}>
                <FaChevronLeft />
              </button>
              <button className="arrow-btn right" onClick={() => handleArrowClick('right')}>
                <FaChevronRight />
              </button>
            </div>

          </div>
          <div className="project-text">
            <p className="project-label">PROJECT 2</p>
            <h3>College Football League</h3>
            <p className="project-description">
            Over five years, I built and ran a top football league on Roblox with 18 seasons, 5,000+ members, and
              10–16 teams per season playing 9v9. I coded all gameplay systems, scoreboards, uniforms, and stadiums,
              and managed stat tracking, scheduling, paid staff, and media teams. Our most watched national championship
              hit 190,000+ views with a custom intro I created, setting a visual standard other leagues followed. The
              league was profitable, highly structured, and known for its scale, quality, and longevity.
            </p>
            <a
              href="https://www.youtube.com/@jakegreenway12"
              target="_blank"
              rel="noopener noreferrer"
              className="read-more"
            >
              <span className="arrow">→</span> See more
            </a>

          </div>
        </div>

        <div className="project">
          <div className="project-text">
            <p className="project-label">PROJECT 3</p>
            <h3>Web App</h3>
            <p className="project-description">
              I developed a full-stack card games application using ASP.NET Core and React.js, featuring fully interactive versions of Blackjack and Solitaire with support for both single-player and local multiplayer. The project uses the iDesign architecture with structured verticals for each game and a shared logic layer for handling cards, user authentication, and persistent data. This was a group project, but I was responsible for building the entire Blackjack game, including both the frontend and backend, as well as the Main Menu UI. The Blackjack game supports 1 to 6 players, includes turn-based multiplayer, and tracks user balances through a connected database.
            </p>
            <a
              href="https://github.com/jrieker/CardGamesSolution"
              target="_blank"
              rel="noopener noreferrer"
              className="read-more"
            >
              <span className="arrow">→</span> View project
            </a>

          </div>
          <div className="project-video-wrapper">
            <div className="video-frame"></div>
            <iframe
              className="project-video"
              src="https://www.youtube.com/embed/rP4oaY3Rhk0"
              title="Web App Placeholder"
              allowFullScreen
              loading="lazy"
            ></iframe>
          </div>
        </div>
      </div>

      <div id="experience" className="experience-section">
        <h2 className="experience-header">EXPERIENCE</h2>
        <div className="experience-grid">
          <div className="experience-item">
            <img src="/icons/csharp.png" alt="C#" />
            <p>C#</p>
          </div>
          <div className="experience-item">
            <img src="/icons/aws.png" alt="AWS" />
            <p>AWS</p>
          </div>
          <div className="experience-item">
            <img src="/icons/react.png" alt="React.js" />
            <p>React.js</p>
          </div>
          <div className="experience-item">
            <img src="/icons/html.png" alt="HTML" />
            <p>HTML</p>
          </div>
          <div className="experience-item">
            <img src="/icons/java.png" alt="Java" />
            <p>Java</p>
          </div>
          <div className="experience-item">
            <img src="/icons/javascript.png" alt="JavaScript" />
            <p>JavaScript</p>
          </div>
          <div className="experience-item">
            <img src="/icons/dotnet.png" alt=".NET" />
            <p>.NET</p>
          </div>
          <div className="experience-item">
            <img src="/icons/lua.png" alt="Lua" />
            <p>Lua</p>
          </div>
        </div>
      </div>

      <div id="contact" className="contact-section">
        <div className="decor-circle left-decor"></div>
        <div className="decor-circle right-decor"></div>
        <div className="contact-background">
          <h2 className="contact-title">CONTACT</h2>
          <div className="contact-content">
          <div className="contact-left">
            <h3>Drop Me a Message</h3>
            <p>I’m open to professional opportunities, contract work, and new collaborations. If you’re interested in hiring me or starting a project together, please contact me below.</p>
            <div className="contact-info">
              <img src="/icons/linkedin.png" alt="LinkedIn" />
              <a
                href="https://www.linkedin.com/in/jacob-rieker"
                target="_blank"
                rel="noopener noreferrer"
                className="contact-anchor"
              >
                LinkedIn
              </a>
            </div>

            <div className="contact-info">
              <img src="/icons/email.png" alt="Email" />
              <span>jacobrieker12@gmail.com</span>
            </div>
            <div className="contact-info">
              <img src="/icons/discord.png" alt="Discord" />
              <span>@jacob12246</span>
            </div>
          </div>
          <div className="contact-form-wrapper">
          <form
            className="contact-form"
            action="https://formsubmit.co/1644dd00d41a262c362f2266c0a4a790"
            method="POST"
          >
            <input type="text" name="name" placeholder="Name" required />
            <input type="email" name="email" placeholder="Email" required />
            <textarea name="message" placeholder="Message" required></textarea>

            <input type="hidden" name="_captcha" value="false" />

            <button type="submit">Send</button>
          </form>

          </div>

        </div>
      </div>

      </div>


    </div>
  );
}

export default App;
