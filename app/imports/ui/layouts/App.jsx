import React from 'react';
import 'semantic-ui-css/semantic.css';
import { HashRouter as Router, Route, Switch, Redirect } from 'react-router-dom';
import Murphys from '../pages/Murphys.jsx';
import TopMenu from '../components/TopMenu.jsx';
import BottomMenu from '../components/BottomMenu.jsx';

/** Top-level layout component for this application. Called in imports/startup/client/startup.jsx. */
class App extends React.Component {
  render() {
    return (
        <Router>
          <div>
            <TopMenu/>
            <Switch>
              <Route exact path="/" component={Murphys}/>
            </Switch>
            <BottomMenu/>
          </div>
        </Router>
    );
  }
}

export default App;
