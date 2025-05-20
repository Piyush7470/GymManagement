"use client";

import { Button } from "@/components/ui/button";
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from "@/components/ui/card";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { Badge } from "@/components/ui/badge";
import { ArrowUpRight, Download, CreditCard, CheckCircle, Calendar, AlertCircle } from "lucide-react";
import { format } from "date-fns";

// Mock membership data
const membership = {
  plan: "Premium",
  status: "Active",
  startDate: new Date(2023, 0, 15),
  nextBillingDate: new Date(2023, 2, 15),
  amount: 49.99,
  features: [
    "Unlimited access to all gym facilities",
    "Free fitness assessments",
    "Access to all group classes",
    "Personalized workout plans",
    "Nutrition consultation",
    "Mobile app with premium features"
  ]
};

// Mock payment history
const payments = [
  {
    id: "INV-001",
    date: new Date(2023, 1, 15),
    amount: 49.99,
    status: "Paid",
    method: "Visa ****4832"
  },
  {
    id: "INV-002",
    date: new Date(2023, 0, 15),
    amount: 49.99,
    status: "Paid",
    method: "Visa ****4832"
  },
  {
    id: "INV-003",
    date: new Date(2022, 11, 15),
    amount: 49.99,
    status: "Paid",
    method: "Visa ****4832"
  },
  {
    id: "INV-004",
    date: new Date(2022, 10, 15),
    amount: 49.99,
    status: "Paid",
    method: "Visa ****4832"
  }
];

// Mock available plans
const availablePlans = [
  {
    id: 1,
    name: "Basic",
    price: 29.99,
    billing: "monthly",
    features: [
      "Access to gym facilities",
      "Basic equipment usage",
      "Standard operating hours",
      "Mobile app access"
    ],
    popular: false
  },
  {
    id: 2,
    name: "Premium",
    price: 49.99,
    billing: "monthly",
    features: [
      "Unlimited access to all gym facilities",
      "Free fitness assessments",
      "Access to all group classes",
      "Personalized workout plans",
      "Nutrition consultation",
      "Mobile app with premium features"
    ],
    popular: true
  },
  {
    id: 3,
    name: "Ultimate",
    price: 79.99,
    billing: "monthly",
    features: [
      "Everything in Premium",
      "Personal training sessions (2x/month)",
      "Priority booking for classes",
      "Exclusive access to premium facilities",
      "Recovery services (massage, sauna)",
      "Complimentary protein shakes"
    ],
    popular: false
  }
];

