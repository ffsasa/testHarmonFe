import { Card } from 'antd';
const { Meta } = Card;

export const CardSection = ({
  src = 'https://os.alipayobjects.com/rmsportal/QBnOOoLaAfKPirc.png',
  title = 'News Title',
  width = 350,
  height = 350,
}) => {
  return (
    <Card
      hoverable
      style={{
        width: width,
        textAlign: 'start',
        height: height,
      }}
      cover={<img alt='example' src={src} />}
    >
      <Meta title={title} description={title} />
    </Card>
  );
};
