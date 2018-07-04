import React from 'react';
import { BaseButton } from 'ui/buttons/BaseButton';
import excelIcon from 'assets/images/buttons/excel.svg';

type Props = {
};
type State = {
};

export class DownloadButton extends React.PureComponent<Props, State> {
  render() {
    return (
      <BaseButton icon={excelIcon} text={'СКАЧАТЬ ПРАЙС'} />
    );
  }
}
