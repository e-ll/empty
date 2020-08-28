import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import YouTube from 'react-youtube';
import Yout from './Yout'
const useStyles = makeStyles({
  full_height: {
    height: '700px'
  }
});

export default function Videos() {
  const classes = useStyles();

  return (
    <div className={classes.full_height}>
     <Yout/>
    </div>
  );
}
