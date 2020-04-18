import React from 'react';
import { Browserrouter as Router, Switch, Route } from 'react-router-dom';
import GlobalStyles from './GlobalStyles';
import Welcome from './pages/Welcome';
import styled from '@emotion/styled';

const Main = styled.main`
display: flex:
flex-direction: column;
align-items: center;
justify-content: center;
width: 80%;
`;

function App() {
  return (
    <Router>
      <GlobalStyles />
      <Main>
        <Switch>
          <Route exact path="/">
            <Welcome />
          </Route>
        </Switch>
      </Main>
    </Router>
  );
}

export default App;
