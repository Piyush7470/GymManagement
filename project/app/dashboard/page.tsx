"use client";

import { useState, useEffect } from "react";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { Activity, CalendarClock, Dumbbell, BarChart, UserCircle, Salad, Trophy, TrendingUp, History } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Progress } from "@/components/ui/progress";
import { DashboardUserStats } from "@/components/dashboard/user-stats";
import { DashboardChart } from "@/components/dashboard/chart";
import { RecentWorkoutsTable } from "@/components/dashboard/recent-workouts";
import { UpcomingWorkouts } from "@/components/dashboard/upcoming-workouts";
import { NutritionSummary } from "@/components/dashboard/nutrition-summary";

export default function DashboardPage() {
  const [mounted, setMounted] = useState(false);

  useEffect(() => {
    setMounted(true);
  }, []);

  if (!mounted) {
    return null;
  }

  return (
    <div className="flex-1 space-y-4 p-4 md:p-8 pt-6">
      <div className="flex items-center justify-between space-y-2">
        <h2 className="text-3xl font-bold tracking-tight">Dashboard</h2>
        <div className="flex items-center space-x-2">
          <Button>
            <CalendarClock className="mr-2 h-4 w-4" />
            Schedule Workout
          </Button>
        </div>
      </div>
      
      <Tabs defaultValue="overview" className="space-y-4">
        <TabsList>
          <TabsTrigger value="overview">Overview</TabsTrigger>
          <TabsTrigger value="workouts">Workouts</TabsTrigger>
          <TabsTrigger value="nutrition">Nutrition</TabsTrigger>
          <TabsTrigger value="progress">Progress</TabsTrigger>
        </TabsList>
        
        <TabsContent value="overview" className="space-y-4">
          <div className="grid gap-4 md:grid-cols-2 lg:grid-cols-4">
            <Card>
              <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
                <CardTitle className="text-sm font-medium">Weekly Workouts</CardTitle>
                <Dumbbell className="h-4 w-4 text-muted-foreground" />
              </CardHeader>
              <CardContent>
                <div className="text-2xl font-bold">3/5</div>
                <p className="text-xs text-muted-foreground">
                  +2 compared to last week
                </p>
                <div className="mt-3">
                  <Progress value={60} className="h-2" />
                </div>
              </CardContent>
            </Card>
            <Card>
              <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
                <CardTitle className="text-sm font-medium">Calories Today</CardTitle>
                <Salad className="h-4 w-4 text-muted-foreground" />
              </CardHeader>
              <CardContent>
                <div className="text-2xl font-bold">1,850/2,100</div>
                <p className="text-xs text-muted-foreground">
                  -250 calories remaining
                </p>
                <div className="mt-3">
                  <Progress value={88} className="h-2" />
                </div>
              </CardContent>
            </Card>
            <Card>
              <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
                <CardTitle className="text-sm font-medium">Body Weight</CardTitle>
                <TrendingUp className="h-4 w-4 text-muted-foreground" />
              </CardHeader>
              <CardContent>
                <div className="text-2xl font-bold">79.4 kg</div>
                <p className="text-xs text-muted-foreground">
                  -1.1 kg from last week
                </p>
              </CardContent>
            </Card>
            <Card>
              <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
                <CardTitle className="text-sm font-medium">Achievements</CardTitle>
                <Trophy className="h-4 w-4 text-muted-foreground" />
              </CardHeader>
              <CardContent>
                <div className="text-2xl font-bold">12</div>
                <p className="text-xs text-muted-foreground">
                  +3 new this month
                </p>
              </CardContent>
            </Card>
          </div>
          
          <div className="grid gap-4 grid-cols-1 md:grid-cols-2 lg:grid-cols-7">
            <Card className="col-span-4">
              <CardHeader>
                <CardTitle>Progress Overview</CardTitle>
              </CardHeader>
              <CardContent className="pl-2">
                <DashboardChart />
              </CardContent>
            </Card>
            <Card className="col-span-3">
              <CardHeader>
                <CardTitle>Your Stats</CardTitle>
              </CardHeader>
              <CardContent>
                <DashboardUserStats />
              </CardContent>
            </Card>
          </div>

          <div className="grid gap-4 grid-cols-1 md:grid-cols-2">
            <Card className="col-span-1">
              <CardHeader>
                <CardTitle>Recent Workouts</CardTitle>
                <CardDescription>
                  Your last 5 workouts
                </CardDescription>
              </CardHeader>
              <CardContent>
                <RecentWorkoutsTable />
              </CardContent>
            </Card>
            <Card className="col-span-1">
              <CardHeader>
                <CardTitle>Upcoming Workouts</CardTitle>
                <CardDescription>
                  Your scheduled sessions
                </CardDescription>
              </CardHeader>
              <CardContent>
                <UpcomingWorkouts />
              </CardContent>
            </Card>
          </div>
        </TabsContent>
        
        <TabsContent value="workouts" className="space-y-4">
          <div className="grid gap-4 grid-cols-1 md:grid-cols-2">
            <Card className="col-span-2">
              <CardHeader>
                <CardTitle>Workout Calendar</CardTitle>
                <CardDescription>
                  Your scheduled and completed workouts
                </CardDescription>
              </CardHeader>
              <CardContent>
                <div className="flex items-center justify-center h-[400px] bg-muted/40 rounded-md">
                  <p className="text-muted-foreground">Calendar view coming soon</p>
                </div>
              </CardContent>
            </Card>
          </div>
          
          <div className="grid gap-4 grid-cols-1 md:grid-cols-3">
            <Card>
              <CardHeader>
                <CardTitle>Active Plan</CardTitle>
                <CardDescription>
                  Your current workout plan
                </CardDescription>
              </CardHeader>
              <CardContent>
                <div className="space-y-4">
                  <div>
                    <h3 className="font-medium">Strength Builder - Week 3</h3>
                    <p className="text-sm text-muted-foreground">5 days/week • Intermediate</p>
                  </div>
                  <Progress value={60} className="h-2" />
                  <p className="text-sm text-muted-foreground">3/5 workouts completed this week</p>
                  <Button variant="outline" className="w-full">View Plan</Button>
                </div>
              </CardContent>
            </Card>
            
            <Card className="col-span-2">
              <CardHeader>
                <CardTitle>Recent Workouts</CardTitle>
                <CardDescription>
                  Your last 5 workouts
                </CardDescription>
              </CardHeader>
              <CardContent>
                <RecentWorkoutsTable />
              </CardContent>
            </Card>
          </div>
        </TabsContent>
        
        <TabsContent value="nutrition" className="space-y-4">
          <div className="grid gap-4 grid-cols-1 md:grid-cols-3">
            <Card className="col-span-2">
              <CardHeader>
                <CardTitle>Daily Nutrition</CardTitle>
                <CardDescription>
                  Calorie and macronutrient breakdown
                </CardDescription>
              </CardHeader>
              <CardContent>
                <NutritionSummary />
              </CardContent>
            </Card>
            
            <Card>
              <CardHeader>
                <CardTitle>Meal Plan</CardTitle>
                <CardDescription>
                  Your current meal plan
                </CardDescription>
              </CardHeader>
              <CardContent>
                <div className="space-y-4">
                  <div>
                    <h3 className="font-medium">Balanced Nutrition</h3>
                    <p className="text-sm text-muted-foreground">2,100 calories • High protein</p>
                  </div>
                  <div className="space-y-2">
                    <div className="flex justify-between text-sm">
                      <span>Protein</span>
                      <span>180g / 180g</span>
                    </div>
                    <Progress value={100} className="h-2" />
                    
                    <div className="flex justify-between text-sm">
                      <span>Carbs</span>
                      <span>200g / 250g</span>
                    </div>
                    <Progress value={80} className="h-2" />
                    
                    <div className="flex justify-between text-sm">
                      <span>Fats</span>
                      <span>45g / 70g</span>
                    </div>
                    <Progress value={64} className="h-2" />
                  </div>
                  <Button variant="outline" className="w-full">View Full Plan</Button>
                </div>
              </CardContent>
            </Card>
          </div>
        </TabsContent>
        
        <TabsContent value="progress" className="space-y-4">
          <div className="grid gap-4 grid-cols-1">
            <Card>
              <CardHeader>
                <CardTitle>Progress Metrics</CardTitle>
                <CardDescription>
                  Track your progress over time
                </CardDescription>
              </CardHeader>
              <CardContent>
                <div className="h-[400px]">
                  <DashboardChart />
                </div>
              </CardContent>
            </Card>
          </div>
          
          <div className="grid gap-4 grid-cols-1 md:grid-cols-2">
            <Card>
              <CardHeader>
                <CardTitle>Body Measurements</CardTitle>
                <CardDescription>
                  Your body measurements over time
                </CardDescription>
              </CardHeader>
              <CardContent>
                <div className="space-y-4">
                  <div className="flex justify-between items-center">
                    <div className="space-y-0.5">
                      <div className="text-sm font-medium">Weight</div>
                      <div className="text-xs text-muted-foreground">Last updated: Today</div>
                    </div>
                    <div className="font-bold">79.4 kg</div>
                  </div>
                  <div className="flex justify-between items-center">
                    <div className="space-y-0.5">
                      <div className="text-sm font-medium">Body Fat</div>
                      <div className="text-xs text-muted-foreground">Last updated: 3 days ago</div>
                    </div>
                    <div className="font-bold">16%</div>
                  </div>
                  <div className="flex justify-between items-center">
                    <div className="space-y-0.5">
                      <div className="text-sm font-medium">Chest</div>
                      <div className="text-xs text-muted-foreground">Last updated: 1 week ago</div>
                    </div>
                    <div className="font-bold">42 in</div>
                  </div>
                  <div className="flex justify-between items-center">
                    <div className="space-y-0.5">
                      <div className="text-sm font-medium">Waist</div>
                      <div className="text-xs text-muted-foreground">Last updated: 1 week ago</div>
                    </div>
                    <div className="font-bold">34 in</div>
                  </div>
                  <div className="flex justify-between items-center">
                    <div className="space-y-0.5">
                      <div className="text-sm font-medium">Arms</div>
                      <div className="text-xs text-muted-foreground">Last updated: 1 week ago</div>
                    </div>
                    <div className="font-bold">15 in</div>
                  </div>
                  <Button variant="outline" className="w-full">Update Measurements</Button>
                </div>
              </CardContent>
            </Card>
            
            <Card>
              <CardHeader>
                <CardTitle>Strength Progress</CardTitle>
                <CardDescription>
                  Your strength gains over time
                </CardDescription>
              </CardHeader>
              <CardContent>
                <div className="space-y-4">
                  <div className="flex justify-between items-center">
                    <div className="space-y-0.5">
                      <div className="text-sm font-medium">Bench Press</div>
                      <div className="text-xs text-muted-foreground">Last: 185 lbs x 8 reps</div>
                    </div>
                    <div className="font-bold text-green-500">+10 lbs</div>
                  </div>
                  <div className="flex justify-between items-center">
                    <div className="space-y-0.5">
                      <div className="text-sm font-medium">Squat</div>
                      <div className="text-xs text-muted-foreground">Last: 255 lbs x 6 reps</div>
                    </div>
                    <div className="font-bold text-green-500">+15 lbs</div>
                  </div>
                  <div className="flex justify-between items-center">
                    <div className="space-y-0.5">
                      <div className="text-sm font-medium">Deadlift</div>
                      <div className="text-xs text-muted-foreground">Last: 315 lbs x 5 reps</div>
                    </div>
                    <div className="font-bold text-green-500">+20 lbs</div>
                  </div>
                  <div className="flex justify-between items-center">
                    <div className="space-y-0.5">
                      <div className="text-sm font-medium">Shoulder Press</div>
                      <div className="text-xs text-muted-foreground">Last: 135 lbs x 8 reps</div>
                    </div>
                    <div className="font-bold text-green-500">+5 lbs</div>
                  </div>
                  <div className="flex justify-between items-center">
                    <div className="space-y-0.5">
                      <div className="text-sm font-medium">Pull-ups</div>
                      <div className="text-xs text-muted-foreground">Last: BW x 12 reps</div>
                    </div>
                    <div className="font-bold text-green-500">+2 reps</div>
                  </div>
                  <Button variant="outline" className="w-full">View All Exercises</Button>
                </div>
              </CardContent>
            </Card>
          </div>
        </TabsContent>
      </Tabs>
    </div>
  );
}