import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Paper from '@material-ui/core/Paper';
import Grid from '@material-ui/core/Grid';

const useStyles = makeStyles((theme) => ({
  root: {
    flexGrow: 1,
    maxWidth:1200,
    margin:'0 auto',
    marginTop:50,
  },
  paper: {
    padding: theme.spacing(2),
    textAlign: 'center',
    color: theme.palette.text.secondary,
  },
}));

export default function InfoPanel() {
  const classes = useStyles();

  return (
    <div className={classes.root}>
      <Grid container spacing={3}>
        <Grid item xs={12} sm={4}>
          <Paper elevation={3}  className={classes.paper}>xs=12</Paper>
        </Grid>
        <Grid item xs={12} sm={4}>
          <Paper elevation={3}  className={classes.paper}>xs=12</Paper>
        </Grid>
        <Grid item xs={12} sm={4}>
          <Paper elevation={3}  className={classes.paper}>xs=12</Paper>
        </Grid>
      </Grid>
    </div>
  );
}
