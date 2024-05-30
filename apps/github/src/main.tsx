// import { StrictMode } from 'react';
import * as ReactDOM from 'react-dom/client';
import { StrictMode } from 'react';
import { createBrowserRouter, RouterProvider } from 'react-router-dom'
import Routes from './routers'
// import App from './app/app';
const Router = createBrowserRouter(
  [Routes],
  {
    basename: '/bugofbook.github.io',
  }
)
const root = ReactDOM.createRoot(
  document.getElementById('root') as HTMLElement
);
root.render(
  <StrictMode>
    <RouterProvider router={Router} />
  </StrictMode>
);
