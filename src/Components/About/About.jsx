import profile from '../../assets/profile.jpg';
import "./About.css"

const About = () => {
  return (
    <div className='about' id="about">
      <div className="about-title">
        <h1>About Me</h1>
      </div>
      <div className="about-sections">
        <div className="about-left">
          <img src={profile} alt="Profile" />
        </div>
        <div className="about-right">
          <div className="about-para">
            <p>
              🔥 I am a passionate <strong>MERN Stack Engineer</strong> with strong command over <strong>MongoDB</strong>, <strong>Express.js</strong>, <strong>React</strong>, and <strong>Node.js  </strong>.<br />
              I specialize in building dynamic, full-stack web applications with efficient database integration and clean architecture.
            </p>
            <p>
              🚀 Expertise in blending <strong>seamless front-end designs</strong> with <strong>scalable back-end systems</strong>, ensuring exceptional performance and user experience.
            </p>
            <p>
              🌟 Constantly exploring new technologies to deliver <strong>innovative solutions</strong>, solve real-world challenges, and write maintainable, business-ready code.
            </p>
          </div>
        </div>
        <div className="about-skills">
          <div className="about-skill">
            <p>React</p>
            <hr style={{ width: '200%' }} />
          </div>
          <div className="about-skill">
            <p>Node.js</p>
            <hr style={{ width: '160%' }} /> {/* ~80% bar visually */}
          </div>
          <div className="about-skill">
            <p>Python</p>
            <hr style={{ width: '205%' }} />
          </div>
          <div className="about-skill">
            <p>SQL</p>
            <hr style={{ width: '150%' }} />
          </div>
          <div className="about-skill">
            <p>HTML & CSS</p>
            <hr style={{ width: '180%' }} />
          </div>
        </div>
      </div>
      <div className="about-achievements">
        <div className="achievements">
          <h1>Fresher+</h1>
        </div>
        <div className="achievements">
          <h1>10+</h1>
          <p>PROJECTS COMPLETED</p>
        </div>
      </div>
    </div>
  );
};

export default About;
