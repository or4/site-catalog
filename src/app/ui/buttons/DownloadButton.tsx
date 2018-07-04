import React from 'react';
import excelIcon from 'assets/images/excel.svg';
import { BaseButton } from 'ui/buttons/BaseButton';

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
