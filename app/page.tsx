import Link from "next/link"
import { Button } from "@/components/ui/button"
import { ArrowRight, Utensils, ShoppingBag, Clock, CheckCircle } from "lucide-react"
import heroSection from "@/public/hero_section_v2.png";
import { TestimonialCard } from "@/components/ui/testimonial-card";

export default function Home() {
  return (
    <div className="flex flex-col min-h-screen">
      <header className="sticky top-0 z-50 w-full border-b bg-white">
        <div className="container flex h-16 items-center justify-between">
          <div className="flex items-center gap-2">
            <Utensils className="h-6 w-6 text-green-500" />
            <span className="text-xl font-bold text-green-600">Hungrify</span>
          </div>
          <nav className="hidden md:flex items-center gap-6">
            <Link href="#how-it-works" className="text-sm font-medium text-gray-600 hover:text-green-600">
              How It Works
            </Link>
            <Link href="#benefits" className="text-sm font-medium text-gray-600 hover:text-green-600">
              Benefits
            </Link>
            <Link href="#mission" className="text-sm font-medium text-gray-600 hover:text-green-600">
              Our Mission
            </Link>
            <Link href="#testimonials" className="text-sm font-medium text-gray-600 hover:text-green-600">
              Testimonials
            </Link>
            <Link href="#contact" className="text-sm font-medium text-gray-600 hover:text-green-600">
              Contact
            </Link>
          </nav>
          <div className="flex items-center gap-4">
            {/* TODO - Need to uncomment in future development */}
            {/* <Link href="/login" className="text-sm font-medium text-gray-600 hover:text-green-600">
              Login
            </Link> */}
            <Link href="/register-business">
              <Button className="bg-green-500 hover:bg-green-600">Register Business</Button>
            </Link>
          </div>
        </div>
      </header>
      <main className="flex-1">
        {/* Hero Section */}
        <section className="w-full py-12 md:py-24 lg:py-32 bg-green-50">
          <div className="container px-4 md:px-12">
            <div className="grid gap-6 lg:grid-cols-2 lg:gap-12 items-center">
              <div className="flex flex-col justify-center space-y-4">
                <div className="space-y-2">
                  <h1 className="text-3xl font-bold tracking-tighter sm:text-4xl md:text-5xl text-green-700">
                    Turn Extra Food Into Extra Smiles
                  </h1>
                  <p className="max-w-[600px] text-gray-600 md:text-xl">
                    Tasty deals, no compromise. Enjoy food from your favorite places — up to 70% off!
                  </p>
                </div>
                <div className="flex flex-col gap-2 min-[400px]:flex-row">
                  <Link href="/register-business">
                    <Button variant="outline" className="border-green-500 text-green-600 hover:bg-green-50">
                      Become a Partner
                    </Button>
                  </Link>
                </div>
              </div>
              <div className="flex justify-end">
                <img
                  src={heroSection.src}
                  alt="Food rescue illustration"
                  className="w-full h-full max-h-[400px] max-w-[500px] rounded-xl"
                />
              </div>
            </div>
          </div>
        </section>

        {/* How It Works Section */}
        <section id="how-it-works" className="w-full py-12 md:py-24 lg:py-32 bg-vanilla-50">
          <div className="container px-4 md:px-6">
            <div className="flex flex-col items-center justify-center space-y-4 text-center">
              <div className="space-y-2">
                <h2 className="text-3xl font-bold tracking-tighter sm:text-4xl md:text-5xl text-green-700">
                  How Hungrify Works
                </h2>
                <p className="max-w-[900px] text-gray-600 md:text-xl">
                  A simple process to rescue surplus food and reduce waste
                </p>
              </div>
            </div>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mt-12">
              <div className="flex flex-col items-center space-y-4 p-6 bg-white rounded-lg shadow-sm border border-green-100">
                <div className="p-3 bg-green-100 rounded-full">
                  <ShoppingBag className="h-8 w-8 text-green-600" />
                </div>
                <h3 className="text-xl font-bold text-green-700">Discover</h3>
                <p className="text-gray-600 text-center">
                  Browse available food deals from top-rated food spots near you.
                </p>
              </div>
              <div className="flex flex-col items-center space-y-4 p-6 bg-white rounded-lg shadow-sm border border-green-100">
                <div className="p-3 bg-green-100 rounded-full">
                  <Clock className="h-8 w-8 text-green-600" />
                </div>
                <h3 className="text-xl font-bold text-green-700">Save</h3>
                <p className="text-gray-600 text-center">
                  Grab your “Magic Bag” at a big discount—fresh, safe, and ready to go.
                </p>
              </div>
              <div className="flex flex-col items-center space-y-4 p-6 bg-white rounded-lg shadow-sm border border-green-100">
                <div className="p-3 bg-green-100 rounded-full">
                  <CheckCircle className="h-8 w-8 text-green-600" />
                </div>
                <h3 className="text-xl font-bold text-green-700">Enjoy & Impact</h3>
                <p className="text-gray-600 text-center">
                  Pick it up, enjoy the meal, and feel good knowing you helped reduce food waste.
                </p>
              </div>
            </div>
          </div>
        </section>

        {/* Benefits Section */}
        <section id="benefits" className="w-full py-12 md:py-24 lg:py-32 bg-white">
          <div className="container px-4 md:px-6">
            <div className="flex flex-col items-center justify-center space-y-4 text-center">
              <div className="space-y-2">
                <h2 className="text-3xl font-bold tracking-tighter sm:text-4xl md:text-5xl text-green-700">
                  Why Choose Hungrify ?
                </h2>
                <p className="max-w-[900px] text-gray-600 md:text-xl">
                  Our platform creates value for businesses, consumers, and the environment
                </p>
              </div>
            </div>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mt-12">
              <div className="space-y-4 p-6 bg-green-50 rounded-lg">
                <h3 className="text-2xl font-bold text-green-700">For Businesses</h3>
                <ul className="space-y-2">
                  <li className="flex items-start gap-2">
                    <CheckCircle className="h-5 w-5 text-green-600 mt-0.5" />
                    <span className="text-gray-600">Unlock new revenue by offering fresh fusion food</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <CheckCircle className="h-5 w-5 text-green-600 mt-0.5" />
                    <span className="text-gray-600">Boost profits while serving more happy customers</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <CheckCircle className="h-5 w-5 text-green-600 mt-0.5" />
                    <span className="text-gray-600">Attract new customers to your business</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <CheckCircle className="h-5 w-5 text-green-600 mt-0.5" />
                    <span className="text-gray-600">Enhance your brand's sustainability credentials</span>
                  </li>
                </ul>
              </div>
              <div className="space-y-4 p-6 bg-green-50 rounded-lg">
                <h3 className="text-2xl font-bold text-green-700">For Consumers</h3>
                <ul className="space-y-2">
                  <li className="flex items-start gap-2">
                    <CheckCircle className="h-5 w-5 text-green-600 mt-0.5" />
                    <span className="text-gray-600">Access quality food at reduced prices</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <CheckCircle className="h-5 w-5 text-green-600 mt-0.5" />
                    <span className="text-gray-600">Discover new local businesses and food options</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <CheckCircle className="h-5 w-5 text-green-600 mt-0.5" />
                    <span className="text-gray-600">Make a positive environmental impact with every purchase</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <CheckCircle className="h-5 w-5 text-green-600 mt-0.5" />
                    <span className="text-gray-600">Join a growing community making every meal count</span>
                  </li>
                </ul>
              </div>
            </div>
          </div>
        </section>

        {/* Mission Section */}
        <section id="mission" className="w-full py-12 md:py-24 lg:py-32 bg-green-50">
          <div className="container px-4 md:px-6">
            <div className="grid gap-6 lg:grid-cols-2 lg:gap-12 items-center">
              <div className="relative w-full max-w-[500px] h-[300px] md:h-[500px] mx-auto">
                <img
                  src="https://goodtograb.com/web/img/pic4.png"
                  alt="Food waste reduction"
                  width={500}
                  height={500}
                  className="w-full h-full object-contain rounded-xl"
                />
              </div>
              <div className="flex flex-col justify-center space-y-4">
                <div className="space-y-2">
                  <h2 className="text-3xl font-bold tracking-tighter sm:text-4xl md:text-5xl text-green-700">
                    Our Vision
                  </h2>
                  <p className="max-w-[600px] text-gray-600 md:text-xl">
                    We empower everyone to enjoy delicious, surplus food from your favorite spots such as restaurants, grocery stores, and bakeries, giving great meals a second chance to delight you!
                  </p>
                </div>
                <div className="bg-white p-4 rounded-lg border border-green-100 mt-4">
                  <div className="text-2xl font-bold text-green-700 mb-2">Food Shortage in India</div>
                  <p className="text-gray-600">
                    India faces a significant food shortage challenge, with around 40% of produced food not reaching those who need it. Every day, 30% of cooked food and 20% of restaurant meals are wasted in India — a $14 billion problem we can help solve.. Together, we can turn this around.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* CTA Section */}
        <section className="w-full py-12 md:py-24 lg:py-32 bg-vanilla-100">
          <div className="container px-4 md:px-6">
            <div className="flex flex-col items-center justify-center space-y-4 text-center">
              <div className="space-y-2">
                <h2 className="text-3xl font-bold tracking-tighter sm:text-4xl md:text-5xl text-green-700">
                  Rescue Your First Meal Today
                </h2>
                <p className="max-w-[900px] text-gray-600 md:text-xl">
                  Join thousands of users who are saving the planet—one bite at a time.
                </p>
              </div>
              <div className="flex flex-col gap-2 min-[400px]:flex-row mt-6">
                <Link href="/register-business">
                  <Button
                    variant="outline"
                    className="border-green-500 text-green-600 hover:bg-green-50 text-lg px-8 py-6"
                  >
                    Become a Partner
                  </Button>
                </Link>
              </div>
            </div>
          </div>
        </section>

        {/* Testimonials Section */}
        <section id="testimonials" className="w-full py-12 md:py-24 lg:py-32 bg-vanilla-50">
          <div className="container px-4 md:px-6">
            <div className="flex flex-col items-center justify-center space-y-4 text-center">
              <div className="space-y-2">
                <h2 className="text-3xl font-bold tracking-tighter sm:text-4xl md:text-5xl text-green-700">
                  What People Are Saying
                </h2>
                <p className="max-w-[900px] text-gray-600 md:text-xl">
                  Hear from our community of businesses and customers
                </p>
              </div>
            </div>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mt-12">
              <TestimonialCard
                name="Aarav Sharma"
                role="Regular Customer"
                rating={5}
                testimonial="I've discovered so many amazing restaurants through Hungrify and saved money while reducing waste. The quality is always excellent!"
                initials="AS"
              />
              <TestimonialCard
                name="Priya Kapoor"
                role="Cafe Owner"
                rating={5}
                testimonial="Hungrify has helped us reduce our food waste by 30% while bringing in new customers. It's a win-win for our business and the planet."
                initials="PK"
              />
              <TestimonialCard
                name="Rahul Mehta"
                role="Food Enthusiast"
                rating={4}
                testimonial="As someone who cares about sustainability, I love that I can enjoy great food while making a positive impact. The app is easy to use too!"
                initials="RM"
              />
            </div>
          </div>
        </section>

        {/* Contact Section */}
        <section id="contact" className="w-full py-12 md:py-24 lg:py-32 bg-white">
          <div className="container px-4 md:px-6">
            <div className="grid gap-6 lg:grid-cols-2 lg:gap-12 items-center">
              <div className="flex flex-col justify-center space-y-4">
                <div className="space-y-2">
                  <h2 className="text-3xl font-bold tracking-tighter sm:text-4xl md:text-5xl text-green-700">
                    Get in Touch
                  </h2>
                  <p className="max-w-[600px] text-gray-600 md:text-xl">
                    Have questions about how our platform works? Want to learn more about how your business can benefit?
                    We're here to help.
                  </p>
                </div>
                <div className="space-y-4 mt-4">
                  <div className="flex items-center gap-2">
                    <div className="p-2 bg-green-100 rounded-full">
                      <svg
                        xmlns="http://www.w3.org/2000/svg"
                        width="24"
                        height="24"
                        viewBox="0 0 24 24"
                        fill="none"
                        stroke="currentColor"
                        strokeWidth="2"
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        className="h-5 w-5 text-green-600"
                      >
                        <path d="M22 16.92v3a2 2 0 0 1-2.18 2 19.79 19.79 0 0 1-8.63-3.07 19.5 19.5 0 0 1-6-6 19.79 19.79 0 0 1-3.07-8.67A2 2 0 0 1 4.11 2h3a2 2 0 0 1 2 1.72 12.84 12.84 0 0 0 .7 2.81 2 2 0 0 1-.45 2.11L8.09 9.91a16 16 0 0 0 6 6l1.27-1.27a2 2 0 0 1 2.11-.45 12.84 12.84 0 0 0 2.81.7A2 2 0 0 1 22 16.92z" />
                      </svg>
                    </div>
                    <a href="tel:+917395993858" className="text-gray-600 hover:text-green-600">+91 73959 93858</a>
                  </div>
                  <div className="flex items-center gap-2">
                    <div className="p-2 bg-green-100 rounded-full">
                      <svg
                        xmlns="http://www.w3.org/2000/svg"
                        width="24"
                        height="24"
                        viewBox="0 0 24 24"
                        fill="none"
                        stroke="currentColor"
                        strokeWidth="2"
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        className="h-5 w-5 text-green-600"
                      >
                        <rect width="20" height="16" x="2" y="4" rx="2" />
                        <path d="m22 7-8.97 5.7a1.94 1.94 0 0 1-2.06 0L2 7" />
                      </svg>
                    </div>
                    <span className="text-gray-600">contact@hungrify.in</span>
                  </div>
                  <div className="flex items-center gap-2">
                    <div className="p-2 bg-green-100 rounded-full">
                      <svg
                        xmlns="http://www.w3.org/2000/svg"
                        width="24"
                        height="24"
                        viewBox="0 0 24 24"
                        fill="none"
                        stroke="currentColor"
                        strokeWidth="2"
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        className="h-5 w-5 text-green-600"
                      >
                        <path d="M20 10c0 6-8 12-8 12s-8-6-8-12a8 8 0 0 1 16 0Z" />
                        <circle cx="12" cy="10" r="3" />
                      </svg>
                    </div>
                    <span className="text-gray-600">Bangalore, India</span>
                  </div>
                </div>
              </div>
              <div className="space-y-4 p-6 bg-green-50 rounded-lg">
                <h3 className="text-2xl font-bold text-green-700">Send Us a Message</h3>
                <form className="space-y-4">
                  <div className="grid grid-cols-1 gap-4 sm:grid-cols-2">
                    <div className="space-y-2">
                      <label htmlFor="name" className="text-sm font-medium text-gray-600">
                        Name
                      </label>
                      <input
                        id="name"
                        placeholder="Your name"
                        className="w-full rounded-md border border-gray-300 p-2 text-gray-600 placeholder:text-gray-400 focus:outline-none focus:ring-2 focus:ring-green-500"
                      />
                    </div>
                    <div className="space-y-2">
                      <label htmlFor="email" className="text-sm font-medium text-gray-600">
                        Email
                      </label>
                      <input
                        id="email"
                        type="email"
                        placeholder="Your email"
                        className="w-full rounded-md border border-gray-300 p-2 text-gray-600 placeholder:text-gray-400 focus:outline-none focus:ring-2 focus:ring-green-500"
                      />
                    </div>
                  </div>
                  <div className="space-y-2">
                    <label htmlFor="subject" className="text-sm font-medium text-gray-600">
                      Subject
                    </label>
                    <input
                      id="subject"
                      placeholder="Subject"
                      className="w-full rounded-md border border-gray-300 p-2 text-gray-600 placeholder:text-gray-400 focus:outline-none focus:ring-2 focus:ring-green-500"
                    />
                  </div>
                  <div className="space-y-2">
                    <label htmlFor="message" className="text-sm font-medium text-gray-600">
                      Message
                    </label>
                    <textarea
                      id="message"
                      placeholder="Your message"
                      className="h-32 w-full rounded-md border border-gray-300 p-2 text-gray-600 placeholder:text-gray-400 focus:outline-none focus:ring-2 focus:ring-green-500"
                    ></textarea>
                  </div>
                  <Button className="w-full bg-green-500 hover:bg-green-600">Send Message</Button>
                </form>
              </div>
            </div>
          </div>
        </section>
      </main>
      <footer className="w-full border-t bg-green-50 py-6">
        <div className="container flex flex-col items-center justify-center gap-4 md:flex-row md:justify-between">
          <div className="flex items-center gap-2">
            <Utensils className="h-6 w-6 text-green-500" />
            <span className="text-xl font-bold text-green-600">Hungrify</span>
          </div>
          <p className="text-center text-sm text-gray-600 md:text-left">
            © 2025 Hungrify. All rights reserved. Fighting food waste together.
          </p>
          <div className="flex items-center gap-4">
            <Link href="#" className="text-gray-600 hover:text-green-600">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="24"
                height="24"
                viewBox="0 0 24 24"
                fill="none"
                stroke="currentColor"
                strokeWidth="2"
                strokeLinecap="round"
                strokeLinejoin="round"
                className="h-5 w-5"
              >
                <path d="M18 2h-3a5 5 0 0 0-5 5v3H7v4h3v8h4v-8h3l1-4h-4V7a1 1 0 0 1 1-1h3z" />
              </svg>
              <span className="sr-only">Facebook</span>
            </Link>
            <Link href="#" className="text-gray-600 hover:text-green-600">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="24"
                height="24"
                viewBox="0 0 24 24"
                fill="none"
                stroke="currentColor"
                strokeWidth="2"
                strokeLinecap="round"
                strokeLinejoin="round"
                className="h-5 w-5"
              >
                <rect width="20" height="20" x="2" y="2" rx="5" ry="5" />
                <path d="M16 11.37A4 4 0 1 1 12.63 8 4 4 0 0 1 16 11.37z" />
                <line x1="17.5" x2="17.51" y1="6.5" y2="6.5" />
              </svg>
              <span className="sr-only">Instagram</span>
            </Link>
            <Link href="#" className="text-gray-600 hover:text-green-600">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="24"
                height="24"
                viewBox="0 0 24 24"
                fill="none"
                stroke="currentColor"
                strokeWidth="2"
                strokeLinecap="round"
                strokeLinejoin="round"
                className="h-5 w-5"
              >
                <path d="M22 4s-.7 2.1-2 3.4c1.6 10-9.4 17.3-18 11.6 2.2.1 4.4-.6 6-2C3 15.5.5 9.6 3 5c2.2 2.6 5.6 4.1 9 4-.9-4.2 4-6.6 7-3.8 1.1 0 3-1.2 3-1.2z" />
              </svg>
              <span className="sr-only">Twitter</span>
            </Link>
          </div>
        </div>
      </footer>
    </div>
  )
}
