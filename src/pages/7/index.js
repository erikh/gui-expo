import React from 'react';

import { blue } from '@mui/material/colors';
import Typography from '@mui/material/Typography';
import Grid from '@mui/material/Grid';
import Button from '@mui/material/Button';
import Dialog from '@mui/material/Dialog';
import DialogTitle from '@mui/material/DialogTitle';
import List from '@mui/material/List';
import ListItem from '@mui/material/ListItem';
import ListItemText from '@mui/material/ListItemText';
import ListItemAvatar from '@mui/material/ListItemAvatar';
import Avatar from '@mui/material/Avatar';
import Alert from '@mui/material/Alert';
import AlertTitle from '@mui/material/AlertTitle';
import LinearProgress from '@mui/material/LinearProgress';
import SpeedDial from "@mui/material/SpeedDial";
import SpeedDialIcon from "@mui/material/SpeedDialIcon";
import SpeedDialAction from "@mui/material/SpeedDialAction";
import Card from "@mui/material/Card";
import CardMedia from "@mui/material/CardMedia";
import CardContent from "@mui/material/CardContent";
import CardActions from "@mui/material/CardActions";


import PersonIcon from '@mui/icons-material/Person';
import CopyAllIcon from '@mui/icons-material/CopyAll';

const EMAILS = [
  "foo@example.com",
  "bar@example.org",
  "quux@example.net",
]

class Page7 extends React.Component {
  state = { opened: false, email: EMAILS[0] }

  handleListItemClick(email) {
    this.setState({ email, opened: false })
  }

  handleOpen() {
    this.setState({ opened: true })
  }

  handleClose() {
    this.setState({ opened: false })
  }

  render() {
    return (
      <React.Fragment>
        <Grid container spacing={2}>
          <Grid item xs={12}>
            <Typography variant="h4">More Widgets</Typography>
          </Grid>
          <Grid item xs={12}>
            <Typography variant="body1">
              Here are some more widgets you may encounter in your travels!
            </Typography>
          </Grid>
          <Grid item xs={4}>
            <Typography variant="h5">Alerts:</Typography>
            <br />
            <Alert severity="error">
              <AlertTitle>Error</AlertTitle>
              This is an error
            </Alert>
          </Grid>
          <Grid item xs={4}>
            <Typography variant="h5">Dialogs:</Typography>
            <br />
            <Button variant="outlined" onClick={() => { this.handleOpen() }}>
              Click me: {this.state.email}
            </Button>
            <Dialog onClose={() => { this.handleClose() }} open={this.state.opened}>
              <DialogTitle>Set backup account</DialogTitle>
              <List sx={{ pt: 0 }}>
                {EMAILS.map((email) => (
                  <ListItem button onClick={() => this.handleListItemClick(email)} key={email}>
                    <ListItemAvatar>
                      <Avatar sx={{ bgcolor: blue[100], color: blue[600] }}>
                        <PersonIcon />
                      </Avatar>
                    </ListItemAvatar>
                    <ListItemText primary={email} />
                  </ListItem>
                ))}
              </List>
            </Dialog>
          </Grid>
          <Grid item xs={4}>
            <Typography variant="h5">Progress Bar:</Typography>
            <br />
            <LinearProgress variant="determinate" value={80} /> 
          </Grid>
        </Grid>
        <Grid item xs={4}>
          <Typography variant="h5">Speed Dials:</Typography>
            <SpeedDial
              ariaLabel="SpeedDial basic example"
              icon={<SpeedDialIcon />}
            >
              <SpeedDialAction
                key="copy"
                icon={<CopyAllIcon />}
                tooltipTitle="copy"
              />
            </SpeedDial>
        </Grid>
        <Grid item xs={4}>
          <Typography variant="h5">Cards:</Typography>
          <Card sx={{ maxWidth: 345 }}>
            <CardMedia
              component="img"
              height="140"
              image="/contemplative-reptile.jpg"
              alt="green iguana"
            />
            <CardContent>
              <Typography gutterBottom variant="h5" component="div">
                Lizard
              </Typography>
              <Typography variant="body2" color="text.secondary">
                Lizards are a widespread group of squamate reptiles, with over 6,000
                species, ranging across all continents except Antarctica
              </Typography>
            </CardContent>
            <CardActions>
              <Button size="small">Share</Button>
              <Button size="small">Learn More</Button>
            </CardActions>
          </Card>
        </Grid>
      </React.Fragment>
    );
  };
}

export default Page7;
