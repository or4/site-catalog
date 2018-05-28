import * as React from 'react';
import { Link } from 'react-router';

type Props = {
};
type State = {
};

class Navigation extends React.PureComponent<Props, State> {
  componentDidMount() {
    console.log('Navigation componentDidMount');
  }
  render() {
    //const {  } = this.props;
    return (
      <nav>
        <ul>
          <li><Link to="about">About</Link></li>
          <li><Link to="production">Production</Link></li>
          <li><Link to="products">Products</Link></li>
          <li><Link to="news">News</Link></li>
          <li><Link to="contacts">Contacts</Link></li>
        </ul>
      </nav>
    );
  }
}
export default Navigation;
