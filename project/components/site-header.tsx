"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import { Dumbbell } from "lucide-react";

import { cn } from "@/lib/utils";
import { Button } from "@/components/ui/button";
import { ModeToggle } from "@/components/mode-toggle";
import { UserNav } from "@/components/user-nav";

export function SiteHeader() {
  const pathname = usePathname();
  
  // If we're on a login or signup page, don't show the header
  if (pathname === "/login" || pathname === "/signup") {
    return null;
  }

  // Determine if we're on a dashboard route to show appropriate nav items
  const isDashboardRoute = pathname.startsWith("/dashboard") || 
                           pathname.startsWith("/workouts") || 
                           pathname.startsWith("/diet") ||
                           pathname.startsWith("/analytics") ||
                           pathname.startsWith("/membership") ||
                           pathname.startsWith("/profile");

  return (
    <header className="sticky top-0 z-40 w-full border-b bg-background/95 backdrop-blur supports-[backdrop-filter]:bg-background/60">
      <div className="container flex h-16 items-center space-x-4 sm:justify-between sm:space-x-0">
        <div className="flex gap-6 md:gap-10">
          <Link href="/" className="flex items-center space-x-2">
            <Dumbbell className="h-6 w-6" />
            <span className="inline-block font-bold">FitTrack Pro</span>
          </Link>
          {isDashboardRoute && (
            <nav className="hidden gap-6 md:flex">
              <Link
                href="/dashboard"
                className={cn(
                  "flex items-center text-sm font-medium transition-colors hover:text-primary",
                  pathname === "/dashboard"
                    ? "text-primary"
                    : "text-muted-foreground"
                )}
              >
                Dashboard
              </Link>
              <Link
                href="/workouts"
                className={cn(
                  "flex items-center text-sm font-medium transition-colors hover:text-primary",
                  pathname.startsWith("/workouts")
                    ? "text-primary"
                    : "text-muted-foreground"
                )}
              >
                Workouts
              </Link>
              <Link
                href="/diet"
                className={cn(
                  "flex items-center text-sm font-medium transition-colors hover:text-primary",
                  pathname.startsWith("/diet")
                    ? "text-primary"
                    : "text-muted-foreground"
                )}
              >
                Diet
              </Link>
              <Link
                href="/analytics"
                className={cn(
                  "flex items-center text-sm font-medium transition-colors hover:text-primary",
                  pathname.startsWith("/analytics")
                    ? "text-primary"
                    : "text-muted-foreground"
                )}
              >
                Analytics
              </Link>
              <Link
                href="/membership"
                className={cn(
                  "flex items-center text-sm font-medium transition-colors hover:text-primary",
                  pathname.startsWith("/membership")
                    ? "text-primary"
                    : "text-muted-foreground"
                )}
              >
                Membership
              </Link>
            </nav>
          )}
        </div>
        <div className="flex flex-1 items-center justify-end space-x-4">
          <nav className="flex items-center space-x-2">
            {!isDashboardRoute && (
              <>
                <Link href="/login">
                  <Button variant="ghost" size="sm">Login</Button>
                </Link>
                <Link href="/signup">
                  <Button size="sm">Sign Up</Button>
                </Link>
              </>
            )}
            {isDashboardRoute && <UserNav />}
            <ModeToggle />
          </nav>
        </div>
      </div>
    </header>
  );
}