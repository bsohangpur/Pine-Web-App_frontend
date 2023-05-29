import React from 'react'
import { SocialMedia } from '../components';
import { Team, TeamHero } from '../containers';
import { doctorData, managementData } from '../constants/data'

const OurTeam = () => {
    return (
        <section className="">
            <TeamHero />
            <Team title="Management" person={managementData} />
            <div id="doctor">
                <Team title="Team" person={doctorData} />
            </div>
            <SocialMedia />
        </section>
    )
}

export default OurTeam
