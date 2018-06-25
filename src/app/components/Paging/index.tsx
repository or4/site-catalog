import React from 'react';
import { Dispatch } from 'redux';
import { connect } from 'react-redux';
import { AppState } from 'store/reducers';

import { isSmall, isInitial } from 'util/responsive';
import { flexRow } from 'ui/theme';
import { join } from 'util/helpers';
import { subscribeResize, unsubscribeResize } from 'components/Resize';
import { changeAmountType } from 'core/settings/amountItems/actions';
import { changePage } from 'core/catalog/pages/actions';
import { AmountItemsType } from 'core/settings/amountItems/common';
import PagesBlock from './PagesBlock';
import AmountBlock from './AmountBlock';

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

  onPagesClick = (page: number) => { changePage(page) }
  onAmountClick = (amountItems: AmountItemsType) => { changeAmountType(amountItems) }


  render() {
    if (isInitial()) {
      return null;
    }

    const { className, page, totalPages } = this.props;
    return (
      <div className={join(classes.container, className)}>
        <PagesBlock className={classes.pagesContainer} isSmall={isSmall()} onClick={this.onPagesClick} page={page} totalPages={totalPages} />
        <AmountBlock className={classes.amountContainer} isSmall={isSmall()} onClick={this.onAmountClick} />
      </div>);
  }
}

const mapStateToProps = (state: AppState, props: OwnProps) => {
  return {
    page: 0,
    totalPages: 0,
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
