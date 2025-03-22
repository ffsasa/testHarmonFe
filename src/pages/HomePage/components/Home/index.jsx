import { Divider, Layout, Menu } from 'antd';
import { ContentSection } from '../../../../components/ContentSection/ContentSection';
import { MiddleSection } from '../../../../components/MiddleSection/MiddleSection';
import { CardSection } from '../../../../components/MiddleSection/components/CardSection/CardSection';
import { CardSunny } from '../../../../components/MiddleSection/components/CardSunny/CardSunny';
import { useNavigate } from 'react-router-dom';

const { Sider, Content } = Layout;

const cardData = [
  {
    src: 'https://picsum.photos/600/300',
    title: 'Card Title 1',
  },
  {
    src: 'https://picsum.photos/600/300',
    title: 'Card Title 2',
  },
  {
    src: 'https://picsum.photos/600/300',
    title: 'Card Title 3',
  },
  {
    src: 'https://picsum.photos/600/300',
    title: 'Card Title 4',
  },
  {
    src: 'https://picsum.photos/600/300',
    title: 'Card Title 5',
  },
  {
    src: 'https://picsum.photos/600/300',
    title: 'Card Title 6',
  },
];

export const Home = () => {
  const navigate = useNavigate();

  const handleMenuClick = (e) => {
    // Map menu keys to routes
    const routeMapping = {
      1: '/about-harmon',
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
    <Layout style={{ minHeight: '100vh' }}>
      {/* Full-Width Image */}
      <div
        style={{
          width: '100%',
          height: '500px',
          backgroundImage:
            'url(https://hoanghamobile.com/tin-tuc/wp-content/uploads/2024/05/anh-mau-xanh-duong.jpg)',
          backgroundSize: 'cover',
          backgroundPosition: 'center',
        }}
      ></div>

      {/* Main Layout with Sider and Content */}
      <Layout
        style={{
          padding: '2rem',
          background: 'rgba(234, 230, 254, 1)',
        }}
      >
        {/* Sider */}
        <Sider width={300} theme='light'>
          <Menu
            mode='inline'
            defaultSelectedKeys={['1']}
            onClick={handleMenuClick}
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

        {/* Content Section */}
        <Content
          style={{
            margin: '0 2rem',
            padding: 24,
            background: 'rgba(234, 230, 254, 1)',
          }}
        >
          <ContentSection
            title='Để hiểu thêm về bản thân'
            content='Lorem ipsum dolor sit amet, consectetuer adipiscing elit, sed diam nonummy nibh euismod tincidunt ut laoreet dolore magna aliquam erat volutpat. Ut wisi enim ad minim veniam, quis nostrud exerci tation ullamcorper suscipit lobortis'
          />
          <Divider />
          <MiddleSection
            title='Có thể bạn chưa biết'
            action='Hiện tất cả'
            cardData={cardData}
            renderCard={(card) => <CardSection width={350} src={card.src} title={card.title} />}
          />
          <Divider />
          <MiddleSection
            title='Dành cho vấn đề'
            action='Hiện tất cả'
            cardData={cardData}
            renderCard={(card) => <CardSunny width={350} src={card.src} title={card.title} />}
          />
          <MiddleSection
            title='Dành cho vấn đề'
            action='Hiện tất cả'
            cardData={cardData}
            renderCard={(card) => <CardSunny width={350} src={card.src} title={card.title} />}
          />
          <MiddleSection
            title='Dành cho vấn đề'
            action='Hiện tất cả'
            cardData={cardData}
            renderCard={(card) => <CardSunny width={350} src={card.src} title={card.title} />}
          />
        </Content>
      </Layout>
    </Layout>
  );
};
