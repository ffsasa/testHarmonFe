import { Card, Image, List, Modal, Typography } from 'antd';

const { Text } = Typography;

export const ModalProfile = ({ isModalOpen, handleOk, handleCancel, data }) => {
  return (
    <Modal
      title={`Profile: ${data.name}`}
      open={isModalOpen}
      onOk={handleOk}
      onCancel={handleCancel}>
      <Image src={data.image} preview={false} />
      <Text strong>Expert Name:</Text> {data.name}
      <br />
      <Text strong>Schedule:</Text> {data.schedule}
    </Modal>
  );
};
