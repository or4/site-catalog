import React from 'react';
import BaseButton from 'ui/buttons/BaseButton';
import compassIcon from 'assets/tmp/compass3.svg';

type Props = {
};
type State = {
};

class WayButton extends React.PureComponent<Props, State> {
  render() {
    return (
      <BaseButton icon={compassIcon} text={'СХЕМА ПРОЕЗДА'} />
    );
  }
}
export default WayButton;
