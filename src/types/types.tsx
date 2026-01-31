export interface HeaderProps {
  id: number;
  name: string;
  title: string;
}

export interface NavItem {
  id: string;
  label: string;
  icon: string;
}

// types.ts
export interface ChartDataPoint {
  month: string;
  values: number[];
}

export interface MetricData {
  title: string;
  amount: string;
  percentage: string;
  isPositive: boolean;
  currency?: string;
}

export interface ListingsOverview {
  total: string;
  active: number;
  archived: string;
}

export interface UsersOverview {
  total: string;
  riders: string;
  subscribers: string;
}

export interface DashboardData {
  userName: string;
  salesOverview: {
    dateRange: string;
    chartData: ChartDataPoint[];
    metrics: MetricData[];
  };
  listings: ListingsOverview;
  users: UsersOverview;
}
