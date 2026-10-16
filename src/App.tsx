import { useState } from "react";
import {
  Activity,
  ArrowDownRight,
  ArrowUpRight,
  Bell,
  ChartColumnIncreasing,
  ChevronDown,
  CreditCard,
  LayoutDashboard,
  Menu,
  Search,
  Settings,
  ShoppingCart,
  Users,
  X,
} from "lucide-react";

import { Button } from "./components/ui/button";
import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Avatar, AvatarFallback } from "@/components/ui/avatar";
import { Input } from "@/components/ui/input";
import { Separator } from "@/components/ui/separator";

const navigation = [
  { label: "Dashboard", icon: LayoutDashboard },
  { label: "Analytics", icon: ChartColumnIncreasing },
  { label: "Customers", icon: Users },
  { label: "Orders", icon: ShoppingCart },
  { label: "Payments", icon: CreditCard },
  { label: "Settings", icon: Settings },
];

const stats = [
  {
    title: "Total Revenue",
    value: "$48,294",
    change: "+12.8%",
    description: "Compared to last month",
    icon: CreditCard,
    positive: true,
  },
  {
    title: "Total Customers",
    value: "2,420",
    change: "+8.2%",
    description: "Compared to last month",
    icon: Users,
    positive: true,
  },
  {
    title: "Total Orders",
    value: "1,840",
    change: "+5.4%",
    description: "Compared to last month",
    icon: ShoppingCart,
    positive: true,
  },
  {
    title: "Conversion Rate",
    value: "3.62%",
    change: "-1.2%",
    description: "Compared to last month",
    icon: Activity,
    positive: false,
  },
];

const transactions = [
  {
    name: "Olivia Martin",
    email: "olivia@example.com",
    amount: "+$1,999.00",
    status: "Completed",
    initials: "OM",
  },
  {
    name: "Jackson Lee",
    email: "jackson@example.com",
    amount: "+$39.00",
    status: "Pending",
    initials: "JL",
  },
  {
    name: "Isabella Nguyen",
    email: "isabella@example.com",
    amount: "+$299.00",
    status: "Completed",
    initials: "IN",
  },
  {
    name: "William Kim",
    email: "william@example.com",
    amount: "+$99.00",
    status: "Failed",
    initials: "WK",
  },
  {
    name: "Sofia Davis",
    email: "sofia@example.com",
    amount: "+$799.00",
    status: "Completed",
    initials: "SD",
  },
];

const activities = [
  {
    initials: "OM",
    name: "Olivia Martin",
    action: "purchased a Premium Plan",
    time: "2 minutes ago",
  },
  {
    initials: "JL",
    name: "Jackson Lee",
    action: "created a new account",
    time: "18 minutes ago",
  },
  {
    initials: "IN",
    name: "Isabella Nguyen",
    action: "completed a payment",
    time: "42 minutes ago",
  },
  {
    initials: "WK",
    name: "William Kim",
    action: "requested a refund",
    time: "1 hour ago",
  },
];

const revenueData = [
  { month: "Jan", revenue: 35, expenses: 20 },
  { month: "Feb", revenue: 48, expenses: 27 },
  { month: "Mar", revenue: 40, expenses: 24 },
  { month: "Apr", revenue: 65, expenses: 36 },
  { month: "May", revenue: 52, expenses: 31 },
  { month: "Jun", revenue: 76, expenses: 42 },
  { month: "Jul", revenue: 61, expenses: 34 },
  { month: "Aug", revenue: 83, expenses: 46 },
  { month: "Sep", revenue: 68, expenses: 39 },
  { month: "Oct", revenue: 92, expenses: 51 },
  { month: "Nov", revenue: 78, expenses: 44 },
  { month: "Dec", revenue: 100, expenses: 58 },
];

