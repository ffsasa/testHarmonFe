import { Button, Avatar, Tooltip } from 'antd';
import { useEffect, useState } from 'react';
import { MdCallEnd } from 'react-icons/md';
import { IoSettings } from 'react-icons/io5';
import { HiSpeakerWave } from 'react-icons/hi2';
import { IoMdPersonAdd } from 'react-icons/io';
import { IoCall } from 'react-icons/io5';
import { IoCloseSharp } from 'react-icons/io5';
import { FaMicrophone } from 'react-icons/fa';

export const InCall = () => {
  const [expertInfo, setExpertInfo] = useState({ name: '', expertise: '' });
  const [endCallState, setEndCallState] = useState(false);

  useEffect(() => {
    const params = new URLSearchParams(window.location.search);
    const name = params.get('name');
    const expertise = params.get('expertise');
    setExpertInfo({ name, expertise });
  }, []);

  const handleEndCall = () => {
    setEndCallState(true);
  };

  return (
    <div
      style={{
        display: 'flex',
        flexDirection: 'column',
        alignItems: 'center',
        justifyContent: 'center',
        height: '100vh',
        backgroundColor: 'rgba(234, 230, 254, 1)',
        color: '#fff',
        textAlign: 'center',
      }}
    >
      {/* Profile Picture */}
      <Avatar
        size={150}
        src='https://via.placeholder.com/100' // Replace with expert's avatar
        style={{
          marginBottom: '16px',
          border: '3px solid #fff',
          backgroundColor: '#f0f0f0',
        }}
      />
      {/* Caller Name */}
      <h2
        style={{
          margin: '8px 0',
          fontSize: '1.5rem',
          fontWeight: 'bold',
          color: 'rgba(157, 116, 215, 1)',
        }}
      >
        {expertInfo.name}
      </h2>
      <h2 style={{ margin: '8px 0', fontSize: '1.5rem', color: '#333' }}>{expertInfo.expertise}</h2>
      {/* Call Status */}
      <p style={{ fontSize: '1rem', opacity: 0.8, color: '#333' }}>
        {endCallState ? 'Đã Kết Thúc' : 'Đang gọi ...'}
      </p>

      {/* Buttons */}
      <div
        style={{
          display: 'flex',
          gap: '20px',
          marginTop: '40px',
        }}
      >
        <Tooltip title='Thêm Người'>
          <Button
            shape='circle'
            size='large'
            icon={<IoMdPersonAdd />}
            style={{
              backgroundColor: '#fff',
              color: 'rgba(157, 116, 215, 1)',
              fontSize: '1.5rem',
            }}
            onClick={() => console.log('Add Call')}
          />
        </Tooltip>

        {!endCallState && (
          <Tooltip title='Tắt Mic'>
            <Button
              shape='circle'
              size='large'
              icon={<FaMicrophone />}
              style={{
                backgroundColor: '#fff',
                color: 'rgba(157, 116, 215, 1)',
                fontSize: '1.5rem',
              }}
              onClick={() => console.log('Audio Call')}
            />
          </Tooltip>
        )}

        {!endCallState && (
          <Tooltip title='Loa'>
            <Button
              shape='circle'
              size='large'
              icon={<HiSpeakerWave />}
              style={{
                backgroundColor: '#fff',
                color: 'rgba(157, 116, 215, 1)',
                fontSize: '1.5rem',
              }}
              onClick={() => console.log('Speaker Call')}
            />
          </Tooltip>
        )}

        {endCallState && (
          <Tooltip title='Gọi Lại'>
            <Button
              shape='circle'
              size='large'
              icon={<IoCall />}
              style={{
                backgroundColor: '#fff',
                color: 'rgba(157, 116, 215, 1)',
                fontSize: '1.5rem',
              }}
              onClick={() => console.log('Call Again')}
            />
          </Tooltip>
        )}

        {endCallState && (
          <Tooltip title='Đóng'>
            <Button
              shape='circle'
              size='large'
              icon={<IoCloseSharp />}
              style={{
                backgroundColor: '#fff',
                color: 'rgba(157, 116, 215, 1)',
                fontSize: '1.5rem',
              }}
              onClick={() => window.close()}
            />
          </Tooltip>
        )}

        <Tooltip title='Cài Đặt'>
          <Button
            shape='circle'
            size='large'
            icon={<IoSettings />}
            style={{
              backgroundColor: '#fff',
              color: 'rgba(157, 116, 215, 1)',
              fontSize: '1.5rem',
            }}
            onClick={() => console.log('Settings Call')}
          />
        </Tooltip>

        {!endCallState && (
          <Tooltip title='Kết Thúc'>
            <Button
              shape='circle'
              size='large'
              icon={<MdCallEnd />}
              style={{
                backgroundColor: '#fff',
                color: 'rgba(157, 116, 215, 1)',
                fontSize: '1.5rem',
              }}
              onClick={() => handleEndCall()}
            />
          </Tooltip>
        )}
      </div>
    </div>
  );
};
