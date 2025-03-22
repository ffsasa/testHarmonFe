import { Button } from 'antd';
import { Content } from 'antd/es/layout/layout';

// eslint-disable-next-line react/prop-types
export const ContentSection = ({
  title = 'Content Title',
  content = 'This is the content area',
  subContent,
}) => {
  return (
    <Content
      style={{
        minHeight: '280px',
        display: 'flex',
        flexDirection: 'column',
        alignItems: 'flex-start',
      }}
    >
      <h1 style={{ marginBottom: '16px', color: 'rgba(157, 116, 215, 1)' }}>{title}</h1>
      <p style={{ fontSize: '22px', padding: '0 16px', textAlign: 'left' }}>{content}</p>
      <p>{subContent ? subContent : null}</p>
      <Button
        type='primary'
        style={{
          fontSize: '22px',
          background: 'rgba(126, 96, 191, 1)',
          padding: '22px 32px',
          alignSelf: 'flex-end',
          margin: '0 2rem',
        }}
      >
        Khám Phá Ngay
      </Button>
    </Content>
  );
};
