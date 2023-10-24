import { Col, Row } from "antd";
import notFoundImage from "../assets/not-found.png";
import Image from "next/image";

const NotFoundPage = () => {
  return (
    <Row
      justify="center"
      align="middle"
      style={{
        minHeight: "100vh",
      }}
    >
      <Col sm={12} md={16} lg={10}>
        <Image src={notFoundImage} width={500} alt="not found" />
      </Col>
    </Row>
  );
};

export default NotFoundPage;
