import {
  cloud,
  code,
  guide,
  home,
  settings,
  homeActive,
  settingsActive,
  cloudActive,
  guideActive,
  codeActive,
} from "../assets";

const dashboardNavigations = [
  {
    title: "Repositories",
    Icon: home,
    to: "/dashboard/repositories",
    activeIcon: homeActive,
  },
  {
    title: "AI Code Review",
    Icon: code,
    to: "/dashboard/code-review",
    activeIcon: codeActive,
  },
  {
    title: "Cloud Security",
    Icon: cloud,
    to: "/dashboard/cloud-security",
    activeIcon: cloudActive,
  },
  {
    title: "How to use",
    Icon: guide,
    to: "/dashboard/how-to-use",
    activeIcon: guideActive,
  },
  {
    title: "Settings",
    Icon: settings,
    to: "/dashboard/settings",
    activeIcon: settingsActive,
  },
];

export default dashboardNavigations;
