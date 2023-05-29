import React from 'react';
import { ServiceCard } from '../components';
import { Hero, AboutHero, ContactSection } from '../containers';



const Home = () => {
  return (
    <section className=" ">
      <Hero />
      <AboutHero />
      <ServiceCard />
      <ContactSection />
    </section>
  )
}

export default Home
