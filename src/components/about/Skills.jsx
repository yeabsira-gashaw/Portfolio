import React from "react";

const skillsContent = [
  { skillClass: "p95", skillPercent: "95", skillName: "iOS Dev't" },
  { skillClass: "p90", skillPercent: "90", skillName: "Web" },
  { skillClass: "p90", skillPercent: "90", skillName: "AWS" },
  { skillClass: "p90", skillPercent: "90", skillName: "DevOps" },
  { skillClass: "p85", skillPercent: "85", skillName: "Terraform" },
  { skillClass: "p90", skillPercent: "90", skillName: "React-Native" },
  { skillClass: "p85", skillPercent: "85", skillName: "Node / Express" },
  { skillClass: "p90", skillPercent: "90", skillName: "Problem Solving" },
  { skillClass: "p90", skillPercent: "90", skillName: "Security" },
  { skillClass: "p80", skillPercent: "80", skillName: "Cost Optimization" },
  { skillClass: "p85", skillPercent: "85", skillName: "Networking" },
  { skillClass: "p95", skillPercent: "95", skillName: "Team Work" },
];

const Skills = () => {
  return (
    <>
      {skillsContent.map((val, i) => (
        <div className="col-6 col-md-3 mb-3 mb-sm-5" key={i}>
          <div className={`c100 ${val.skillClass}`}>
            <span>{val.skillPercent}%</span>
            <div className="slice">
              <div className="bar"></div>
              <div className="fill"></div>
            </div>
          </div>
          <h6 className="text-uppercase open-sans-font text-center mt-2 mt-sm-4">
            {val.skillName}
          </h6>
        </div>
      ))}
    </>
  );
};

export default Skills;
