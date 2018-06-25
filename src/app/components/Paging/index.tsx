import React from 'react';
import { Dispatch } from 'redux';
import { connect } from 'react-redux';
import { AppState } from 'store/reducers';
import { AmountItemsType } from 'core/settings/amountItems/common';

import { changePage } from 'core/catalog/pages/actions';
import { changeAmountType } from 'core/settings/amountItems/actions';

import { subscribeResize, unsubscribeResize } from 'components/Resize';
import PagesBlock from './PagesBlock';
import AmountBlock from './AmountBlock';

import { flexRow } from 'ui/theme';
import { isSmall, isInitial } from 'util/responsive';
import { join } from 'util/helpers';


import jss from 'jss';
import preset from 'jss-preset-default';
import { selectPage, selectTotalPages } from 'core/catalog/pages/selectors';
jss.setup(preset());

const getClasses = () => {
  const container = {
    ...flexRow()
  };
  const pagesContainer = {
    margin: '0 auto 0 0'
  };
  const amountContainer = {
    margin: '0 0 0 auto'
  };
  return {
    container,
    pagesContainer,
    amountContainer,
  };
};

const sheet = jss.createStyleSheet(getClasses()).attach();
const { classes } = sheet;


type OwnProps = {
  routeParams: any;
  className?: string;
};
type StateProps = {
  page: number;
  totalPages: number;
};
type DispatchProps = {
  changeAmountType: (amountType: AmountItemsType) => void;
  changePage: (page: number) => void;
};
type Props = StateProps & DispatchProps & OwnProps;

type State = {
};

class Paging extends React.PureComponent<Props, State> {
  componentDidMount() { subscribeResize(this, 'Paging') }
  componentWillUnmount() { unsubscribeResize(this, 'Paging') }

  render() {
    if (isInitial()) {
      return null;
    }

    const { className, changePage, changeAmountType, page, totalPages, } = this.props;
    return (
      <div className={join(classes.container, className)}>
        <PagesBlock
          className={classes.pagesContainer}
          isSmall={isSmall()}
          onClick={changePage}
          page={page}
          totalPages={totalPages}
        />
        <AmountBlock
          className={classes.amountContainer}
          isSmall={isSmall()}
          onClick={changeAmountType}
        />
      </div>);
  }
}

const mapStateToProps = (state: AppState, props: OwnProps) => {
  return {
    page: selectPage(state),
    // TODO Use reselector
    totalPages: selectTotalPages(state, props.routeParams.category),
  };
};

const mapDispatchToProps = (dispatch: Dispatch<DispatchProps>) => {
  return {
    changeAmountType: (amountType: AmountItemsType) => {
      dispatch(changeAmountType(amountType));
    },
    changePage: (page: number) => {
      dispatch(changePage(page));
    }
  };
};
export default connect<StateProps, DispatchProps>(mapStateToProps, mapDispatchToProps)(Paging);
