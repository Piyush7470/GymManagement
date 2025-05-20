"use client";

import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { CalendarIcon, Clock, Dumbbell, ArrowRight } from "lucide-react";
import { format, isToday, isTomorrow, addDays } from "date-fns";

const upcomingWorkouts = [
  {
    id: 1,
    name: "Chest & Triceps",
    date: addDays(new Date(), 0), // Today
    time: "5:30 PM",
    duration: "60 min",
    category: "Strength",
  },
  {
    id: 2,
    name: "HIIT Session",
    date: addDays(new Date(), 1), // Tomorrow
    time: "6:00 AM",
    duration: "30 min",
    category: "Cardio",
  },
  {
    id: 3,
    name: "Back & Biceps",
    date: addDays(new Date(), 2),
    time: "5:30 PM",
    duration: "60 min",
    category: "Strength",
  },
  {
    id: 4,
    name: "Leg Day",
    date: addDays(new Date(), 4),
    time: "5:30 PM",
    duration: "60 min",
    category: "Strength",
  },
];

export function UpcomingWorkouts() {
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

  const getDateLabel = (date: Date) => {
    if (isToday(date)) return "Today";
    if (isTomorrow(date)) return "Tomorrow";
    return format(date, "EEEE, MMM d");
  };

  return (
    <div className="space-y-4">
      {upcomingWorkouts.map((workout) => (
        <div key={workout.id} className="flex flex-col space-y-2 rounded-md border p-4 hover:bg-muted/50 transition-colors">
          <div className="flex justify-between items-start">
            <div>
              <h3 className="font-medium">{workout.name}</h3>
              <div className="flex items-center space-x-2 text-sm text-muted-foreground mt-1">
                <CalendarIcon className="h-3.5 w-3.5" />
                <span>
                  {getDateLabel(workout.date)} • {workout.time}
                </span>
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
            </div>
            <Button variant="ghost" size="sm" className="h-8 gap-1">
              <span>Start</span>
              <ArrowRight className="h-3.5 w-3.5" />
            </Button>
          </div>
        </div>
      ))}
    </div>
  );
}