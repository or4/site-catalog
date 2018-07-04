import React from 'react';
import { fontSizeScheme } from '../src/app/ui/theme/schemes';
import { capitalizeFirstLetter } from '../src/app/utils';

export class FontSizeScheme extends React.PureComponent {
  getStyle() {
    const container = {
    };
    return {
      container,
    };
  }
  render() {
    const style = this.getStyle();

    return (
      <div style={style.container}>
        {Object.keys(fontSizeScheme).map(item =>
          <div key={item} style={{ display: 'inline-block', margin: '10px' }}>
            <div style={{ background: '#eee', width: '256px', height: '32px', display: 'flex', alignItems: 'center', paddingLeft: '10px' }} >
              {capitalizeFirstLetter(item)} - {fontSizeScheme[item]}
            </div>
          </div>
        )}
      </div>
    );
  }
}
