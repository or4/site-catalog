import React from 'react';
import { storiesOf } from '@storybook/react';

import { ColorsScheme } from './ColorsScheme';
import { FontSizeScheme } from './FontSizeScheme';

import { arrowIconBase64, treeIconBase64, treeLineBase64 } from '../src/app/ui/icons/base64';

import { DownloadButton } from '../src/app/ui/buttons/DownloadButton';
import { WayButton } from '../src/app/ui/buttons/WayButton';

import { PagesBlock } from '../src/app/ui/PagesBlock';
import { AmountBlock } from '../src/app/ui/AmountBlock';

import { Tree } from '../src/app/ui/Tree';
import { testDataForTree } from './testDataForTree';

import { Table } from '../src/app/ui/Table';
import { testDataForTable } from './testDataForTable';

const schemeStories = storiesOf('Scheme', module);

schemeStories.addWithJSX(
  'ColorsScheme',
  () => (
    <div style={{ maxWidth: '900px', background: 'rgba(0,0,0, 0.15)', padding: '1px 20px 20px 20px' }}>
      <h3>Colors Scheme</h3>
      <ColorsScheme />
    </div>
  ),
);

schemeStories.addWithJSX(
  'FontSizeScheme',
  () => (
    <div style={{ maxWidth: '900px', background: 'rgba(0,0,0, 0.15)', padding: '1px 20px 20px 20px' }}>
      <h3>Font Size Scheme</h3>
      <FontSizeScheme />
    </div>
  ),
);

const uiStories = storiesOf('UI', module);

uiStories.addWithJSX(
  'Icons',
  () => (
    <div style={{ maxWidth: '900px', background: 'rgba(0,0,0, 0.15)', padding: '1px 20px 20px 20px' }}>
      <h3>Arrow</h3>
      <img style={{ display: 'block', marginBottom: '20px' }} src={arrowIconBase64} alt="" />
      <h3>Tree icons</h3>
      <img style={{ display: 'block', marginBottom: '20px' }} src={treeIconBase64} alt="" />
      <h3>Tree line (very small)</h3>
      <img style={{ display: 'block', marginBottom: '20px' }} src={treeLineBase64} alt="" />
    </div>
  ),
);

uiStories.addWithJSX(
  'Buttons',
  () => (
    <div style={{ maxWidth: '900px', background: 'rgba(0,0,0, 0.15)', padding: '20px' }}>
      <DownloadButton />
      <WayButton />
    </div>
  ),
);

uiStories.addWithJSX(
  'PagesBlock',
  () => (
    <div style={{ maxWidth: '900px', background: 'rgba(0,0,0, 0.15)', padding: '20px' }}>
      <div style={{ display: 'block', marginBottom: '20px' }}>
        <PagesBlock
          className={''}
          isSmall={false}
          onClick={() => {}}
          page={1}
          totalPages={10}
        />
      </div>
      <div style={{ display: 'block', marginBottom: '20px' }}>
        <PagesBlock
          className={''}
          isSmall={true}
          onClick={() => {}}
          page={1}
          totalPages={10}
        />
      </div>
    </div>
  ),
);

uiStories.addWithJSX(
  'AmountBlock',
  () => (
    <div style={{ maxWidth: '900px', background: 'rgba(0,0,0, 0.15)', padding: '20px' }}>
      <div style={{ display: 'block', marginBottom: '20px' }}>
        <AmountBlock
          amountItems={'medium'}
          isSmall={false}
          onClick={() => {}}
        />
      </div>
      <div style={{ display: 'block', marginBottom: '20px' }}>
        <AmountBlock
          amountItems={'all'}
          isSmall={true}
          onClick={() => {}}
        />
      </div>
    </div>
  ),
);

uiStories.addWithJSX(
  'Tree',
  () => (
    <div style={{ maxWidth: '900px', background: 'rgba(0,0,0, 0.15)', padding: '20px' }}>
      <Tree data={testDataForTree} />
    </div>
  ),
);

uiStories.addWithJSX(
  'Table',
  () => (
    <div style={{ maxWidth: '900px', background: 'rgba(0,0,0, 0.15)', padding: '20px' }}>
      <Table items={testDataForTable} />
    </div>
  ),
);
