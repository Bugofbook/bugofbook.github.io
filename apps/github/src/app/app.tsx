import { StrictMode } from 'react';
import { createBrowserRouter, RouterProvider } from 'react-router-dom'
import Routes from '../routers'

const Router = createBrowserRouter(
  [Routes]
)
const App = () => (
    <StrictMode>
      <RouterProvider router={Router} />
    </StrictMode>
  )
export default App
