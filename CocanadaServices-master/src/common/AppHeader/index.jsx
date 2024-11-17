import React, { useState } from 'react';
import styles from './index.module.css';
import logo from '../../assets/logo.png';
import { Navigate, useNavigate } from 'react-router-dom';
export const AppHeader = () => {
    const navigate = useNavigate();
    const [active, setActive] = useState('home');

  return (
    <header className={styles.header}>
         <img
            src={logo}
            alt="mahatria"
            className={styles.appIcon}
            loading="lazy"
            onClick={() => navigate('/')}
          />
      <nav className={styles.nav}>
          <div className={active === 'home'? `${styles.activeColor}`: `${styles.navElements}`} onClick = {()=>{
            setActive('home')
            navigate('/')}}>Home</div>
          <div className={active === 'aboutUs'? `${styles.activeColor}`: `${styles.navElements}`} onClick = {()=>{
            setActive('aboutUs')
            navigate('/aboutUs')}}>About us</div>
          <div className={active === 'services'? `${styles.activeColor}`: `${styles.navElements}`}onClick = {()=>{
            setActive('services')
            navigate('/services')}}>Services</div>
        <button className={styles.contactBtn} onClick = {()=>{
            setActive('contactUs')
            navigate('/careers')}}>Careers</button>
      </nav>
    </header>
  );
};


