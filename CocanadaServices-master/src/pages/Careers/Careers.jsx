import React, { useState } from 'react';
import styles from './Careers.module.scss';
import emailjs from 'emailjs-com';
const Careers= () => {
    const initialFormData = {
        name: '',
        email: '',
        phone: '',
        resume: null,
        employmentType: ''
    };

    const [formData, setFormData] = useState(initialFormData);

    const handleChange = (e) => {
        const { name, value, files } = e.target;
        setFormData({
            ...formData,
            [name]: files ? files[0] : value
        });
    };

    const handleSubmit = (e) => {
        e.preventDefault();
        console.log('Form submitted:', formData);
        emailjs.send(
            'service_xf76z3t',            // Service ID from EmailJS
            'template_b1t302u',           // Template ID from EmailJS
            formData,                     // The form data
            'WBmkcIHD-ICg3Ru3L'                // User ID from EmailJS
        ).then((result) => {
            console.log('Email successfully sent!', result.text);
            setFormData({ name: '', email: '', employmentType: '', resume: '' });  // Reset form
        }).catch((error) => {
            console.log('Error sending email:', error.text);
        });
        setFormData(initialFormData);
    };

    return (
        <div className={styles.parent}>
        <div className={styles.careersFormContainer}>
            <h2>Join Our Team</h2>
            <form onSubmit={handleSubmit} className={styles.careersForm}>
                <div className={styles.formGroup}>
                    <label htmlFor="name">Full Name</label>
                    <input
                        type="text"
                        id="name"
                        name="name"
                        value={formData.name}
                        onChange={handleChange}
                        required
                    />
                </div>
                <div className={styles.formGroup}>
                    <label htmlFor="email">Email Address</label>
                    <input
                        type="email"
                        id="email"
                        name="email"
                        value={formData.email}
                        onChange={handleChange}
                        required
                    />
                </div>
                <div className={styles.formGroup}>
                    <label htmlFor="phone">Phone Number</label>
                    <input
                        type="tel"
                        id="phone"
                        name="phone"
                        value={formData.phone}
                        onChange={handleChange}
                        required
                    />
                </div>
                <div className={styles.formGroup}>
                    <label htmlFor="employmentType">Type of Employment</label>
                    <select
                        id="employmentType"
                        name="employmentType"
                        value={formData.employmentType}
                        onChange={handleChange}
                        required
                    >
                        <option value="">Select Employment Type</option>
                        <option value="mortgage">Mortgage Project Data Entry</option>
                        <option value="telecalling">Telecalling</option>
                        <option value="finance">Finance Project</option>
                        <option value="kyc">KYC Project</option>
                        <option value="training">Training Project</option>
                    </select>
                </div>
                <div className={styles.formGroup}>
                    <label htmlFor="resume">Upload Resume</label>
                    <input
                        type="file"
                        id="resume"
                        name="resume"
                        accept=".pdf, .doc, .docx"
                        onChange={handleChange}
                        required
                    />
                </div>
                <button type="submit" className={styles.submitButton}>Submit Application</button>
            </form>
        </div>
        </div>
    );
};

export default Careers;
