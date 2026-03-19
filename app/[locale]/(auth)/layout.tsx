import NavbarSimple from "@/components/ui/navbar-simple";
import { ReactNode } from "react";

type AuthLayout = Readonly<{
  children: ReactNode;
}>;

function AuthLayout({ children }: AuthLayout) {
  return (
    <>
      <header>{/* <NavbarSimple /> */}</header>
      <main>{children}</main>
    </>
  );
}

export default AuthLayout;
