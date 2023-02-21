import React from "react";

const personalInfoContent = [
  { meta: "first name", metaInfo: "Yeabsira" },
  { meta: "last name", metaInfo: "Gashaw" },
  { meta: "Nationality", metaInfo: "Ethiopian" },
  { meta: "Address", metaInfo: "Addis Ababa" },
  { meta: "phone", metaInfo: "+251923930947" },
  { meta: "Email", metaInfo: "yeabsira@eaglelionsystems.com" },
  { meta: "Skype", metaInfo: "live:45ca2ae6ec081796" },
  { meta: "languages", metaInfo: "English, Amharic" },
];

const PersonalInfo = () => {
  return (
    <ul className="about-list list-unstyled open-sans-font">
      {personalInfoContent.map((val, i) => (
        <li key={i}>
          <span className="title">{val.meta}: </span>
          <span className="value d-block d-sm-inline-block d-lg-block d-xl-inline-block">
            {val.metaInfo}
          </span>
        </li>
      ))}
    </ul>
  );
};

export default PersonalInfo;
