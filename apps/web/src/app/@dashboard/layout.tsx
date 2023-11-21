"use client";

import React from "react";
import { usePathname, useRouter } from "next/navigation";
import { AppContainer, type SidebarData, type UserInfo } from "ui";

import UserIMG from "../../__commons/assets/img/user.png";
import BrandLogo from "../../__commons/assets/img/logo.png";

const userInfo: UserInfo = {
  fullname: "Ahmad Nizar",
  role: "Admin",
  imageURL: `${UserIMG.src}`,
};

const sidebarData: SidebarData[] = [
  {
    id: 0,
    title: "Summary",
    icon: "home",
    path: "/summary",
    childs: [],
  },
  {
    id: 1,
    title: "Cashflow",
    icon: "bank-notes",
    path: "/cashflow",
    childs: [
      {
        id: "1-0",
        title: "Expenses",
        path: "/cashflow/expenses",
      },
      {
        id: "1-1",
        title: "Income",
        path: "/cashflow/income",
      },
      {
        id: "1-2",
        title: "Hutang/Piutang",
        path: "/cashflow/debts-receivables",
      },
    ],
  },
  {
    id: 2,
    title: "Notes",
    icon: "clipboard-document",
    path: "/notes",
    childs: [],
  },
  {
    id: 3,
    title: "Settings",
    icon: "cog-6-tooth",
    path: "/settings",
    childs: [],
  },
];
export default function DashboardLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  const router = useRouter();
  const pathname = usePathname();

  const handleOnClikMenu = (path: string) => {
    router.push(path, { scroll: false });
  };

  return (
    <AppContainer
      activePath={pathname}
      brandLogo={`${BrandLogo.src}`}
      onClickMenu={handleOnClikMenu}
      sidebarData={sidebarData}
      userInfo={userInfo}
    >
      {children}
    </AppContainer>
  );
}
