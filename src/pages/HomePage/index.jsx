import { Outlet } from 'react-router-dom';
import { AppLayout } from '../../core/layouts/AppLayout';

export const HomePage = () => {
  return <AppLayout components={<Outlet />} />;
};
