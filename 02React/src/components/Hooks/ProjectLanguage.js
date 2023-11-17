import React, { useState } from "react";
import EssayFirst from "./EssayFirst";
import EssaySecound from "./EssaySecound";
import { LanguageContext } from "../context/userData";

const ProjectLanguage = () => {
  const [selectedOption, setSelectedOption] = useState("English");

  const handleChange = (event) => {
    setSelectedOption(event.target.value);
  };
  return (
    <div>
      <h2>Project Language</h2>
      <div>
        <label>Change Language</label>
        <select value={selectedOption} onChange={handleChange}>
          <option value="English">English</option>
          <option value="Hindi">Hindi</option>
          <option value="Tamil">Tamil</option>
          <option value="Telugu">Telugu</option>
        </select>
      </div>
      {/* <div>
        <EssayFirst selectedOption={selectedOption}/>
        <EssaySecound selectedOption={selectedOption}/>
      </div> */}
      <div>
        <LanguageContext.Provider value={selectedOption}>
            <EssayFirst />
            <EssaySecound />
        </LanguageContext.Provider>
      </div>
    </div>
  );
};

export default ProjectLanguage;
