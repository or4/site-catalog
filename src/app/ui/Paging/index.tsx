import React from 'react';
import PagingMedium from 'ui/Paging/PagingMedium';
import { isSmall, isInitial } from 'util/responsive';
import PagingSmall from 'ui/Paging/PagingSmall';

type Props = {
};
type State = {
};

class Paging extends React.PureComponent<Props, State> {
  render() {
    if (isInitial()) {
      return null;
    }

    return isSmall() ? <PagingSmall /> : <PagingMedium />;
  }
}
export default Paging;
