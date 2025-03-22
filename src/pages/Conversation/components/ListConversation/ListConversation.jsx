import { useState } from 'react';
import { Layout, List, Avatar, Input, Button, Card } from 'antd';
import { SendOutlined, UserOutlined } from '@ant-design/icons';
import { IoCallOutline } from 'react-icons/io5';
import './ListConversation.scss';

const { Header, Content, Sider } = Layout;

export const ListConversation = () => {
  const [messages, setMessages] = useState([]);
  const [inputValue, setInputValue] = useState('');
  const [selectedExpert, setSelectedExpert] = useState(null);

  const experts = [
    { id: 1, name: 'Nguyễn Văn A', avatar: '', expertise: 'Tư vấn tài chính' },
    { id: 2, name: 'Trần Thị B', avatar: '', expertise: 'Chuyên gia sức khỏe' },
    { id: 3, name: 'Lê Minh C', avatar: '', expertise: 'Tâm lý học' },
  ];

  const handleSend = () => {
    if (inputValue.trim()) {
      setMessages([...messages, { sender: 'user', text: inputValue }]);
      setInputValue('');
    }
  };

  const selectExpert = (expert) => {
    setSelectedExpert(expert);
    setMessages([]);
  };

  return (
    <Layout style={{ minHeight: '100vh', padding: '24px 20px' }}>
      <Sider width={300} theme='light'>
        <List
          header={<b>Danh sách Chuyên gia</b>}
          itemLayout='horizontal'
          dataSource={experts}
          renderItem={(expert) => (
            <List.Item
              style={{
                padding: '8px 12px',
                cursor: 'pointer',
                background: selectedExpert?.id === expert.id ? '#e6f7ff' : 'transparent',
              }}
              onClick={() => selectExpert(expert)}
            >
              <List.Item.Meta
                avatar={<Avatar size='large' icon={<UserOutlined />} src={expert.avatar} />}
                title={expert.name}
                description={expert.expertise}
              />
            </List.Item>
          )}
        />
      </Sider>
      <Layout>
        <Header
          style={{
            background: '#fff',
            display: 'flex',
            justifyContent: 'space-between',
            alignItems: 'center',
            padding: '0 16px',
          }}
        >
          <h2 style={{ margin: 0 }}>Trò Chuyện</h2>
          {selectedExpert && (
            <div style={{ display: 'flex', gap: '8px' }}>
              <Button
                type='primary'
                icon={<IoCallOutline />}
                onClick={() =>
                  window.open(
                    `/call?name=${encodeURIComponent(
                      selectedExpert.name
                    )}&expertise=${encodeURIComponent(selectedExpert.expertise)}`,
                    '_blank',
                    'width=1000,height=600,resizable=no,scrollbars=no,toolbar=no'
                  )
                }
              >
                Audio Call
              </Button>
            </div>
          )}
        </Header>
        <Content style={{ padding: 24, background: '#f5f5f5' }}>
          {selectedExpert ? (
            <Card
              title={`Đang trò chuyện với: ${selectedExpert.name}`}
              style={{ height: '100%', display: 'flex', flexDirection: 'column' }}
            >
              <div
                style={{
                  flexGrow: 1,
                  overflowY: 'scroll',
                  padding: '16px',
                  background: '#fafafa',
                  border: '1px solid #d9d9d9',
                  borderRadius: '8px',
                  height: '55vh',
                  marginBottom: '16px',
                }}
              >
                {messages.length > 0 ? (
                  messages.map((msg, index) => (
                    <div
                      key={index}
                      style={{
                        display: 'flex',
                        justifyContent: msg.sender === 'user' ? 'flex-end' : 'flex-start',
                        marginBottom: '8px',
                      }}
                    >
                      <div
                        style={{
                          maxWidth: '70%',
                          padding: '8px 12px',
                          borderRadius: '12px',
                          background: msg.sender === 'user' ? '#1890ff' : '#f0f0f0',
                          color: msg.sender === 'user' ? '#fff' : '#000',
                        }}
                      >
                        {msg.text}
                      </div>
                    </div>
                  ))
                ) : (
                  <p style={{ textAlign: 'center', color: '#999' }}>Hãy bắt đầu cuộc trò chuyện!</p>
                )}
              </div>
              <div
                style={{
                  display: 'flex',
                  gap: '8px',
                  alignItems: 'center',
                  paddingTop: '16px',
                  borderTop: '1px solid #d9d9d9',
                }}
              >
                <Input.TextArea
                  rows={2}
                  value={inputValue}
                  onChange={(e) => setInputValue(e.target.value)}
                  placeholder='Nhập tin nhắn...'
                />
                <Button type='primary' icon={<SendOutlined />} onClick={handleSend}>
                  Gửi
                </Button>
              </div>
            </Card>
          ) : (
            <p style={{ textAlign: 'center', marginTop: '20%' }}>
              Hãy chọn một chuyên gia để bắt đầu trò chuyện.
            </p>
          )}
        </Content>
      </Layout>
    </Layout>
  );
};
