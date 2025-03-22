import { Menu, Input } from 'antd';
import { Header } from 'antd/es/layout/layout';
import { useNavigate } from 'react-router-dom';

const { Search } = Input;

const AppHeader = () => {
  const navigate = useNavigate();

  const items = [
    {
      key: '1',
      label: 'Giới Thiệu',
      onClick: () => navigate('/home'),
    },
    {
      key: '2',
      label: 'Premium',
      onClick: () => navigate('/about'),
    },
    {
      key: '3',
      label: 'Hỗ Trợ',
      onClick: () => navigate('/services'),
    },
    {
      key: '4',
      label: 'Đặt Lịch',
      onClick: () => navigate('/contact'),
    },
    {
      key: '5',
      label: 'Đăng Nhập/Đăng Ký',
      onClick: () => navigate('/contact'),
    },
  ];

  return (
    <Header
      style={{
        position: 'sticky',
        top: 0,
        zIndex: 9999,
        width: '100%',
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'space-between',
        background: 'linear-gradient(180deg, #C6ACFF 0%, #D19FFF 46%, #E4B1F0 100%)',
      }}
    >
      {/* Logo */}
      <div style={{ display: 'flex', alignItems: 'center', flex: 1 }}>
        <div
          className='demo-logo'
          style={{
            color: '#fff',
            fontWeight: 'bold',
            width: '50px',
            height: '50px',
            marginRight: '16px',
          }}
        >
          <img src='public/logo/logo.png' alt='Logo' style={{ width: '100%', height: '100%' }} />
        </div>

        {/* Search Bar */}
        <Search
          placeholder='Search...'
          allowClear
          onSearch={(value) => console.log('Search:', value)}
          style={{ marginLeft: '5%', maxWidth: '400px', flex: 1 }}
        />
      </div>

      {/* Menu */}
      <Menu
        style={{
          flex: 0.2,
          background: 'linear-gradient(180deg, #C6ACFF 0%, #D19FFF 46%, #E4B1F0 100%)',
          color: '#433878',
        }}
        mode='horizontal'
        defaultSelectedKeys={['1']}
        items={items}
      />
    </Header>
  );
};

export default AppHeader;
