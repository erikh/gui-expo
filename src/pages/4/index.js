import React from 'react';

import Typography from '@mui/material/Typography';
import Grid from '@mui/material/Grid';

class Page4 extends React.Component {
  render() {
    return (
      <Grid container spacing={2}>
        <Grid item xs={12}>
          <Typography variant="h4">Layouts</Typography>
        </Grid>
        <Grid item xs={12}>
          <Typography variant="body1">
            What's a layout? A layout is a pattern that describes the
            <i>structure</i> of the website, like a magazine layout, but with dynamic
            properties.
          </Typography>
          <br />
          <Typography variant="body1">
            There are several styles of layout, some are meant for whole pages,
            some for just the parts of them, like the List in the last example.
            We'll go over a few in the next page.
          </Typography>
        </Grid>
      </Grid>
    );
  };
}

export default Page4;
