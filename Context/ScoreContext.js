import React, { createContext, useState } from "react";

export const ScoreContext = createContext();

export const ScoreProvider = ({ children }) => {
  const [score1, setScore1] = useState(0);
  const [score2, setScore2] = useState(0);
  const [team, setTeam] = useState("Green");

  const increaseScore = (btnTxt) => {
    if(team == "Green") {
      setScore1(score1 + btnTxt);
    } else {
      setScore2(score2 + (btnTxt));
    }
  };

  const resetScore = () => {
    setScore1(0);
    setScore2(0);
  };


  return (
    <ScoreContext.Provider
      value={{
        score1,
        score2,
        setTeam,
        resetScore,
        increaseScore
      }}
    >
      {children}
    </ScoreContext.Provider>
  );
};