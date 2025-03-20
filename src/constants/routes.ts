import { createElement } from 'react';

import { Characters, ComicDetails, Home, NotFound } from 'pages';

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
  {
    path: '*',
    element: createElement(NotFound),
  },
];
