import React from 'react';
import MiddleLayout from 'components/MiddleLayout';

type Props = {
};
type State = {
};

class News extends React.PureComponent<Props, State> {
  render() {
    //const {  } = this.props;
    return (
      <MiddleLayout route={'news'}>
        <div>
          News
        </div>
      </MiddleLayout>
    );
  }
}
export default News;
