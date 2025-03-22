import { Layout, Row, Col, Space, Typography, Image } from 'antd';
import { FacebookOutlined, InstagramOutlined } from '@ant-design/icons';

const { Title, Text } = Typography;

const AppFooter = () => {
  return (
    <Layout.Footer
      style={{ background: 'linear-gradient(180deg, #C6ACFF 0%, #D19FFF 46%, #E4B1F0 100%)' }}
    >
      <Row gutter={[16, 16]} justify='space-between'>
        {/* Chăm sóc khách hàng */}
        <Col style={{ padding: 0 }} span={6}>
          <Title level={3} style={{ color: 'rgba(67, 56, 120, 1)' }}>
            Chăm sóc khách hàng
          </Title>
          <Space direction='vertical' size='middle'>
            <Text>Blog</Text>
            <Text>Bài Test Tâm Lý</Text>
            <Text>Thanh Toán</Text>
            <Text>Hoàn Tiền</Text>
            <Text>Hỗ Trợ</Text>
            <Text>Chính Sách Bảo Hành</Text>
          </Space>
        </Col>

        {/* Về Harmon */}
        <Col style={{ padding: 0 }} span={3}>
          <Title level={3} style={{ color: 'rgba(67, 56, 120, 1)' }}>
            Về Harmon
          </Title>
          <Space direction='vertical' size='middle'>
            <Text>Giới Thiệu Về Harmon</Text>
            <Text>Tuyển Dụng</Text>
            <Text>Chính Sách Bảo Mật</Text>
            <Text>Kênh Chuyên Gia</Text>
          </Space>
        </Col>

        {/* Thanh Toán */}
        <Col style={{ padding: 0 }} span={3}>
          <Title level={3} style={{ color: 'rgba(67, 56, 120, 1)' }}>
            Thanh Toán
          </Title>
          <Space direction='vertical' size='middle'>
            <Row gutter={[16, 16]}>
              <Col>
                <Image src='https://example.com/visa.png' alt='Visa' width={40} />
              </Col>
              <Col>
                <Image src='https://example.com/cod.png' alt='COD' width={40} />
              </Col>
              <Col>
                <Image src='https://example.com/napas.png' alt='Napas' width={40} />
              </Col>
              <Col>
                <Image src='https://example.com/mastercard.png' alt='Mastercard' width={40} />
              </Col>
            </Row>
          </Space>
        </Col>

        {/* Theo dõi chúng tôi */}
        <Col style={{ padding: 0 }} span={3}>
          <Title level={3} style={{ color: 'rgba(67, 56, 120, 1)' }}>
            Theo dõi chúng tôi
          </Title>
          <Col size='middle'>
            <div
              style={{
                display: 'flex',
                justifyContent: 'start',
                alignItems: 'center',
                marginBottom: '0.4rem',
              }}
            >
              <FacebookOutlined
                style={{ marginRight: '0.5rem', fontSize: '24px', color: '#3b5998' }}
              />{' '}
              Facebook
            </div>
            <div
              style={{
                display: 'flex',
                justifyContent: 'start',
                alignItems: 'center',
              }}
            >
              <InstagramOutlined
                style={{ marginRight: '0.5rem', fontSize: '24px', color: '#e4405f' }}
              />{' '}
              Instagram
            </div>
          </Col>
        </Col>
      </Row>
    </Layout.Footer>
  );
};

export default AppFooter;
