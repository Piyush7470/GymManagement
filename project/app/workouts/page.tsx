"use client";

import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from "@/components/ui/card";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { Search } from "lucide-react";
import { Input } from "@/components/ui/input";
import Link from "next/link";

const workoutPlans = [
  {
    id: 1,
    title: "Strength Builder",
    description: "Build muscle and improve strength with this comprehensive plan.",
    duration: "8 weeks",
    level: "Intermediate",
    workoutsPerWeek: 5,
    category: "Strength",
    image: "https://images.pexels.com/photos/1431282/pexels-photo-1431282.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750"
  },
  {
    id: 2,
    title: "Fat Loss",
    description: "Burn fat and improve conditioning with high-intensity workouts.",
    duration: "6 weeks",
    level: "Beginner",
    workoutsPerWeek: 4,
    category: "Weight Loss",
    image: "https://images.pexels.com/photos/2294361/pexels-photo-2294361.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750"
  },
  {
    id: 3,
    title: "Bodyweight Master",
    description: "Build strength and muscle using just your bodyweight.",
    duration: "8 weeks",
    level: "All Levels",
    workoutsPerWeek: 3,
    category: "Bodyweight",
    image: "https://images.pexels.com/photos/6922165/pexels-photo-6922165.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750"
  },
  {
    id: 4,
    title: "Cardio Conditioning",
    description: "Improve cardiovascular health and endurance.",
    duration: "4 weeks",
    level: "All Levels",
    workoutsPerWeek: 3,
    category: "Cardio",
    image: "https://images.pexels.com/photos/618612/pexels-photo-618612.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750"
  },
];

const exercises = [
  {
    id: 1,
    name: "Barbell Bench Press",
    muscleGroups: ["Chest", "Triceps", "Shoulders"],
    difficulty: "Intermediate",
    equipment: "Barbell",
    image: "https://images.pexels.com/photos/3837781/pexels-photo-3837781.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750"
  },
  {
    id: 2,
    name: "Pull-ups",
    muscleGroups: ["Back", "Biceps"],
    difficulty: "Intermediate",
    equipment: "Pull-up Bar",
    image: "https://images.pexels.com/photos/3764013/pexels-photo-3764013.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750"
  },
  {
    id: 3,
    name: "Squat",
    muscleGroups: ["Quadriceps", "Hamstrings", "Glutes"],
    difficulty: "Intermediate",
    equipment: "Barbell",
    image: "https://images.pexels.com/photos/4164761/pexels-photo-4164761.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750"
  },
  {
    id: 4,
    name: "Deadlift",
    muscleGroups: ["Back", "Hamstrings", "Glutes"],
    difficulty: "Advanced",
    equipment: "Barbell",
    image: "https://images.pexels.com/photos/5209107/pexels-photo-5209107.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750"
  },
  {
    id: 5,
    name: "Push-ups",
    muscleGroups: ["Chest", "Triceps", "Shoulders"],
    difficulty: "Beginner",
    equipment: "Bodyweight",
    image: "https://images.pexels.com/photos/176782/pexels-photo-176782.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750"
  },
  {
    id: 6,
    name: "Plank",
    muscleGroups: ["Core", "Shoulders"],
    difficulty: "Beginner",
    equipment: "Bodyweight",
    image: "https://images.pexels.com/photos/6922168/pexels-photo-6922168.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750"
  },
  {
    id: 7,
    name: "Dumbbell Lunges",
    muscleGroups: ["Quadriceps", "Hamstrings", "Glutes"],
    difficulty: "Beginner",
    equipment: "Dumbbells",
    image: "https://images.pexels.com/photos/6551139/pexels-photo-6551139.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750"
  },
  {
    id: 8,
    name: "Shoulder Press",
    muscleGroups: ["Shoulders", "Triceps"],
    difficulty: "Intermediate",
    equipment: "Dumbbells",
    image: "https://images.pexels.com/photos/4498603/pexels-photo-4498603.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750"
  },
];

