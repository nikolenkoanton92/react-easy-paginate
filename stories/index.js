import React from 'react';

import { storiesOf } from '@storybook/react';
import { action } from '@storybook/addon-actions';
import { linkTo } from '@storybook/addon-links';

import { Button, Welcome } from '@storybook/react/demo';
import ReactEasyPaginate from '../src';
import '../dist/react-easy-paginate.min.css';

storiesOf('Welcome', module).add('to Storybook', () => <Welcome showApp={linkTo('Button')} />);

storiesOf('Button', module)
  .add('with text', () => <Button onClick={action('clicked')}>Hello Button</Button>)
  .add('with some emoji', () => <Button onClick={action('clicked')}>😀 😎 👍 💯</Button>);

storiesOf('Easy Paginatte', module)
  .add('Sample', () =>
    <div id="react-easy-paginate">
      <ReactEasyPaginate pageTotal={4} rangeDisplayed={5} onClick={action('clicked')} />
    </div>,
);
