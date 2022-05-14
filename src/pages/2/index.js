import React from 'react';

import Typography from '@mui/material/Typography';
import Grid from '@mui/material/Grid';

class Page2 extends React.Component {
  render() {
    return (
      <Grid container spacing={2}>
        <Grid item xs={12}>
          <Typography variant="h4">Basic Widgets</Typography>
        </Grid>
        <Grid item xs={12}>
          <Typography variant="body1">
            What's a widget? A Widget is a component of a web page that
            displays something or alters its appearance somehow, makes it useful to
            interact with, etc. All the items on your web pages are made of widgets.
          </Typography>
          <br />
          <Typography variant="body1">
            For example, the "next" and "back" buttons on this page are
            "Button" widgets. We'll see some more examples of widgets on the next
            page.
          </Typography>
        </Grid>
      </Grid>
    );
  };
}

export default Page2;
