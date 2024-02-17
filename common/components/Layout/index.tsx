import React, { useEffect, useState } from "react";
import { ConfigProvider, Layout, Spin } from "antd";
import Header from "../Header";
import Sidebar from "../Sidebar";
import Footer from "../Footer";

interface LayoutProps {
  children: React.ReactNode;
}
const AppLayout: React.FC<LayoutProps> = ({ children }) => {
  const [mounted, setMounted] = useState(false);

  // When mounted on client, now we can show the UI
  useEffect(() => setMounted(true), []);
  if (!mounted) return <Spin />;

  return (
    <ConfigProvider
      theme={{
        token: {
          // fontFamily: `"Sora Medium", sans-serif`,
          colorText: "#000000",
          colorPrimary: "#0979A6",
        },
        // components: {
        //   Button: {
        //     colorPrimary: "#FFFFFF",
        //   },
        // },
      }}
    >
      <div className="layout-container">
        <div className="flex min-h-screen">
          <Layout className="block w-full">
            <Header />
            <Layout>
              <Layout.Sider className="!bg-transparent" width={310}>
                <Sidebar />
              </Layout.Sider>
              <Layout>{children}</Layout>
            </Layout>
          </Layout>
        </div>
      </div>
      <Footer />
    </ConfigProvider>
  );
};

export default AppLayout;
