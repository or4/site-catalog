import React from 'react';
import excelIcon from 'assets/tmp/excel.svg';
import BaseButton from 'ui/buttons/BaseButton';

type Props = {
};
type State = {
};

class DownloadButton extends React.PureComponent<Props, State> {
  render() {
    return (
      <BaseButton icon={excelIcon} text={'СКАЧАТЬ ПРАЙС'} />
    );
  }
}
export default DownloadButton;
