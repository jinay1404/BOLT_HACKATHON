import { Nav } from "@/components/nav";
import { Button } from "@/components/ui/button";
import {
  ArrowRight,
  Trophy,
  Users,
  Calendar,
  Globe,
  Code2,
  Award,
  Gift,
  Rocket,
  CheckCircle2,
  Clock,
  MessageSquare,
  Mail,
} from "lucide-react";
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";
import { Card, CardContent } from "@/components/ui/card";
import Image from "next/image";

export default function Home() {
  return (
    <main className="flex min-h-screen flex-col">
      <Nav />

      {/* Hero Section */}
      <section className="relative isolate pt-14">
        <div className="absolute inset-x-0 -top-40 -z-10 transform-gpu overflow-hidden blur-3xl sm:-top-80">
          <div
            className="relative left-[calc(50%-11rem)] aspect-[1155/678] w-[36.125rem] -translate-x-1/2 rotate-[30deg] bg-gradient-to-tr from-[#ff80b5] to-[#9089fc] opacity-30 sm:left-[calc(50%-30rem)] sm:w-[72.1875rem]"
            style={{
              clipPath:
                "polygon(74.1% 44.1%, 100% 61.6%, 97.5% 26.9%, 85.5% 0.1%, 80.7% 2%, 72.5% 32.5%, 60.2% 62.4%, 52.4% 68.1%, 47.5% 58.3%, 45.2% 34.5%, 27.5% 76.7%, 0.1% 64.9%, 17.9% 100%, 27.6% 76.8%, 76.1% 97.7%, 74.1% 44.1%)",
            }}
          />
        </div>

        <div className="py-24 sm:py-32 lg:pb-40">
          <div className="mx-auto max-w-7xl px-6 lg:px-8">
            <div className="mx-auto max-w-4xl text-center">
              <h1 className="text-4xl font-bold tracking-tight sm:text-6xl bg-clip-text text-transparent bg-gradient-to-r from-pink-500 via-purple-500 to-indigo-500">
                The World's Largest Hackathon
              </h1>
              <p className="mt-6 text-lg leading-8 text-muted-foreground">
                Join thousands of developers worldwide in this groundbreaking
                virtual hackathon. Compete for $1M+ in prizes and make history
                in the largest coding event ever.
              </p>
              <div className="mt-10 flex items-center justify-center gap-x-6">
                <Button className="text-lg">
                  Register Now <ArrowRight className="ml-2 h-5 w-5" />
                </Button>
              </div>
            </div>

            <div className="mt-16 flow-root sm:mt-24">
              <div className="rounded-xl bg-card p-8 ring-1 ring-gray-900/10">
                <div className="grid grid-cols-1 gap-8 sm:grid-cols-2 lg:grid-cols-4">
                  <div className="flex flex-col items-center gap-2 rounded-xl bg-accent p-6">
                    <Trophy className="h-8 w-8 text-primary" />
                    <h3 className="text-xl font-semibold">$1M+ in Prizes</h3>
                    <p className="text-center text-sm text-muted-foreground">
                      Compete for the largest prize pool in hackathon history
                    </p>
                  </div>
                  <div className="flex flex-col items-center gap-2 rounded-xl bg-accent p-6">
                    <Users className="h-8 w-8 text-primary" />
                    <h3 className="text-xl font-semibold">Global Community</h3>
                    <p className="text-center text-sm text-muted-foreground">
                      Connect with developers from around the world
                    </p>
                  </div>
                  <div className="flex flex-col items-center gap-2 rounded-xl bg-accent p-6">
                    <Calendar className="h-8 w-8 text-primary" />
                    <h3 className="text-xl font-semibold">Date TBD</h3>
                    <p className="text-center text-sm text-muted-foreground">
                      Stay tuned for the official event date
                    </p>
                  </div>
                  <div className="flex flex-col items-center gap-2 rounded-xl bg-accent p-6">
                    <Globe className="h-8 w-8 text-primary" />
                    <h3 className="text-xl font-semibold">Virtual Event</h3>
                    <p className="text-center text-sm text-muted-foreground">
                      Participate from anywhere in the world
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* About Section */}
      <section id="about" className="py-24 bg-accent">
        <div className="mx-auto max-w-7xl px-6 lg:px-8">
          <div className="mx-auto max-w-2xl text-center">
            <h2 className="text-3xl font-bold tracking-tight sm:text-4xl">
              About the Event
            </h2>
            <p className="mt-6 text-lg leading-8 text-muted-foreground">
              The World's Largest Hackathon brings together developers,
              designers, and innovators from across the globe to build
              groundbreaking solutions. This virtual event democratizes access
              to innovation, allowing participants to collaborate and compete
              from anywhere in the world.
            </p>
          </div>

          <div className="mt-16 grid grid-cols-1 gap-8 sm:grid-cols-2 lg:grid-cols-3">
            <Card>
              <CardContent className="pt-6">
                <div className="flex flex-col items-center text-center gap-4">
                  <Code2 className="h-12 w-12 text-primary" />
                  <h3 className="text-xl font-semibold">
                    Innovation Without Borders
                  </h3>
                  <p className="text-muted-foreground">
                    Break geographical barriers and collaborate with talented
                    individuals worldwide.
                  </p>
                </div>
              </CardContent>
            </Card>

            <Card>
              <CardContent className="pt-6">
                <div className="flex flex-col items-center text-center gap-4">
                  <Rocket className="h-12 w-12 text-primary" />
                  <h3 className="text-xl font-semibold">Launch Your Ideas</h3>
                  <p className="text-muted-foreground">
                    Transform your innovative ideas into reality with support
                    from industry experts.
                  </p>
                </div>
              </CardContent>
            </Card>

            <Card>
              <CardContent className="pt-6">
                <div className="flex flex-col items-center text-center gap-4">
                  <Users className="h-12 w-12 text-primary" />
                  <h3 className="text-xl font-semibold">Network & Learn</h3>
                  <p className="text-muted-foreground">
                    Connect with industry leaders and fellow innovators while
                    learning new skills.
                  </p>
                </div>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* Prizes Section */}
      <section id="prizes" className="py-24">
        <div className="mx-auto max-w-7xl px-6 lg:px-8">
          <div className="mx-auto max-w-2xl text-center">
            <h2 className="text-3xl font-bold tracking-tight sm:text-4xl">
              Prizes & Awards
            </h2>
            <p className="mt-6 text-lg leading-8 text-muted-foreground">
              Compete for a share of our $1M+ prize pool across multiple
              categories.
            </p>
          </div>

          <div className="mt-16 grid grid-cols-1 gap-8 sm:grid-cols-2 lg:grid-cols-3">
            <Card className="relative overflow-hidden">
              <div className="absolute top-0 left-0 w-full h-2 bg-gradient-to-r from-yellow-400 via-yellow-500 to-yellow-600" />
              <CardContent className="pt-8">
                <div className="flex flex-col items-center text-center gap-4">
                  <Trophy className="h-12 w-12 text-yellow-500" />
                  <h3 className="text-2xl font-bold">Grand Prize</h3>
                  <p className="text-4xl font-bold text-primary">$500,000</p>
                  <ul className="mt-4 space-y-2">
                    <li className="flex items-center gap-2">
                      <CheckCircle2 className="h-5 w-5 text-green-500" />
                      <span>Cash Prize</span>
                    </li>
                    <li className="flex items-center gap-2">
                      <CheckCircle2 className="h-5 w-5 text-green-500" />
                      <span>Mentorship Program</span>
                    </li>
                    <li className="flex items-center gap-2">
                      <CheckCircle2 className="h-5 w-5 text-green-500" />
                      <span>Investor Connections</span>
                    </li>
                  </ul>
                </div>
              </CardContent>
            </Card>

            <Card className="relative overflow-hidden">
              <div className="absolute top-0 left-0 w-full h-2 bg-gradient-to-r from-gray-300 via-gray-400 to-gray-500" />
              <CardContent className="pt-8">
                <div className="flex flex-col items-center text-center gap-4">
                  <Award className="h-12 w-12 text-gray-400" />
                  <h3 className="text-2xl font-bold">Runner Up</h3>
                  <p className="text-4xl font-bold text-primary">$250,000</p>
                  <ul className="mt-4 space-y-2">
                    <li className="flex items-center gap-2">
                      <CheckCircle2 className="h-5 w-5 text-green-500" />
                      <span>Cash Prize</span>
                    </li>
                    <li className="flex items-center gap-2">
                      <CheckCircle2 className="h-5 w-5 text-green-500" />
                      <span>Cloud Credits</span>
                    </li>
                    <li className="flex items-center gap-2">
                      <CheckCircle2 className="h-5 w-5 text-green-500" />
                      <span>Tech Resources</span>
                    </li>
                  </ul>
                </div>
              </CardContent>
            </Card>

            <Card className="relative overflow-hidden">
              <div className="absolute top-0 left-0 w-full h-2 bg-gradient-to-r from-amber-600 via-amber-700 to-amber-800" />
              <CardContent className="pt-8">
                <div className="flex flex-col items-center text-center gap-4">
                  <Gift className="h-12 w-12 text-amber-700" />
                  <h3 className="text-2xl font-bold">Category Prizes</h3>
                  <p className="text-4xl font-bold text-primary">$250,000</p>
                  <ul className="mt-4 space-y-2">
                    <li className="flex items-center gap-2">
                      <CheckCircle2 className="h-5 w-5 text-green-500" />
                      <span>Best AI/ML Solution</span>
                    </li>
                    <li className="flex items-center gap-2">
                      <CheckCircle2 className="h-5 w-5 text-green-500" />
                      <span>Best Web3 Project</span>
                    </li>
                    <li className="flex items-center gap-2">
                      <CheckCircle2 className="h-5 w-5 text-green-500" />
                      <span>Social Impact Award</span>
                    </li>
                  </ul>
                </div>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* Sponsors Section */}
      <section id="sponsors" className="py-24 bg-accent">
        <div className="mx-auto max-w-7xl px-6 lg:px-8">
          <div className="mx-auto max-w-2xl text-center">
            <h2 className="text-3xl font-bold tracking-tight sm:text-4xl">
              Our Sponsors
            </h2>
            <p className="mt-6 text-lg leading-8 text-muted-foreground">
              Backed by industry leaders committed to fostering innovation.
            </p>
          </div>

          <div className="mt-16">
            <div className="mx-auto grid max-w-lg grid-cols-1 gap-8 sm:max-w-xl sm:grid-cols-2 lg:mx-0 lg:max-w-none lg:grid-cols-3">
              {/* Supabase */}
              <Card className="flex flex-col items-center p-6">
                <div className="h-16 w-full mb-4 bg-accent/50 rounded-lg flex items-center justify-center">
                  {/* Image placeholder for Supabase */}
                  <div className="text-muted-foreground">Supabase Logo</div>
                </div>
                <h3 className="text-xl font-semibold mb-2">Supabase</h3>
                <p className="text-center text-muted-foreground">
                  Open-source Firebase alternative, providing
                  backend-as-a-service features.
                </p>
              </Card>

              {/* Netlify */}
              <Card className="flex flex-col items-center p-6">
                <div className="h-16 w-full mb-4 bg-accent/50 rounded-lg flex items-center justify-center">
                  {/* Image placeholder for Netlify */}
                  <div className="text-muted-foreground">Netlify Logo</div>
                </div>
                <h3 className="text-xl font-semibold mb-2">Netlify</h3>
                <p className="text-center text-muted-foreground">
                  Platform for building and deploying modern web applications
                  with Git.
                </p>
              </Card>

              {/* Cloudflare */}
              <Card className="flex flex-col items-center p-6">
                <div className="h-16 w-full mb-4 bg-accent/50 rounded-lg flex items-center justify-center">
                  {/* Image placeholder for Cloudflare */}
                  <div className="text-muted-foreground">Cloudflare Logo</div>
                </div>
                <h3 className="text-xl font-semibold mb-2">
                  Cloudflare Developers
                </h3>
                <p className="text-center text-muted-foreground">
                  Offers tools and services for developers to build and deploy
                  applications on Cloudflare's network.
                </p>
              </Card>

              {/* Sentry */}
              <Card className="flex flex-col items-center p-6">
                <div className="h-16 w-full mb-4 bg-accent/50 rounded-lg flex items-center justify-center">
                  {/* Image placeholder for Sentry */}
                  <div className="text-muted-foreground">Sentry Logo</div>
                </div>
                <h3 className="text-xl font-semibold mb-2">Sentry</h3>
                <p className="text-center text-muted-foreground">
                  Application monitoring and error tracking software.
                </p>
              </Card>

              {/* Loops.so */}
              <Card className="flex flex-col items-center p-6">
                <div className="h-16 w-full mb-4 bg-accent/50 rounded-lg flex items-center justify-center">
                  {/* Image placeholder for Loops.so */}
                  <div className="text-muted-foreground">Loops.so Logo</div>
                </div>
                <h3 className="text-xl font-semibold mb-2">Loops.so</h3>
                <p className="text-center text-muted-foreground">
                  Email marketing platform focused on automation and
                  personalization.
                </p>
              </Card>

              {/* Algorand */}
              <Card className="flex flex-col items-center p-6">
                <div className="h-16 w-full mb-4 bg-accent/50 rounded-lg flex items-center justify-center">
                  {/* Image placeholder for Algorand */}
                  <div className="text-muted-foreground">Algorand Logo</div>
                </div>
                <h3 className="text-xl font-semibold mb-2">
                  Algorand Foundation
                </h3>
                <p className="text-center text-muted-foreground">
                  Supports the growth and development of the Algorand blockchain
                  ecosystem.
                </p>
              </Card>
            </div>
          </div>
        </div>
      </section>

      {/* Judges Section */}
      <section id="judges" className="py-24">
        <div className="mx-auto max-w-7xl px-6 lg:px-8">
          <div className="mx-auto max-w-2xl text-center">
            <h2 className="text-3xl font-bold tracking-tight sm:text-4xl">
              Meet Our Judges
            </h2>
            <p className="mt-6 text-lg leading-8 text-muted-foreground">
              Industry experts and thought leaders evaluating your innovations.
            </p>
          </div>

          <div className="mt-16">
            <div className="mx-auto grid max-w-lg grid-cols-1 gap-8 sm:max-w-xl sm:grid-cols-2 lg:mx-0 lg:max-w-none lg:grid-cols-3">
              {/* levelsio */}
              <Card className="flex flex-col items-center p-6">
                <div className="h-16 w-full mb-4 bg-accent/50 rounded-lg flex items-center justify-center">
                  {/* Image placeholder for levelsio */}
                  <div className="text-muted-foreground">levelsio Logo</div>
                </div>
                <h3 className="text-xl font-semibold mb-2">levelsio</h3>
                <p className="text-center text-muted-foreground">
                  Founder of multiple successful internet businesses.
                </p>
              </Card>

              {/* Logan Kilpatrick */}
              <Card className="flex flex-col items-center p-6">
                <div className="h-16 w-full mb-4 bg-accent/50 rounded-lg flex items-center justify-center">
                  {/* Image placeholder for Logan Kilpatrick */}
                  <div className="text-muted-foreground">
                    Logan Kilpatrick Logo
                  </div>
                </div>
                <h3 className="text-xl font-semibold mb-2">
                  Logan Kilpatrick (@Google)
                </h3>
                <p className="text-center text-muted-foreground">
                  Lead product for Google AI Studio, working on Gemini API and
                  AGI.
                </p>
              </Card>

              {/* Sarah Guo */}
              <Card className="flex flex-col items-center p-6">
                <div className="h-16 w-full mb-4 bg-accent/50 rounded-lg flex items-center justify-center">
                  {/* Image placeholder for Sarah Guo */}
                  <div className="text-muted-foreground">Sarah Guo Logo</div>
                </div>
                <h3 className="text-xl font-semibold mb-2">
                  Sarah Guo (@conviction)
                </h3>
                <p className="text-center text-muted-foreground">
                  Startup investor/helper and founder of @conviction, focused on
                  accelerating AI adoption.
                </p>
              </Card>

              {/* Theo */}
              <Card className="flex flex-col items-center p-6">
                <div className="h-16 w-full mb-4 bg-accent/50 rounded-lg flex items-center justify-center">
                  {/* Image placeholder for Theo */}
                  <div className="text-muted-foreground">Theo Logo</div>
                </div>
                <h3 className="text-xl font-semibold mb-2">
                  Theo (@t3dotchat)
                </h3>
                <p className="text-center text-muted-foreground">
                  Full-time CEO of @t3dotchat, YouTuber, investor, and
                  developer.
                </p>
              </Card>

              {/* Evan You */}
              <Card className="flex flex-col items-center p-6">
                <div className="h-16 w-full mb-4 bg-accent/50 rounded-lg flex items-center justify-center">
                  {/* Image placeholder for Evan You */}
                  <div className="text-muted-foreground">Evan You Logo</div>
                </div>
                <h3 className="text-xl font-semibold mb-2">
                  Evan You (@vuejs)
                </h3>
                <p className="text-center text-muted-foreground">
                  Founder of @voidzerodev and creator of @vuejs and @vite_js.
                </p>
              </Card>

              {/* KP */}
              <Card className="flex flex-col items-center p-6">
                <div className="h-16 w-full mb-4 bg-accent/50 rounded-lg flex items-center justify-center">
                  {/* Image placeholder for KP */}
                  <div className="text-muted-foreground">KP Logo</div>
                </div>
                <h3 className="text-xl font-semibold mb-2">KP (@PaddleHQ)</h3>
                <p className="text-center text-muted-foreground">
                  The "Build In Public" Guy, running AI Launchpad & Founder
                  Relations at @PaddleHQ.
                </p>
              </Card>
            </div>
          </div>
        </div>
      </section>

      {/* Schedule Section */}
      <section id="schedule" className="py-24 bg-accent">
        <div className="mx-auto max-w-7xl px-6 lg:px-8">
          <div className="mx-auto max-w-2xl text-center">
            <h2 className="text-3xl font-bold tracking-tight sm:text-4xl">
              Event Schedule
            </h2>
            <p className="mt-6 text-lg leading-8 text-muted-foreground">
              Mark your calendar for these key dates and events.
            </p>
          </div>

          <div className="mt-16 max-w-2xl mx-auto">
            <div className="space-y-8">
              {[
                {
                  date: "Day 1",
                  events: [
                    {
                      time: "10:00 AM",
                      title: "Opening Ceremony",
                      description: "Welcome address and keynote speakers",
                    },
                    {
                      time: "11:00 AM",
                      title: "Team Formation",
                      description: "Network and form teams",
                    },
                    {
                      time: "12:00 PM",
                      title: "Hacking Begins",
                      description: "Start working on your projects",
                    },
                  ],
                },
                {
                  date: "Day 2",
                  events: [
                    {
                      time: "All Day",
                      title: "Hacking Continues",
                      description: "Continue development with mentor support",
                    },
                    {
                      time: "2:00 PM",
                      title: "Workshop Sessions",
                      description: "Technical workshops and presentations",
                    },
                  ],
                },
                {
                  date: "Day 3",
                  events: [
                    {
                      time: "12:00 PM",
                      title: "Submission Deadline",
                      description: "Submit your projects",
                    },
                    {
                      time: "2:00 PM",
                      title: "Project Presentations",
                      description: "Present to judges and audience",
                    },
                    {
                      time: "5:00 PM",
                      title: "Awards Ceremony",
                      description: "Winners announced and prizes awarded",
                    },
                  ],
                },
              ].map((day, index) => (
                <Card key={index}>
                  <CardContent className="pt-6">
                    <h3 className="text-xl font-semibold mb-4">{day.date}</h3>
                    <div className="space-y-4">
                      {day.events.map((event, eventIndex) => (
                        <div key={eventIndex} className="flex gap-4">
                          <div className="flex-none">
                            <Clock className="h-5 w-5 text-muted-foreground" />
                          </div>
                          <div>
                            <p className="font-medium">
                              {event.time} - {event.title}
                            </p>
                            <p className="text-sm text-muted-foreground">
                              {event.description}
                            </p>
                          </div>
                        </div>
                      ))}
                    </div>
                  </CardContent>
                </Card>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* FAQ Section */}
      <section id="faq" className="py-24">
        <div className="mx-auto max-w-7xl px-6 lg:px-8">
          <div className="mx-auto max-w-2xl text-center">
            <h2 className="text-3xl font-bold tracking-tight sm:text-4xl">
              Frequently Asked Questions
            </h2>
            <p className="mt-6 text-lg leading-8 text-muted-foreground">
              Find answers to common questions about the hackathon.
            </p>
          </div>

          <div className="mx-auto mt-16 max-w-2xl">
            <Accordion type="single" collapsible className="w-full">
              <AccordionItem value="item-1">
                <AccordionTrigger>Who can participate?</AccordionTrigger>
                <AccordionContent>
                  Anyone over 18 years old can participate. Whether you're a
                  student, professional, or hobbyist developer, you're welcome
                  to join. Teams can have up to 4 members.
                </AccordionContent>
              </AccordionItem>

              <AccordionItem value="item-2">
                <AccordionTrigger>
                  What's the registration process?
                </AccordionTrigger>
                <AccordionContent>
                  Registration is free and simple. Click the "Register Now"
                  button, fill out the form, and you'll receive a confirmation
                  email with further instructions.
                </AccordionContent>
              </AccordionItem>

              <AccordionItem value="item-3">
                <AccordionTrigger>What can I build?</AccordionTrigger>
                <AccordionContent>
                  You can build any software project that aligns with our theme
                  and categories. This includes web apps, mobile apps, AI/ML
                  solutions, blockchain applications, and more.
                </AccordionContent>
              </AccordionItem>

              <AccordionItem value="item-4">
                <AccordionTrigger>How does judging work?</AccordionTrigger>
                <AccordionContent>
                  Projects will be evaluated based on innovation, technical
                  complexity, practical application, and presentation. Our panel
                  of expert judges will review all submissions and select
                  winners in each category.
                </AccordionContent>
              </AccordionItem>

              <AccordionItem value="item-5">
                <AccordionTrigger>
                  What resources are provided?
                </AccordionTrigger>
                <AccordionContent>
                  Participants will have access to mentors, technical workshops,
                  cloud credits, and various API integrations. We'll provide all
                  necessary documentation and support throughout the event.
                </AccordionContent>
              </AccordionItem>
            </Accordion>
          </div>
        </div>
      </section>

      {/* Contact Section */}
      <section className="py-24 bg-accent">
        <div className="mx-auto max-w-7xl px-6 lg:px-8">
          <div className="mx-auto max-w-2xl text-center">
            <h2 className="text-3xl font-bold tracking-tight sm:text-4xl">
              Get in Touch
            </h2>
            <p className="mt-6 text-lg leading-8 text-muted-foreground">
              Have questions? Our team is here to help.
            </p>
            <div className="mt-10 flex items-center justify-center gap-x-6">
              <Button className="gap-2">
                <MessageSquare className="h-5 w-5" />
                Chat with Us
              </Button>
              <Button className="gap-2">
                <Mail className="h-5 w-5" />
                Email Support
              </Button>
            </div>
          </div>
        </div>
      </section>
    </main>
  );
}
