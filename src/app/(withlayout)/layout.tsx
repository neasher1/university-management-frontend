"use client";

import DashboardContents from "@/components/ui/Contents";
import DashboardSideBar from "@/components/ui/SideBar";
import { isLoggedIn } from "@/services/auth.services";
import { Layout, Row, Space, Spin } from "antd";
import { useRouter } from "next/navigation";
import { useEffect, useState } from "react";

const DashboardLayout = ({ children }: { children: React.ReactNode }) => {
  const userLoggedIn = isLoggedIn();
  const router = useRouter();
  const [isLoading, setIsloading] = useState<boolean>(false)

  useEffect(() => {
    if (!userLoggedIn) {
      router.push("/login");
    }
    setIsloading(true);
  }, [router,isLoading]);

  if(!isLoading){
    return <Row
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
  }

  return (
    <Layout hasSider>
      <DashboardSideBar />
      <DashboardContents>{children}</DashboardContents>
    </Layout>
  );
};

export default DashboardLayout;
