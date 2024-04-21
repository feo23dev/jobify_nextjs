import { AreaChart, Layers, AppWindow } from "lucide-react";
import React from "react";

type NavLink = {
  href: string;
  label: string;
  icon: React.ReactNode;
};

export const Links: NavLink[] = [
  {
    href: "/add-job",
    label: "Add Job",
    icon: <Layers></Layers>,
  },
  {
    href: "/jobs",
    label: "Jobs",
    icon: <AppWindow></AppWindow>,
  },
  {
    href: "/stats",
    label: "Stats",
    icon: <AreaChart></AreaChart>,
  },
];
