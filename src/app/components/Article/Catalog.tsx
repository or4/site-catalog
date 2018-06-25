import React from 'react';
import { TItem } from 'core/catalog/items/reducer';

type Props = {
  selectItems: () => TItem[];
};
type State = {
};

class Catalog extends React.PureComponent<Props, State> {
  render() {
    return (
      <div>
        <ul>
          {this.props.selectItems().map((item: TItem) => <li key={item.id}>{item.name}</li>)}
        </ul>
      </div>
    );
  }
}
export default Catalog;
