import React from 'react'
import bannerImg from '../../assets/img/hero-bg.jpg'
import AboutSection from '../Sections/AboutSection';
import SkillsSection from '../Sections/SkillsSection';
import ResumeSection from '../Sections/ResumeSection';
import PortfolioSection from '../Sections/PortfolioSection';
import ContactSection from '../Sections/ContactSection';

function Home() {
  const backgroundStyle = {
    backgroundImage: `url(${bannerImg})`,
    backgroundSize: 'cover',
    backgroundRepeat: 'no-repeat',
    backgroundPosition: 'center',
  };
  return (
    <div className='homeWrapper'>
      <div className="bannerWrapper h-dvh" style={backgroundStyle}></div>
      <AboutSection />
      <SkillsSection />
      <ResumeSection />
      <PortfolioSection />
      <ContactSection />
    </div>
  )
}

export default Home