import { Outlet, json } from 'react-router-dom';
import LayoutPage from '../pages/layout/layout';
const loader = async () => await json({})
const action = async () => await json({})
const Component = () => {
  return (
    <LayoutPage>
      <Outlet />
    </LayoutPage>
  )
}
Component.loader = loader
Component.action = action
export default Component;
