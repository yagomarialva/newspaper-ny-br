// App.tsx
import React from "react";
import { Layout, Input, Tabs, Card, Button } from "antd";
import { AudioOutlined } from "@ant-design/icons";
import "antd/dist/reset.css";

const { Header, Content } = Layout;
const { TabPane } = Tabs;

const App: React.FC = () => {
  return (
    <Layout style={{ minHeight: "100vh", background: "#fff" }}>
      <Header
        style={{
          background: "#fff",
          borderBottom: "1px solid #eee",
          display: "flex",
          justifyContent: "space-between",
          alignItems: "center",
          padding: "0 20px",
        }}
      >
        <div style={{ fontWeight: "bold", fontSize: "20px" }}>NewsPaper NY BR</div>
        <div style={{ display: "flex", gap: "16px", alignItems: "center" }}>
          <Input
            placeholder="Search"
            prefix={<AudioOutlined />}
            style={{ width: 300 }}
          />
          <Button type="text">Sign in</Button>
          <Button type="primary">Subscribe</Button>
        </div>
      </Header>

      <Content style={{ padding: "20px 50px" }}>
        <Tabs defaultActiveKey="1" style={{ marginBottom: "20px" }}>
          <TabPane tab="LATEST" key="1" />
          <TabPane tab="WORLD" key="2" />
          <TabPane tab="SPORTS" key="3" />
          <TabPane tab="CULTURE" key="4" />
          <TabPane tab="WELLNESS" key="5" />
          <TabPane tab="ECONOMY" key="6" />
        </Tabs>

        <div
          style={{
            display: "grid",
            gridTemplateColumns: "repeat(3, 1fr)",
            gap: "20px",
          }}
        >
          {/* Podcast card */}
          <Card
            title="Podcast episodes"
            style={{ gridColumn: "span 2" }}
            extra={<span>22:18</span>}
          >
            <h3>Daily Minute: Reports from around the world</h3>
            <p>Nicola Schulz</p>
          </Card>

          {/* Culture card */}
          <Card title="CULTURE">
            <h3>Best summer reads for your vacation</h3>
            <p>
              Summer is the perfect time to indulge in some leisurely reading...
            </p>
          </Card>

          {/* Sports card */}
          <Card title="SPORTS">
            <h3>Footballer leads Argentina to victory</h3>
            <p>Fred Baller</p>
            <p>14 June 2023</p>
          </Card>
        </div>
      </Content>
    </Layout>
  );
};

export default App;
