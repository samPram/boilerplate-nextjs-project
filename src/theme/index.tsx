"use client";

import React from "react";
import { ConfigProvider } from "antd";

const ThemeProvider = ({ children }: { children: React.ReactNode }) => (
  <>
    <ConfigProvider
      theme={{
        token: {
          colorBgBase: "#f8f7ff",
          //   colorTextBase: "",
          colorLink: "#118ab2",
          colorPrimary: "#073b4c",
          colorSuccess: "#06d6a0",
          colorInfo: "#118ab2",
          colorError: "#ef476f",
          colorWarning: "#ffd166",
        },
      }}>
      {children}
    </ConfigProvider>
  </>
);

export default ThemeProvider;
