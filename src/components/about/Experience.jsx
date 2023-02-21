import React from "react";

const experienceContent = [
  {
    year: "   2021 - Present",
    position: " Chief Technology Officer",
    compnayName: "EagleLion System Technology",
    details: `  I make all executive decisions with regard to the technological interests of a company, and am responsible for outlining the company's technology strategy and ensuring that it is executed in a timely and cost-effective manner`,
  },
  {
    year: "2020-2021",
    position: "Senior Software Engineer",
    compnayName: "GuzoGo",
    details: `I develop, test, and maintain software applications and systems. I am responsible for designing algorithms and applications that meet the business requirements of the company. `,
  },
  {
    year: "2019 - 2020",
    position: "iOS App Developer",
    compnayName: "Med Group, Med Innovation ( Italy ), Orbital ( Addis Ababa Branch )",
    details: `I design, develop, and maintain mobile applications for iOS devices such as the iPhone and iPad. This involves working with a variety of technologies, including Objective-C, Swift, and Xcode.`,
  },
];

const Experience = () => {
  return (
    <ul>
      {experienceContent.map((val, i) => (
        <li key={i}>
          <div className="icon">
            <i className="fa fa-briefcase"></i>
          </div>
          <span className="time open-sans-font text-uppercase">{val.year}</span>
          <h5 className="poppins-font text-uppercase">
            {val.position}
            <span className="place open-sans-font">{val.compnayName}</span>
          </h5>
          <p className="open-sans-font">{val.details}</p>
        </li>
      ))}
    </ul>
  );
};

export default Experience;
