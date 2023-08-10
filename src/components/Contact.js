import styles from '../styles/Contact.module.css';

import React, { useState } from 'react';

function Contact() {
    const [formData, setFormData] = useState({ name: '', email: '', message: '' });
    const [errors, setErrors] = useState({});
    const [submitted, setSubmitted] = useState(false);

    const validateEmail = email => {
        const regex = /^[a-zA-Z0-9._-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,6}$/;
        return regex.test(email);
    };

    const handleChange = e => {
        const { name, value } = e.target;
        setFormData(prev => ({ ...prev, [name]: value }));

        if (!value) {
            setErrors(prev => ({ ...prev, [name]: `${name} is required` }));
        } else if (name === 'email' && !validateEmail(value)) {
            setErrors(prev => ({ ...prev, [name]: 'Email is invalid' }));
        } else {
            setErrors(prev => ({ ...prev, [name]: '' }));
        }
    };

    const handleSubmit = e => {
        e.preventDefault();
        if (!errors.name && !errors.email && !errors.message) {
            setFormData({ name: '', email: '', message: '' }); // Clearing the form data
            setSubmitted(true);
        }
    };

    return (
        <section className={styles.Contact}>
            <form onSubmit={handleSubmit}>
                
                <input
                    type="text"
                    name="name"
                    placeholder="Name"
                    onChange={handleChange}
                    required
                    value={formData.name}
                />
                {errors.name && <span>{errors.name}</span>}
                
                <input
                    type="email"
                    name="email"
                    placeholder="Email"
                    onChange={handleChange}
                    required
                    value={formData.email}
                />
                {errors.email && <span>{errors.email}</span>}
                
                <textarea
                    name="message"
                    placeholder="Message"
                    onChange={handleChange}
                    required
                    value={formData.message}
                ></textarea>
                {errors.message && <span>{errors.message}</span>}

                <button type="submit">Submit</button>

            </form>
            {submitted && <p>Thanks for your message, we'll be in contact soon!</p>}
        </section>
    );
}

export default Contact;
