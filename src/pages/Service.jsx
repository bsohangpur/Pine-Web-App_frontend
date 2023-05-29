import React from 'react';
import { ServiceCard, CompetitiveAdvantages, UsefulInformation } from '../components';
import { ServiceHero } from '../containers';

const Service = () => {
  return (
    <section className="">
      <ServiceHero />
      <ServiceCard />
      <CompetitiveAdvantages />
      <UsefulInformation />
    </section>
  )
}

export default Service
