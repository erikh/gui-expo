import React from 'react';

import Typography from '@mui/material/Typography';
import Grid from '@mui/material/Grid';
import Fade from '@mui/material/Fade';

const STATEMENTS = [
  "I hope you enjoyed this tour!",
  "I have many things I want to show you about computers",
  "You just have to open your mind to them, and put the time in",
  "I love you."
]

class Page8 extends React.Component {
  state = { rotate: 0 }

  rotate() {
    let res = this.state.rotate;
    if (res > STATEMENTS.length) {
      res = -1;
    }

    res++;

    this.setState({ rotate: res })
  }

  componentDidMount() {
    setInterval(() => { this.rotate() },  5000);
  }

  render() {
    return (
      <Grid container spacing={2}>
        <Grid item xs={12}>
          <Typography variant="h4">Bye for now!</Typography>
        </Grid>
        <Grid item xs={12}>
          {STATEMENTS.map((s, i) => (
            <Fade key={s} in={this.state.rotate === i}><Typography variant="h6">{s}</Typography></Fade>
          ))}
        </Grid>
      </Grid>
    );
  };
}

export default Page8;

