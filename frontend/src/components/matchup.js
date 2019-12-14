import React, { useState, useEffect } from 'react';
import generateMatchup from '../utils/matchup';

/**
 * React component displaying the current matchup
 *
 * @param {tier} index to represent whether the current tier is broken, top, middle, or scrub
 */
const Matchup = ({ tier }) => {
  const [matchup, setMatchup] = useState(['', '']);
  const [team1, team2] = matchup;

  const handleClick = () => {
    setMatchup(generateMatchup(tier));
  };

  useEffect(() => {
    setMatchup(['', '']);
  }, [tier]);

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

export default Matchup;