function Sidebar({ open, onClose }: { open: boolean; onClose: () => void }) {
  return (
    <>
      {open && (
        <button
          type="button"
          aria-label="Close navigation"
          onClick={onClose}
          className="fixed inset-0 z-40 bg-black/40 lg:hidden"
        />
      )}

      <aside
        className={`fixed inset-y-0 left-0 z-50 flex w-64 flex-col border-r bg-white transition-transform duration-200 lg:static lg:z-auto lg:translate-x-0 ${
          open ? "translate-x-0" : "-translate-x-full"
        }`}
      >
        <div className="flex h-16 items-center justify-between border-b px-5">
          <div className="flex items-center gap-2">
            <div className="flex h-9 w-9 items-center justify-center rounded-xl bg-slate-900 text-white">
              <ChartColumnIncreasing size={21} />
            </div>
            <span className="text-lg font-bold tracking-tight">DashFlow</span>
          </div>

          <Button
            variant="ghost"
            size="icon"
            className="lg:hidden"
            onClick={onClose}
            aria-label="Close sidebar"
          >
            <X size={19} />
          </Button>
        </div>

        <div className="px-4 py-6">
          <p className="mb-3 px-2 text-xs font-semibold uppercase tracking-wider text-slate-400">
            Workspace
          </p>

          <nav className="space-y-1">
            {navigation.map((item, index) => {
              const Icon = item.icon;
              const active = index === 0;

              return (
                <button
                  key={item.label}
                  type="button"
                  onClick={onClose}
                  className={`flex w-full items-center gap-3 rounded-lg px-3 py-2.5 text-sm font-medium transition ${
                    active
                      ? "bg-slate-900 text-white"
                      : "text-slate-600 hover:bg-slate-100 hover:text-slate-900"
                  }`}
                >
                  <Icon size={18} />
                  {item.label}

                  {item.label === "Orders" && (
                    <span className="ml-auto rounded-md bg-slate-100 px-2 py-0.5 text-xs text-slate-600">
                      12
                    </span>
                  )}
                </button>
              );
            })}
          </nav>
        </div>

        <div className="mt-auto p-4">
          <Card className="border-slate-200 bg-slate-50 shadow-none">
            <CardContent className="p-4">
              <p className="text-sm font-semibold">Upgrade your plan</p>
              <p className="mt-1 text-xs leading-5 text-slate-500">
                Get advanced analytics and more powerful tools.
              </p>
              <Button className="mt-3 w-full" size="sm">
                Upgrade now
              </Button>
            </CardContent>
          </Card>

          <div className="mt-4 flex items-center gap-3 rounded-lg p-2">
            <Avatar>
              <AvatarFallback>JD</AvatarFallback>
            </Avatar>
            <div className="min-w-0 flex-1">
              <p className="truncate text-sm font-semibold">John Doe</p>
              <p className="truncate text-xs text-slate-500">
                john@example.com
              </p>
            </div>
            <Settings size={17} className="text-slate-400" />
          </div>
        </div>
      </aside>
    </>
  );
}

function RevenueChart() {
  return (
    <Card className="h-full">
      <CardHeader className="flex flex-row items-start justify-between space-y-0">
        <div>
          <CardTitle>Revenue Overview</CardTitle>
          <CardDescription className="mt-1">
            Monthly revenue and expenses
          </CardDescription>
        </div>

        <Button variant="outline" size="sm">
          This year
          <ChevronDown size={15} className="ml-2" />
        </Button>
      </CardHeader>

      <CardContent>
        <div className="mb-5 flex flex-wrap items-end justify-between gap-4">
          <div>
            <p className="text-3xl font-bold tracking-tight">$84,254</p>
            <p className="mt-1 flex items-center gap-1 text-sm text-emerald-600">
              <ArrowUpRight size={16} />
              12.8% from last year
            </p>
          </div>

          <div className="flex gap-4 text-xs text-slate-500">
            <span className="flex items-center gap-2">
              <span className="h-2.5 w-2.5 rounded-full bg-slate-900" />
              Revenue
            </span>
            <span className="flex items-center gap-2">
              <span className="h-2.5 w-2.5 rounded-full bg-slate-300" />
              Expenses
            </span>
          </div>
        </div>

        <div className="flex h-56 w-full gap-2 sm:gap-4">
          <div className="flex flex-col justify-between pb-6 text-xs text-slate-400">
            <span>$10k</span>
            <span>$7.5k</span>
            <span>$5k</span>
            <span>$2.5k</span>
            <span>$0</span>
          </div>

          <div className="relative flex min-w-0 flex-1 flex-col">
            <div className="pointer-events-none absolute inset-0 flex flex-col justify-between pb-6">
              {[0, 1, 2, 3, 4].map((line) => (
                <div
                  key={line}
                  className="w-full border-t border-dashed border-slate-200"
                />
              ))}
            </div>

            <div className="relative flex min-h-0 flex-1 items-end justify-between gap-1">
              {revenueData.map((item) => (
                <div
                  key={item.month}
                  className="flex h-full min-w-0 flex-1 items-end justify-center gap-0.5 sm:gap-1"
                  title={`${item.month}: Revenue ${item.revenue}%, Expenses ${item.expenses}%`}
                >
                  <div
                    className="w-1/2 max-w-5 rounded-t-sm bg-slate-900 transition-opacity hover:opacity-75"
                    style={{ height: `${item.revenue}%` }}
                  />
                  <div
                    className="w-1/2 max-w-5 rounded-t-sm bg-slate-300 transition-opacity hover:opacity-75"
                    style={{ height: `${item.expenses}%` }}
                  />
                </div>
              ))}
            </div>

            <div className="mt-2 flex justify-between text-[10px] text-slate-400 sm:text-xs">
              {revenueData.map((item) => (
                <span key={item.month}>{item.month}</span>
              ))}
            </div>
          </div>
        </div>
      </CardContent>
    </Card>
  );
}

