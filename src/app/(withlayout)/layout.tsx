import DashboardContents from "@/components/ui/Contents";
import DashboardSideBar from "@/components/ui/SideBar";
import { Layout } from "antd";

const DashboardLayout = ({ children }: { children: React.ReactNode }) => {
  return (
    <Layout hasSider>
      <DashboardSideBar />
      <DashboardContents>{children}</DashboardContents>
    </Layout>
  );
};

export default DashboardLayout;
