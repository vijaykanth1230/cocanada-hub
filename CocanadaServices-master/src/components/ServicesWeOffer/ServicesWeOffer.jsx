import React from 'react'
import { useNavigate } from 'react-router-dom';
import ServicesWeOfferCss from './services-we-offer.module.scss';
import recuirtingIcon from '../../assets/aboutUS/recuirting.jpg';
import telecallingIcon from '../../assets/aboutUS/tele-calling.png';
import dataEntryIcon from '../../assets/aboutUS/data-entry.png';
import recoveringIcon from '../../assets/aboutUS/recovery.png';

function ServicesWeOffer() {
  const navigate = useNavigate();
  return (
    <div className={ServicesWeOfferCss['services-we-offer-container']}>
        {/* <hr/> */}
        <h1>Services We Offer</h1>
        <div className={ServicesWeOfferCss['services-we-offer-section']}>
            <div className={ServicesWeOfferCss['services-we-offer-container-left']} >
                <p>Cocanda BPO Services (Pvt) Ltd provides expert Telecalling, Data Entry, Recovering, Recruiting, and other BPO solutions to meet diverse business needs.</p>
                <div className={ServicesWeOfferCss['btns-wrapper']}>
                    <button className={ServicesWeOfferCss['btn']} onClick={() => navigate('/services')}>Read More</button>
                    <button className={ServicesWeOfferCss['btn']} onClick={() => navigate('/careers')}>Contact Us</button>
                </div>
            </div>

            <div className={ServicesWeOfferCss['services-we-offer-container-right']} >
                <div className={ServicesWeOfferCss['services-we-offer-container-right-layer1']}>
                    <div className={ServicesWeOfferCss['service']}> 
                        <img src={recuirtingIcon} alt="recuirting"/>
                        <p>Recruiting</p>
                    </div>
                    <div className={ServicesWeOfferCss['service']}>
                        <img src={telecallingIcon} alt="telecalling"/>
                        <p>Telecalling</p>
                    </div>
                </div>
                <div className={ServicesWeOfferCss['services-we-offer-container-right-layer2']}>
                    <div className={ServicesWeOfferCss['service']}>
                        <img src={dataEntryIcon} alt="dataEntry"/>
                        <p>Data Entry</p>
                    </div>
                    <div className={ServicesWeOfferCss['service']}>
                        <img src={recoveringIcon} alt="recovering"/>
                        <p>Recovering</p>
                    </div>
                </div>
            </div>
        </div>
    </div>
  )
}

export default ServicesWeOffer