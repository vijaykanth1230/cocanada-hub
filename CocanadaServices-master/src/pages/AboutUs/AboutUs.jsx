import React from 'react';
import AboutHeroSection from '../../components/AboutHeroSection/AboutHeroSection';
import WhyChooseUsSection from '../../components/WhyChooseUsSection/whyChooseUsSection';
import ServicesWeOffer from '../../components/ServicesWeOffer/ServicesWeOffer';
import AboutUsCss from './about-us.module.scss';
import CeoDummy from '../../assets/aboutUS/CEO-dummy.jpeg';
import Footer from '../../common/Footer/Footer';

const teamMembers = [
  { name: "John Doe", role: "Web Developer", img: CeoDummy },
  { name: "Jane Smith", role: "UI/UX Designer", img: CeoDummy },
  { name: "Alice Johnson", role: "Frontend Developer", img: CeoDummy },
  { name: "Bob Williams", role: "Backend Developer", img: CeoDummy }
];

function AboutUs() {
  return (
    <>
      <AboutHeroSection />
      <WhyChooseUsSection />
      <ServicesWeOffer />
      <div className={AboutUsCss['team-container']}>
        <h1>Our Team</h1>
        <div className={AboutUsCss['team-members']}>
          {teamMembers.map((member, index) => (
            <div key={index} className={AboutUsCss['team-member']}>
              <img src={member.img} alt={member.name} className={AboutUsCss['member-image']} />
              <h3>{member.name}</h3>
              <p>{member.role}</p>
            </div>
          ))}
        </div>
      </div>
      <Footer/>
    </>
  );
}

export default AboutUs;
