"use client";

import { Progress } from "@/components/ui/progress";
import { Card, CardContent } from "@/components/ui/card";
import { PieChart, Pie, Cell, ResponsiveContainer, Legend } from 'recharts';

const macroData = [
  { name: 'Protein', value: 180, target: 180, color: 'hsl(var(--chart-1))' },
  { name: 'Carbs', value: 200, target: 250, color: 'hsl(var(--chart-2))' },
  { name: 'Fats', value: 45, target: 70, color: 'hsl(var(--chart-3))' },
];

const mealData = [
  { name: 'Breakfast', calories: 450 },
  { name: 'Lunch', calories: 650 },
  { name: 'Snack', calories: 200 },
  { name: 'Dinner', calories: 550 },
];

const pieData = [
  { name: 'Protein', value: 180 * 4 }, // 4 calories per gram
  { name: 'Carbs', value: 200 * 4 },   // 4 calories per gram
  { name: 'Fats', value: 45 * 9 },     // 9 calories per gram
];

const COLORS = ['hsl(var(--chart-1))', 'hsl(var(--chart-2))', 'hsl(var(--chart-3))'];

export function NutritionSummary() {
  const totalCalories = mealData.reduce((sum, meal) => sum + meal.calories, 0);
  const targetCalories = 2100;
  const remainingCalories = targetCalories - totalCalories;
  const caloriePercentage = (totalCalories / targetCalories) * 100;

  return (
    <div className="space-y-6">
      <div className="space-y-2">
        <div className="flex justify-between">
          <h3 className="font-medium">Daily Calories</h3>
          <div className="text-sm">
            <span className="font-medium">{totalCalories}</span>
            <span className="text-muted-foreground"> / {targetCalories}</span>
          </div>
        </div>
        <Progress value={caloriePercentage} className="h-2" />
        <div className="text-sm text-muted-foreground">
          {remainingCalories > 0 
            ? `${remainingCalories} calories remaining` 
            : `${Math.abs(remainingCalories)} calories over target`}
        </div>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
        <div>
          <h3 className="font-medium mb-3">Macronutrients</h3>
          <div className="space-y-4">
            {macroData.map((macro) => (
              <div key={macro.name} className="space-y-1">
                <div className="flex justify-between text-sm">
                  <span>{macro.name}</span>
                  <span>
                    {macro.value}g / {macro.target}g
                  </span>
                </div>
                <Progress 
                  value={(macro.value / macro.target) * 100} 
                  className="h-2"
                  style={{ backgroundColor: `${macro.color}20` }} // 20% opacity of the color
                />
              </div>
            ))}
          </div>
        </div>

        <div className="h-[180px]">
          <h3 className="font-medium mb-3">Calorie Distribution</h3>
          <ResponsiveContainer width="100%" height="100%">
            <PieChart>
              <Pie
                data={pieData}
                cx="50%"
                cy="50%"
                innerRadius={40}
                outerRadius={70}
                paddingAngle={2}
                dataKey="value"
              >
                {pieData.map((entry, index) => (
                  <Cell key={`cell-${index}`} fill={COLORS[index % COLORS.length]} />
                ))}
              </Pie>
              <Legend />
            </PieChart>
          </ResponsiveContainer>
        </div>
      </div>

      <div>
        <h3 className="font-medium mb-3">Today's Meals</h3>
        <div className="space-y-2">
          {mealData.map((meal, index) => (
            <Card key={index}>
              <CardContent className="p-3 flex justify-between items-center">
                <span className="font-medium">{meal.name}</span>
                <span className="text-sm">{meal.calories} cal</span>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </div>
  );
}