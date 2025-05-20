"use client";

import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { CalendarIcon, Clock, Dumbbell, BarChart3 } from "lucide-react";
import { format } from "date-fns";

const recentWorkouts = [
  {
    id: 1,
    name: "Upper Body Strength",
    date: new Date(2023, 1, 15),
    duration: "58 min",
    category: "Strength",
    intensity: "High",
  },
  {
    id: 2,
    name: "Leg Day",
    date: new Date(2023, 1, 13),
    duration: "45 min",
    category: "Strength",
    intensity: "High",
  },
  {
    id: 3,
    name: "HIIT Cardio",
    date: new Date(2023, 1, 11),
    duration: "30 min",
    category: "Cardio",
    intensity: "Medium",
  },
  {
    id: 4,
    name: "Core Workout",
    date: new Date(2023, 1, 9),
    duration: "25 min",
    category: "Core",
    intensity: "Medium",
  },
  {
    id: 5,
    name: "Full Body Circuit",
    date: new Date(2023, 1, 7),
    duration: "50 min",
    category: "Circuit",
    intensity: "High",
  },
];

export function RecentWorkoutsTable() {
  const getBadgeColor = (category: string) => {
    switch (category) {
      case "Strength":
        return "default";
      case "Cardio":
        return "secondary";
      case "Core":
        return "outline";
      default:
        return "default";
    }
  };

  return (
    <div className="space-y-4">
      {recentWorkouts.map((workout) => (
        <div key={workout.id} className="flex flex-col space-y-2 rounded-md border p-4 hover:bg-muted/50 transition-colors">
          <div className="flex justify-between items-start">
            <div>
              <h3 className="font-medium">{workout.name}</h3>
              <div className="flex items-center space-x-2 text-sm text-muted-foreground mt-1">
                <CalendarIcon className="h-3.5 w-3.5" />
                <span>{format(workout.date, "MMMM d, yyyy")}</span>
              </div>
            </div>
            <Badge variant={getBadgeColor(workout.category)}>{workout.category}</Badge>
          </div>
          <div className="flex items-center justify-between text-sm pt-2">
            <div className="flex items-center space-x-4">
              <div className="flex items-center space-x-1">
                <Clock className="h-3.5 w-3.5 text-muted-foreground" />
                <span>{workout.duration}</span>
              </div>
              <div className="flex items-center space-x-1">
                <Dumbbell className="h-3.5 w-3.5 text-muted-foreground" />
                <span>{workout.intensity}</span>
              </div>
            </div>
            <Button variant="ghost" size="sm" className="h-8 gap-1">
              <BarChart3 className="h-3.5 w-3.5" />
              <span>Details</span>
            </Button>
          </div>
        </div>
      ))}
    </div>
  );
}