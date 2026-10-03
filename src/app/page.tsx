import Image from "next/image";

const projects = [
  {
    name: "MedMe Management System",
    meta: "Full Stack · Tsofen Tashbik × MedMe",
    description:
      "Built a full-stack web application for managing employee and department data, connecting a React frontend to a Java Spring Boot API with REST integrations for a real collaboration project.",
    tech: ["Java Spring Boot", "React", "HTML", "CSS", "JavaScript", "REST APIs", "CRM"],
    href: "https://github.com/jlaaamara23/doctormedme",
  },
  {
    name: "RealTimeChat",
    meta: "Systems · C++ Messaging",
    description:
      "Developed a real-time messaging application over TCP/IP sockets on Linux, enabling seamless peer communication with a focus on networking fundamentals and concurrent I/O.",
    tech: ["C++", "TCP/IP sockets", "Linux"],
    href: "https://github.com/jlaaamara23",
  },
  {
    name: "LogicSort",
    meta: "Desktop Game · Java",
    description:
      "Created a number-sorting game with multiple difficulty levels to strengthen logical thinking and interaction design using Java Swing and object-oriented patterns.",
    tech: ["Java", "Swing", "OOP"],
    href: "https://github.com/jlaaamara23",
  },
];

const skills = [
  {
    title: "Languages",
    items: "C++, Java, Python, JavaScript, SQL, HTML, CSS",
  },
  {
    title: "Platforms & Tools",
    items:
      "Git, GitHub, Linux, MySQL, PostgreSQL, Postman, Terraform, VS Code, IntelliJ IDEA, Eclipse, Jupyter, Anaconda",
  },
  {
    title: "Focus Areas",
    items:
      "Full-stack development, REST APIs, OOP, data structures, algorithms, automation, cloud-ready systems",
  },
];

