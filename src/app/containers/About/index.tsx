import * as React from 'react';
import Helmet from 'react-helmet';

class About extends React.Component<any, any> {
  public render() {
    return (
      <div>
        <Helmet title={'About'} />
        <h4>About</h4>
      </div>
    );
  }
}

export { About };
