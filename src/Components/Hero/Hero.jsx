import './Hero.css'
import AnchorLink  from 'react-anchor-link-smooth-scroll'
const Hero = () => {
  return (
    <div  id ="home" className='hero'>
      <h1>I am<span> Manikanta swamy</span><br/>Fullstack web developer based India</h1>
      <p>
   <strong>Dedicated to crafting impactful solutions,</strong> I bring a unique blend of creativity and technical expertise to every project. Let's build something exceptional together!
</p>
      <div className='hero-action'>
        <div className="hero-connect"><AnchorLink 
            offset={50} 
            href="#contact" 
            className="anchor-link"
          >Connect with me</AnchorLink></div>
        <div className="hero-resume">
          <a href="/Manikanta_4.pdf"
          download="Manikanta_Resume.pdf"
          className="resume-link"
          >

          My Resume⬇
          </a>
          </div>
      </div>

      
    </div>
  )
}

export default Hero
