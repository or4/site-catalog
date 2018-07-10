import React from 'react';
import { Dispatch } from 'redux';
import { connect } from 'react-redux';
import { AppState, AmountItemsType } from 'core/types';
import { selectPage, selectTotalPages, selectAmountItems } from 'core/selectors';
import { changePage, changeAmountType } from 'core/actions';
import { subscribeResize, unsubscribeResize, PagesBlock, AmountBlock, flexRow } from 'ui';
import { join, isSmall, isInitial } from 'utils';

import jss from 'jss';
import preset from 'jss-preset-default';
jss.setup(preset());

const rawClasses = {
  container: {
    margin: '10px 0',

    ...flexRow()
  },
  pagesContainer: {
    margin: '0 auto 0 0'
  },
  amountContainer: {
    margin: '0 0 0 auto'
  },
};

const sheet = jss.createStyleSheet(rawClasses).attach();
const { classes } = sheet;


type OwnProps = {
  categoryId?: any;
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
    totalPages: selectTotalPages(state, props.categoryId),
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
