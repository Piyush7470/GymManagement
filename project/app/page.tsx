import Link from "next/link";
import { ArrowRight, Dumbbell, LineChart, Salad, Users } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";

export default function Home() {
  return (
    <div className="flex flex-col min-h-[calc(100vh-4rem)]">
      {/* Hero Section */}
      <section className="w-full py-12 md:py-24 lg:py-32 bg-gradient-to-b from-background to-muted">
        <div className="container px-4 md:px-6">
          <div className="grid gap-6 lg:grid-cols-2 lg:gap-12 items-center">
            <div className="flex flex-col justify-center space-y-4">
              <div className="space-y-2">
                <h1 className="text-3xl font-bold tracking-tighter sm:text-5xl xl:text-6xl/none">
                  Your Fitness Journey <br />Starts Here
                </h1>
                <p className="max-w-[600px] text-muted-foreground md:text-xl">
                  FitTrack Pro helps you manage your fitness goals, track workouts, and monitor your progress all in one place.
                </p>
              </div>
              <div className="flex flex-col gap-2 min-[400px]:flex-row">
                <Link href="/signup">
                  <Button size="lg" className="bg-primary text-primary-foreground hover:bg-primary/90">
                    Get Started
                    <ArrowRight className="ml-2 h-4 w-4" />
                  </Button>
                </Link>
                <Link href="/login">
                  <Button size="lg" variant="outline">
                    Log In
                  </Button>
                </Link>
              </div>
            </div>
            <div className="mx-auto lg:order-last relative">
              <img
                src="https://images.pexels.com/photos/1552242/pexels-photo-1552242.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750"
                alt="Fitness tracking"
                className="mx-auto aspect-video overflow-hidden rounded-xl object-cover object-center sm:w-full lg:order-last"
                width={500}
                height={310}
              />
            </div>
          </div>
        </div>
      </section>

      {/* Features Section */}
      <section className="w-full py-12 md:py-24 lg:py-32">
        <div className="container px-4 md:px-6">
          <div className="flex flex-col items-center justify-center space-y-4 text-center">
            <div className="space-y-2">
              <div className="inline-block rounded-lg bg-muted px-3 py-1 text-sm">Key Features</div>
              <h2 className="text-3xl font-bold tracking-tighter sm:text-5xl">Everything You Need</h2>
              <p className="max-w-[900px] text-muted-foreground md:text-xl/relaxed lg:text-base/relaxed xl:text-xl/relaxed">
                FitTrack Pro provides comprehensive tools for both gym owners and fitness enthusiasts.
              </p>
            </div>
          </div>
          <div className="mx-auto grid max-w-5xl grid-cols-1 gap-6 md:grid-cols-2 lg:grid-cols-4 mt-8">
            <Card className="transition-all hover:shadow-lg">
              <CardHeader className="flex items-center gap-2 pb-2">
                <Dumbbell className="h-6 w-6 text-primary" />
                <CardTitle className="text-lg">Workout Tracking</CardTitle>
              </CardHeader>
              <CardContent>
                <CardDescription>Track your exercises, sets, reps, and weight. Follow guided workout plans.</CardDescription>
              </CardContent>
            </Card>
            <Card className="transition-all hover:shadow-lg">
              <CardHeader className="flex items-center gap-2 pb-2">
                <Salad className="h-6 w-6 text-primary" />
                <CardTitle className="text-lg">Diet Planning</CardTitle>
              </CardHeader>
              <CardContent>
                <CardDescription>Create meal plans, track calories, and monitor macronutrients for optimal results.</CardDescription>
              </CardContent>
            </Card>
            <Card className="transition-all hover:shadow-lg">
              <CardHeader className="flex items-center gap-2 pb-2">
                <LineChart className="h-6 w-6 text-primary" />
                <CardTitle className="text-lg">Analytics</CardTitle>
              </CardHeader>
              <CardContent>
                <CardDescription>Visualize your progress with detailed charts and comprehensive analytics.</CardDescription>
              </CardContent>
            </Card>
            <Card className="transition-all hover:shadow-lg">
              <CardHeader className="flex items-center gap-2 pb-2">
                <Users className="h-6 w-6 text-primary" />
                <CardTitle className="text-lg">Membership</CardTitle>
              </CardHeader>
              <CardContent>
                <CardDescription>Manage membership tiers, billing information, and payment history.</CardDescription>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* Testimonial Section */}
      <section className="w-full py-12 md:py-24 lg:py-32 bg-muted">
        <div className="container px-4 md:px-6">
          <div className="flex flex-col items-center justify-center space-y-4 text-center">
            <div className="space-y-2">
              <div className="inline-block rounded-lg bg-background px-3 py-1 text-sm">Testimonials</div>
              <h2 className="text-3xl font-bold tracking-tighter sm:text-4xl md:text-5xl">Success Stories</h2>
              <p className="max-w-[900px] text-muted-foreground md:text-xl/relaxed lg:text-base/relaxed xl:text-xl/relaxed">
                See what our clients have achieved with FitTrack Pro.
              </p>
            </div>
          </div>
          <div className="mx-auto grid max-w-5xl grid-cols-1 gap-6 md:grid-cols-2 lg:grid-cols-3 mt-8">
            <Card className="bg-background transition-all hover:shadow-lg">
              <CardContent className="pt-6">
                <div className="flex flex-col items-center space-y-4">
                  <img
                    src="https://images.pexels.com/photos/1599901/pexels-photo-1599901.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750"
                    alt="Sarah Johnson"
                    className="h-20 w-20 rounded-full object-cover"
                  />
                  <div className="space-y-2 text-center">
                    <h3 className="font-bold">Sarah Johnson</h3>
                    <p className="text-sm text-muted-foreground">
                      "FitTrack Pro helped me lose 6.8 kg and gain muscle definition. The workout plans are easy to follow and the nutrition tracking is amazing!"
                    </p>
                  </div>
                </div>
              </CardContent>
            </Card>
            <Card className="bg-background transition-all hover:shadow-lg">
              <CardContent className="pt-6">
                <div className="flex flex-col items-center space-y-4">
                  <img
                    src="https://images.pexels.com/photos/220453/pexels-photo-220453.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750"
                    alt="Piyush Napit"
                    className="h-20 w-20 rounded-full object-cover"
                  />
                  <div className="space-y-2 text-center">
                    <h3 className="font-bold">Piyush Napit</h3>
                    <p className="text-sm text-muted-foreground">
                      "As a gym owner, FitTrack Pro has revolutionized how I manage my business. Member engagement is up, and admin work is down!"
                    </p>
                  </div>
                </div>
              </CardContent>
            </Card>
            <Card className="bg-background transition-all hover:shadow-lg md:col-span-2 lg:col-span-1">
              <CardContent className="pt-6">
                <div className="flex flex-col items-center space-y-4">
                  <img
                    src="https://images.pexels.com/photos/774909/pexels-photo-774909.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750"
                    alt="Emma Rodriguez"
                    className="h-20 w-20 rounded-full object-cover"
                  />
                  <div className="space-y-2 text-center">
                    <h3 className="font-bold">Emma Rodriguez</h3>
                    <p className="text-sm text-muted-foreground">
                      "The analytics features have been a game-changer for my training. I can see my progress clearly and stay motivated!"
                    </p>
                  </div>
                </div>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="w-full py-12 md:py-24 lg:py-32 border-t">
        <div className="container px-4 md:px-6">
          <div className="flex flex-col items-center justify-center space-y-4 text-center">
            <div className="space-y-2">
              <h2 className="text-3xl font-bold tracking-tighter sm:text-4xl md:text-5xl">Ready to Transform Your Fitness?</h2>
              <p className="max-w-[600px] text-muted-foreground md:text-xl/relaxed lg:text-base/relaxed xl:text-xl/relaxed">
                Join thousands of satisfied users who have achieved their fitness goals with FitTrack Pro.
              </p>
            </div>
            <div className="flex flex-col gap-2 min-[400px]:flex-row">
              <Link href="/signup">
                <Button size="lg" className="bg-primary text-primary-foreground hover:bg-primary/90">
                  Get Started Today
                </Button>
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="w-full border-t bg-background py-6 md:py-8">
        <div className="container px-4 md:px-6">
          <div className="flex flex-col gap-4 md:flex-row md:gap-8 lg:gap-12">
            <div className="flex-1 space-y-4">
              <div className="flex items-center gap-2">
                <Dumbbell className="h-5 w-5" />
                <span className="font-bold">FitTrack Pro</span>
              </div>
              <p className="text-sm text-muted-foreground">
                Comprehensive gym management and fitness tracking application.
              </p>
            </div>
            <div className="grid flex-1 grid-cols-2 gap-8 sm:grid-cols-3">
              <div className="space-y-3">
                <h3 className="text-sm font-medium">Product</h3>
                <ul className="space-y-2 text-sm">
                  <li><a className="hover:underline" href="#">Features</a></li>
                  <li><a className="hover:underline" href="#">Pricing</a></li>
                  <li><a className="hover:underline" href="#">FAQ</a></li>
                </ul>
              </div>
              <div className="space-y-3">
                <h3 className="text-sm font-medium">Company</h3>
                <ul className="space-y-2 text-sm">
                  <li><a className="hover:underline" href="#">About</a></li>
                  <li><a className="hover:underline" href="#">Blog</a></li>
                  <li><a className="hover:underline" href="#">Careers</a></li>
                </ul>
              </div>
              <div className="space-y-3">
                <h3 className="text-sm font-medium">Legal</h3>
                <ul className="space-y-2 text-sm">
                  <li><a className="hover:underline" href="#">Terms</a></li>
                  <li><a className="hover:underline" href="#">Privacy</a></li>
                  <li><a className="hover:underline" href="#">Contact</a></li>
                </ul>
              </div>
            </div>
          </div>
          <div className="mt-6 flex items-center justify-between">
            <p className="text-sm text-muted-foreground">© 2025 FitTrack Pro. All rights reserved.</p>
            <div className="flex gap-4">
              <a href="#" className="text-muted-foreground hover:text-foreground">
                <span className="sr-only">Twitter</span>
                <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="lucide lucide-twitter"><path d="M22 4s-.7 2.1-2 3.4c1.6 10-9.4 17.3-18 11.6 2.2.1 4.4-.6 6-2C3 15.5.5 9.6 3 5c2.2 2.6 5.6 4.1 9 4-.9-4.2 4-6.6 7-3.8 1.1 0 3-1.2 3-1.2z"/></svg>
              </a>
              <a href="#" className="text-muted-foreground hover:text-foreground">
                <span className="sr-only">Instagram</span>
                <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="lucide lucide-instagram"><rect x="2" y="2" width="20" height="20" rx="5" ry="5"></rect><path d="M16 11.37A4 4 0 1 1 12.63 8 4 4 0 0 1 16 11.37z"></path><line x1="17.5" y1="6.5" x2="17.51" y2="6.5"></line></svg>
              </a>
              <a href="#" className="text-muted-foreground hover:text-foreground">
                <span className="sr-only">Facebook</span>
                <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="lucide lucide-facebook"><path d="M18 2h-3a5 5 0 0 0-5 5v3H7v4h3v8h4v-8h3l1-4h-4V7a1 1 0 0 1 1-1h3z"></path></svg>
              </a>
            </div>
          </div>
        </div>
      </footer>
    </div>
  );
}