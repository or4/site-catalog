import * as React from 'react';
import Helmet from 'react-helmet';
const style = require('./style.css');

class About extends React.Component<any, any> {
  public render() {

    return (
      <div className={style.About}>
        <Helmet title={'About'} />
        <h4>About</h4>
      </div>
    );
  }
}

export { About }
