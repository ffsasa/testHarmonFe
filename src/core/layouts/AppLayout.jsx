import { Layout } from "antd";
import AppFooter from "./AppFooter";
import AppHeader from "./AppHeader";
const { Content } = Layout;

const contentStyle = {
  textAlign: "center",
  color: "#000",
};
export const AppLayout = ({ components }) => {
  return (
    <Layout
      style={{
        backgroundColor:
          "linear-gradient(180deg, #C6ACFF 0%, #D19FFF 46%, #E4B1F0 100%)",
      }}
    >
      <AppHeader />
      <Content className="container mx-auto" style={contentStyle}>
        {components}
      </Content>
      <AppFooter />
    </Layout>
  );
};
