import React from 'react';

import '@fontsource/roboto/300.css';
import '@fontsource/roboto/400.css';
import '@fontsource/roboto/500.css';
import '@fontsource/roboto/700.css';

import Button from '@mui/material/Button';

import Page1 from './pages/1';
import Page2 from './pages/2';
import Page3 from './pages/3';
import Page4 from './pages/4';
import Page5 from './pages/5';
import Page6 from './pages/6';
import Page7 from './pages/7';
import Page8 from './pages/8';

const PAGES = [
  <Page1 />,
  <Page2 />,
  <Page3 />,
  <Page4 />,
  <Page5 />,
  <Page6 />,
  <Page7 />,
  <Page8 />,
];


class App extends React.Component {
  state = { page: 1 }

  setPage(page) {
    if (page < 1) {
      page = 1;
    }
    
    if (page > PAGES.length) {
      page = PAGES.length;
    }

    document.cookie = `a=${page};`;
    this.setState({ page })
  }

  componentDidMount() {
    const cookie = document.cookie
      .split('; ')
      .find(row => row.startsWith('a='));

    if (cookie) {
      let cookieValue = cookie.split("=")[1]
      this.setState({ page: parseInt(cookieValue) || 1 });
    }
  }

  render() {
    let page = PAGES[this.state.page-1];

    return (
      <div style={{ margin: "5%" }}>
        <div style={{ width: "80%", marginLeft: "auto", marginRight: "auto" }}>
          {page}
        </div>
        <div style={{ width: "100%", textAlign: "right" }}>
          {this.state.page > 1 ? <Button onClick={() => { this.setPage(this.state.page - 1) }}>Back</Button> : "" }
          {this.state.page < PAGES.length ? <Button onClick={() => { this.setPage(this.state.page + 1) }}>Next</Button> : "" }
        </div>
      </div>
    )
  }
}

export default App;
