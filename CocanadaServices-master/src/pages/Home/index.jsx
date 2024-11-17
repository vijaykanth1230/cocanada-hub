import React from 'react';
import styles from './index.module.css';
import { useNavigate } from 'react-router-dom';
import Footer from '../../common/Footer/Footer';
import banner from '../../assets/hero-section-image.png';
export const Home = () => {
  const navigate = useNavigate();

  return (
    <div>
      <div className={styles.container}>
        <div className={styles.mainContent}>
          
          <div className={styles.textSection}>
            <div className={styles.textContent}>
              Experienced in delivering <span className={styles.highlight}>BPO services </span> and <span className={styles.highlight}>Trainings</span> tailored to meet your business needs.
            </div>
            <div className={styles.textDescription}>
              Cocanda BPO Services (Pvt) Ltd offers a wide range of professional services, including Telecalling, Data Entry, Recovering, Recruiting, and more. Our dedicated team ensures top-notch service delivery, tailored to meet the unique needs of businesses across various sectors.
            </div>
            <div className={styles.buttons}>
              <button
                className={styles.primaryButton}
                onClick={() => navigate('/careers')}
              >
                Contact us
              </button>
              <button 
                className={styles.secondaryButton}
                onClick={() => navigate('/aboutus')}
              >
                View more
              </button>
            </div>
          </div>

          <div className={styles.imageSection}>
            <img
              src={banner}
              alt="Hero-banner"
              className={styles.image}
            />
          </div>

        </div>
      </div>
      <div>
        <Footer />
      </div>
    </div>
  );
};

export default Home;
