import { createElement } from 'react';

import { ComicDetails, Home } from 'pages';
import { Characters } from 'pages/Characters/Characters';

export const ROUTES = [
  {
    path: '/',
    element: createElement(Home),
  },
  {
    path: '/comics/:id',
    element: createElement(ComicDetails),
  },
  {
    path: '/characters',
    element: createElement(Characters),
  },
];
