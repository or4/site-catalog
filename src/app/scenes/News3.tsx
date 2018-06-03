import * as React from 'react';
import { getStars } from 'core/redux/modules/stars';
import { IStars, IStarsAction } from 'core/models/stars';
const { connect } = require('react-redux');
const { asyncConnect } = require('redux-connect');

interface IProps {
  stars: IStars;
  getStars: Redux.ActionCreator<IStarsAction>;
}

@asyncConnect([{
  promise: ({ store: { dispatch } } : any) => {
  return dispatch(getStars());
  },
}])

@connect(
  (state : any) => ({ stars: state.stars }),
)
class Stars extends React.Component<IProps, {}> {
  public render() {
    const { stars } = this.props;

    return (
      <div>
        {stars.isFetching ? 'Fetching Stars' : stars.count}
      </div>
    );
  }
}

export default Stars;