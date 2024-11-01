import React from "react";
import "../styles/Skill.css"
import SkillList from "../constants/SkillList";
import SkillCard from "./SkillCard";
function Skill() {
  return (
    <div className="skills-container">
      <h2 className="skills-title">Skills & Hobbies</h2>
      <div className="skills-section">
        {SkillList.map((skill, index) => (
          <SkillCard key={index} {...skill} />
        ))}
      </div>
    </div>
  );
}
export default Skill;