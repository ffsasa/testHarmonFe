import { Card, Image, List, Typography } from 'antd';
import React, { useState } from 'react';
import { ModalProfile } from './ModalProfile';

const { Text } = Typography;

export const ListExpert = ({ data }) => {
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [dataProfile, setDataProfile] = useState({});
  const showModal = (data) => {
    setDataProfile(data);
    setIsModalOpen(true);
  };

  const handleOk = () => {
    setIsModalOpen(false);
  };

  const handleCancel = () => {
    setIsModalOpen(false);
  };

  return (
    <>
      <List
        style={{ width: '100%', padding: '1rem' }}
        grid={{ gutter: 16, column: 3 }} // Adjust the layout (columns) as needed
        dataSource={data}
        renderItem={(item) => (
          <List.Item>
            <Card
              title={<Text strong>{item.name}</Text>}
              bordered
              onClick={() => showModal(item)}>
              <Image src={item.image} preview={false} />
              <Text type='secondary'>Schedule:</Text>
              <br />
              <Text>{item.schedule}</Text>
            </Card>
          </List.Item>
        )}
      />
      <ModalProfile
        isModalOpen={isModalOpen}
        handleOk={handleOk}
        handleCancel={handleCancel}
        data={dataProfile}
      />
    </>
  );
};
