import React, { createContext, useState } from "react";

export const ScoreContext = createContext();

export const ScoreProvider = ({ children }) => {
  const [score1, setScore1] = useState(0);
  const [score2, setScore2] = useState(0);

const increaseScore = (btnTxt) => {
    setScore1(score1 + btnTxt);
    setScore2(score2+(btnTxt));
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
            resetScore,
            increaseScore
          }}
        >
          {children}
        </ScoreContext.Provider>
      );
    
    
};