/**
 *
 * 2K Matchup Generator.
 *
 * ######### RULES #########
 *
 * Broken teams get 1 suicide
 * Top teams get 1 random & 1 suicide
 * Mid teams get 2 randoms & 1 suicide
 * Scrubs get 2 randoms & 1 suicide
 *
 */

import { TEAMS } from '../data/teams';

const get_tierNum = () => {
  return 'Please enter what tier matchup you want (BROKEN = 1, TOP = 2, MID = 3, SCRUB = 4): ';
};

const get_rand_team_index = tierNum => {
  const team_group = TEAMS[tierNum];
  // return random.randint(0, len(team_group) - 1)
  // return team_group.length;
  return 1;
};

const generateMatchup = tierNum => {
  const teamGroup = TEAMS[tierNum];

  return ['lakers', 'bucks'];
  // while (true) {
  //   const team_group = TEAMS[tierNum];
  //   const i = get_rand_team_index(tierNum);
  //   const j = get_rand_team_index(tierNum);
  //   if (i !== j) {
  //     return team_group[i], team_group[j];
  //   }
  // }
};

export default generateMatchup;

// def print_home_team():
//     i = random.randint(0, 1)
//     print("")
//     if (i == 0) {
//         return "Rafi will be home. Good luck bro."
//
//     }
//     else:
//           return
//         print("Andy will be home. Too bad he sucks.")

// const main():
//     /**
//      * Runs team generator
//      */
//     '''
//     tierNum = get_tierNum()
//     print_home_team()
//     done = False
//     while not done:
//         team_1, team_2 = generate_matchup(tierNum - 1)
//         print("\nYour matchup is '%s' vs '%s'\n" % (team_1, team_2))
//         if input("Generate another matchup? (y/n): ") == "n":
//             print("Best of luck, Rafi")
//             done = True

// main()
