import React from 'react';

type Props = {
};
type State = {
};

class Table extends React.PureComponent<Props, State> {
  getStyle() {
    const container = {
    };
    return {
      container,
    };
  }
  render() {
    const style = this.getStyle();
    //const {  } = this.props;
    return (
      <div style={style.container}>
        Table
      </div>
    );
  }
}
export default Table;
