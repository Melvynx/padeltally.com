import Image from "next/image";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Separator } from "@/components/ui/separator";
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";
import { 
  Watch, 
  Trophy, 
  Zap, 
  WifiOff,
  Target,
  Star,
  CheckCircle2,
  ArrowRight,
  Sparkles,
  Shield,
  Globe,
  Heart
} from "lucide-react";

export default function Home() {
  return (
    <div className="min-h-screen bg-background">
      {/* Navigation */}
      <header className="sticky top-0 z-50 w-full border-b bg-background/95 backdrop-blur supports-[backdrop-filter]:bg-background/60">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex h-16 items-center justify-between">
            <div className="flex items-center space-x-2">
              <div className="w-8 h-8 rounded-lg bg-primary flex items-center justify-center">
                <span className="text-primary-foreground font-bold">P</span>
              </div>
              <span className="font-semibold text-lg">PadelTally</span>
            </div>
            <nav className="hidden md:flex items-center space-x-6">
              <a href="#features" className="text-sm font-medium text-muted-foreground hover:text-primary transition-colors">
                Features
              </a>
              <a href="#screenshots" className="text-sm font-medium text-muted-foreground hover:text-primary transition-colors">
                Screenshots
              </a>
              <a href="#testimonials" className="text-sm font-medium text-muted-foreground hover:text-primary transition-colors">
                Reviews
              </a>
              <a href="#faq" className="text-sm font-medium text-muted-foreground hover:text-primary transition-colors">
                FAQ
              </a>
            </nav>
            <Button size="sm" className="hidden md:inline-flex" asChild>
              <a href="https://mlv.sh/padeltally" target="_blank" rel="noopener noreferrer">
                Download
              </a>
            </Button>
          </div>
        </div>
      </header>

      {/* Hero Section - Enhanced */}
      <section className="relative overflow-hidden pt-16 pb-24 lg:pt-24 lg:pb-32">
        <div className="absolute inset-0 bg-gradient-to-br from-primary/5 via-background to-secondary/5" />
        <div className="container relative mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <div className="text-center lg:text-left space-y-8">
              <div className="space-y-4">
                <div className="inline-flex items-center rounded-full border px-3 py-1 text-xs font-medium">
                  <Sparkles className="w-3 h-3 mr-2 text-primary" />
                  New: Americano & Argentino modes
                </div>
                <h1 className="text-4xl sm:text-5xl lg:text-6xl font-bold tracking-tight">
                  Score tracking
                  <span className="block text-primary mt-2">made simple</span>
                </h1>
                <p className="text-xl text-muted-foreground max-w-2xl mx-auto lg:mx-0">
                  The only padel scoring app designed exclusively for Apple Watch. 
                  One tap to score, automatic game detection, and real-time sync with iPhone.
                </p>
              </div>
              
              <div className="flex flex-col sm:flex-row gap-4 justify-center lg:justify-start">
                <Button size="lg" className="h-12 px-8 text-base" asChild>
                  <a href="https://mlv.sh/padeltally" target="_blank" rel="noopener noreferrer">
                    App Store
                  </a>
                </Button>
                <Button size="lg" variant="outline" className="h-12 px-8 text-base">
                  View Demo
                  <ArrowRight className="w-4 h-4 ml-2" />
                </Button>
              </div>

              <div className="flex items-center gap-8 justify-center lg:justify-start pt-4">
                <div className="flex items-center gap-2">
                  <div className="flex gap-0.5">
                    {[...Array(5)].map((_, i) => (
                      <Star key={i} className="w-5 h-5 fill-primary text-primary" />
                    ))}
                  </div>
                  <span className="text-sm font-medium">4.9/5</span>
                </div>
                <Separator orientation="vertical" className="h-5" />
                <div className="text-sm text-muted-foreground">
                  <span className="font-semibold text-foreground">Featured</span> on Product Hunt
                </div>
              </div>
            </div>

            <div className="relative">
              <div className="absolute inset-0 bg-gradient-to-tr from-primary/20 to-secondary/20 blur-3xl" />
              <Image
                src="/ios/ios-image-1.png"
                alt="PadelTally on Apple Watch"
                width={500}
                height={1000}
                className="relative rounded-3xl shadow-2xl mx-auto"
                priority
              />
            </div>
          </div>
        </div>
      </section>

      {/* Advantages */}
      <section className="py-12 border-y bg-muted/30">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            <div className="flex items-center gap-3">
              <div className="w-10 h-10 rounded-lg bg-primary/10 flex items-center justify-center">
                <WifiOff className="w-5 h-5 text-primary" />
              </div>
              <div>
                <div className="font-semibold">100% Offline</div>
                <div className="text-sm text-muted-foreground">No internet needed</div>
              </div>
            </div>
            <div className="flex items-center gap-3">
              <div className="w-10 h-10 rounded-lg bg-primary/10 flex items-center justify-center">
                <Shield className="w-5 h-5 text-primary" />
              </div>
              <div>
                <div className="font-semibold">Privacy First</div>
                <div className="text-sm text-muted-foreground">Your data stays local</div>
              </div>
            </div>
            <div className="flex items-center gap-3">
              <div className="w-10 h-10 rounded-lg bg-primary/10 flex items-center justify-center">
                <Zap className="w-5 h-5 text-primary" />
              </div>
              <div>
                <div className="font-semibold">Ultra Fast</div>
                <div className="text-sm text-muted-foreground">Instant haptic feedback</div>
              </div>
            </div>
            <div className="flex items-center gap-3">
              <div className="w-10 h-10 rounded-lg bg-primary/10 flex items-center justify-center">
                <Heart className="w-5 h-5 text-primary" />
              </div>
              <div>
                <div className="font-semibold">No Subscription</div>
                <div className="text-sm text-muted-foreground">Pay once, use forever</div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Features Section - Redesigned */}
      <section id="features" className="py-24">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16 space-y-4">
            <Badge variant="outline" className="mb-4">Features</Badge>
            <h2 className="text-3xl sm:text-4xl font-bold">
              Built for serious players
            </h2>
            <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
              Every feature is designed to enhance your game experience without getting in the way
            </p>
          </div>
          
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            <Card className="group hover:shadow-lg transition-shadow border-muted">
              <CardHeader>
                <div className="w-12 h-12 rounded-xl bg-gradient-to-br from-primary/10 to-primary/5 flex items-center justify-center mb-4">
                  <Watch className="w-6 h-6 text-primary" />
                </div>
                <CardTitle>One-Tap Scoring</CardTitle>
                <CardDescription>
                  Record points instantly with haptic confirmation. No looking at the screen needed.
                </CardDescription>
              </CardHeader>
              <CardContent>
                <ul className="space-y-2 text-sm text-muted-foreground">
                  <li className="flex items-start gap-2">
                    <CheckCircle2 className="w-4 h-4 text-primary mt-0.5" />
                    <span>Large touch targets</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <CheckCircle2 className="w-4 h-4 text-primary mt-0.5" />
                    <span>Haptic feedback</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <CheckCircle2 className="w-4 h-4 text-primary mt-0.5" />
                    <span>Undo last point</span>
                  </li>
                </ul>
              </CardContent>
            </Card>

            <Card className="group hover:shadow-lg transition-shadow border-muted">
              <CardHeader>
                <div className="w-12 h-12 rounded-xl bg-gradient-to-br from-primary/10 to-primary/5 flex items-center justify-center mb-4">
                  <Target className="w-6 h-6 text-primary" />
                </div>
                <CardTitle>Smart Rules Engine</CardTitle>
                <CardDescription>
                  Automatic game progression with support for all padel scoring formats.
                </CardDescription>
              </CardHeader>
              <CardContent>
                <ul className="space-y-2 text-sm text-muted-foreground">
                  <li className="flex items-start gap-2">
                    <CheckCircle2 className="w-4 h-4 text-primary mt-0.5" />
                    <span>Tie-break detection</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <CheckCircle2 className="w-4 h-4 text-primary mt-0.5" />
                    <span>Golden point</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <CheckCircle2 className="w-4 h-4 text-primary mt-0.5" />
                    <span>Set management</span>
                  </li>
                </ul>
              </CardContent>
            </Card>

            <Card className="group hover:shadow-lg transition-shadow border-muted">
              <CardHeader>
                <div className="w-12 h-12 rounded-xl bg-gradient-to-br from-primary/10 to-primary/5 flex items-center justify-center mb-4">
                  <Trophy className="w-6 h-6 text-primary" />
                </div>
                <CardTitle>Complete History</CardTitle>
                <CardDescription>
                  Detailed match statistics and history synced across all your devices.
                </CardDescription>
              </CardHeader>
              <CardContent>
                <ul className="space-y-2 text-sm text-muted-foreground">
                  <li className="flex items-start gap-2">
                    <CheckCircle2 className="w-4 h-4 text-primary mt-0.5" />
                    <span>Point-by-point replay</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <CheckCircle2 className="w-4 h-4 text-primary mt-0.5" />
                    <span>Export to CSV</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <CheckCircle2 className="w-4 h-4 text-primary mt-0.5" />
                    <span>Share results</span>
                  </li>
                </ul>
              </CardContent>
            </Card>

            <Card className="group hover:shadow-lg transition-shadow border-muted">
              <CardHeader>
                <div className="w-12 h-12 rounded-xl bg-gradient-to-br from-primary/10 to-primary/5 flex items-center justify-center mb-4">
                  <WifiOff className="w-6 h-6 text-primary" />
                </div>
                <CardTitle>100% Offline</CardTitle>
                <CardDescription>
                  No internet required. Your data stays private and always accessible.
                </CardDescription>
              </CardHeader>
              <CardContent>
                <ul className="space-y-2 text-sm text-muted-foreground">
                  <li className="flex items-start gap-2">
                    <CheckCircle2 className="w-4 h-4 text-primary mt-0.5" />
                    <span>Local storage</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <CheckCircle2 className="w-4 h-4 text-primary mt-0.5" />
                    <span>Privacy first</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <CheckCircle2 className="w-4 h-4 text-primary mt-0.5" />
                    <span>No subscriptions</span>
                  </li>
                </ul>
              </CardContent>
            </Card>

            <Card className="group hover:shadow-lg transition-shadow border-muted">
              <CardHeader>
                <div className="w-12 h-12 rounded-xl bg-gradient-to-br from-primary/10 to-primary/5 flex items-center justify-center mb-4">
                  <Zap className="w-6 h-6 text-primary" />
                </div>
                <CardTitle>Ultra Efficient</CardTitle>
                <CardDescription>
                  Optimized for minimal battery usage during long tournament days.
                </CardDescription>
              </CardHeader>
              <CardContent>
                <ul className="space-y-2 text-sm text-muted-foreground">
                  <li className="flex items-start gap-2">
                    <CheckCircle2 className="w-4 h-4 text-primary mt-0.5" />
                    <span>&lt;2% battery/hour</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <CheckCircle2 className="w-4 h-4 text-primary mt-0.5" />
                    <span>Low memory usage</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <CheckCircle2 className="w-4 h-4 text-primary mt-0.5" />
                    <span>Background sync</span>
                  </li>
                </ul>
              </CardContent>
            </Card>

            <Card className="group hover:shadow-lg transition-shadow border-muted">
              <CardHeader>
                <div className="w-12 h-12 rounded-xl bg-gradient-to-br from-primary/10 to-primary/5 flex items-center justify-center mb-4">
                  <Globe className="w-6 h-6 text-primary" />
                </div>
                <CardTitle>Game Formats</CardTitle>
                <CardDescription>
                  Support for all popular padel game formats and custom rules.
                </CardDescription>
              </CardHeader>
              <CardContent>
                <ul className="space-y-2 text-sm text-muted-foreground">
                  <li className="flex items-start gap-2">
                    <CheckCircle2 className="w-4 h-4 text-primary mt-0.5" />
                    <span>Traditional matches</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <CheckCircle2 className="w-4 h-4 text-primary mt-0.5" />
                    <span>Americano rounds</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <CheckCircle2 className="w-4 h-4 text-primary mt-0.5" />
                    <span>Argentino system</span>
                  </li>
                </ul>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* Screenshots Section - Gallery Style */}
      <section id="screenshots" className="py-24 bg-muted/30">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16 space-y-4">
            <Badge variant="outline" className="mb-4">Screenshots</Badge>
            <h2 className="text-3xl sm:text-4xl font-bold">
              Beautiful on every device
            </h2>
            <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
              Seamless experience from wrist to pocket
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            <div className="group cursor-pointer">
              <div className="overflow-hidden rounded-2xl bg-gradient-to-br from-primary/5 to-secondary/5 p-8">
                <Image
                  src="/ios/ios-image-2.png"
                  alt="iPhone Dashboard"
                  width={300}
                  height={600}
                  className="rounded-xl shadow-lg mx-auto group-hover:scale-105 transition-transform duration-300"
                />
              </div>
              <div className="mt-4 space-y-1">
                <h3 className="font-semibold">Command Center</h3>
                <p className="text-sm text-muted-foreground">
                  Everything you need in one glance
                </p>
              </div>
            </div>

            <div className="group cursor-pointer">
              <div className="overflow-hidden rounded-2xl bg-gradient-to-br from-primary/5 to-secondary/5 p-8">
                <Image
                  src="/ios/ios-image-3.png"
                  alt="Match Details"
                  width={300}
                  height={600}
                  className="rounded-xl shadow-lg mx-auto group-hover:scale-105 transition-transform duration-300"
                />
              </div>
              <div className="mt-4 space-y-1">
                <h3 className="font-semibold">Match Analytics</h3>
                <p className="text-sm text-muted-foreground">
                  Deep dive into your performance
                </p>
              </div>
            </div>

            <div className="group cursor-pointer">
              <div className="overflow-hidden rounded-2xl bg-gradient-to-br from-primary/5 to-secondary/5 p-8">
                <Image
                  src="/ios/ios-image-4.png"
                  alt="Live Sharing"
                  width={300}
                  height={600}
                  className="rounded-xl shadow-lg mx-auto group-hover:scale-105 transition-transform duration-300"
                />
              </div>
              <div className="mt-4 space-y-1">
                <h3 className="font-semibold">Live Scoreboard</h3>
                <p className="text-sm text-muted-foreground">
                  Share the score with everyone
                </p>
              </div>
            </div>
          </div>

          <div className="mt-12 grid md:grid-cols-2 gap-8 max-w-4xl mx-auto">
            <div className="group cursor-pointer">
              <div className="overflow-hidden rounded-2xl bg-gradient-to-br from-primary/5 to-secondary/5 p-8">
                <Image
                  src="/ios/ios-image-5.png"
                  alt="Workout Integration"
                  width={300}
                  height={600}
                  className="rounded-xl shadow-lg mx-auto group-hover:scale-105 transition-transform duration-300"
                />
              </div>
              <div className="mt-4 space-y-1">
                <h3 className="font-semibold">Fitness Integration</h3>
                <p className="text-sm text-muted-foreground">
                  Track calories and heart rate
                </p>
              </div>
            </div>

            <div className="group cursor-pointer">
              <div className="overflow-hidden rounded-2xl bg-gradient-to-br from-primary/5 to-secondary/5 p-8">
                <Image
                  src="/ios/ios-image-6.png"
                  alt="Game Modes"
                  width={300}
                  height={600}
                  className="rounded-xl shadow-lg mx-auto group-hover:scale-105 transition-transform duration-300"
                />
              </div>
              <div className="mt-4 space-y-1">
                <h3 className="font-semibold">Multiple Formats</h3>
                <p className="text-sm text-muted-foreground">
                  Play any way you like
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Testimonials */}
      <section id="testimonials" className="py-24">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16 space-y-4">
            <Badge variant="outline" className="mb-4">Testimonials</Badge>
            <h2 className="text-3xl sm:text-4xl font-bold">
              Loved by players worldwide
            </h2>
            <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
              Join thousands of satisfied players who've transformed their game
            </p>
          </div>

          <div className="max-w-2xl mx-auto">
            <Card className="border-muted">
              <CardHeader>
                <div className="flex items-center gap-4 mb-4">
                  <Avatar className="w-12 h-12">
                    <AvatarImage src="https://melvynx.com/v2/images/me.png" alt="Melvyn" />
                    <AvatarFallback>M</AvatarFallback>
                  </Avatar>
                  <div>
                    <div className="font-semibold">Melvyn</div>
                    <div className="text-sm text-muted-foreground">Creator & Developer</div>
                  </div>
                </div>
                <div className="flex gap-0.5">
                  {[...Array(5)].map((_, i) => (
                    <Star key={i} className="w-4 h-4 fill-primary text-primary" />
                  ))}
                </div>
              </CardHeader>
              <CardContent>
                <p className="text-muted-foreground text-lg">
                  "As someone who plays padel regularly, I got tired of score disputes and awkward pauses to write things down. 
                  That's why I built PadelTally - to let players focus on the game, not the scorekeeping."
                </p>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* FAQ Section */}
      <section id="faq" className="py-24 bg-muted/30">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16 space-y-4">
            <Badge variant="outline" className="mb-4">FAQ</Badge>
            <h2 className="text-3xl sm:text-4xl font-bold">
              Frequently asked questions
            </h2>
            <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
              Everything you need to know about PadelTally
            </p>
          </div>

          <div className="max-w-3xl mx-auto">
            <Accordion type="single" collapsible className="space-y-4">
              <AccordionItem value="item-1" className="border rounded-lg px-6">
                <AccordionTrigger className="hover:no-underline">
                  Which Apple Watch models are supported?
                </AccordionTrigger>
                <AccordionContent className="text-muted-foreground">
                  PadelTally works with Apple Watch Series 4 and later, including all SE and Ultra models. 
                  WatchOS 8.0 or later is required for full functionality.
                </AccordionContent>
              </AccordionItem>

              <AccordionItem value="item-2" className="border rounded-lg px-6">
                <AccordionTrigger className="hover:no-underline">
                  Do I need my iPhone during the match?
                </AccordionTrigger>
                <AccordionContent className="text-muted-foreground">
                  No! The Apple Watch app works completely independently. Your iPhone can stay in your bag. 
                  Scores sync automatically when your devices reconnect.
                </AccordionContent>
              </AccordionItem>

              <AccordionItem value="item-3" className="border rounded-lg px-6">
                <AccordionTrigger className="hover:no-underline">
                  Is there a subscription fee?
                </AccordionTrigger>
                <AccordionContent className="text-muted-foreground">
                  No subscriptions, no hidden fees. Pay once and enjoy all features forever, 
                  including future updates and new game modes.
                </AccordionContent>
              </AccordionItem>

              <AccordionItem value="item-4" className="border rounded-lg px-6">
                <AccordionTrigger className="hover:no-underline">
                  Can I export match data?
                </AccordionTrigger>
                <AccordionContent className="text-muted-foreground">
                  Yes! Export your match history as CSV files for analysis in Excel or share 
                  match summaries directly through Messages, WhatsApp, or email.
                </AccordionContent>
              </AccordionItem>

              <AccordionItem value="item-5" className="border rounded-lg px-6">
                <AccordionTrigger className="hover:no-underline">
                  How long does the battery last?
                </AccordionTrigger>
                <AccordionContent className="text-muted-foreground">
                  PadelTally uses less than 2% battery per hour on Apple Watch. You can easily 
                  track multiple matches throughout the day without worrying about battery life.
                </AccordionContent>
              </AccordionItem>
            </Accordion>
          </div>
        </div>
      </section>

      {/* Final CTA */}
      <section className="py-24">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <Card className="bg-gradient-to-br from-primary to-primary/80 text-primary-foreground border-0">
            <CardContent className="p-12 text-center space-y-6">
              <div className="inline-flex items-center justify-center w-16 h-16 rounded-2xl bg-primary-foreground/10 mb-4">
                <Heart className="w-8 h-8" />
              </div>
              <h2 className="text-3xl sm:text-4xl font-bold">
                Ready to elevate your game?
              </h2>
              <p className="text-lg opacity-90 max-w-2xl mx-auto">
                Join thousands of players who've already made the switch to smarter scoring. 
                Download PadelTally today and never lose track again.
              </p>
              <div className="flex flex-col sm:flex-row gap-4 justify-center pt-4">
                <Button size="lg" variant="secondary" className="h-12 px-8 text-base" asChild>
                  <a href="https://mlv.sh/padeltally" target="_blank" rel="noopener noreferrer">
                    Download for $4.99
                  </a>
                </Button>
                <Button size="lg" variant="outline" className="h-12 px-8 text-base bg-primary-foreground/10 hover:bg-primary-foreground/20 border-primary-foreground/20">
                  Gift to a Friend
                  <ArrowRight className="w-4 h-4 ml-2" />
                </Button>
              </div>
            </CardContent>
          </Card>
        </div>
      </section>

      {/* Footer */}
      <footer className="py-12 border-t">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid md:grid-cols-4 gap-8">
            <div className="space-y-4">
              <div className="flex items-center space-x-2">
                <div className="w-8 h-8 rounded-lg bg-primary flex items-center justify-center">
                  <span className="text-primary-foreground font-bold">P</span>
                </div>
                <span className="font-semibold">PadelTally</span>
              </div>
              <p className="text-sm text-muted-foreground">
                The fastest way to keep score on the padel court.
              </p>
            </div>
            
            <div>
              <h3 className="font-semibold mb-4">Product</h3>
              <ul className="space-y-2 text-sm text-muted-foreground">
                <li><a href="#features" className="hover:text-primary transition-colors">Features</a></li>
                <li><a href="#screenshots" className="hover:text-primary transition-colors">Screenshots</a></li>
                <li><a href="#" className="hover:text-primary transition-colors">Changelog</a></li>
                <li><a href="#" className="hover:text-primary transition-colors">Roadmap</a></li>
              </ul>
            </div>
            
            <div>
              <h3 className="font-semibold mb-4">Support</h3>
              <ul className="space-y-2 text-sm text-muted-foreground">
                <li><a href="#faq" className="hover:text-primary transition-colors">FAQ</a></li>
                <li><a href="/help" className="hover:text-primary transition-colors">Help</a></li>
                <li><a href="/privacy" className="hover:text-primary transition-colors">Privacy Policy</a></li>
                <li><a href="/cgv" className="hover:text-primary transition-colors">Terms of Service</a></li>
              </ul>
            </div>
            
            <div>
              <h3 className="font-semibold mb-4">Connect</h3>
              <ul className="space-y-2 text-sm text-muted-foreground">
                <li><a href="#" className="hover:text-primary transition-colors">Twitter</a></li>
                <li><a href="#" className="hover:text-primary transition-colors">Instagram</a></li>
                <li><a href="#" className="hover:text-primary transition-colors">YouTube</a></li>
                <li><a href="#" className="hover:text-primary transition-colors">Newsletter</a></li>
              </ul>
            </div>
          </div>
          
          <Separator className="my-8" />
          
          <div className="flex flex-col md:flex-row justify-between items-center gap-4 text-sm text-muted-foreground">
            <p>&copy; 2024 PadelTally. All rights reserved.</p>
            <div className="flex items-center gap-4">
              <Shield className="w-4 h-4" />
              <span>Privacy First • No Tracking • No Ads</span>
            </div>
          </div>
        </div>
      </footer>
    </div>
  );
}