export default function MembershipPage() {
  return (
    <div className="container py-8 space-y-6">
      <div className="flex flex-col md:flex-row justify-between gap-4 items-start md:items-center">
        <div>
          <h1 className="text-3xl font-bold tracking-tight">Membership</h1>
          <p className="text-muted-foreground">Manage your subscription and billing</p>
        </div>
      </div>

      <Tabs defaultValue="overview" className="w-full">
        <TabsList className="w-full md:w-auto">
          <TabsTrigger value="overview" className="flex-1 md:flex-none">Overview</TabsTrigger>
          <TabsTrigger value="billing" className="flex-1 md:flex-none">Billing</TabsTrigger>
          <TabsTrigger value="plans" className="flex-1 md:flex-none">Plans</TabsTrigger>
        </TabsList>
        
        <TabsContent value="overview" className="space-y-6 mt-6">
          <Card>
            <CardHeader>
              <div className="flex justify-between items-start">
                <div>
                  <CardTitle>Your Membership</CardTitle>
                  <CardDescription>Current subscription details</CardDescription>
                </div>
                <Badge variant={membership.status === "Active" ? "default" : "outline"}>
                  {membership.status}
                </Badge>
              </div>
            </CardHeader>
            <CardContent className="space-y-6">
              <div className="rounded-lg border p-4 space-y-3">
                <div className="flex justify-between items-center">
                  <div>
                    <h3 className="font-medium text-lg">{membership.plan} Plan</h3>
                    <p className="text-sm text-muted-foreground">
                      Started on {format(membership.startDate, "MMMM d, yyyy")}
                    </p>
                  </div>
                  <div className="text-right">
                    <p className="text-2xl font-bold">₹{membership.amount * 83}</p>
                    <p className="text-sm text-muted-foreground">per month</p>
                  </div>
                </div>
                
                <div className="pt-3 border-t">
                  <div className="flex justify-between items-center text-sm">
                    <div className="flex items-center space-x-2">
                      <Calendar className="h-4 w-4 text-muted-foreground" />
                      <span>Next billing date</span>
                    </div>
                    <span className="font-medium">{format(membership.nextBillingDate, "MMMM d, yyyy")}</span>
                  </div>
                </div>
              </div>
              
              <div>
                <h3 className="font-medium mb-3">Features included in your plan</h3>
                <ul className="space-y-2">
                  {membership.features.map((feature, index) => (
                    <li key={index} className="flex items-baseline space-x-2">
                      <CheckCircle className="h-4 w-4 text-green-500 flex-shrink-0" />
                      <span className="text-sm">{feature}</span>
                    </li>
                  ))}
                </ul>
              </div>
            </CardContent>
            <CardFooter className="flex flex-col space-y-2 items-start sm:flex-row sm:justify-between sm:space-y-0">
              <Button variant="outline">Change Plan</Button>
              <Button variant="destructive">Cancel Membership</Button>
            </CardFooter>
          </Card>
          
          <Card>
            <CardHeader>
              <CardTitle>Payment Method</CardTitle>
              <CardDescription>Your saved payment information</CardDescription>
            </CardHeader>
            <CardContent>
              <div className="flex items-center space-x-4 rounded-lg border p-4">
                <div className="bg-muted rounded-md p-2">
                  <CreditCard className="h-6 w-6" />
                </div>
                <div>
                  <p className="font-medium">Visa ending in 4832</p>
                  <p className="text-sm text-muted-foreground">Expires 05/2025</p>
                </div>
                <div className="ml-auto">
                  <Button variant="ghost" size="sm">Change</Button>
                </div>
              </div>
            </CardContent>
          </Card>
          
          <Card>
            <CardHeader>
              <div className="flex justify-between items-center">
                <div>
                  <CardTitle>Recent Payments</CardTitle>
                  <CardDescription>Your payment history</CardDescription>
                </div>
                <Button variant="outline" size="sm">View All</Button>
              </div>
            </CardHeader>
            <CardContent>
              <div className="space-y-4">
                {payments.slice(0, 3).map((payment) => (
                  <div key={payment.id} className="flex justify-between items-center border-b pb-4 last:border-0 last:pb-0">
                    <div>
                      <p className="font-medium">
                        {payment.status === "Paid" 
                          ? <CheckCircle className="h-4 w-4 text-green-500 inline mr-1" /> 
                          : <AlertCircle className="h-4 w-4 text-yellow-500 inline mr-1" />}
                        {payment.id}
                      </p>
                      <p className="text-sm text-muted-foreground">
                        {format(payment.date, "MMMM d, yyyy")} • {payment.method}
                      </p>
                    </div>
                    <div className="flex items-center space-x-4">
                      <p className="font-medium">₹{payment.amount * 83}</p>
                      <Button variant="ghost" size="icon">
                        <Download className="h-4 w-4" />
                        <span className="sr-only">Download receipt</span>
                      </Button>
                    </div>
                  </div>
                ))}
              </div>
            </CardContent>
          </Card>
        </TabsContent>
        
        <TabsContent value="billing" className="space-y-6 mt-6">
          <Card>
            <CardHeader>
              <CardTitle>Payment History</CardTitle>
              <CardDescription>A record of all your payments</CardDescription>
            </CardHeader>
            <CardContent>
              <div className="space-y-4">
                {payments.map((payment) => (
                  <div key={payment.id} className="flex justify-between items-center border-b pb-4 last:border-0 last:pb-0">
                    <div>
                      <p className="font-medium">
                        {payment.status === "Paid" 
                          ? <CheckCircle className="h-4 w-4 text-green-500 inline mr-1" /> 
                          : <AlertCircle className="h-4 w-4 text-yellow-500 inline mr-1" />}
                        {payment.id}
                      </p>
                      <p className="text-sm text-muted-foreground">
                        {format(payment.date, "MMMM d, yyyy")} • {payment.method}
                      </p>
                    </div>
                    <div className="flex items-center space-x-4">
                      <p className="font-medium">₹{payment.amount * 83}</p>
                      <Button variant="ghost" size="icon">
                        <Download className="h-4 w-4" />
                        <span className="sr-only">Download receipt</span>
                      </Button>
                    </div>
                  </div>
                ))}
              </div>
            </CardContent>
            <CardFooter>
              <Button variant="outline" className="w-full">Download All Receipts</Button>
            </CardFooter>
          </Card>
          
          <Card>
            <CardHeader>
              <CardTitle>Billing Information</CardTitle>
              <CardDescription>Your billing address and information</CardDescription>
            </CardHeader>
            <CardContent>
              <div className="space-y-1">
                <p className="font-medium">Piyush Napit</p>
                <p className="text-sm">123 Fitness Street</p>
                <p className="text-sm">DELHI, NY 10001</p>
                <p className="text-sm">INDIA</p>
                <p className="text-sm pt-2">piyushnapit86@gmail.com</p>
                <p className="text-sm">+91 8962538416</p>
              </div>
            </CardContent>
            <CardFooter>
              <Button variant="outline">Edit Billing Information</Button>
            </CardFooter>
          </Card>
        </TabsContent>
        
        <TabsContent value="plans" className="space-y-6 mt-6">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {availablePlans.map((plan) => (
              <Card key={plan.id} className={plan.popular ? "relative border-primary" : ""}>
                {plan.popular && (
                  <div className="absolute top-0 right-0 rounded-bl-lg rounded-tr-lg bg-primary px-3 py-1 text-xs font-medium text-primary-foreground">
                    Popular
                  </div>
                )}
                <CardHeader>
                  <CardTitle>{plan.name}</CardTitle>
                  <CardDescription>
                    {plan.id === 1 ? "Basic access to gym facilities" : 
                     plan.id === 2 ? "Complete access and personal training" :
                     "VIP experience with all premium benefits"}
                  </CardDescription>
                </CardHeader>
                <CardContent className="space-y-4">
                  <div>
                    <p className="text-3xl font-bold">₹{plan.price * 83}</p>
                    <p className="text-sm text-muted-foreground">per {plan.billing}</p>
                  </div>
                  
                  <div className="space-y-2">
                    <h4 className="text-sm font-medium">Features included:</h4>
                    <ul className="space-y-2">
                      {plan.features.map((feature, index) => (
                        <li key={index} className="flex items-baseline space-x-2">
                          <CheckCircle className="h-4 w-4 text-green-500 flex-shrink-0" />
                          <span className="text-sm">{feature}</span>
                        </li>
                      ))}
                    </ul>
                  </div>
                </CardContent>
                <CardFooter>
                  <Button 
                    className="w-full" 
                    variant={membership.plan === plan.name ? "outline" : "default"}
                  >
                    {membership.plan === plan.name ? "Current Plan" : "Select Plan"}
                  </Button>
                </CardFooter>
              </Card>
            ))}
          </div>
          
          <Card>
            <CardHeader>
              <CardTitle>Plan Comparison</CardTitle>
              <CardDescription>See which plan is right for you</CardDescription>
            </CardHeader>
            <CardContent>
              <div className="overflow-x-auto">
                <table className="w-full">
                  <thead>
                    <tr className="border-b">
                      <th className="text-left font-medium py-3 pr-2">Feature</th>
                      <th className="text-center font-medium py-3 px-2">Basic</th>
                      <th className="text-center font-medium py-3 px-2">Premium</th>
                      <th className="text-center font-medium py-3 pl-2">Ultimate</th>
                    </tr>
                  </thead>
                  <tbody>
                    <tr className="border-b">
                      <td className="py-3 pr-2">Price</td>
                      <td className="text-center py-3 px-2">₹2,489/mo</td>
                      <td className="text-center py-3 px-2">₹4,149/mo</td>
                      <td className="text-center py-3 pl-2">₹6,639/mo</td>
                    </tr>
                    <tr className="border-b">
                      <td className="py-3 pr-2">Gym Access</td>
                      <td className="text-center py-3 px-2">Standard Hours</td>
                      <td className="text-center py-3 px-2">24/7 Access</td>
                      <td className="text-center py-3 pl-2">24/7 + VIP Areas</td>
                    </tr>
                    <tr className="border-b">
                      <td className="py-3 pr-2">Group Classes</td>
                      <td className="text-center py-3 px-2">Limited</td>
                      <td className="text-center py-3 px-2">All Included</td>
                      <td className="text-center py-3 pl-2">Priority Booking</td>
                    </tr>
                    <tr className="border-b">
                      <td className="py-3 pr-2">Personal Training</td>
                      <td className="text-center py-3 px-2">-</td>
                      <td className="text-center py-3 px-2">-</td>
                      <td className="text-center py-3 pl-2">2 Sessions/Month</td>
                    </tr>
                    <tr className="border-b">
                      <td className="py-3 pr-2">Fitness Assessment</td>
                      <td className="text-center py-3 px-2">-</td>
                      <td className="text-center py-3 px-2">Included</td>
                      <td className="text-center py-3 pl-2">Included</td>
                    </tr>
                    <tr className="border-b">
                      <td className="py-3 pr-2">Nutrition Consultation</td>
                      <td className="text-center py-3 px-2">-</td>
                      <td className="text-center py-3 px-2">Basic</td>
                      <td className="text-center py-3 pl-2">Advanced</td>
                    </tr>
                    <tr>
                      <td className="py-3 pr-2">Recovery Services</td>
                      <td className="text-center py-3 px-2">-</td>
                      <td className="text-center py-3 px-2">-</td>
                      <td className="text-center py-3 pl-2">Included</td>
                    </tr>
                  </tbody>
                </table>
              </div>
            </CardContent>
          </Card>
        </TabsContent>
      </Tabs>
    </div>
  );
}