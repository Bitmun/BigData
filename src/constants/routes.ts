import { createElement } from 'react';

import { ComicDetails, Home } from 'pages';

export const ROUTES = [
  {
    path: '/',
    element: createElement(Home),
  },
  {
    path: '/comics/:id',
    element: createElement(ComicDetails),
  },
];
