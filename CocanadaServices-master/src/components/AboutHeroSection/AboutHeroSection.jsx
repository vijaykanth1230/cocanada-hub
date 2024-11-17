import React from 'react'
import AboutHeroSectionCss from './about-hero-section.module.scss';
import HeroSectionImage1 from '../../assets/aboutUS/about-us-hero-1.svg';
import HeroSectionImage2 from '../../assets/aboutUS/about-us-hero-2.svg';
import HeroSectionImage3 from '../../assets/aboutUS/about-us-hero-3.svg';
import HeroSectionImage4 from '../../assets/aboutUS/about-us-hero-4.svg';
import DesignBlue from '../../assets/aboutUS/design-blue-cruve.svg';
import DesignGreen from '../../assets/aboutUS/design-green-cruve.svg';

function AboutHeroSection() {
  return (
    <div className={AboutHeroSectionCss['hero-section']}>
        <div className={AboutHeroSectionCss['hero-section-layer1']}>
            <div className={AboutHeroSectionCss['hero-section-layer1-right']} >
                <img src={HeroSectionImage1} alt="HeroSectionImage1" />
                <img src={HeroSectionImage2} alt="HeroSectionImage2" />
            </div>
            <div className={AboutHeroSectionCss['hero-section-layer1-left']} >
                <h3>About Us</h3>
                <p>At <span>Cocanda Services</span>, we are a team of passionate individuals who are committed to delivering the best to our customers. We are a team of passionate individuals who are committed to delivering the best to our customers.</p>
            </div>
        </div>
        <div className={AboutHeroSectionCss['hero-section-layer2']}>
            <img src={HeroSectionImage3} alt="HeroSectionImage3" />
            <img src={HeroSectionImage4} alt="HeroSectionImage4" />
        </div>
        <img src={DesignBlue} alt="DesignBlue" className={AboutHeroSectionCss['design-blue']} />
        <img src={DesignGreen} alt="DesignGreen" className={AboutHeroSectionCss['design-green']} />

    </div>
  )
}

export default AboutHeroSection