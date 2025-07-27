"use client";

import { useAgentStats } from "@/lib/api/agent";
import { DashboardLayout } from "@/components/dashboard-layout";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { FadeIn, SlideUp } from "@/components/animations";
import { Skeleton } from "@/components/ui/skeleton";
import {
  ResponsiveContainer,
  BarChart,
  Bar,
  XAxis,
  YAxis,
  CartesianGrid,
  Tooltip,
  Legend,
  PieChart,
  Pie,
  Cell,
  LineChart,
  Line,
} from "recharts";

const COLORS = ["#0088FE", "#00C49F", "#FFBB28", "#FF8042", "#8884D8"];

export default function AgentAnalyticsPage() {
  const { data: statsData, isLoading } = useAgentStats();

  if (isLoading) {
    return (
      <DashboardLayout requireAgent>
        <div className="space-y-6">
          <h1 className="text-3xl font-bold">Analytics</h1>
          <div className="grid gap-6 md:grid-cols-2">
            {Array.from({ length: 4 }).map((_, i) => (
              <Card key={i} className="h-[400px]">
                <CardHeader>
                  <Skeleton className="h-5 w-40" />
                </CardHeader>
                <CardContent>
                  <Skeleton className="h-[320px] w-full" />
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </DashboardLayout>
    );
  }

  if (!statsData) {
    return (
      <DashboardLayout requireAgent>
        <div className="flex h-full items-center justify-center">
          <p className="text-center text-muted-foreground">
            Failed to load analytics data. Please try again later.
          </p>
        </div>
      </DashboardLayout>
    );
  }

  const stats = statsData.data;

  return (
    <DashboardLayout requireAgent>
      <FadeIn>
        <h1 className="text-3xl font-bold">Analytics</h1>
        <p className="mt-1 text-muted-foreground">
          Detailed insights into your property performance
        </p>
      </FadeIn>

      <Tabs defaultValue="revenue" className="mt-6">
        <TabsList className="grid w-full grid-cols-4">
          <TabsTrigger value="revenue">Revenue</TabsTrigger>
          <TabsTrigger value="bookings">Bookings</TabsTrigger>
          <TabsTrigger value="properties">Properties</TabsTrigger>
          {}
        </TabsList>

        <TabsContent value="revenue" className="mt-6">
          <div className="grid gap-6 md:grid-cols-2">
            <SlideUp delay={0.1}>
              <Card>
                <CardHeader>
                  <CardTitle>Monthly Revenue</CardTitle>
                </CardHeader>
                <CardContent>
                  <ResponsiveContainer width="100%" height={350}>
                    <LineChart data={stats.revenueData}>
                      <CartesianGrid strokeDasharray="3 3" />
                      <XAxis dataKey="name" />
                      <YAxis />
                      <Tooltip formatter={(value) => `$${value}`} />
                      <Legend />
                      <Line
                        type="monotone"
                        dataKey="value"
                        name="Revenue"
                        stroke="#8884d8"
                        strokeWidth={2}
                        activeDot={{ r: 8 }}
                      />
                    </LineChart>
                  </ResponsiveContainer>
                </CardContent>
              </Card>
            </SlideUp>

            <SlideUp delay={0.2}>
              <Card>
                <CardHeader>
                  <CardTitle>Revenue by Location</CardTitle>
                </CardHeader>
                <CardContent>
                  <ResponsiveContainer width="100%" height={350}>
                    <PieChart>
                      <Pie
                        data={stats.topLocations || []}
                        cx="50%"
                        cy="50%"
                        labelLine={false}
                        outerRadius={120}
                        fill="#8884d8"
                        dataKey="properties"
                        nameKey="name"
                        label={({ name, percent }) =>
                          `${name}: ${(percent * 100).toFixed(0)}%`
                        }
                      >
                        {(stats.topLocations || []).map((_entry, index) => (
                          <Cell
                            key={`cell-${index}`}
                            fill={COLORS[index % COLORS.length]}
                          />
                        ))}
                      </Pie>
                      <Tooltip formatter={(value) => `${value} properties`} />
                    </PieChart>
                  </ResponsiveContainer>
                </CardContent>
              </Card>
            </SlideUp>
          </div>
        </TabsContent>

        <TabsContent value="bookings" className="mt-6">
          <div className="grid gap-6 md:grid-cols-2">
            <SlideUp delay={0.1}>
              <Card>
                <CardHeader>
                  <CardTitle>Monthly Bookings</CardTitle>
                </CardHeader>
                <CardContent>
                  <ResponsiveContainer width="100%" height={350}>
                    <BarChart data={stats.bookingsData}>
                      <CartesianGrid strokeDasharray="3 3" />
                      <XAxis dataKey="name" />
                      <YAxis />
                      <Tooltip />
                      <Legend />
                      <Bar dataKey="value" name="Bookings" fill="#82ca9d" />
                    </BarChart>
                  </ResponsiveContainer>
                </CardContent>
              </Card>
            </SlideUp>

            <SlideUp delay={0.2}>
              <Card>
                <CardHeader>
                  <CardTitle>Top Performing Properties</CardTitle>
                </CardHeader>
                <CardContent>
                  <ResponsiveContainer width="100%" height={350}>
                    <BarChart
                      data={stats.topProperties}
                      layout="vertical"
                      margin={{ left: 20 }}
                    >
                      <CartesianGrid strokeDasharray="3 3" />
                      <XAxis type="number" />
                      <YAxis
                        type="category"
                        dataKey="title"
                        width={100}
                        tick={{ fontSize: 12 }}
                      />
                      <Tooltip />
                      <Legend />
                      <Bar dataKey="bookings" name="Bookings" fill="#8884d8" />
                    </BarChart>
                  </ResponsiveContainer>
                </CardContent>
              </Card>
            </SlideUp>
          </div>
        </TabsContent>

        <TabsContent value="properties" className="mt-6">
          <div className="grid gap-6 md:grid-cols-2">
            <SlideUp delay={0.1}>
              <Card>
                <CardHeader>
                  <CardTitle>Properties by Location</CardTitle>
                </CardHeader>
                <CardContent>
                  <ResponsiveContainer width="100%" height={350}>
                    <PieChart>
                      <Pie
                        data={stats.topLocations || []}
                        cx="50%"
                        cy="50%"
                        labelLine={false}
                        outerRadius={120}
                        fill="#8884d8"
                        dataKey="properties"
                        nameKey="name"
                        label={({ name, percent }) =>
                          `${name}: ${(percent * 100).toFixed(0)}%`
                        }
                      >
                        {(stats.topLocations || []).map((_entry, index) => (
                          <Cell
                            key={`cell-${index}`}
                            fill={COLORS[index % COLORS.length]}
                          />
                        ))}
                      </Pie>
                      <Tooltip formatter={(value) => `${value} properties`} />
                    </PieChart>
                  </ResponsiveContainer>
                </CardContent>
              </Card>
            </SlideUp>

            <SlideUp delay={0.2}>
              <Card>
                <CardHeader>
                  <CardTitle>Property Status Distribution</CardTitle>
                </CardHeader>
                <CardContent>
                  <ResponsiveContainer width="100%" height={350}>
                    <PieChart>
                      <Pie
                        data={[
                          { name: "Active", value: stats.totalProperties - 2 },
                          { name: "Inactive", value: 1 },
                          { name: "Pending", value: 1 },
                        ]}
                        cx="50%"
                        cy="50%"
                        labelLine={false}
                        outerRadius={120}
                        fill="#8884d8"
                        dataKey="value"
                        nameKey="name"
                        label={({ name, percent }) =>
                          `${name}: ${(percent * 100).toFixed(0)}%`
                        }
                      >
                        <Cell fill="#4ade80" />
                        <Cell fill="#f87171" />
                        <Cell fill="#facc15" />
                      </Pie>
                      <Tooltip formatter={(value) => `${value} properties`} />
                    </PieChart>
                  </ResponsiveContainer>
                </CardContent>
              </Card>
            </SlideUp>
          </div>
        </TabsContent>
        {}
      </Tabs>
    </DashboardLayout>
  );
}
