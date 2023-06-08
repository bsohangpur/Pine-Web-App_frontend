import React from 'react';
import { ServiceCard } from '../components';
import { Hero, AboutHero, ContactSection } from '../containers';



const Home = () => {
  return (
    <section className=" ">
      <Hero />
      <AboutHero home={true} />
      <ServiceCard />
      <ContactSection />
    </section>
  )
}

export default Home
