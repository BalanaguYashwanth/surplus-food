import Link from "next/link"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Label } from "@/components/ui/label"
import { Textarea } from "@/components/ui/textarea"
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select"
import { Checkbox } from "@/components/ui/checkbox"
import { ArrowLeft, Utensils } from "lucide-react"

export default function RegisterBusiness() {
  return (
    <div className="flex flex-col min-h-screen">
      <header className="sticky top-0 z-50 w-full border-b bg-white">
        <div className="container flex h-16 items-center justify-between">
          <div className="flex items-center gap-2">
            <Link href="/">
              <div className="flex items-center gap-2">
                <Utensils className="h-6 w-6 text-green-500" />
                <span className="text-xl font-bold text-green-600">ZeroLeft</span>
              </div>
            </Link>
          </div>
          <Link href="/">
            <Button variant="ghost" className="text-green-600">
              <ArrowLeft className="mr-2 h-4 w-4" />
              Back to Home
            </Button>
          </Link>
        </div>
      </header>
      <main className="flex-1 py-12">
        <div className="container px-4 md:px-6">
          <div className="mx-auto max-w-2xl space-y-8">
            <div className="space-y-2 text-center">
              <h1 className="text-3xl font-bold tracking-tighter sm:text-4xl md:text-5xl text-green-700">
                Register Your Business
              </h1>
              <p className="text-gray-600 md:text-xl">
                Join our network of businesses fighting food waste and making a difference
              </p>
            </div>
            <div className="space-y-6 p-6 bg-green-50 rounded-lg">
              <form className="space-y-6">
                <div className="space-y-4">
                  <h2 className="text-xl font-semibold text-green-700">Business Information</h2>
                  <div className="grid grid-cols-1 gap-4 sm:grid-cols-2">
                    <div className="space-y-2">
                      <Label htmlFor="business-name">Business Name</Label>
                      <Input id="business-name" placeholder="Your business name" className="w-full" />
                    </div>
                    <div className="space-y-2">
                      <Label htmlFor="business-type">Business Type</Label>
                      <Select>
                        <SelectTrigger id="business-type">
                          <SelectValue placeholder="Select business type" />
                        </SelectTrigger>
                        <SelectContent>
                          <SelectItem value="restaurant">Restaurant</SelectItem>
                          <SelectItem value="cafe">Café</SelectItem>
                          <SelectItem value="bakery">Bakery</SelectItem>
                          <SelectItem value="grocery">Grocery Store</SelectItem>
                          <SelectItem value="hotel">Hotel</SelectItem>
                          <SelectItem value="catering">Catering Service</SelectItem>
                          <SelectItem value="other">Other</SelectItem>
                        </SelectContent>
                      </Select>
                    </div>
                  </div>
                  <div className="space-y-2">
                    <Label htmlFor="address">Business Address</Label>
                    <Textarea id="address" placeholder="Full address" className="min-h-[80px]" />
                  </div>
                  <div className="grid grid-cols-1 gap-4 sm:grid-cols-2">
                    <div className="space-y-2">
                      <Label htmlFor="city">City</Label>
                      <Input id="city" placeholder="City" />
                    </div>
                    <div className="space-y-2">
                      <Label htmlFor="pincode">PIN Code</Label>
                      <Input id="pincode" placeholder="PIN Code" />
                    </div>
                  </div>
                </div>

                <div className="space-y-4">
                  <h2 className="text-xl font-semibold text-green-700">Contact Information</h2>
                  <div className="grid grid-cols-1 gap-4 sm:grid-cols-2">
                    <div className="space-y-2">
                      <Label htmlFor="contact-name">Contact Person Name</Label>
                      <Input id="contact-name" placeholder="Full name" />
                    </div>
                    <div className="space-y-2">
                      <Label htmlFor="position">Position</Label>
                      <Input id="position" placeholder="Your position" />
                    </div>
                  </div>
                  <div className="grid grid-cols-1 gap-4 sm:grid-cols-2">
                    <div className="space-y-2">
                      <Label htmlFor="email">Email Address</Label>
                      <Input id="email" type="email" placeholder="your@email.com" />
                    </div>
                    <div className="space-y-2">
                      <Label htmlFor="phone">Phone Number</Label>
                      <Input id="phone" placeholder="Your phone number" />
                    </div>
                  </div>
                </div>

                <div className="space-y-4">
                  <h2 className="text-xl font-semibold text-green-700">Food Surplus Information</h2>
                  <div className="space-y-2">
                    <Label htmlFor="surplus-type">What type of food surplus do you typically have?</Label>
                    <Textarea
                      id="surplus-type"
                      placeholder="E.g., baked goods, prepared meals, fresh produce, etc."
                      className="min-h-[80px]"
                    />
                  </div>
                  <div className="space-y-2">
                    <Label htmlFor="frequency">How frequently do you have surplus food?</Label>
                    <Select>
                      <SelectTrigger id="frequency">
                        <SelectValue placeholder="Select frequency" />
                      </SelectTrigger>
                      <SelectContent>
                        <SelectItem value="daily">Daily</SelectItem>
                        <SelectItem value="few-times-week">Few times a week</SelectItem>
                        <SelectItem value="weekly">Weekly</SelectItem>
                        <SelectItem value="few-times-month">Few times a month</SelectItem>
                        <SelectItem value="monthly">Monthly</SelectItem>
                        <SelectItem value="irregular">Irregular</SelectItem>
                      </SelectContent>
                    </Select>
                  </div>
                  <div className="space-y-2">
                    <Label htmlFor="quantity">Estimated quantity of surplus food (per occurrence)</Label>
                    <Select>
                      <SelectTrigger id="quantity">
                        <SelectValue placeholder="Select quantity" />
                      </SelectTrigger>
                      <SelectContent>
                        <SelectItem value="small">Small (1-5 portions)</SelectItem>
                        <SelectItem value="medium">Medium (5-15 portions)</SelectItem>
                        <SelectItem value="large">Large (15-30 portions)</SelectItem>
                        <SelectItem value="very-large">Very Large (30+ portions)</SelectItem>
                      </SelectContent>
                    </Select>
                  </div>
                </div>

                <div className="space-y-4">
                  <div className="flex items-start space-x-2">
                    <Checkbox id="terms" />
                    <div className="grid gap-1.5 leading-none">
                      <label
                        htmlFor="terms"
                        className="text-sm font-medium leading-none peer-disabled:cursor-not-allowed peer-disabled:opacity-70 text-gray-600"
                      >
                        I agree to the terms and conditions
                      </label>
                      <p className="text-sm text-gray-500">
                        By checking this box, you agree to our{" "}
                        <Link href="#" className="text-green-600 hover:underline">
                          Terms of Service
                        </Link>{" "}
                        and{" "}
                        <Link href="#" className="text-green-600 hover:underline">
                          Privacy Policy
                        </Link>
                        .
                      </p>
                    </div>
                  </div>
                </div>

                <Button className="w-full bg-green-500 hover:bg-green-600">Register Business</Button>
              </form>
            </div>
          </div>
        </div>
      </main>
      <footer className="w-full border-t bg-green-50 py-6">
        <div className="container flex flex-col items-center justify-center gap-4 md:flex-row md:justify-between">
          <div className="flex items-center gap-2">
            <Utensils className="h-6 w-6 text-green-500" />
            <span className="text-xl font-bold text-green-600">ZeroLeft</span>
          </div>
          <p className="text-center text-sm text-gray-600 md:text-left">
            © 2025 ZeroLeft. All rights reserved. Fighting food waste together.
          </p>
        </div>
      </footer>
    </div>
  )
}
