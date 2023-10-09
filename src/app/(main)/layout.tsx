import { ReactNode } from "react";
import Layout from "@/components/Layout";

function LoginLayout({ children }: { children: ReactNode }) {
  return <Layout>{children}</Layout>;
}

export default LoginLayout;
