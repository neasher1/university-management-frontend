import { Row, Space, Spin } from "antd";

const Loading = () => {
  return (
    <div>
      <Row
        justify="center"
        align="middle"
        style={{
          minHeight: "100vh",
        }}
      >
        <Space size="middle">
          <Spin size="large" />
        </Space>
      </Row>
    </div>
  );
};

export default Loading;
