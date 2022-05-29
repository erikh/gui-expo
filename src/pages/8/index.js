import React from 'react';

import Typography from '@mui/material/Typography';
import Grid from '@mui/material/Grid';
import Fade from '@mui/material/Fade';

const STATEMENTS = [
  "I hope you enjoyed this tour!",
  "I have many things I want to show you about computers",
  "You just have to open your mind to them, and put the time in",
  "Happy Birthday!",
  "I love you."
]

class Page8 extends React.Component {
  state = { rotate: 0 }
  interval = null;

  rotate = () => {
    let res = this.state.rotate;
    if (res >= STATEMENTS.length) {
      res = 0
    } else {
      res++
    }

    this.setState({ rotate: res })
  }

  componentDidMount() {
    this.interval = setInterval(() => this.rotate(),  5000);
  }

  componentWillUnmount() {
    clearInterval(this.interval)
  }

  render() {
    return (
      <Grid container spacing={2}>
        <Grid item xs={12}>
          <Typography variant="h4">Bye for now!</Typography>
        </Grid>
        <Grid item xs={12}>
          {STATEMENTS.map((s, i) => (
            <Fade key={s} timeout={1000} in={this.state.rotate === i}><Typography variant="h6">{s}{i < STATEMENTS.length - 1 ? " ... " : "" }</Typography></Fade>
          ))}
        </Grid>
      </Grid>
    );
  };
}

export default Page8;

