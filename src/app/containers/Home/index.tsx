import * as React from 'react';
import Helmet from 'react-helmet';
const style = require('./style.css');

class Home extends React.Component<any, any> {
  public render() {
    return (
      <div className={style.Home}>
        <Helmet title={'Home'} />
        <img src={require('./barbar.png')} />
        <p>Hello!</p>
      </div>
    );
  }
}

export { Home }
