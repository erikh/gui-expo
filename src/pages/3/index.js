import React from 'react';

import Typography from '@mui/material/Typography';
import Grid from '@mui/material/Grid';
import Button from '@mui/material/Button';
import FormControl from '@mui/material/FormControl';
import FormLabel from '@mui/material/FormLabel';
import FormGroup from '@mui/material/FormGroup';
import FormControlLabel from '@mui/material/FormControlLabel';
import Checkbox from '@mui/material/Checkbox';
import Radio from '@mui/material/Radio';
import RadioGroup from '@mui/material/RadioGroup';
import InputLabel from '@mui/material/InputLabel';
import Select from '@mui/material/Select';
import MenuItem from '@mui/material/MenuItem';
import List from '@mui/material/List';
import ListItem from '@mui/material/ListItem';
import ListItemText from '@mui/material/ListItemText';
import Divider from '@mui/material/Divider';

import AcUnitIcon from '@mui/icons-material/AcUnit';
import AccessibilityIcon from '@mui/icons-material/Accessibility';
import AnchorIcon from '@mui/icons-material/Anchor';
import FacebookIcon from '@mui/icons-material/Facebook';
import FreeBreakfastIcon from '@mui/icons-material/FreeBreakfast';
import OutletIcon from '@mui/icons-material/Outlet';


class Page3 extends React.Component {
  render() {
    return (
      <Grid container spacing={2}>
        <Grid item xs={12}>
          <Typography variant="h4">Basic Widgets (continued)</Typography>
        </Grid>
        <Grid item xs={12}>
          <Typography variant="body1">
            Here are some regular widgets you encounter on web pages!
          </Typography>
        </Grid>
        <Grid item xs={4}>
          <Button>A button</Button>
        </Grid>
        <Grid item xs={4}>
          <FormGroup>
            <FormControlLabel control={<Checkbox defaultChecked />} label="Checkboxes" />
            <FormControlLabel disabled control={<Checkbox />} label="Disabled Checkboxes" />
          </FormGroup>
        </Grid>
        <Grid item xs={4}>
          <FormControl>
            <FormLabel id="demo-radio-buttons-group-label">Radio Buttons</FormLabel>
            <RadioGroup
              aria-labelledby="demo-radio-buttons-group-label"
              defaultValue="these"
              name="radio-buttons-group"
            >
              <FormControlLabel value="these" control={<Radio />} label="These are called" />
              <FormControlLabel value="are" control={<Radio />} label="'Radio' buttons" />
              <FormControlLabel value="radio" control={<Radio />} label="for some godawful reason" />
            </RadioGroup>
          </FormControl>
        </Grid>
        <Grid item xs={4}>
          <FormControl fullWidth>
            <InputLabel id="demo-simple-select-label">Select</InputLabel>
            <Select
              labelId="demo-simple-select-label"
              id="demo-simple-select"
              value={10}
              label="Age"
            >
              <MenuItem value={10}>This is called</MenuItem>
              <MenuItem value={20}>A select list</MenuItem>
              <MenuItem value={30}>You can only select one thing!</MenuItem>
            </Select>
          </FormControl>
        </Grid>
        <Grid item xs={4}>
          <List component="nav" aria-label="List items">
            <ListItem button>
              <ListItemText primary="List" />
            </ListItem>
            <Divider />
            <ListItem button divider>
              <ListItemText primary="Items" />
            </ListItem>
            <ListItem button>
              <ListItemText primary="Are separated by" />
            </ListItem>
            <Divider light />
            <ListItem button>
              <ListItemText primary="Dividers" />
            </ListItem>
          </List>
        </Grid>
        <Grid item xs={4}>
          <Typography variant="h6">Icons!</Typography>
          <Grid container spacing={2}>
            <Grid item xs={4}>
              <AcUnitIcon />
            </Grid>
            <Grid item xs={4}>
              <AccessibilityIcon />
            </Grid>
            <Grid item xs={4}>
              <AnchorIcon />
            </Grid>
            <Grid item xs={4}>
              <FacebookIcon />
            </Grid>
            <Grid item xs={4}>
              <FreeBreakfastIcon />
            </Grid>
            <Grid item xs={4}>
              <OutletIcon />
            </Grid>
          </Grid>
        </Grid>
      </Grid>
    );
  };
}

export default Page3;
