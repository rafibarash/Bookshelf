import React, { useState, useEffect } from 'react';
import generateMatchup from '../utils/matchup';

const CurrentMatchup = ({ tier }) => {
  const [matchup, setMatchup] = useState(['', '']);
  const [team1, team2] = matchup;

  const handleClick = () => {
    setMatchup(generateMatchup(tier));
  };

  return (
    <>
      <input
        type="submit"
        value={'Generate Matchup!'}
        onClick={() => handleClick()}
      />
      <h3>Current Matchup</h3>
      <p>{`${team1} vs ${team2}`}</p>
    </>
  );
};

export default CurrentMatchup;