export default function WorkoutsPage() {
  const [searchTerm, setSearchTerm] = useState("");

  const filteredPlans = workoutPlans.filter(plan => 
    plan.title.toLowerCase().includes(searchTerm.toLowerCase()) ||
    plan.description.toLowerCase().includes(searchTerm.toLowerCase()) ||
    plan.category.toLowerCase().includes(searchTerm.toLowerCase())
  );

  const filteredExercises = exercises.filter(exercise => 
    exercise.name.toLowerCase().includes(searchTerm.toLowerCase()) ||
    exercise.muscleGroups.some(group => group.toLowerCase().includes(searchTerm.toLowerCase())) ||
    exercise.equipment.toLowerCase().includes(searchTerm.toLowerCase())
  );

  return (
    <div className="container py-8 space-y-6">
      <div className="flex flex-col md:flex-row justify-between gap-4 items-start md:items-center">
        <div>
          <h1 className="text-3xl font-bold tracking-tight">Workouts</h1>
          <p className="text-muted-foreground">Browse workout plans and exercises</p>
        </div>
        <div className="flex gap-2 w-full md:w-auto">
          <div className="relative w-full md:w-[300px]">
            <Search className="absolute left-2.5 top-2.5 h-4 w-4 text-muted-foreground" />
            <Input
              type="search"
              placeholder="Search workouts or exercises..."
              className="pl-8 w-full"
              value={searchTerm}
              onChange={(e) => setSearchTerm(e.target.value)}
            />
          </div>
          <Button>Create Plan</Button>
        </div>
      </div>

      <Tabs defaultValue="plans" className="w-full">
        <TabsList className="w-full md:w-auto">
          <TabsTrigger value="plans" className="flex-1 md:flex-none">Plans</TabsTrigger>
          <TabsTrigger value="exercises" className="flex-1 md:flex-none">Exercises</TabsTrigger>
          <TabsTrigger value="my-workouts" className="flex-1 md:flex-none">My Workouts</TabsTrigger>
        </TabsList>
        
        <TabsContent value="plans" className="space-y-4 mt-6">
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
                  <div className="flex flex-wrap gap-2 text-sm">
                    <div className="bg-muted rounded-md px-2 py-1">{plan.duration}</div>
                    <div className="bg-muted rounded-md px-2 py-1">{plan.level}</div>
                    <div className="bg-muted rounded-md px-2 py-1">{plan.workoutsPerWeek}x / week</div>
                  </div>
                </CardContent>
                <CardFooter>
                  <Button variant="outline" className="w-full">View Plan</Button>
                </CardFooter>
              </Card>
            ))}
          </div>
        </TabsContent>
        
        <TabsContent value="exercises" className="space-y-4 mt-6">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
            {filteredExercises.map(exercise => (
              <Card key={exercise.id} className="overflow-hidden">
                <div className="aspect-video relative overflow-hidden">
                  <img 
                    src={exercise.image} 
                    alt={exercise.name}
                    className="object-cover w-full h-full transition-transform hover:scale-105 duration-300"
                  />
                </div>
                <CardHeader>
                  <CardTitle>{exercise.name}</CardTitle>
                  <CardDescription>
                    {exercise.muscleGroups.join(", ")}
                  </CardDescription>
                </CardHeader>
                <CardContent>
                  <div className="flex flex-wrap gap-2 text-sm">
                    <div className="bg-muted rounded-md px-2 py-1">{exercise.difficulty}</div>
                    <div className="bg-muted rounded-md px-2 py-1">{exercise.equipment}</div>
                  </div>
                </CardContent>
                <CardFooter>
                  <Button variant="outline" className="w-full">View Exercise</Button>
                </CardFooter>
              </Card>
            ))}
          </div>
        </TabsContent>
        
        <TabsContent value="my-workouts" className="mt-6">
          <div className="rounded-lg border bg-card text-card-foreground p-6 flex flex-col items-center justify-center space-y-4 h-[300px]">
            <p className="text-muted-foreground text-center">You don't have any saved workouts yet.</p>
            <Button>Create Your First Workout</Button>
          </div>
        </TabsContent>
      </Tabs>
    </div>
  );
}