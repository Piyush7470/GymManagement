"use client";

import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from "@/components/ui/card";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { Progress } from "@/components/ui/progress";
import { Search, Plus, Salad, Apple, Coffee, Utensils, PlusCircle } from "lucide-react";
import { Input } from "@/components/ui/input";
import { NutritionSummary } from "@/components/dashboard/nutrition-summary";
import Link from "next/link";

const mealPlans = [
  {
    id: 1,
    title: "High Protein Cut",
    description: "Lean protein focus with moderate carbs for fat loss.",
    calories: 1800,
    macros: { protein: 180, carbs: 150, fat: 50 },
    category: "Weight Loss",
    image: "https://images.pexels.com/photos/1640773/pexels-photo-1640773.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750"
  },
  {
    id: 2,
    title: "Balanced Nutrition",
    description: "Well-balanced macros for maintenance and performance.",
    calories: 2200,
    macros: { protein: 165, carbs: 220, fat: 75 },
    category: "Maintenance",
    image: "https://images.pexels.com/photos/1640774/pexels-photo-1640774.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750"
  },
  {
    id: 3,
    title: "Muscle Builder",
    description: "Higher calories and carbs to fuel muscle growth.",
    calories: 2800,
    macros: { protein: 210, carbs: 350, fat: 80 },
    category: "Bulking",
    image: "https://images.pexels.com/photos/1307658/pexels-photo-1307658.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750"
  },
  {
    id: 4,
    title: "Low Carb",
    description: "Higher fat, moderate protein, and low carbs.",
    calories: 2000,
    macros: { protein: 150, carbs: 100, fat: 120 },
    category: "Specialized",
    image: "https://images.pexels.com/photos/1640768/pexels-photo-1640768.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750"
  },
];

const todaysMeals = [
  {
    id: 1,
    name: "Breakfast",
    time: "7:30 AM",
    foods: [
      { name: "Greek Yogurt", portion: "1 cup", calories: 130, protein: 22, carbs: 8, fat: 0 },
      { name: "Granola", portion: "1/4 cup", calories: 120, protein: 3, carbs: 20, fat: 3 },
      { name: "Blueberries", portion: "1/2 cup", calories: 40, protein: 0, carbs: 10, fat: 0 },
    ],
    totalCalories: 290,
    icon: Coffee,
  },
  {
    id: 2,
    name: "Lunch",
    time: "12:30 PM",
    foods: [
      { name: "Grilled Chicken", portion: "6 oz", calories: 280, protein: 52, carbs: 0, fat: 6 },
      { name: "Brown Rice", portion: "1 cup", calories: 220, protein: 5, carbs: 45, fat: 2 },
      { name: "Broccoli", portion: "1 cup", calories: 55, protein: 4, carbs: 11, fat: 0 },
    ],
    totalCalories: 555,
    icon: Utensils,
  },
  {
    id: 3,
    name: "Snack",
    time: "3:30 PM",
    foods: [
      { name: "Apple", portion: "1 medium", calories: 95, protein: 0, carbs: 25, fat: 0 },
      { name: "Almonds", portion: "1 oz", calories: 160, protein: 6, carbs: 6, fat: 14 },
    ],
    totalCalories: 255,
    icon: Apple,
  },
  {
    id: 4,
    name: "Dinner",
    time: "7:00 PM",
    foods: [
      { name: "Salmon", portion: "6 oz", calories: 350, protein: 34, carbs: 0, fat: 22 },
      { name: "Sweet Potato", portion: "1 medium", calories: 100, protein: 2, carbs: 23, fat: 0 },
      { name: "Asparagus", portion: "1 cup", calories: 40, protein: 4, carbs: 7, fat: 0 },
    ],
    totalCalories: 490,
    icon: Salad,
  },
];

