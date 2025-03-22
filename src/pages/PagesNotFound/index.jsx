import { useNavigate } from 'react-router-dom';
import { Button, Typography } from 'antd';

const { Title, Text } = Typography;

export const PageNotFound = () => {
  const navigate = useNavigate();

  const handleGoBack = () => {
    navigate(-1); // Navigate back to the previous page
  };

  return (
    <div
      style={{
        display: 'flex',
        flexDirection: 'column',
        alignItems: 'center',
        justifyContent: 'center',
        height: '100vh',
        textAlign: 'center',
        backgroundColor: '#f0f2f5',
        padding: '2rem',
      }}
    >
      <Title level={1} style={{ color: '#595959' }}>
        404: Page Not Found
      </Title>
      <Text style={{ fontSize: '16px', color: '#8c8c8c', marginBottom: '2rem' }}>
        The page you are looking for doesn&apos;t exist or has been moved.
      </Text>
      <Button
        type='primary'
        size='large'
        onClick={handleGoBack}
        style={{
          background: '#7e60bf',
          borderColor: '#7e60bf',
          color: '#fff',
        }}
      >
        Go Back
      </Button>
    </div>
  );
};
