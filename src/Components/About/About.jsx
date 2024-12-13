import profile from '../../assets/profile.jpg';
import "./About.css"
const About = () => {
  return (
    <div className='about' id ="about">
      <div className="about-title">
        <h1>About Me</h1>
      </div>
      <div className="about-sections"> {/* Make sure it's named consistently in CSS */}
        <div className="about-left">
            <img src={profile} alt=""/>
        </div>
        <div className="about-right">
          <div className="about-para">
          <p>
          🔥Passionate Full-Stack Web Developer proficient in <strong>React</strong>, <strong>SQL</strong>, and <strong>Python</strong>, specializing in creating dynamic and responsive web applications.
</p>
<p>
🚀Expertise in blending <strong>seamless front-end designs</strong> with <strong>scalable back-end systems</strong>, ensuring exceptional performance and user experience.
</p>
<p>
🌟Actively exploring the latest technologies to deliver <strong>innovative solutions</strong>, solve challenges, and craft efficient, maintainable code tailored to business needs.
</p>

</div>
        </div>
        <div className="about-skills">
          <div className="about-skill">
            <p>React</p>
            <hr style={{ width: '200%' }} />  
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
