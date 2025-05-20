"use client";

import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { CalendarIcon, LineChart, BarChart, PieChart, ArrowUp, ArrowDown, TrendingUp } from "lucide-react";
import { DashboardChart } from "@/components/dashboard/chart";
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select";
import { 
  BarChart as RechartsBarChart, 
  Bar, XAxis, YAxis, 
  CartesianGrid, 
  Tooltip, 
  Legend, 
  ResponsiveContainer, 
  PieChart as RechartsPieChart,
  Pie,
  Cell
} from 'recharts';

const weightData = [
  { date: 'Jan 1', value: 180 },
  { date: 'Jan 8', value: 179 },
  { date: 'Jan 15', value: 178 },
  { date: 'Jan 22', value: 177 },
  { date: 'Jan 29', value: 176 },
  { date: 'Feb 5', value: 175.5 },
  { date: 'Feb 12', value: 175 },
];

const workoutData = [
  { name: 'Week 1', sessions: 3 },
  { name: 'Week 2', sessions: 4 },
  { name: 'Week 3', sessions: 5 },
  { name: 'Week 4', sessions: 3 },
  { name: 'Week 5', sessions: 4 },
  { name: 'Week 6', sessions: 5 },
  { name: 'Week 7', sessions: 3 },
  { name: 'Week 8', sessions: 4 },
];

const workoutTypeData = [
  { name: 'Strength', value: 45 },
  { name: 'Cardio', value: 20 },
  { name: 'Flexibility', value: 15 },
  { name: 'HIIT', value: 20 },
];

const COLORS = ['hsl(var(--chart-1))', 'hsl(var(--chart-2))', 'hsl(var(--chart-3))', 'hsl(var(--chart-4))'];

