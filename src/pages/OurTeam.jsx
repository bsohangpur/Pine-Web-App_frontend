import React from "react";
import { SocialMedia } from "../components";
import { Team, TeamHero } from "../containers";
import Loading from "../constants/Loading";
import { useSelector } from "react-redux";

const OurTeam = () => {
  const { team, isLoading, error } = useSelector((state) => state.team);

  console.log(team);

  const managementData = team.filter((val) => val.position === "management");
  const teamData = team.filter((val) => val.position === "team");
  const doctorData = team.filter((val) => val.position === "doctor");

  if (isLoading) {
    return <Loading />;
  } else if (error) {
    return <div>error ...</div>;
  }

  return (
    <section className="">
      <TeamHero />
      {managementData.length > 0 && (
        <Team title="Management" person={managementData} />
      )}
      {teamData.length > 0 && <Team title="Team" person={teamData} />}
      <div id="doctor">
        {doctorData.length > 0 && <Team title="Doctor" person={doctorData} />}
      </div>
      <SocialMedia />
    </section>
  );
};

export default OurTeam;
