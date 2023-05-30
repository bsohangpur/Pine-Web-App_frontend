import React from 'react';
import { SocialMedia } from '../components';
import { ContactSection, ContactHero, PrivacyPolicyContainer } from '../containers';

const Contact = () => {
    return (
        <section className="">
            <ContactHero />
            <ContactSection />
            <PrivacyPolicyContainer/>
            <SocialMedia />
        </section>
    )
}

export default Contact
