import React from 'react';
import MiddleLayout from 'components/MiddleLayout';

type Props = {
};
type State = {
};

class Products extends React.PureComponent<Props, State> {
  render() {
    //const {  } = this.props;
    return (
      <MiddleLayout route={'products'}>
        <div>
          Products
        </div>
      </MiddleLayout>
    );
  }
}
export default Products;
