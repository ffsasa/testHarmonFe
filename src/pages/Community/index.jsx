import { Layout, Menu, Typography, Card, List, Avatar } from 'antd';
import Sider from 'antd/es/layout/Sider';
import { AppLayout } from '../../core/layouts/AppLayout';
import { useNavigate } from 'react-router-dom';
import LiveVideo from '../../assets/LiveVideo.svg';
import Photo from '../../assets/Photo.svg';
import Activity from '../../assets/Activity.svg';
import Community_Image from '../../assets/Community.svg';
import Like from '../../assets/Like.svg';
import Comment from '../../assets/Comment.svg';
import Share from '../../assets/Share.svg';
const { Content } = Layout;
const { Text } = Typography;

// Mock API for Community Highlights

export const Community = () => {
  const navigate = useNavigate();

  const handleMenuClick = (e) => {
    const routeMapping = {
      1: '/',
      2: '/discover',
      3: '/chat',
      4: '/experts',
      5: '/community',
      6: '/friends',
      7: '/blog',
    };

    if (routeMapping[e.key]) {
      navigate(routeMapping[e.key]);
    }
  };

  return (
    <AppLayout
      components={
        <Layout style={{ minHeight: '100vh' }}>
          <Layout
            style={{
              padding: '2rem',
              background: 'rgba(234, 230, 254, 1)',
            }}>
            {/* Sider */}
            <Sider width={300} theme='light'>
              <Menu
                onClick={handleMenuClick}
                mode='inline'
                defaultSelectedKeys={['5']}
                style={{
                  height: '100%',
                  borderRight: 0,
                  textAlign: 'start',
                  fontSize: '16px',
                  color: 'rgba(126, 96, 191, 1)',
                  background: 'rgba(205, 193, 255, 1)',
                }}
                items={[
                  { key: '1', label: 'Về Harmon' },
                  { key: '2', label: 'Khám Phá' },
                  { key: '3', label: 'Trò Chuyện' },
                  { key: '4', label: 'Chuyên Gia' },
                  { key: '5', label: 'Cộng Đồng' },
                  { key: '6', label: 'Bạn Bè' },
                  // { key: '7', label: 'Blog' },
                ]}
              />
            </Sider>
            <div
              style={{
                display: 'flex',
                flexDirection: 'column',
                gap: '50px',
                marginLeft: '70px',
                width: '100%',
              }}>
              <div
                style={{
                  display: 'flex',
                  flexDirection: 'column',
                  justifyContent: 'center',
                  alignItems: 'center',
                  backgroundColor: '#C6ACFF',
                  height: '180px',
                  width: '70%',
                  padding: '60px',
                  borderRadius: '10px',
                }}>
                <div
                  style={{
                    display: 'flex',
                    flexDirection: 'row',
                    gap: '30px',
                  }}>
                  <img
                    src='https://cellphones.com.vn/sforum/wp-content/uploads/2023/10/avatar-trang-4.jpg'
                    style={{
                      width: '40px',
                      height: '40px',
                      borderRadius: '100%',
                    }}
                  />
                  <input
                    style={{
                      padding: '10px 20px',
                      border: 'none',
                      borderRadius: '20px',
                      backgroundColor: '#CDC1FF',
                      width: '600px',
                    }}
                    placeholder="What's on your mind, Eric?"
                  />
                </div>
                <div
                  style={{
                    display: 'flex',
                    flexDirection: 'row',
                    justifyContent: 'center',
                    alignItems: 'center',
                    gap: '200px',
                    marginTop: '30px',
                  }}>
                  <div
                    style={{
                      display: 'flex',
                      flexDirection: 'row',
                      justifyContent: 'center',
                      alignItems: 'center',
                      gap: '10px',
                    }}>
                    <img src={LiveVideo} style={{ width: '33px' }} />
                    <p style={{ color: '#433878' }}>Live Video</p>
                  </div>
                  <div
                    style={{
                      display: 'flex',
                      flexDirection: 'row',
                      justifyContent: 'center',
                      alignItems: 'center',
                      gap: '10px',
                    }}>
                    <img src={Photo} style={{ width: '33px' }} />
                    <p style={{ color: '#433878' }}>Photo/ Video</p>
                  </div>
                  <div
                    style={{
                      display: 'flex',
                      flexDirection: 'row',
                      justifyContent: 'center',
                      alignItems: 'center',
                      gap: '10px',
                    }}>
                    <img src={Activity} style={{ width: '33px' }} />
                    <p style={{ color: '#433878' }}>Feeling/ Activity</p>
                  </div>
                </div>
              </div>

              <div
                style={{
                  display: 'flex',
                  flexDirection: 'column',
                  gap: '40px',
                  width: '70%',
                }}>
                <div
                  style={{
                    display: 'flex',
                    flexDirection: 'column',
                    backgroundColor: '#C6ACFF',
                    justifyContent: 'center',
                    alignItems: 'center',
                    padding: '20px',
                    borderRadius: '10px',
                    gap: '10px',
                    color: '#433878',
                  }}>
                  <div
                    style={{
                      display: 'flex',
                      justifyContent: 'start',
                      alignItems: 'center',
                      gap: '10px',
                      width: '100%',
                    }}>
                    <img
                      src='https://cellphones.com.vn/sforum/wp-content/uploads/2023/10/avatar-trang-4.jpg'
                      style={{
                        width: '40px',
                        height: '40px',
                        borderRadius: '100%',
                      }}
                    />
                    <div style={{ textAlign: 'left' }}>
                      <p
                        style={{
                          fontSize: '28px',
                          color: '#433878',
                          fontWeight: 'bold',
                          margin: 0,
                        }}>
                        Tam
                      </p>
                      <p style={{ color: '#433878', margin: 0 }}>5h</p>
                    </div>
                  </div>
                  <p style={{ textAlign: 'left', width: '100%' }}>
                    Lorem ipsum dolor sit amet, consectetuer adipiscing elit,
                    sed diam nonummy nibh euismod tincidunt ut laoreet dolore
                    magna aliquam
                  </p>
                  <img src={Community_Image} style={{ width: '100%' }} />
                  <div
                    style={{
                      textAlign: 'left',
                      backgroundColor: '#FFFFFF',
                      opacity: '20%',
                      width: '100%',
                      padding: '10px',
                      borderRadius: '10px',
                    }}>
                    <p>NYTIMES.COM</p>
                    <p style={{ fontWeight: 'bold' }}>
                      Lorem ipsum dolor sit amet, consectetuer adipiscing elit,
                      sed diam nonummy nibh euismod tincidunt ut laoreet dolore
                      magna aliquam erat volutpat.
                    </p>
                  </div>

                  <div
                    style={{
                      display: 'flex',
                      flexDirection: 'row',
                      justifyContent: 'center',
                      alignItems: 'center',
                      gap: '200px',
                      marginTop: '30px',
                    }}>
                    <div
                      style={{
                        display: 'flex',
                        flexDirection: 'row',
                        justifyContent: 'center',
                        alignItems: 'center',
                        gap: '10px',
                      }}>
                      <img src={Like} style={{ width: '33px' }} />
                      <p style={{ color: '#433878' }}>Thích</p>
                    </div>
                    <div
                      style={{
                        display: 'flex',
                        flexDirection: 'row',
                        justifyContent: 'center',
                        alignItems: 'center',
                        gap: '10px',
                      }}>
                      <img src={Comment} style={{ width: '33px' }} />
                      <p style={{ color: '#433878' }}>Bình luận</p>
                    </div>
                    <div
                      style={{
                        display: 'flex',
                        flexDirection: 'row',
                        justifyContent: 'center',
                        alignItems: 'center',
                        gap: '10px',
                      }}>
                      <img src={Share} style={{ width: '33px' }} />
                      <p style={{ color: '#433878' }}>Chia sẻ</p>
                    </div>
                  </div>
                </div>
                <div
                  style={{
                    display: 'flex',
                    flexDirection: 'column',
                    backgroundColor: '#C6ACFF',
                    justifyContent: 'center',
                    alignItems: 'center',
                    padding: '20px',
                    borderRadius: '10px',
                    gap: '10px',
                    color: '#433878',
                  }}>
                  <div
                    style={{
                      display: 'flex',
                      justifyContent: 'start',
                      alignItems: 'center',
                      gap: '10px',
                      width: '100%',
                    }}>
                    <img
                      src='https://cellphones.com.vn/sforum/wp-content/uploads/2023/10/avatar-trang-4.jpg'
                      style={{
                        width: '40px',
                        height: '40px',
                        borderRadius: '100%',
                      }}
                    />
                    <div style={{ textAlign: 'left' }}>
                      <p
                        style={{
                          fontSize: '28px',
                          color: '#433878',
                          fontWeight: 'bold',
                          margin: 0,
                        }}>
                        Tam
                      </p>
                      <p style={{ color: '#433878', margin: 0 }}>5h</p>
                    </div>
                  </div>
                  <p style={{ textAlign: 'left', width: '100%' }}>
                    Lorem ipsum dolor sit amet, consectetuer adipiscing elit,
                    sed diam nonummy nibh euismod tincidunt ut laoreet dolore
                    magna aliquam
                  </p>
                  <img src={Community_Image} style={{ width: '100%' }} />
                  <div
                    style={{
                      textAlign: 'left',
                      backgroundColor: '#FFFFFF',
                      opacity: '20%',
                      width: '100%',
                      padding: '10px',
                      borderRadius: '10px',
                    }}>
                    <p>NYTIMES.COM</p>
                    <p style={{ fontWeight: 'bold' }}>
                      Lorem ipsum dolor sit amet, consectetuer adipiscing elit,
                      sed diam nonummy nibh euismod tincidunt ut laoreet dolore
                      magna aliquam erat volutpat.
                    </p>
                  </div>

                  <div
                    style={{
                      display: 'flex',
                      flexDirection: 'row',
                      justifyContent: 'center',
                      alignItems: 'center',
                      gap: '200px',
                      marginTop: '30px',
                    }}>
                    <div
                      style={{
                        display: 'flex',
                        flexDirection: 'row',
                        justifyContent: 'center',
                        alignItems: 'center',
                        gap: '10px',
                      }}>
                      <img src={Like} style={{ width: '33px' }} />
                      <p style={{ color: '#433878' }}>Thích</p>
                    </div>
                    <div
                      style={{
                        display: 'flex',
                        flexDirection: 'row',
                        justifyContent: 'center',
                        alignItems: 'center',
                        gap: '10px',
                      }}>
                      <img src={Comment} style={{ width: '33px' }} />
                      <p style={{ color: '#433878' }}>Bình luận</p>
                    </div>
                    <div
                      style={{
                        display: 'flex',
                        flexDirection: 'row',
                        justifyContent: 'center',
                        alignItems: 'center',
                        gap: '10px',
                      }}>
                      <img src={Share} style={{ width: '33px' }} />
                      <p style={{ color: '#433878' }}>Chia sẻ</p>
                    </div>
                  </div>
                </div>
                <div
                  style={{
                    display: 'flex',
                    flexDirection: 'column',
                    backgroundColor: '#C6ACFF',
                    justifyContent: 'center',
                    alignItems: 'center',
                    padding: '20px',
                    borderRadius: '10px',
                    gap: '10px',
                    color: '#433878',
                  }}>
                  <div
                    style={{
                      display: 'flex',
                      justifyContent: 'start',
                      alignItems: 'center',
                      gap: '10px',
                      width: '100%',
                    }}>
                    <img
                      src='https://cellphones.com.vn/sforum/wp-content/uploads/2023/10/avatar-trang-4.jpg'
                      style={{
                        width: '40px',
                        height: '40px',
                        borderRadius: '100%',
                      }}
                    />
                    <div style={{ textAlign: 'left' }}>
                      <p
                        style={{
                          fontSize: '28px',
                          color: '#433878',
                          fontWeight: 'bold',
                          margin: 0,
                        }}>
                        Tam
                      </p>
                      <p style={{ color: '#433878', margin: 0 }}>5h</p>
                    </div>
                  </div>
                  <p style={{ textAlign: 'left', width: '100%' }}>
                    Lorem ipsum dolor sit amet, consectetuer adipiscing elit,
                    sed diam nonummy nibh euismod tincidunt ut laoreet dolore
                    magna aliquam
                  </p>
                  <img src={Community_Image} style={{ width: '100%' }} />
                  <div
                    style={{
                      textAlign: 'left',
                      backgroundColor: '#FFFFFF',
                      opacity: '20%',
                      width: '100%',
                      padding: '10px',
                      borderRadius: '10px',
                    }}>
                    <p>NYTIMES.COM</p>
                    <p style={{ fontWeight: 'bold' }}>
                      Lorem ipsum dolor sit amet, consectetuer adipiscing elit,
                      sed diam nonummy nibh euismod tincidunt ut laoreet dolore
                      magna aliquam erat volutpat.
                    </p>
                  </div>

                  <div
                    style={{
                      display: 'flex',
                      flexDirection: 'row',
                      justifyContent: 'center',
                      alignItems: 'center',
                      gap: '200px',
                      marginTop: '30px',
                    }}>
                    <div
                      style={{
                        display: 'flex',
                        flexDirection: 'row',
                        justifyContent: 'center',
                        alignItems: 'center',
                        gap: '10px',
                      }}>
                      <img src={Like} style={{ width: '33px' }} />
                      <p style={{ color: '#433878' }}>Thích</p>
                    </div>
                    <div
                      style={{
                        display: 'flex',
                        flexDirection: 'row',
                        justifyContent: 'center',
                        alignItems: 'center',
                        gap: '10px',
                      }}>
                      <img src={Comment} style={{ width: '33px' }} />
                      <p style={{ color: '#433878' }}>Bình luận</p>
                    </div>
                    <div
                      style={{
                        display: 'flex',
                        flexDirection: 'row',
                        justifyContent: 'center',
                        alignItems: 'center',
                        gap: '10px',
                      }}>
                      <img src={Share} style={{ width: '33px' }} />
                      <p style={{ color: '#433878' }}>Chia sẻ</p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </Layout>
        </Layout>
      }
    />
  );
};
