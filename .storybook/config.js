import { configure } from '@storybook/react';
import '../dist/react-easy-paginate.css';

function loadStories() {
  require('../stories');
}

configure(loadStories, module);
