import React from 'react';

import { storiesOf } from '@storybook/react';
// import { action } from '@storybook/addon-actions';
// import { linkTo } from '@storybook/addon-links';


import Tree from '../src/app/ui/Tree';
import { testDataForTree as data } from '../src/app/ui/Tree/types';

const stories = storiesOf('Tree', module);

stories.addWithJSX(
  'default',
  () => (<Tree data={data} />),
);
