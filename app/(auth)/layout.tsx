import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "From auth layout",
};

export default function AuthLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return <div>{children}</div>;
}
