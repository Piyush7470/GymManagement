"use client";

import { useEffect, useState } from "react";
import { LineChart, Line, XAxis, YAxis, CartesianGrid, Tooltip, Legend, ResponsiveContainer } from 'recharts';
import { Card } from "@/components/ui/card";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";

// Sample data - in a real app, this would come from your backend
const weightData = [
  { date: 'Jan 1', value: 180 },
  { date: 'Jan 8', value: 179 },
  { date: 'Jan 15', value: 178 },
  { date: 'Jan 22', value: 177 },
  { date: 'Jan 29', value: 176 },
  { date: 'Feb 5', value: 175.5 },
  { date: 'Feb 12', value: 175 },
];

const strengthData = [
  { date: 'Jan 1', bench: 175, squat: 235, deadlift: 285 },
  { date: 'Jan 15', bench: 180, squat: 245, deadlift: 295 },
  { date: 'Feb 1', bench: 185, squat: 255, deadlift: 315 },
];

const measurementData = [
  { date: 'Jan 1', chest: 41, waist: 35, arms: 14.5 },
  { date: 'Jan 15', chest: 41.5, waist: 34.5, arms: 14.7 },
  { date: 'Feb 1', chest: 42, waist: 34, arms: 15 },
];

export function DashboardChart() {
  const [mounted, setMounted] = useState(false);

  useEffect(() => {
    setMounted(true);
  }, []);

  if (!mounted) {
    return <div className="h-[300px] flex items-center justify-center bg-muted/40 rounded-md">Loading chart...</div>;
  }

  return (
    <Tabs defaultValue="weight" className="w-full">
      <TabsList className="mb-4">
        <TabsTrigger value="weight">Weight</TabsTrigger>
        <TabsTrigger value="strength">Strength</TabsTrigger>
        <TabsTrigger value="measurements">Measurements</TabsTrigger>
      </TabsList>
      
      <TabsContent value="weight" className="h-[300px]">
        <ResponsiveContainer width="100%" height="100%">
          <LineChart
            data={weightData}
            margin={{ top: 5, right: 30, left: 20, bottom: 5 }}
          >
            <CartesianGrid strokeDasharray="3 3" />
            <XAxis dataKey="date" />
            <YAxis domain={['dataMin - 2', 'dataMax + 2']} />
            <Tooltip 
              contentStyle={{ 
                backgroundColor: 'hsl(var(--card))', 
                borderColor: 'hsl(var(--border))', 
                borderRadius: '0.5rem',
                color: 'hsl(var(--card-foreground))'
              }} 
            />
            <Legend />
            <Line 
              type="monotone" 
              dataKey="value" 
              name="Weight (lbs)" 
              stroke="hsl(var(--chart-1))" 
              strokeWidth={2}
              activeDot={{ r: 8 }} 
            />
          </LineChart>
        </ResponsiveContainer>
      </TabsContent>
      
      <TabsContent value="strength" className="h-[300px]">
        <ResponsiveContainer width="100%" height="100%">
          <LineChart
            data={strengthData}
            margin={{ top: 5, right: 30, left: 20, bottom: 5 }}
          >
            <CartesianGrid strokeDasharray="3 3" />
            <XAxis dataKey="date" />
            <YAxis domain={[100, 350]} />
            <Tooltip 
              contentStyle={{ 
                backgroundColor: 'hsl(var(--card))', 
                borderColor: 'hsl(var(--border))', 
                borderRadius: '0.5rem',
                color: 'hsl(var(--card-foreground))'
              }} 
            />
            <Legend />
            <Line 
              type="monotone" 
              dataKey="bench" 
              name="Bench Press (lbs)" 
              stroke="hsl(var(--chart-1))" 
              strokeWidth={2}
              activeDot={{ r: 8 }} 
            />
            <Line 
              type="monotone" 
              dataKey="squat" 
              name="Squat (lbs)" 
              stroke="hsl(var(--chart-2))" 
              strokeWidth={2}
              activeDot={{ r: 8 }} 
            />
            <Line 
              type="monotone" 
              dataKey="deadlift" 
              name="Deadlift (lbs)" 
              stroke="hsl(var(--chart-3))" 
              strokeWidth={2}
              activeDot={{ r: 8 }} 
            />
          </LineChart>
        </ResponsiveContainer>
      </TabsContent>
      
      <TabsContent value="measurements" className="h-[300px]">
        <ResponsiveContainer width="100%" height="100%">
          <LineChart
            data={measurementData}
            margin={{ top: 5, right: 30, left: 20, bottom: 5 }}
          >
            <CartesianGrid strokeDasharray="3 3" />
            <XAxis dataKey="date" />
            <YAxis domain={[10, 45]} />
            <Tooltip 
              contentStyle={{ 
                backgroundColor: 'hsl(var(--card))', 
                borderColor: 'hsl(var(--border))', 
                borderRadius: '0.5rem',
                color: 'hsl(var(--card-foreground))'
              }} 
            />
            <Legend />
            <Line 
              type="monotone" 
              dataKey="chest" 
              name="Chest (in)" 
              stroke="hsl(var(--chart-1))" 
              strokeWidth={2}
              activeDot={{ r: 8 }} 
            />
            <Line 
              type="monotone" 
              dataKey="waist" 
              name="Waist (in)" 
              stroke="hsl(var(--chart-2))" 
              strokeWidth={2}
              activeDot={{ r: 8 }} 
            />
            <Line 
              type="monotone" 
              dataKey="arms" 
              name="Arms (in)" 
              stroke="hsl(var(--chart-3))" 
              strokeWidth={2}
              activeDot={{ r: 8 }} 
            />
          </LineChart>
        </ResponsiveContainer>
      </TabsContent>
    </Tabs>
  );
}