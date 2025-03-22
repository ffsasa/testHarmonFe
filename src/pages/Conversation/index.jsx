import { AppLayout } from '../../core/layouts/AppLayout';
import { Outlet } from 'react-router-dom';

export const Conversation = () => {
  return <AppLayout components={<Outlet />} />;
};
