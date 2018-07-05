import React from 'react';
import { Dispatch } from 'redux';
import { connect } from 'react-redux';
import { AppState, AmountItemsType } from 'core/types';
import { changePage } from 'core/catalog/pages/actions';
import { changeAmountType } from 'core/settings/amountItems/actions';
import { subscribeResize, unsubscribeResize } from 'ui/Resize';
import { PagesBlock } from 'ui/PagesBlock';
import { AmountBlock } from 'ui/AmountBlock';
import { flexRow } from 'ui/theme';
import { join, isSmall, isInitial } from 'utils';
import { selectPage, selectTotalPages } from 'core/catalog/pages/selectors';
import { selectAmountItems } from 'core/settings/amountItems/reducer';

import jss from 'jss';
import preset from 'jss-preset-default';
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
  amountItems: AmountItemsType;
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

class PagingComponent extends React.PureComponent<Props, State> {
  componentDidMount() { subscribeResize(this, 'PagingComponent') }
  componentWillUnmount() { unsubscribeResize(this, 'PagingComponent') }

  render() {
    if (isInitial()) {
      return null;
    }

    const { amountItems, className, changePage, changeAmountType, page, totalPages, } = this.props;
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
          amountItems={amountItems}
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
    amountItems: selectAmountItems(state),
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
export const Paging = connect<StateProps, DispatchProps>(mapStateToProps, mapDispatchToProps)(PagingComponent);
