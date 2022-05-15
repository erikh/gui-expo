import React from 'react';

import Typography from '@mui/material/Typography';
import Grid from '@mui/material/Grid';

class Page6 extends React.Component {
  render() {
    return (
      <React.Fragment>
        <Grid container spacing={2}>
          <Grid item xs={12}>
            <Typography variant="h4">Grid Layouts</Typography>
          </Grid>
          <Grid item xs={12}>
            <Typography variant="body1">
              Grid Layouts allow you to set up a content flow which better
              matches the size of the viewport; for example if you were making a
              page that works well on a big screen and a mobile phone. This page
              (and all these informational pages) use a Grid layout.
            </Typography>
            <br />
            <Typography variant="body1">
              A grid typically works with what are called 12 "cells", each
              representing an equal amount of width in the page. To define the
              grid, you simply tell it how many cells each element takes. Then the
              computer will dynamically calculate it based on the size of the
              window. Neat!
            </Typography>
            <br />
            <Typography variant="body1">
              For the example below, pay attention to how the cells move when the
              window is resized! Also, try viewing this on your mobile device!
            </Typography>
          </Grid>
        </Grid>
        <br />
        <Grid container spacing={2}>
          <Grid item xs={2}>
            <center>One</center>
          </Grid>
          <Grid item xs={2}>
            <center>Two</center>
          </Grid>
          <Grid item xs={2}>
            <center>Three</center>
          </Grid>
          <Grid item xs={2}>
            <center>Four</center>
          </Grid>
          <Grid item xs={2}>
            <center>Five</center>
          </Grid>
          <Grid item xs={2}>
            <center>Six</center>
          </Grid>
          <Grid item xs={4}>
            <center>One</center>
          </Grid>
          <Grid item xs={4}>
            <center>Two</center>
          </Grid>
          <Grid item xs={4}>
            <center>Three</center>
          </Grid>
          <Grid item xs={6}>
            <center>One</center>
          </Grid>
          <Grid item xs={6}>
            <center>Two</center>
          </Grid>
          <Grid item xs={12}>
            <center>One</center>
          </Grid>
        </Grid>
      </React.Fragment>
    );
  };
}

export default Page6;
