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
import Accordion from "@mui/material/Accordion";
import AccordionSummary from "@mui/material/AccordionSummary";
import AccordionDetails from "@mui/material/AccordionDetails";


import ExpandMoreIcon from '@mui/icons-material/ExpandMore';
import PersonIcon from '@mui/icons-material/Person';
import CopyAllIcon from '@mui/icons-material/CopyAll';

const EMAILS = [
  "foo@example.com",
  "bar@example.org",
  "quux@example.net",
]

class Page7 extends React.Component {
  state = { opened: false, email: EMAILS[0], expanded: null }

  handleAccordionChange(param) {
    if (this.state.expanded === param) {
      this.setState({ expanded: null });
    } else {
      this.setState({ expanded: param });
    }
  }

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
        <Grid item xs={4}>
          <Typography variant="h5">Accordions!</Typography>
          <Accordion expanded={this.state.expanded === 'panel1'} onChange={() => this.handleAccordionChange('panel1')}>
            <AccordionSummary
              expandIcon={<ExpandMoreIcon />}
              aria-controls="panel1bh-content"
              id="panel1bh-header"
            >
              <Typography sx={{ width: '33%', flexShrink: 0 }}>
                General settings
              </Typography>
              <Typography sx={{ color: 'text.secondary' }}>I am an accordion</Typography>
            </AccordionSummary>
            <AccordionDetails>
              <Typography>
                Nulla facilisi. Phasellus sollicitudin nulla et quam mattis feugiat.
                Aliquam eget maximus est, id dignissim quam.
              </Typography>
            </AccordionDetails>
          </Accordion>
          <Accordion expanded={this.state.expanded === 'panel2'} onChange={() => this.handleAccordionChange('panel2')}>
            <AccordionSummary
              expandIcon={<ExpandMoreIcon />}
              aria-controls="panel2bh-content"
              id="panel2bh-header"
            >
              <Typography sx={{ width: '33%', flexShrink: 0 }}>Users</Typography>
              <Typography sx={{ color: 'text.secondary' }}>
                You are currently not an owner
              </Typography>
            </AccordionSummary>
            <AccordionDetails>
              <Typography>
                Donec placerat, lectus sed mattis semper, neque lectus feugiat lectus,
                varius pulvinar diam eros in elit. Pellentesque convallis laoreet
                laoreet.
              </Typography>
            </AccordionDetails>
          </Accordion>
          <Accordion expanded={this.state.expanded === 'panel3'} onChange={() => this.handleAccordionChange('panel3')}>
            <AccordionSummary
              expandIcon={<ExpandMoreIcon />}
              aria-controls="panel3bh-content"
              id="panel3bh-header"
            >
              <Typography sx={{ width: '33%', flexShrink: 0 }}>
                Advanced settings
              </Typography>
              <Typography sx={{ color: 'text.secondary' }}>
                Filtering has been entirely disabled for whole web server
              </Typography>
            </AccordionSummary>
            <AccordionDetails>
              <Typography>
                Nunc vitae orci ultricies, auctor nunc in, volutpat nisl. Integer sit
                amet egestas eros, vitae egestas augue. Duis vel est augue.
              </Typography>
            </AccordionDetails>
          </Accordion>
          <Accordion expanded={this.state.expanded === 'panel4'} onChange={() => this.handleAccordionChange('panel4')}>
            <AccordionSummary
              expandIcon={<ExpandMoreIcon />}
              aria-controls="panel4bh-content"
              id="panel4bh-header"
            >
              <Typography sx={{ width: '33%', flexShrink: 0 }}>Personal data</Typography>
            </AccordionSummary>
            <AccordionDetails>
              <Typography>
                Nunc vitae orci ultricies, auctor nunc in, volutpat nisl. Integer sit
                amet egestas eros, vitae egestas augue. Duis vel est augue.
              </Typography>
            </AccordionDetails>
          </Accordion>
        </Grid>
      </React.Fragment>
    );
  };
}

export default Page7;
