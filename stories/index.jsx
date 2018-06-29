import React from 'react';

import { storiesOf } from '@storybook/react';
import { action } from '@storybook/addon-actions';
import { linkTo } from '@storybook/addon-links';

import { Button, Welcome } from '@storybook/react/demo';
import Tree from '../src/app/ui/Tree';


const stories = storiesOf('Test/Button', module);

stories.addWithJSX(
  'default',
  () => (<Tree />),
  { skip: 1 }
);
