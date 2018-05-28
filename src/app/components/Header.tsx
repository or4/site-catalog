import * as React from 'react';
import { Link } from 'react-router';

type Props = {
};
type State = {
};

export class Header extends React.PureComponent<Props, State> {
  componentDidMount() {
    console.log('Header componentDidMount');
  }
  render() {
    //const {  } = this.props;
    return (
      <nav>
        <ul>
          <li><Link to="main">Main</Link></li>
          <li><Link to="about">About</Link></li>
        </ul>
      </nav>
    );
  }
}
// export default Header;
