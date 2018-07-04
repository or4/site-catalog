import React from 'react';
import { colorsScheme } from '../src/app/ui/theme/schemes';
import { capitalizeFirstLetter } from '../src/app/utils';

export class ColorsScheme extends React.PureComponent {
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
        {Object.keys(colorsScheme).map(item =>
          <div key={item} style={{ display: 'inline-block', margin: '10px' }}>
            <div>{capitalizeFirstLetter(item)}</div>
            <div style={{ background: colorsScheme[item], width: '256px', height: '32px', }} />
          </div>
        )}
      </div>
    );
  }
}
