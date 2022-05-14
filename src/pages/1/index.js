import React from 'react';

import Typography from '@mui/material/Typography';
import Grid from '@mui/material/Grid';

class Page1 extends React.Component {
  render() {
    return (
      <Grid container spacing={2}>
        <Grid item xs={12}>
          <Typography variant="h4">Hello, welcome to my widget tutorial for Max!</Typography>
        </Grid>
        <Grid item xs={12}>
          <Typography variant="body1">
            This is to teach you some UI concepts before you get started on your
            learning journey! I hope it is helpful to you. You can also find the source
            code <a href="https://github.com/erikh/gui-expo">here</a> so that you can
            learn how this application is put together when you know more!
          </Typography>
          <br />
          <Typography variant="body1">
            For now, click "next" to continue.
          </Typography>
        </Grid>
      </Grid>
    );
  };
}

export default Page1;
