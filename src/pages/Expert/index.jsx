import { Layout, Menu } from 'antd';
import Sider from 'antd/es/layout/Sider';
import { ListExpert } from './components/ListExpert/ListExpert';
import { AppLayout } from '../../core/layouts/AppLayout';
import { useNavigate } from 'react-router-dom';

const mockApi = () => {
  return [
    {
      id: 1,
      name: 'Expert A',
      schedule: '10:00 AM - 11:00 AM',
      image:
        'https://askany.s3.ap-southeast-1.amazonaws.com/images/5be72abd-611f-4590-b3fd-2a60358f11e4.png',
    },
    {
      id: 2,
      name: 'Expert B',
      schedule: '02:00 PM - 03:00 PM',
      image:
        'https://askany.s3.ap-southeast-1.amazonaws.com/images/5be72abd-611f-4590-b3fd-2a60358f11e4.png',
    },
    {
      id: 3,
      name: 'Expert C',
      schedule: '04:00 PM - 05:00 PM',
      image:
        'https://askany.s3.ap-southeast-1.amazonaws.com/images/5be72abd-611f-4590-b3fd-2a60358f11e4.png',
    },
    {
      id: 4,
      name: 'Expert A',
      schedule: '10:00 AM - 11:00 AM',
      image:
        'https://askany.s3.ap-southeast-1.amazonaws.com/images/5be72abd-611f-4590-b3fd-2a60358f11e4.png',
    },
    {
      id: 5,
      name: 'Expert B',
      schedule: '02:00 PM - 03:00 PM',
      image:
        'https://askany.s3.ap-southeast-1.amazonaws.com/images/5be72abd-611f-4590-b3fd-2a60358f11e4.png',
    },
    {
      id: 6,
      name: 'Expert C',
      schedule: '04:00 PM - 05:00 PM',
      image:
        'https://askany.s3.ap-southeast-1.amazonaws.com/images/5be72abd-611f-4590-b3fd-2a60358f11e4.png',
    },
    // { id: 7, name: 'Expert A', schedule: '10:00 AM - 11:00 AM',  },
    // { id: 8, name: 'Expert B', schedule: '02:00 PM - 03:00 PM' },
    // { id: 9, name: 'Expert C', schedule: '04:00 PM - 05:00 PM' },
  ];
};

export const Expert = () => {
  const navigate = useNavigate();

  const handleMenuClick = (e) => {
    // Map menu keys to routes
    const routeMapping = {
      1: '/',
      2: '/discover',
      3: '/chat',
      4: '/experts',
      5: '/community',
      6: '/friends',
      7: '/blog',
    };

    // Navigate to the corresponding route
    if (routeMapping[e.key]) {
      navigate(routeMapping[e.key]);
    }
  };

  return (
    <AppLayout
      components={
        <Layout style={{ minHeight: '100vh' }}>
          {/* Main Layout with Sider and Content */}
          <Layout
            style={{
              padding: '2rem',
              background: 'rgba(234, 230, 254, 1)',
            }}>
            {/* Sider */}
            <Sider width={300} theme='light'>
              <Menu
                onClick={handleMenuClick} // Handle click for navigation
                mode='inline'
                defaultSelectedKeys={['4']}
                style={{
                  height: '100%',
                  borderRight: 0,
                  textAlign: 'start',
                  fontSize: '16px',
                  color: 'rgba(126, 96, 191, 1)',
                  background: 'rgba(205, 193, 255, 1)',
                }}
                items={[
                  { key: '1', label: 'Về Harmon' },
                  { key: '2', label: 'Khám Phá' },
                  { key: '3', label: 'Trò Chuyện' },
                  { key: '4', label: 'Chuyên Gia' },
                  { key: '5', label: 'Cộng Đồng' },
                  { key: '6', label: 'Bạn Bè' },
                  { key: '7', label: 'Blog' },
                ]}
              />
            </Sider>

            {/* Content */}
            <ListExpert data={mockApi()} />
          </Layout>
        </Layout>
      }
    />
  );
};
