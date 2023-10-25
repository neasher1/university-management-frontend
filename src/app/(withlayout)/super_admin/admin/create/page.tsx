"use client";

import Form from "@/components/Forms/Form";
import FormInput from "@/components/Forms/FormInput";
import UMBreadCrumb from "@/components/ui/UMBreadCrumb";
import { Col, Row } from "antd";

const AdminCreate = () => {
  const onSubmit = async (data: any) => {
    try {
      console.log(data);
    } catch (err: any) {
      console.error(err?.message);
    }
  };

  return (
    <div>
      <UMBreadCrumb
        items={[
          {
            label: "super_admin",
            link: "/super_admin",
          },
          {
            label: "admin",
            link: "/super_admin/admin",
          },
        ]}
      />
      <h2>Admin Create</h2>

      <Form submitHandler={onSubmit}>
        <Row gutter={{ xs: 8, sm: 16, md: 24, lg: 32 }}>
          <Col className="gutter-row" span={8}>
            <FormInput
              name="name"
              type="text"
              size="large"
              label="First Name"
            />
          </Col>
          <Col className="gutter-row" span={8}>
            <FormInput
              name="name"
              type="text"
              size="large"
              label="Middle Name"
            />
          </Col>
          <Col className="gutter-row" span={8}>
            <FormInput name="name" type="text" size="large" label="Last Name" />
          </Col>
          <Col className="gutter-row" span={8}>
            <FormInput name="password" type="password" size="large" label="password" />
          </Col>
        </Row>
      </Form>
    </div>
  );
};

export default AdminCreate;
