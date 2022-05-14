import React from 'react';

import Typography from '@mui/material/Typography';
import Grid from '@mui/material/Grid';

class Page5 extends React.Component {
  render() {
    return (
      <Grid container spacing={2}>
        <Grid item xs={12}>
          <Typography variant="h4">Table Layouts</Typography>
        </Grid>
        <Grid item xs={12}>
          <Typography variant="body1">
            Tables are just columnar represented data (that's a fancy word
            meaning "made of columns") in a layout that's easy to read. They're
            not generally used for laying out anything other than data anymore,
            but some people still use these for laying out paragraphs and images.
          </Typography>
          <br />
          <Typography variant="body1">
            Like most of the things we'll cover, layouts tend to differ in
            behavior when the "viewport" (another fancy word for your browser
            window) is resized. So take a minute and resize your browser a few
            times to see how things behave. Tables do not change organization on
            the page when the browser is resized.
          </Typography>
        </Grid>
        <Grid item xs={12}>
          <table style={{ width: "100%", border: "1px solid black" }}>
            <tr>
              <th>Name</th>
              <th>Gender</th>
              <th>Age</th>
            </tr>
            <tr>
              <td>Yuqing</td>
              <td>Female</td>
              <td>32</td>
            </tr>
            <tr>
              <td>Scarlett</td>
              <td>Female</td>
              <td>3</td>
            </tr>
            <tr>
              <td>Erik</td>
              <td>Male</td>
              <td>44</td>
            </tr>
          </table>
        </Grid>
      </Grid>
    );
  };
}

export default Page5;
