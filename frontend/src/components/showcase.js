import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import { Typography, Box } from '@material-ui/core';

import Matchup from './matchup';

const useStyles = makeStyles({
  root: {
    minHeight: '400px',
    padding: '3rem',
    background: '#e3f2fd',
    textAlign: 'center',
  },
  header: {
    paddingBottom: '1rem',
  },
});

const Header = ({ classes }) => (
  <Typography variant="h2" component="h1" className={classes.header}>
    Andy and Rafi Play 2K
  </Typography>
);

/**
 * React component displaying the current matchup
 *
 * @param {tier} index to represent whether the current tier is broken, top, middle, or scrub
 */
const Showcase = ({ tier }) => {
  const classes = useStyles();
  return (
    <Box className={classes.root}>
      <Header classes={classes} />
      <Matchup tier={tier} />
    </Box>
  );
};

export default Showcase;
