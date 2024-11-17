import React from 'react';
import styles from "./Services.module.scss";
import speaker from '../../assets/services/speaker.png';
import mortage from '../../assets/services/mortage.png';
import kyc from '../../assets/services/kyc.png';
import training from '../../assets/services/training.png';
import telecall from '../../assets/services/telecall.png';
import finance from '../../assets/services/finance.png';
import recuirting from '../../assets/aboutUS/recuirting.jpg';
import Footer from '../../common/Footer/Footer';
const Services = () => {
  const services = [
    {
      name: "Mortgage Project",
      description: "Data entry for previous project with 3 months of work experience.",
      image: mortage
    },
    {
      name: "Telecalling",
      description: "Handling telecalling services for customer support.",
      image: telecall
    },
    {
      name: "Finance Project",
      description: "Involved in various financial analysis and reporting tasks.",
      image: finance
    },
    {
      name: "KYC Project",
      description: "Ensuring Know Your Customer compliance through data validation.",
      image: kyc
    },
    {
      name: "Training Project",
      description: "Providing training and support for ongoing client projects.",
      image: training
    },
    {
      name: "Recuirting",
      description: "Overseeing the recruitment process, from candidate sourcing to onboarding.",
      image: recuirting
    }
  ];
  const handleDownload = () => {
    const link = document.createElement('a');
    link.href = '/files/ECard.pdf';;
    link.download = 'schedule.pdf';
    document.body.appendChild(link);
    link.click();
    document.body.removeChild(link);
  };
  return (
    <div>
      <div className={styles.container}>
        {/* <div>
          <button className={styles.download} onClick={handleDownload}>Download</button>
        </div> */}
        <div className={styles.centerContent}>
          <div className={styles.centerImage}>
            <img src={speaker} alt="speaker" />
          </div>
          <h1><span class={styles.our}>Our</span> <span class={styles.services}>Services</span></h1>
          <div class={styles.centerText}>
            <div className={styles.centerText}>
              "Unlock the potential of your business with our comprehensive BPO services<br />
              We specialize in streamlining operations, enhancing efficiency, and allowing<br />
              you to focus on what truly matters—driving growth and innovation"
            </div>

          </div>
          <div className={styles.servicesList}>
            {services.map(service => (
              <div className={styles.servicesContent}>
                <div className={styles.serviceheader}>
                  <img src={service.image} alt={service.name} />
                </div>
                <div className={styles.serviceText}>
                  <h3>{service.name}</h3>
                  <p>{service.description}</p>
                  {service.name === "Training Project" && (
                    <button className={styles.download} onClick={handleDownload}>  Schedule</button>
                  )}
                </div>
              </div>
            ))}
          </div>
          
          <div className={styles.foot}>
            <Footer />
          </div>
        </div>
      </div>
     
    </div>
  );
};

export default Services;