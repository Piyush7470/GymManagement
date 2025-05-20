"use client";

import { Progress } from "@/components/ui/progress";
import { Target, Award, Zap, Flame } from "lucide-react";

export function DashboardUserStats() {
  return (
    <div className="space-y-8">
      <div className="space-y-2">
        <div className="flex items-center justify-between">
          <div className="flex items-center space-x-2">
            <Target className="h-5 w-5 text-primary" />
            <h3 className="font-medium">Current Goal</h3>
          </div>
          <span className="text-sm font-medium">60% Complete</span>
        </div>
        <div className="space-y-1">
          <p className="text-sm text-muted-foreground">Lose 4.5 kg by March 15th</p>
          <Progress value={60} className="h-2" />
        </div>
      </div>

      <div className="space-y-2">
        <div className="flex items-center space-x-2">
          <Award className="h-5 w-5 text-primary" />
          <h3 className="font-medium">Recent Achievements</h3>
        </div>
        <div className="rounded-md border p-4 space-y-3">
          <div className="flex justify-between items-center">
            <div className="flex items-center space-x-2">
              <div className="h-10 w-10 rounded-full bg-muted flex items-center justify-center">
                <Zap className="h-5 w-5 text-primary" />
              </div>
              <div>
                <p className="font-medium">5 Workout Streak</p>
                <p className="text-xs text-muted-foreground">Completed 5 workouts in a row</p>
              </div>
            </div>
            <span className="text-xs text-muted-foreground">2 days ago</span>
          </div>
          <div className="flex justify-between items-center">
            <div className="flex items-center space-x-2">
              <div className="h-10 w-10 rounded-full bg-muted flex items-center justify-center">
                <Flame className="h-5 w-5 text-primary" />
              </div>
              <div>
                <p className="font-medium">New Squat PR</p>
                <p className="text-xs text-muted-foreground">115.7 kg for 6 reps</p>
              </div>
            </div>
            <span className="text-xs text-muted-foreground">1 week ago</span>
          </div>
        </div>
      </div>

      <div className="space-y-2">
        <div className="flex items-center space-x-2">
          <Zap className="h-5 w-5 text-primary" />
          <h3 className="font-medium">Activity Overview</h3>
        </div>
        <div className="grid grid-cols-2 gap-4">
          <div className="rounded-md border p-4 space-y-2">
            <p className="text-xs font-medium uppercase text-muted-foreground">This Week</p>
            <div className="flex justify-between items-baseline">
              <span className="text-2xl font-bold">3</span>
              <span className="text-xs text-muted-foreground">/ 5 workouts</span>
            </div>
          </div>
          <div className="rounded-md border p-4 space-y-2">
            <p className="text-xs font-medium uppercase text-muted-foreground">This Month</p>
            <div className="flex justify-between items-baseline">
              <span className="text-2xl font-bold">12</span>
              <span className="text-xs text-muted-foreground">/ 20 workouts</span>
            </div>
          </div>
          <div className="rounded-md border p-4 space-y-2">
            <p className="text-xs font-medium uppercase text-muted-foreground">Weight Lost</p>
            <div className="flex justify-between items-baseline">
              <span className="text-2xl font-bold">2.3 kg</span>
              <span className="text-xs text-muted-foreground">this month</span>
            </div>
          </div>
          <div className="rounded-md border p-4 space-y-2">
            <p className="text-xs font-medium uppercase text-muted-foreground">Strength Gain</p>
            <div className="flex justify-between items-baseline">
              <span className="text-2xl font-bold">+8%</span>
              <span className="text-xs text-muted-foreground">this month</span>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}