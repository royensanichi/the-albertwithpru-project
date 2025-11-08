import { createContext, useContext, useState } from "react";

const SurveyContext = createContext();

export const SurveyProvider = ({ children }) => {
  const [surveyData, setSurveyData] = useState({});

  // update or add survey answer
  const updateSurveyData = (key, value) => {
    setSurveyData((prev) => ({ ...prev, [key]: value }));
  };

  // reset all survey answers
  const resetSurvey = () => {
    setSurveyData({});
  };

  return (
    <SurveyContext.Provider
      value={{
        surveyData,
        updateSurveyData,
        resetSurvey,
      }}
    >
      {children}
    </SurveyContext.Provider>
  );
};

export const useSurvey = () => useContext(SurveyContext);