export default function AnalyticsPage() {
  const [timeframe, setTimeframe] = useState("8weeks");

  return (
    <div className="container py-8 space-y-6">
      <div className="flex flex-col md:flex-row justify-between gap-4 items-start md:items-center">
        <div>
          <h1 className="text-3xl font-bold tracking-tight">Analytics</h1>
          <p className="text-muted-foreground">Track your progress and performance metrics</p>
        </div>
        <div className="flex items-center gap-2 w-full md:w-auto">
          <Select value={timeframe} onValueChange={setTimeframe}>
            <SelectTrigger className="w-full md:w-[180px]">
              <SelectValue placeholder="Select Timeframe" />
            </SelectTrigger>
            <SelectContent>
              <SelectItem value="4weeks">Last 4 Weeks</SelectItem>
              <SelectItem value="8weeks">Last 8 Weeks</SelectItem>
              <SelectItem value="6months">Last 6 Months</SelectItem>
              <SelectItem value="1year">Last Year</SelectItem>
            </SelectContent>
          </Select>
          <Button variant="outline">
            <CalendarIcon className="mr-2 h-4 w-4" />
            Custom Range
          </Button>
        </div>
      </div>

      <div className="grid gap-4 md:grid-cols-2 lg:grid-cols-4">
        <Card>
          <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
            <CardTitle className="text-sm font-medium">Current Weight</CardTitle>
            <LineChart className="h-4 w-4 text-muted-foreground" />
          </CardHeader>
          <CardContent>
            <div className="text-2xl font-bold">175 lbs</div>
            <div className="flex items-center text-xs text-green-500 font-medium">
              <ArrowDown className="mr-1 h-3 w-3" />
              <span>5 lbs since Jan 1</span>
            </div>
          </CardContent>
        </Card>
        <Card>
          <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
            <CardTitle className="text-sm font-medium">Workout Consistency</CardTitle>
            <BarChart className="h-4 w-4 text-muted-foreground" />
          </CardHeader>
          <CardContent>
            <div className="text-2xl font-bold">78%</div>
            <div className="flex items-center text-xs text-green-500 font-medium">
              <ArrowUp className="mr-1 h-3 w-3" />
              <span>12% increase</span>
            </div>
          </CardContent>
        </Card>
        <Card>
          <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
            <CardTitle className="text-sm font-medium">Strength Progress</CardTitle>
            <TrendingUp className="h-4 w-4 text-muted-foreground" />
          </CardHeader>
          <CardContent>
            <div className="text-2xl font-bold">+15%</div>
            <div className="flex items-center text-xs text-green-500 font-medium">
              <ArrowUp className="mr-1 h-3 w-3" />
              <span>Average across lifts</span>
            </div>
          </CardContent>
        </Card>
        <Card>
          <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
            <CardTitle className="text-sm font-medium">Body Fat</CardTitle>
            <PieChart className="h-4 w-4 text-muted-foreground" />
          </CardHeader>
          <CardContent>
            <div className="text-2xl font-bold">16%</div>
            <div className="flex items-center text-xs text-green-500 font-medium">
              <ArrowDown className="mr-1 h-3 w-3" />
              <span>3% reduction</span>
            </div>
          </CardContent>
        </Card>
      </div>

      <Tabs defaultValue="overview" className="w-full">
        <TabsList className="w-full md:w-auto">
          <TabsTrigger value="overview" className="flex-1 md:flex-none">Overview</TabsTrigger>
          <TabsTrigger value="body" className="flex-1 md:flex-none">Body Metrics</TabsTrigger>
          <TabsTrigger value="performance" className="flex-1 md:flex-none">Performance</TabsTrigger>
          <TabsTrigger value="nutrition" className="flex-1 md:flex-none">Nutrition</TabsTrigger>
        </TabsList>
        
        <TabsContent value="overview" className="space-y-4 mt-6">
          <div className="grid gap-4 grid-cols-1 lg:grid-cols-2">
            <Card>
              <CardHeader>
                <CardTitle>Weight Progression</CardTitle>
                <CardDescription>Track your weight changes over time</CardDescription>
              </CardHeader>
              <CardContent className="h-[300px]">
                <DashboardChart />
              </CardContent>
            </Card>
            
            <Card>
              <CardHeader>
                <CardTitle>Workout Consistency</CardTitle>
                <CardDescription>Number of workout sessions per week</CardDescription>
              </CardHeader>
              <CardContent className="h-[300px]">
                <ResponsiveContainer width="100%" height="100%">
                  <RechartsBarChart
                    data={workoutData}
                    margin={{ top: 20, right: 30, left: 20, bottom: 5 }}
                  >
                    <CartesianGrid strokeDasharray="3 3" />
                    <XAxis dataKey="name" />
                    <YAxis domain={[0, 7]} />
                    <Tooltip 
                      contentStyle={{ 
                        backgroundColor: 'hsl(var(--card))', 
                        borderColor: 'hsl(var(--border))', 
                        borderRadius: '0.5rem',
                        color: 'hsl(var(--card-foreground))'
                      }} 
                    />
                    <Bar dataKey="sessions" fill="hsl(var(--chart-1))" radius={[4, 4, 0, 0]} />
                  </RechartsBarChart>
                </ResponsiveContainer>
              </CardContent>
            </Card>
          </div>
          
          <div className="grid gap-4 grid-cols-1 lg:grid-cols-3">
            <Card className="col-span-1">
              <CardHeader>
                <CardTitle>Workout Types</CardTitle>
                <CardDescription>Distribution of workout types</CardDescription>
              </CardHeader>
              <CardContent className="h-[300px]">
                <ResponsiveContainer width="100%" height="100%">
                  <RechartsPieChart>
                    <Pie
                      data={workoutTypeData}
                      cx="50%"
                      cy="50%"
                      labelLine={false}
                      outerRadius={80}
                      fill="#8884d8"
                      dataKey="value"
                      label={({ name, percent }) => `${name} ${(percent * 100).toFixed(0)}%`}
                    >
                      {workoutTypeData.map((entry, index) => (
                        <Cell key={`cell-${index}`} fill={COLORS[index % COLORS.length]} />
                      ))}
                    </Pie>
                    <Tooltip 
                      contentStyle={{ 
                        backgroundColor: 'hsl(var(--card))', 
                        borderColor: 'hsl(var(--border))', 
                        borderRadius: '0.5rem',
                        color: 'hsl(var(--card-foreground))'
                      }} 
                    />
                  </RechartsPieChart>
                </ResponsiveContainer>
              </CardContent>
            </Card>
            
            <Card className="col-span-2">
              <CardHeader>
                <CardTitle>Achievement Timeline</CardTitle>
                <CardDescription>Your fitness milestones</CardDescription>
              </CardHeader>
              <CardContent>
                <div className="relative pl-5 border-l-2 border-border space-y-6 py-4">
                  <div className="relative -ml-[21px]">
                    <div className="h-10 w-10 rounded-full bg-primary flex items-center justify-center absolute">
                      <TrendingUp className="h-5 w-5 text-white" />
                    </div>
                    <div className="pl-12">
                      <h3 className="font-medium">New PR: Bench Press 185 lbs</h3>
                      <p className="text-muted-foreground text-sm">Feb 10, 2023</p>
                      <p className="text-sm mt-1">Increased from previous record of 175 lbs</p>
                    </div>
                  </div>
                  
                  <div className="relative -ml-[21px]">
                    <div className="h-10 w-10 rounded-full bg-primary/80 flex items-center justify-center absolute">
                      <BarChart className="h-5 w-5 text-white" />
                    </div>
                    <div className="pl-12">
                      <h3 className="font-medium">5-Day Workout Streak</h3>
                      <p className="text-muted-foreground text-sm">Feb 6, 2023</p>
                      <p className="text-sm mt-1">Completed 5 consecutive workout days</p>
                    </div>
                  </div>
                  
                  <div className="relative -ml-[21px]">
                    <div className="h-10 w-10 rounded-full bg-primary/60 flex items-center justify-center absolute">
                      <ArrowDown className="h-5 w-5 text-white" />
                    </div>
                    <div className="pl-12">
                      <h3 className="font-medium">Weight Goal Achieved</h3>
                      <p className="text-muted-foreground text-sm">Jan 28, 2023</p>
                      <p className="text-sm mt-1">Reached target weight of 180 lbs</p>
                    </div>
                  </div>
                </div>
              </CardContent>
            </Card>
          </div>
        </TabsContent>
        
        <TabsContent value="body" className="space-y-4 mt-6">
          <Card>
            <CardHeader>
              <CardTitle>Body Metrics</CardTitle>
              <CardDescription>Detailed body measurement tracking</CardDescription>
            </CardHeader>
            <CardContent>
              <div className="space-y-8">
                <DashboardChart />
              </div>
            </CardContent>
          </Card>
        </TabsContent>
        
        <TabsContent value="performance" className="space-y-4 mt-6">
          <Card>
            <CardHeader>
              <CardTitle>Strength Progression</CardTitle>
              <CardDescription>Track your strength gains over time</CardDescription>
            </CardHeader>
            <CardContent>
              <div className="space-y-8">
                <DashboardChart />
              </div>
            </CardContent>
          </Card>
        </TabsContent>
        
        <TabsContent value="nutrition" className="space-y-4 mt-6">
          <Card>
            <CardHeader>
              <CardTitle>Nutrition Trends</CardTitle>
              <CardDescription>Track your calorie and macronutrient intake</CardDescription>
            </CardHeader>
            <CardContent>
              <div className="space-y-8">
                <DashboardChart />
              </div>
            </CardContent>
          </Card>
        </TabsContent>
      </Tabs>
    </div>
  );
}