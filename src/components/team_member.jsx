import React from "react";
import "../styles/team_member.css"; 

const TeamMember = ({ name, role, image, email }) => {
  return (
    <div className="team-card">
      <img className="team-image" src={image} alt={name} />
      <div className="team-details">
        <h3 className="team-name">{name}</h3>
        <p className="team-role">{role}</p>
        <p className="team-role">{email}</p>
      </div>
    </div>
  );
};

export default TeamMember;
