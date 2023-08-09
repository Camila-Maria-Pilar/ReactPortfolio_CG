// src/components/Contact.js

import React, { useState } from 'react';

function Contact() {
    const [formData, setFormData] = useState({ name: '', email: '', message: '' });
    const [errors, setErrors] = useState({});

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

    return (
        <section>
            <form>
                <input
                    type="text"
                    name="name"
                    placeholder="Name"
                    onChange={handleChange}
                />
                {errors.name && <span>{errors.name}</span>}
                
                <input
                    type="email"
                    name="email"
                    placeholder="Email"
                    onChange={handleChange}
                />
                {errors.email && <span>{errors.email}</span>}
                
                <textarea
                    name="message"
                    placeholder="Message"
                    onChange={handleChange}
                ></textarea>
                {errors.message && <span>{errors.message}</span>}

                {/* Submit button and other form components */}
            </form>
        </section>
    );
}

export default Contact;
