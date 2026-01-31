import type { DashboardData, HeaderProps } from "../types/types";

export const HeaderData: HeaderProps[] = [
  {
    id: 1,
    name: "John Doe",
    title: "Real Estate Expert",
  },
  {
    id: 2,
    name: "Jane Smith",
    title: "Property Consultant",
  },
];

export const dashboardData: DashboardData = {
  userName: "Ahmed",
  salesOverview: {
    dateRange: "Jan 2022 - Sep 2022",
    chartData: [
      { month: "Jan", values: [30, 15, 20] },
      { month: "Feb", values: [25, 10, 15] },
      { month: "Mar", values: [20, 25, 15] },
      { month: "Apr", values: [25, 10, 15] },
      { month: "May", values: [35, 15, 10] },
      { month: "Jun", values: [50, 30, 20] },
      { month: "Jul", values: [20, 35, 25] },
      { month: "Aug", values: [25, 20, 40] },
      { month: "Sep", values: [35, 15, 15] },
    ],
    metrics: [
      {
        title: "Total Inflow",
        amount: "120,000,000.00",
        percentage: "2.5%",
        isPositive: true,
        currency: "₦",
      },
      {
        title: "MRR",
        amount: "50,000,000.00",
        percentage: "2.5%",
        isPositive: true,
        currency: "₦",
      },
      {
        title: "Commission Revenue",
        amount: "200,000,000.00",
        percentage: "0.5%",
        isPositive: true,
        currency: "₦",
      },
      {
        title: "GMV",
        amount: "100,000,000.00",
        percentage: "0.5%",
        isPositive: false,
        currency: "₦",
      },
    ],
  },
  listings: {
    total: "1.8k",
    active: 80,
    archived: "1k",
  },
  users: {
    total: "20.7k",
    riders: "8.5k",
    subscribers: "7.5k",
  },
};
