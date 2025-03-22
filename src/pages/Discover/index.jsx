import { Layout, Menu, Typography, Card, List, Input } from "antd";
import Sider from "antd/es/layout/Sider";
import { AppLayout } from "../../core/layouts/AppLayout";
import { useNavigate } from "react-router-dom";

import Item from "./Item";
import Banner from "../../assets/Banner.svg";
import Discover_1 from "../../assets/Discover_1.svg";
import Discover_2 from "../../assets/Discover_2.svg";
import Discover_3 from "../../assets/Discover_3.svg";
import Recent_post_1 from "../../assets/Recent_post_1.svg";
import Recent_post_2 from "../../assets/Recent_post_2.svg";
import Recent_post_3 from "../../assets/Recent_post_3.svg";
import Recent_post_4 from "../../assets/Recent_post_4.svg";
import Recent_post_5 from "../../assets/Recent_post_5.svg";
import RecentPost from "./RecentPost";
const { Content } = Layout;
const { Text } = Typography;
const { Search } = Input;
export const Discover = () => {
  const navigate = useNavigate();

  const handleMenuClick = (e) => {
    // Map menu keys to routes
    const routeMapping = {
      1: "/",
      2: "/discover",
      3: "/chat",
      4: "/experts",
      5: "/community",
      6: "/friends",
      7: "/blog",
    };

    // Navigate to the corresponding route
    if (routeMapping[e.key]) {
      navigate(routeMapping[e.key]);
    }
  };

  const data = [
    {
      image: Discover_1,
      role: "Admin",
      date: "14 Oct 2022",
      type: "Wood",
      title: "Going all-in with millennial design",
      description:
        "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Mus mauris vitae ultricies leo integer malesuada nunc. In nulla posuere sollicitudin aliquam ultrices. Morbi blandit cursus risus at ultrices mi tempus imperdiet. Libero enim sed faucibus turpis in. Cursus mattis molestie a iaculis at erat. Nibh cras pulvinar mattis nunc sed blandit libero. Pellentesque elit ullamcorper dignissim cras tincidunt. Pharetra et ultrices neque ornare aenean euismod elementum.",
    },
    {
      image: Discover_2,
      role: "Admin",
      date: "14 Oct 2022",
      type: "Handmade",
      title: "Exploring new ways of decorating",
      description:
        "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Mus mauris vitae ultricies leo integer malesuada nunc. In nulla posuere sollicitudin aliquam ultrices. Morbi blandit cursus risus at ultrices mi tempus imperdiet. Libero enim sed faucibus turpis in. Cursus mattis molestie a iaculis at erat. Nibh cras pulvinar mattis nunc sed blandit libero. Pellentesque elit ullamcorper dignissim cras tincidunt. Pharetra et ultrices neque ornare aenean euismod elementum.",
    },
    {
      image: Discover_3,
      role: "Admin",
      date: "14 Oct 2022",
      type: "Wood",
      title: "Handmade pieces that took time to make",
      description:
        "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Mus mauris vitae ultricies leo integer malesuada nunc. In nulla posuere sollicitudin aliquam ultrices. Morbi blandit cursus risus at ultrices mi tempus imperdiet. Libero enim sed faucibus turpis in. Cursus mattis molestie a iaculis at erat. Nibh cras pulvinar mattis nunc sed blandit libero. Pellentesque elit ullamcorper dignissim cras tincidunt. Pharetra et ultrices neque ornare aenean euismod elementum.",
    },
  ];

  const hastagList = [
    {
      label: "AB",
      quantity: 2,
    },
    {
      label: "BB",
      quantity: 8,
    },
    {
      label: "AC",
      quantity: 7,
    },
    {
      label: "AT",
      quantity: 1,
    },
    {
      label: "TA",
      quantity: 6,
    },
  ];

  const recentPosts = [
    {
      image: Recent_post_1,
      title: "Going all-in with millennial design",
      date: "03 Aug 2022",
    },
    {
      image: Recent_post_2,
      title: "Exploring new ways of decorating",
      date: "03 Aug 2022",
    },
    {
      image: Recent_post_3,
      title: "Handmade pieces that took time to make",
      date: "03 Aug 2022",
    },
    {
      image: Recent_post_4,
      title: "Modern home in Milan",
      date: "03 Aug 2022",
    },
    {
      image: Recent_post_5,
      title: "Colorful office redesign",
      date: "03 Aug 2022",
    },
  ];
  return (
    <AppLayout
      components={
        <Layout style={{ minHeight: "100vh", backgroundColor: "#EAE6FE" }}>
          <div
            style={{
              position: "relative",
              width: "100%",
              display: "inline-block",
            }}
          >
            <img src={Banner} style={{ width: "100%", display: "block" }} />
            <span
              style={{
                position: "absolute",
                top: "50%",
                left: "50%",
                transform: "translate(-50%, -50%)",
                color: "#7E60BF",
              }}
            >
              <p style={{ fontWeight: "bold", fontSize: "45px", margin: 0 }}>
                Blog
              </p>
              <p style={{ fontSize: "20px", margin: 0 }}>Home &gt; Blog</p>
            </span>
          </div>
          <div
            style={{
              display: "flex",
              flexDirection: "row",
              justifyContent: "center",
              alignItems: "start",
              margin: "100px",
              gap: "40px",
            }}
          >
            <div
              style={{
                display: "flex",
                flexDirection: "column",
                justifyContent: "start",
                alignItems: "start",
                gap: "50px",
                width: "70%",
              }}
            >
              {data &&
                data.map((item, index) => {
                  return <Item key={index} item={item} />;
                })}
            </div>
            <div
              style={{
                display: "flex",
                flexDirection: "column",
                gap: "50px",
                width: "30%",
              }}
            >
              <div
                style={{
                  display: "flex",
                  flexDirection: "column",
                  justifyContent: "start",
                  alignItems: "center",
                  gap: "30px",
                }}
              >
                <Search
                  placeholder="Search..."
                  allowClear
                  onSearch={(value) => console.log("Search:", value)}
                  style={{
                    marginLeft: "5%",
                    maxWidth: "80%",
                    flex: 1,
                    backgroundColor: "transparent",
                  }}
                />
                <p style={{ fontSize: "24px", color: "#7E60BF", margin: 0 }}>
                  Hastag
                </p>
                <div
                  style={{
                    display: "flex",
                    flexDirection: "column",
                    gap: "10px",
                    width: "50%",
                    color: "#9D74D7",
                  }}
                >
                  {hastagList &&
                    hastagList.map((hastag, index) => {
                      return (
                        <div
                          key={index}
                          style={{
                            display: "flex",
                            flexDirection: "row",
                            justifyContent: "space-between",
                            alignItems: "center",
                            gap: "10px",
                            margin: "10px 0",
                          }}
                        >
                          <p>{hastag.label}</p>
                          <p>{hastag.quantity}</p>
                        </div>
                      );
                    })}
                </div>
              </div>
              <div
                style={{
                  display: "flex",
                  flexDirection: "column",
                  justifyContent: "start",
                  alignItems: "center",
                  gap: "30px",
                }}
              >
                <p style={{ fontSize: "24px", color: "#7E60BF", margin: 0 }}>
                  Recent Posts
                </p>
                <div
                  style={{
                    display: "flex",
                    flexDirection: "column",
                    gap: "10px",
                  }}
                >
                  {recentPosts &&
                    recentPosts.map((post, index) => {
                      return <RecentPost key={index} post={post} />;
                    })}
                </div>
              </div>
            </div>
          </div>
        </Layout>
      }
    />
  );
};