function RecentTransactions() {
  return (
    <Card>
      <CardHeader>
        <CardTitle>Recent Transactions</CardTitle>
        <CardDescription>You received 235 payments this month.</CardDescription>
      </CardHeader>

      <CardContent>
        <div className="space-y-5">
          {transactions.map((transaction) => (
            <div key={transaction.email} className="flex items-center gap-3">
              <Avatar className="h-9 w-9">
                <AvatarFallback>{transaction.initials}</AvatarFallback>
              </Avatar>

              <div className="min-w-0 flex-1">
                <p className="truncate text-sm font-medium">
                  {transaction.name}
                </p>
                <p className="truncate text-xs text-slate-500">
                  {transaction.email}
                </p>
              </div>

              <div className="text-right">
                <p className="text-sm font-semibold">{transaction.amount}</p>
                <Badge
                  variant={
                    transaction.status === "Completed"
                      ? "default"
                      : transaction.status === "Pending"
                        ? "secondary"
                        : "destructive"
                  }
                  className="mt-1 text-[10px]"
                >
                  {transaction.status}
                </Badge>
              </div>
            </div>
          ))}
        </div>
      </CardContent>
    </Card>
  );
}

function RecentActivity() {
  return (
    <Card>
      <CardHeader>
        <CardTitle>Recent Activity</CardTitle>
        <CardDescription>Latest updates from your workspace</CardDescription>
      </CardHeader>

      <CardContent>
        <div className="space-y-5">
          {activities.map((activity, index) => (
            <div
              key={`${activity.name}-${activity.time}`}
              className="flex gap-3"
            >
              <div className="flex flex-col items-center">
                <Avatar className="h-9 w-9">
                  <AvatarFallback>{activity.initials}</AvatarFallback>
                </Avatar>
                {index !== activities.length - 1 && (
                  <div className="mt-2 h-5 w-px bg-slate-200" />
                )}
              </div>

              <div className="min-w-0 pb-2">
                <p className="text-sm leading-5">
                  <span className="font-semibold">{activity.name}</span>{" "}
                  <span className="text-slate-500">{activity.action}</span>
                </p>
                <p className="mt-1 text-xs text-slate-400">{activity.time}</p>
              </div>
            </div>
          ))}
        </div>
      </CardContent>
    </Card>
  );
}

function DashboardHeader({ onMenuClick }: { onMenuClick: () => void }) {
  return (
    <header className="sticky top-0 z-30 flex h-16 items-center justify-between gap-3 border-b bg-white/95 px-4 backdrop-blur sm:px-6 lg:px-8">
      <div className="flex min-w-0 items-center gap-3">
        <Button
          variant="ghost"
          size="icon"
          className="shrink-0 lg:hidden"
          onClick={onMenuClick}
          aria-label="Open sidebar"
        >
          <Menu size={21} />
        </Button>

        <div className="hidden w-72 sm:block">
          <div className="relative">
            <Search
              size={17}
              className="absolute left-3 top-1/2 -translate-y-1/2 text-slate-400"
            />
            <Input
              placeholder="Search anything..."
              className="pl-9"
              aria-label="Search dashboard"
            />
          </div>
        </div>

        <h1 className="truncate text-base font-semibold sm:hidden">
          Dashboard
        </h1>
      </div>

      <div className="flex shrink-0 items-center gap-2 sm:gap-4">
        <Button
          variant="ghost"
          size="icon"
          className="relative"
          aria-label="Notifications"
        >
          <Bell size={19} />
          <span className="absolute right-2 top-2 h-2 w-2 rounded-full bg-red-500 ring-2 ring-white" />
        </Button>

        <Separator orientation="vertical" className="hidden h-8 sm:block" />

        <button
          type="button"
          className="flex items-center gap-2 rounded-lg p-1.5 hover:bg-slate-100"
        >
          <Avatar className="h-8 w-8">
            <AvatarFallback>JD</AvatarFallback>
          </Avatar>
          <span className="hidden text-sm font-medium sm:block">John Doe</span>
          <ChevronDown size={15} className="hidden text-slate-500 sm:block" />
        </button>
      </div>
    </header>
  );
}

