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

class App extends React.Component {
  state = { page: 1 }

  setPage(page) {
    if (page < 1) {
      page = 1;
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
    let pages = [
      <Page1 />,
      <Page2 />,
      <Page3 />,
      <Page4 />,
      <Page5 />,
    ];

    let page = pages[this.state.page-1];

    if (!page) {
      page = (<div>unfinished</div>);
    }

    return (
      <div style={{ margin: "5%" }}>
        <div style={{ width: "80%", marginLeft: "auto", marginRight: "auto" }}>
          {page}
        </div>
        <div style={{ width: "100%", textAlign: "right" }}>
          <Button onClick={() => { this.setPage(this.state.page - 1) }}>Back</Button>
          <Button onClick={() => { this.setPage(this.state.page + 1) }}>Next</Button>
        </div>
      </div>
    )
  }
}

export default App;