export default function Home() {
  return (
    <>
      <header className="nav">
        <div className="site-shell nav-inner">
          <a className="nav-brand" href="#top">
            Jlaa Amara
          </a>
          <nav className="nav-links" aria-label="Primary">
            <a href="#about">About</a>
            <a href="#projects">Projects</a>
            <a href="#experience">Experience</a>
            <a href="#skills">Skills</a>
            <a href="#contact">Contact</a>
          </nav>
        </div>
      </header>

      <main id="top">
        <section className="hero">
          <div className="hero-media" aria-hidden="true">
            <Image
              src="https://images.unsplash.com/photo-1515879218367-8461d7459aea?auto=format&fit=crop&w=2400&q=80"
              alt=""
              fill
              priority
              sizes="100vw"
            />
            <div className="hero-veil" />
          </div>
          <div className="site-shell hero-content">
            <h1 className="brand-mark">Jlaa Amara</h1>
            <p className="hero-title">
              Computer Science intern building cloud-ready full-stack systems.
            </p>
            <p className="hero-copy">
              Hands-on with Spring Boot, React, automation, and scalable backends —
              ready to contribute in collaborative engineering teams.
            </p>
            <div className="cta-row">
              <a className="btn btn-primary" href="#projects">
                View projects
              </a>
              <a className="btn btn-ghost" href="mailto:jlaa.amarajlaa@gmail.com">
                Email me
              </a>
            </div>
          </div>
        </section>

        <section className="section" id="about">
          <div className="site-shell reveal">
            <span className="section-label">About</span>
            <h2 className="section-title">Code with clarity. Ship with care.</h2>
            <div className="about-grid">
              <p className="section-lead">
                Computer Science intern with hands-on experience in cloud platforms
                and full-stack development. Completed a Full Stack Development course
                at Tsofen Tashbik, including a real-world project with MedMe using
                Java Spring Boot, React, and modern web tooling. Eager to contribute
                to cloud-native and full-stack projects in a fast-paced environment.
              </p>
              <div className="stat-list">
                <div className="stat-item">
                  <h3>B.Sc. Computer Science</h3>
                  <p>SCE · Be&apos;er Sheva · 2023–Present · GPA 87</p>
                </div>
                <div className="stat-item">
                  <h3>Teaching Assistant</h3>
                  <p>
                    Python TA at SCE — Algorithms, OOP, Data Structures, Operating
                    Systems
                  </p>
                </div>
                <div className="stat-item">
                  <h3>Languages</h3>
                  <p>Arabic (Native) · Hebrew (Advanced) · English (Advanced)</p>
                </div>
              </div>
            </div>
          </div>
        </section>

        <section className="section" id="projects">
          <div className="site-shell reveal">
            <span className="section-label">Projects</span>
            <h2 className="section-title">Selected work</h2>
            <p className="section-lead">
              From collaborative product work to systems programming and interactive
              Java apps — practical builds across the stack.
            </p>
            <div className="project-list">
              {projects.map((project) => (
                <article className="project" key={project.name}>
                  <div>
                    <div className="project-top">
                      <h3>{project.name}</h3>
                      <span className="project-meta">{project.meta}</span>
                    </div>
                    <p>{project.description}</p>
                  </div>
                  <div>
                    <div className="tech-row" aria-label="Technologies">
                      {project.tech.map((item) => (
                        <span className="tech" key={item}>
                          {item}
                        </span>
                      ))}
                    </div>
                    <a
                      className="project-link"
                      href={project.href}
                      target="_blank"
                      rel="noreferrer"
                    >
                      View on GitHub
                    </a>
                  </div>
                </article>
              ))}
            </div>
          </div>
        </section>

        <section className="section" id="experience">
          <div className="site-shell reveal">
            <span className="section-label">Experience & Education</span>
            <h2 className="section-title">Path so far</h2>
            <div className="timeline">
              <article className="timeline-item">
                <span>2024 – Present</span>
                <h3>Python Teaching Assistant · SCE</h3>
                <p>
                  Assisted students in Introduction to Computer Science, Algorithms,
                  OOP, Data Structures, and Operating Systems, with a focus on Python
                  programming and clear problem-solving habits.
                </p>
              </article>
              <article className="timeline-item">
                <span>Tsofen Tashbik</span>
                <h3>AI-Driven Full Stack Development</h3>
                <p>
                  Completed applied full-stack training (Java, React, cybersecurity
                  fundamentals, AI-driven methods) culminating in the MedMe
                  collaboration project and certification.
                </p>
              </article>
              <article className="timeline-item">
                <span>2023 – Present</span>
                <h3>
                  B.Sc. in Computer Science · SCE (Shamoon College of Engineering)
                </h3>
                <p>
                  Current GPA 87. Coursework includes Algorithms (88), Operating
                  Systems (88), Data Structures (85), Digital Systems (100), Intro to
                  Java (100), OOP (85), Databases, Cloud Computing, Web Development,
                  and Intro to Python (85).
                </p>
              </article>
            </div>
          </div>
        </section>

        <section className="section" id="skills">
          <div className="site-shell reveal">
            <span className="section-label">Skills</span>
            <h2 className="section-title">Toolkit</h2>
            <div className="skills">
              {skills.map((group) => (
                <div className="skill-group" key={group.title}>
                  <h3>{group.title}</h3>
                  <p>{group.items}</p>
                </div>
              ))}
            </div>
          </div>
        </section>

        <section className="section" id="contact">
          <div className="site-shell">
            <div className="contact reveal">
              <h2>Let&apos;s build something solid.</h2>
              <p>
                Open to internships and full-stack or cloud-minded engineering roles.
                Reach out by email or connect on GitHub.
              </p>
              <div className="cta-row">
                <a className="btn btn-primary" href="mailto:jlaa.amarajlaa@gmail.com">
                  jlaa.amarajlaa@gmail.com
                </a>
                <a className="btn btn-ghost" href="tel:+972524659094">
                  052-465-9094
                </a>
              </div>
              <div className="contact-links" style={{ marginTop: "1.5rem" }}>
                <a
                  href="https://github.com/jlaaamara23"
                  target="_blank"
                  rel="noreferrer"
                >
                  GitHub
                </a>
                <a
                  href="https://www.linkedin.com/in/jlaa-amara-792360221"
                  target="_blank"
                  rel="noreferrer"
                >
                  LinkedIn
                </a>
              </div>
            </div>
          </div>
        </section>
      </main>

      <footer className="site-shell footer">
        <span>© {new Date().getFullYear()} Jlaa Amara</span>
        <span>Built for Vercel · Portfolio from CV</span>
      </footer>
    </>
  );
}
