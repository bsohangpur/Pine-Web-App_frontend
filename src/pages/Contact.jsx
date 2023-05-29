import React from 'react';
import { ContactInfo, SocialMedia } from '../components';
import { ContactSection, ContactHero } from '../containers';

const Contact = () => {
    return (
        <section className="">
            <ContactHero />
            <ContactSection />
            <ContactInfo />
            <SocialMedia />
        </section>
    )
}

export default Contact
