import { Card } from 'antd';
import React from 'react';
import { BiUserCircle } from 'react-icons/bi';
import { IoCallOutline } from 'react-icons/io5';

const Explorer = ({ name, age, location, distance, imageUrl }) => {
  return (
    <div
      style={{
        display: 'flex',
        flexDirection: 'column',
        alignItems: 'center',
        padding: '10px',
      }}>
      <Card
        bordered
        style={{
          maxWidth: '350px',
          minHeight: '500px',
          background: 'white',
          position: 'relative', // Đảm bảo rằng các phần tử con có thể được đặt tuyệt đối
          borderRadius: '8px', // Thêm bo tròn góc cho Card
          overflow: 'hidden', // Đảm bảo ảnh không bị tràn ra ngoài
        }}>
        <img
          src={imageUrl}
          alt={name}
          style={{
            width: '100%',
            height: '500px', // Đảm bảo ảnh chiếm hết chiều cao của Card
            objectFit: 'cover', // Cắt ảnh để phù hợp với kích thước Card
            borderRadius: '8px',
          }}
        />
        <div
          className='info'
          style={{
            position: 'absolute', // Đặt chữ lên trên ảnh
            bottom: '50px', // Căn chữ xuống dưới
            left: '40px', // Căn chữ từ trái vào
            right: '10px', // Đảm bảo chữ không bị ra ngoài Card
            color: 'white', // Chữ màu trắng để nổi bật trên ảnh
            textShadow: '2px 2px 4px rgba(0, 0, 0, 0.6)', // Thêm bóng đổ cho chữ dễ nhìn
            textAlign: 'left', // Căn lề trái cho các phần tử
            display: 'flex',
            flexDirection: 'column',
          }}>
          <h3 style={{ marginBottom: '1px' }}>{name}</h3>
          <span style={{ marginBottom: '1px' }}>{age}</span>
          <span style={{ marginBottom: '1px' }}>{location}</span>
          <span style={{ marginBottom: '1px' }}>{distance}</span>
        </div>
      </Card>
      <div style={{ display: 'flex', flexDirection: 'row' }}>
        <button
          style={{
            background:
              'linear-gradient(180deg, #C6ACFF 0%, #D19FFF 46%, #E4B1F0 100%)',
            color: 'white',
            border: 'none',
            padding: '10px 20px',
            borderRadius: '4px',
            cursor: 'pointer',
            marginRight: '10px',
          }}>
          <IoCallOutline />
        </button>
        <button
          style={{
            background:
              'linear-gradient(180deg, #C6ACFF 0%, #D19FFF 46%, #E4B1F0 100%)',
            color: 'white',
            border: 'none',
            padding: '10px 20px',
            borderRadius: '4px',
            cursor: 'pointer',
          }}>
          <BiUserCircle />
        </button>
      </div>
    </div>
  );
};

export default Explorer;
