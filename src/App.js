import React, { Component } from 'react';
import { BrowserRouter, Route, Switch } from 'react-router-dom';
import Home from "./Home";
import Nav from "./Nav"
import 'myscript/dist/myscript.min.css';
import Lessons from "./Lessons";
import Lesson from "./Lesson";
import './App.css';
import * as styles from './styles';

class App extends Component {

  render() {
    return (
      <div>
        <BrowserRouter>
          <div>

          <Switch>
            <Route exact path="/" component={Home} />
            <Route exact path="/lessons" component={Lessons} />
            <Route path="/lessons/:number" component={Lesson} />
          </Switch>
          </div>
        </BrowserRouter>
      </div>
    );
  }
}

export default App;
