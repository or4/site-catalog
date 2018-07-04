import React from 'react';
import { Dispatch } from 'redux';
import { connect } from 'react-redux';
import { MiddleLayout } from 'components/MiddleLayout';
import { log } from 'utils';


type StateProps = {
};
type DispatchProps = {
};
type Props = StateProps & DispatchProps;

type State = {
};

class NewsComponent extends React.PureComponent<Props, State> {
  render() {
    log('NewsComponent render');
    return (
      <MiddleLayout route={'/news'}>
        <div>
          NewsComponent
        </div>
      </MiddleLayout>
    );
  }
}
const mapStateToProps = (state: any) => ({
});

const mapDispatchToProps = (dispatch: Dispatch<DispatchProps>) => {
  return {
    getStars: () => {
    }
  };
};
export const News = connect<StateProps, DispatchProps>(mapStateToProps, mapDispatchToProps)(NewsComponent);
