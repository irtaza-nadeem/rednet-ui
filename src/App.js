import React from 'react';
import './App.css';
import { Route, Switch } from 'react-router-dom';
import homepage from "./homepage";
import createDonor from "./createDonor";

function App() {
  return (
      <Switch>
        <Route exact path={'/'} component={homepage}/>
          <Route exact path={'/create'} component={createDonor}/>
      </Switch>
  );
}
export default App;
