"use client";

import { Card, CardHeader, CardTitle, CardContent } from "@/components/ui/card";
import { Tabs, TabsList, TabsTrigger, TabsContent } from "@/components/ui/tabs";
import {
  Table,
  TableHeader,
  TableRow,
  TableHead,
  TableBody,
  TableCell,
} from "@/components/ui/table";
import {
  ResponsiveContainer,
  LineChart,
  Line,
  XAxis,
  YAxis,
  Tooltip,
  BarChart,
  Bar,
  CartesianGrid,
  Legend,
} from "recharts";

const reportData = [
  { id: 1, name: "فروش", value: "۱۲٬۳۰۰$", change: "+۵٪" },
  { id: 2, name: "کاربران", value: "۱٬۲۳۰", change: "+۲٪" },
  { id: 3, name: "سفارش‌ها", value: "۳۲۰", change: "-۱٪" },
];

const chartData = [
  { name: "فروردین", فروش: 11000, کاربران: 1000, سفارش‌ها: 300 },
  { name: "اردیبهشت", فروش: 12000, کاربران: 1100, سفارش‌ها: 320 },
  { name: "خرداد", فروش: 12300, کاربران: 1230, سفارش‌ها: 320 },
];

export default function ReportsPage() {
  return (
    <div className="container mx-auto py-8">
      <h1 className="text-3xl font-bold mb-6">گزارش‌ها</h1>
      <Tabs defaultValue="overview" className="mb-8">
        <TabsList>
          <TabsTrigger value="overview">نمای کلی</TabsTrigger>
          <TabsTrigger value="details">جزئیات</TabsTrigger>
          <TabsTrigger value="charts">نمودارها</TabsTrigger>
        </TabsList>
        <TabsContent value="overview">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {reportData.map((report) => (
              <Card key={report.id}>
                <CardHeader>
                  <CardTitle>{report.name}</CardTitle>
                </CardHeader>
                <CardContent>
                  <div className="text-2xl font-semibold">{report.value}</div>
                  <div
                    className={`mt-2 text-sm ${
                      report.change.startsWith("+")
                        ? "text-green-600"
                        : "text-red-600"
                    }`}
                  >
                    {report.change}
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
        </TabsContent>
        <TabsContent value="details">
          <Card>
            <CardHeader>
              <CardTitle>جزئیات گزارش</CardTitle>
            </CardHeader>
            <CardContent>
              <Table>
                <TableHeader>
                  <TableRow>
                    <TableHead>نام</TableHead>
                    <TableHead>مقدار</TableHead>
                    <TableHead>تغییر</TableHead>
                  </TableRow>
                </TableHeader>
                <TableBody>
                  {reportData.map((report) => (
                    <TableRow key={report.id}>
                      <TableCell>{report.name}</TableCell>
                      <TableCell>{report.value}</TableCell>
                      <TableCell
                        className={
                          report.change.startsWith("+")
                            ? "text-green-600"
                            : "text-red-600"
                        }
                      >
                        {report.change}
                      </TableCell>
                    </TableRow>
                  ))}
                </TableBody>
              </Table>
            </CardContent>
          </Card>
        </TabsContent>
        <TabsContent value="charts">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            <Card>
              <CardHeader>
                <CardTitle>نمودار خطی فروش</CardTitle>
              </CardHeader>
              <CardContent>
                <ResponsiveContainer width="100%" height={250}>
                  <LineChart data={chartData}>
                    <CartesianGrid strokeDasharray="3 3" />
                    <XAxis dataKey="name" />
                    <YAxis />
                    <Tooltip />
                    <Legend />
                    <Line type="monotone" dataKey="فروش" stroke="#8884d8" />
                  </LineChart>
                </ResponsiveContainer>
              </CardContent>
            </Card>
            <Card>
              <CardHeader>
                <CardTitle>نمودار ستونی کاربران و سفارش‌ها</CardTitle>
              </CardHeader>
              <CardContent>
                <ResponsiveContainer width="100%" height={250}>
                  <BarChart data={chartData}>
                    <CartesianGrid strokeDasharray="3 3" />
                    <XAxis dataKey="name" />
                    <YAxis />
                    <Tooltip />
                    <Legend />
                    <Bar dataKey="کاربران" fill="#82ca9d" />
                    <Bar dataKey="سفارش‌ها" fill="#ffc658" />
                  </BarChart>
                </ResponsiveContainer>
              </CardContent>
            </Card>
          </div>
        </TabsContent>
      </Tabs>
    </div>
  );
}
