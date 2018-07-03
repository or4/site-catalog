import React from 'react';
import { storiesOf } from '@storybook/react';

import { Tree } from '../src/app/ui/Tree';
import { testDataForTree } from './testDataForTree';

import { Table } from '../src/app/ui/Table';

const stories = storiesOf('UI', module);

stories.addWithJSX(
  'Tree',
  () => (
    <div style={{ maxWidth: '150px', border: '1px solid rgba(0,0,0,0.4)' }}>
      <Tree data={testDataForTree} />
    </div>
  ),
);

stories.addWithJSX(
  'Table',
  () => (
    <div style={{ maxWidth: '150px', border: '1px solid rgba(0,0,0,0.4)' }}>
      <Table />
    </div>
  ),
);
