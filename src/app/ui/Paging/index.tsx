import React from 'react';
import { isSmall, isInitial } from 'util/responsive';
import PagesBlock from 'ui/Paging/PagesBlock';

type Props = {
};
type State = {
};

class Paging extends React.PureComponent<Props, State> {
  render() {
    if (isInitial()) {
      return null;
    }

    return <PagesBlock isSmall={isSmall()} />;
  }
}
export default Paging;
