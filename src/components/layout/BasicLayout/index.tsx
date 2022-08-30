import React from "react";

import type { ReactNode } from "react";

interface IProps {
  children: ReactNode;
}

export default function BasicLayout({ children }: IProps) {
  return <>{children}</>;
}