export default function DietPage() {
  const [searchTerm, setSearchTerm] = useState("");

  const filteredPlans = mealPlans.filter(plan => 
    plan.title.toLowerCase().includes(searchTerm.toLowerCase()) ||
    plan.description.toLowerCase().includes(searchTerm.toLowerCase()) ||
    plan.category.toLowerCase().includes(searchTerm.toLowerCase())
  );

  const totalCalories = todaysMeals.reduce((sum, meal) => sum + meal.totalCalories, 0);
  const targetCalories = 2100;
  const remainingCalories = targetCalories - totalCalories;
  const caloriePercentage = (totalCalories / targetCalories) * 100;

  return (
    <div className="container py-8 space-y-6">
      <div className="flex flex-col md:flex-row justify-between gap-4 items-start md:items-center">
        <div>
          <h1 className="text-3xl font-bold tracking-tight">Nutrition</h1>
          <p className="text-muted-foreground">Track your meals and manage your diet</p>
        </div>
        <div className="flex gap-2 w-full md:w-auto">
          <div className="relative w-full md:w-[300px]">
            <Search className="absolute left-2.5 top-2.5 h-4 w-4 text-muted-foreground" />
            <Input
              type="search"
              placeholder="Search meal plans or foods..."
              className="pl-8 w-full"
              value={searchTerm}
              onChange={(e) => setSearchTerm(e.target.value)}
            />
          </div>
          <Button>
            <Plus className="mr-2 h-4 w-4" />
            Add Food
          </Button>
        </div>
      </div>

      <Tabs defaultValue="daily" className="w-full">
        <TabsList className="w-full md:w-auto">
          <TabsTrigger value="daily" className="flex-1 md:flex-none">Today</TabsTrigger>
          <TabsTrigger value="meal-plans" className="flex-1 md:flex-none">Meal Plans</TabsTrigger>
          <TabsTrigger value="food-log" className="flex-1 md:flex-none">Food Log</TabsTrigger>
        </TabsList>
        
        <TabsContent value="daily" className="space-y-6 mt-6">
          <Card>
            <CardHeader>
              <CardTitle>Daily Summary</CardTitle>
              <CardDescription>Your nutrition stats for today</CardDescription>
            </CardHeader>
            <CardContent>
              <NutritionSummary />
            </CardContent>
          </Card>
          
          <div className="space-y-4">
            <div className="flex justify-between items-center">
              <h2 className="text-xl font-bold">Today's Meals</h2>
              <Button variant="outline" size="sm">
                <PlusCircle className="mr-2 h-4 w-4" />
                Add Meal
              </Button>
            </div>
            
            {todaysMeals.map(meal => (
              <Card key={meal.id}>
                <CardHeader className="pb-2">
                  <div className="flex justify-between items-center">
                    <div className="flex items-center space-x-2">
                      <div className="bg-primary/10 p-2 rounded-full">
                        <meal.icon className="h-5 w-5 text-primary" />
                      </div>
                      <CardTitle className="text-lg">{meal.name}</CardTitle>
                    </div>
                    <div className="text-sm text-muted-foreground">{meal.time}</div>
                  </div>
                </CardHeader>
                <CardContent>
                  <div className="space-y-2">
                    {meal.foods.map((food, index) => (
                      <div key={index} className="flex justify-between items-center py-1 border-b last:border-0">
                        <div>
                          <p className="font-medium">{food.name}</p>
                          <p className="text-sm text-muted-foreground">{food.portion}</p>
                        </div>
                        <div className="text-sm">
                          <p className="font-medium">{food.calories} cal</p>
                          <p className="text-xs text-muted-foreground">P: {food.protein}g • C: {food.carbs}g • F: {food.fat}g</p>
                        </div>
                      </div>
                    ))}
                  </div>
                </CardContent>
                <CardFooter className="flex justify-between pt-0">
                  <p className="font-medium">Total: {meal.totalCalories} calories</p>
                  <Button variant="ghost" size="sm">Edit</Button>
                </CardFooter>
              </Card>
            ))}
          </div>
        </TabsContent>
        
        <TabsContent value="meal-plans" className="space-y-4 mt-6">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
            {filteredPlans.map(plan => (
              <Card key={plan.id} className="overflow-hidden">
                <div className="aspect-video relative overflow-hidden">
                  <img 
                    src={plan.image} 
                    alt={plan.title}
                    className="object-cover w-full h-full transition-transform hover:scale-105 duration-300"
                  />
                </div>
                <CardHeader>
                  <CardTitle>{plan.title}</CardTitle>
                  <CardDescription>{plan.description}</CardDescription>
                </CardHeader>
                <CardContent>
                  <div className="space-y-3">
                    <div className="flex justify-between items-center">
                      <span className="text-sm">Calories:</span>
                      <span className="font-medium">{plan.calories}</span>
                    </div>
                    <div className="space-y-2">
                      <div className="flex justify-between text-sm">
                        <span>Protein</span>
                        <span>{plan.macros.protein}g</span>
                      </div>
                      <Progress value={(plan.macros.protein * 4 / plan.calories) * 100} className="h-2" />
                      
                      <div className="flex justify-between text-sm">
                        <span>Carbs</span>
                        <span>{plan.macros.carbs}g</span>
                      </div>
                      <Progress value={(plan.macros.carbs * 4 / plan.calories) * 100} className="h-2" />
                      
                      <div className="flex justify-between text-sm">
                        <span>Fats</span>
                        <span>{plan.macros.fat}g</span>
                      </div>
                      <Progress value={(plan.macros.fat * 9 / plan.calories) * 100} className="h-2" />
                    </div>
                  </div>
                </CardContent>
                <CardFooter>
                  <Button variant="outline" className="w-full">View Plan</Button>
                </CardFooter>
              </Card>
            ))}
          </div>
        </TabsContent>
        
        <TabsContent value="food-log" className="mt-6">
          <Card>
            <CardHeader>
              <CardTitle>Food Log History</CardTitle>
              <CardDescription>Track your nutrition over time</CardDescription>
            </CardHeader>
            <CardContent>
              <div className="rounded-lg border bg-card text-card-foreground p-6 flex flex-col items-center justify-center space-y-4 h-[300px]">
                <p className="text-muted-foreground text-center">Food log visualization coming soon.</p>
                <Button>View Past Logs</Button>
              </div>
            </CardContent>
          </Card>
        </TabsContent>
      </Tabs>
    </div>
  );
}