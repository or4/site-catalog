import React from 'react';
import { colorsScheme, backgroundColorsScheme } from '../src/app/ui/theme/schemes';
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
        <h3>Text Colors Scheme</h3>
        {Object.keys(colorsScheme).map(item =>
          <div key={item} style={{ display: 'inline-block', margin: '10px' }}>
            <div style={{ color: colorsScheme[item], width: '256px', }} >{capitalizeFirstLetter(item)}: {colorsScheme[item]}</div>
            <div style={{ background: colorsScheme[item], width: '256px', height: '32px', }} />
          </div>
        )}
        <h3>Background Colors Scheme</h3>
        {Object.keys(backgroundColorsScheme).map(item =>
          <div key={item} style={{ display: 'inline-block', margin: '10px' }}>
            <div>{capitalizeFirstLetter(item)}: {backgroundColorsScheme[item]}</div>
            <div style={{ background: backgroundColorsScheme[item], width: '256px', height: '32px', }} />
          </div>
        )}
      </div>
    );
  }
}