export default function App() {
  const [sidebarOpen, setSidebarOpen] = useState(false);

  return (
    <div className="min-h-screen bg-slate-50 text-slate-900">
      <div className="flex min-h-screen">
        <Sidebar open={sidebarOpen} onClose={() => setSidebarOpen(false)} />

        <div className="min-w-0 flex-1">
          <DashboardHeader onMenuClick={() => setSidebarOpen(true)} />

          <main className="mx-auto max-w-[1600px] space-y-6 p-4 sm:p-6 lg:p-8">
            <div className="flex flex-col justify-between gap-4 sm:flex-row sm:items-center">
              <div>
                <h2 className="text-2xl font-bold tracking-tight sm:text-3xl">
                  Dashboard
                </h2>
                <p className="mt-1 text-sm text-slate-500">
                  Welcome back! Here's what's happening with your business.
                </p>
              </div>

              <div className="flex flex-wrap items-center gap-2">
                <Button variant="outline">
                  Last 30 days
                  <ChevronDown size={15} className="ml-2" />
                </Button>
                <Button>
                  <ChartColumnIncreasing size={17} className="mr-2" />
                  Download report
                </Button>
              </div>
            </div>

            <section
              aria-label="Business statistics"
              className="grid gap-4 sm:grid-cols-2 xl:grid-cols-4"
            >
              {stats.map((stat) => {
                const Icon = stat.icon;

                return (
                  <Card key={stat.title}>
                    <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
                      <CardDescription>{stat.title}</CardDescription>
                      <div className="rounded-lg bg-slate-100 p-2">
                        <Icon size={17} className="text-slate-600" />
                      </div>
                    </CardHeader>

                    <CardContent>
                      <div className="text-2xl font-bold tracking-tight">
                        {stat.value}
                      </div>

                      <div className="mt-2 flex flex-wrap items-center gap-1 text-xs">
                        <span
                          className={`flex items-center font-semibold ${
                            stat.positive ? "text-emerald-600" : "text-red-600"
                          }`}
                        >
                          {stat.positive ? (
                            <ArrowUpRight size={15} />
                          ) : (
                            <ArrowDownRight size={15} />
                          )}
                          {stat.change}
                        </span>
                        <span className="text-slate-500">
                          {stat.description}
                        </span>
                      </div>
                    </CardContent>
                  </Card>
                );
              })}
            </section>

            <section className="grid gap-6 xl:grid-cols-3">
              <div className="xl:col-span-2">
                <RevenueChart />
              </div>
              <RecentActivity />
            </section>

            <section className="grid gap-6 xl:grid-cols-2">
              <RecentTransactions />

              <Card>
                <CardHeader>
                  <CardTitle>Performance Summary</CardTitle>
                  <CardDescription>
                    Progress toward your monthly goals
                  </CardDescription>
                </CardHeader>

                <CardContent className="space-y-6">
                  <div>
                    <div className="mb-2 flex items-center justify-between">
                      <span className="text-sm font-medium">
                        Monthly Revenue
                      </span>
                      <span className="text-sm font-semibold">
                        $8,420 / $10,000
                      </span>
                    </div>
                    <div
                      className="h-2.5 overflow-hidden rounded-full bg-slate-100"
                      role="progressbar"
                      aria-label="Monthly revenue goal"
                      aria-valuemin={0}
                      aria-valuemax={100}
                      aria-valuenow={84}
                    >
                      <div className="h-full w-[84%] rounded-full bg-slate-900" />
                    </div>
                    <p className="mt-2 text-xs text-slate-500">
                      84% of your monthly revenue goal
                    </p>
                  </div>

                  <div>
                    <div className="mb-2 flex items-center justify-between">
                      <span className="text-sm font-medium">New Customers</span>
                      <span className="text-sm font-semibold">186 / 200</span>
                    </div>
                    <div
                      className="h-2.5 overflow-hidden rounded-full bg-slate-100"
                      role="progressbar"
                      aria-label="New customers goal"
                      aria-valuemin={0}
                      aria-valuemax={100}
                      aria-valuenow={93}
                    >
                      <div className="h-full w-[93%] rounded-full bg-emerald-500" />
                    </div>
                    <p className="mt-2 text-xs text-slate-500">
                      93% of your monthly customer goal
                    </p>
                  </div>

                  <div>
                    <div className="mb-2 flex items-center justify-between">
                      <span className="text-sm font-medium">
                        Orders Completed
                      </span>
                      <span className="text-sm font-semibold">720 / 900</span>
                    </div>
                    <div
                      className="h-2.5 overflow-hidden rounded-full bg-slate-100"
                      role="progressbar"
                      aria-label="Orders completed goal"
                      aria-valuemin={0}
                      aria-valuemax={100}
                      aria-valuenow={80}
                    >
                      <div className="h-full w-[80%] rounded-full bg-blue-500" />
                    </div>
                    <p className="mt-2 text-xs text-slate-500">
                      80% of your monthly order goal
                    </p>
                  </div>
                </CardContent>
              </Card>
            </section>

            <footer className="border-t pt-5 text-center text-xs text-slate-400">
              © 2026 DashFlow. All rights reserved.
            </footer>
          </main>
        </div>
      </div>
    </div>
  );
}
