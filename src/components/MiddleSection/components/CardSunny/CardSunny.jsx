import { Card, Rate } from 'antd';
const { Meta } = Card;

export const CardSunny = ({
  src = 'https://os.alipayobjects.com/rmsportal/QBnOOoLaAfKPirc.png',
  title = 'News Title',
  width = 300,
  height = 350,
  rating = 4.5, // Default rating value
}) => {
  return (
    <Card
      hoverable
      style={{
        width: width,
        height: height,
        textAlign: 'center',
      }}
      cover={<img alt='example' src={src} />}
    >
      <Meta title={title} description={title} />
      <div style={{ marginTop: '1rem' }}>
        <Rate allowHalf disabled defaultValue={rating} />
      </div>
    </Card>
  );
};
