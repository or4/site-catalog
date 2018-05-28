import * as React from 'react';
import { IndexRoute, Route } from 'react-router';
import { App } from 'containers';
import AboutScene from 'scenes/About';
import MainScene from 'scenes/Main';

import './index.css';

type Props = {
};
type State = {
};

class Main extends React.Component<Props, State> {
  render() {
    return (
      <Route path="/" component={App}>
        <IndexRoute component={MainScene} />
        <Route path="main" component={MainScene} />
        <Route path="about" component={AboutScene} />
      </Route>
    );
  }
}
export default Main;
