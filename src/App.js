import React from 'react';
import './App.css';
import { PickerLabas } from './components/pickerLaps';
import ButtonAppBar from './components/appbar';
import Charts from './components/charts';

import { Grid, Row, Col } from 'react-flexbox-grid';

function App() {  

  return (
    <React.Fragment>
      <ButtonAppBar/>
        <Grid fluid className="App">
          <Row center="xs" around="xs">
            <Col xs={12} md={10}>
              <PickerLabas/>
            </Col>
            <Col xs={12} md={10}>
              <Charts/>         
            </Col>
          </Row>
        </Grid>
    </React.Fragment>
  );
}

export default App;
/*
  <header className="App-header">
    <img src={logo} className="App-logo" alt="logo" />
    <p>
      Edit <code>src/App.js</code> and save to reload.
      {state.response &&state.response.email}
    </p>
    <a
      className="App-link"
      href="https://reactjs.org"
      target="_blank"
      rel="noopener noreferrer"
      >
      Learn React {state.count}
    </a>
      <button onClick={inc}>Increment!</button>
      <button onClick={req}>Req!</button>
  </header>
*/