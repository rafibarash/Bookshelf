import React, { useState } from 'react';

import { TEAMS } from '../data/teams';

/**
 * Teams component to display all teams in a tier
 *
 * @param {props} contains tier and setTier
 */
const Teams = ({ tier, setTier }) => {
  const [teams, setTeams] = useState(TEAMS[tier]);
  const TIERS = ['Broken', 'Top', 'Mid', 'Scrubs'];

  const handleTierChange = e => {
    const tier = e.target.value;
    setTier(tier);
    setTeams(TEAMS[tier]);
  };

  return (
    <>
      <select name="tierNames" onChange={e => handleTierChange(e)}>
        {TIERS.map((tier_name, i) => (
          <option value={i} key={tier_name}>
            {tier_name}
          </option>
        ))}
      </select>
      <p>tier: {tier}</p>
      <h3>Teams</h3>
      <ul>
        {teams.map(team => (
          <li key={team}>{team}</li>
        ))}
      </ul>
    </>
  );
};

export default Teams;
