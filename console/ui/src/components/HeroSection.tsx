import React from 'react'
import { Button } from './ui/button'
import { Activity, BarChart3, Boxes, Code2, Database, Gauge, GitFork, Laptop2, Radar, Share2, Zap } from 'lucide-react'

const features = [
    { icon: Activity, title: 'Track User Activity', description: 'Monitor clicks, page views & custom events' },
    { icon: Code2, title: 'Typed Events', description: 'No JSON, fully typed event tracking' },
    { icon: Share2, title: 'Route Events', description: 'Send events to any destination' },
    { icon: Database, title: 'Import Events', description: 'From Segment, BigQuery & more' },
    { icon: BarChart3, title: 'Built-in Analytics', description: 'Out-of-the-box user activity insights' },
    { icon: Radar, title: 'Live Tracking', description: 'Real-time user session monitoring' }
  ];

const sdks = [
    { name: 'JavaScript', icon: Laptop2 },
    { name: 'Java', icon: GitFork },
    { name: 'Golang', icon: Zap }
  ];

const HeroSection = () => {
  return (
    <main className="flex min-h-screen flex-col">
        <div className="relative">
          <div className="absolute inset-0 -z-10 mx-0 max-w-none overflow-hidden">
            <div className="absolute left-1/2 top-0 ml-[-38rem] h-[25rem] w-[81.25rem] dark:[mask-image:linear-gradient(white,transparent)]">
              <div className="absolute inset-0 bg-gradient-to-r from-[#36b49f] to-[#DBFF75] opacity-40 [mask-image:radial-gradient(farthest-side_at_top,white,transparent)] dark:from-[#36b49f]/30 dark:to-[#DBFF75]/30">
                <svg
                  aria-hidden="true"
                  className="absolute inset-x-0 inset-y-[-50%] h-[200%] w-full skew-y-[-18deg] fill-black/40 stroke-black/50 mix-blend-overlay dark:fill-white/2.5 dark:stroke-white/5"
                >
                  <defs>
                    <pattern id="pattern" width="72" height="56" patternUnits="userSpaceOnUse" x="50%" y="16">
                      <path d="M.5 56V.5H72" fill="none" />
                    </pattern>
                  </defs>
                  <rect width="100%" height="100%" strokeWidth="0" fill="url(#pattern)" />
                  <svg x="50%" y="16" className="overflow-visible">
                    <rect strokeWidth="0" width="73" height="57" x="0" y="56" />
                    <rect strokeWidth="0" width="73" height="57" x="72" y="168" />
                  </svg>
                </svg>
              </div>
            </div>
          </div>

          <div className="mx-auto max-w-7xl px-6 py-24 sm:py-32 lg:px-8">
            {/* Main Hero Content */}
            <div className="mx-auto max-w-2xl text-center">
              <h1 className="text-4xl font-bold tracking-tight sm:text-7xl bg-gradient-to-r from-blue-600 via-green-500 to-indigo-400 text-transparent bg-clip-text">
                App Analytics Platform
              </h1>
              <p className="mt-6 text-lg leading-8 text-muted-foreground">
                Track, analyze, and optimize your application's performance with our comprehensive analytics solution.
              </p>
              <div className="mt-10 flex items-center justify-center gap-x-6">
                <Button size="lg" className="gap-2">
                  <Gauge className="h-4 w-4" />
                  Get Started
                </Button>
                <Button variant="outline" size="lg" className="gap-2">
                  <Boxes className="h-4 w-4" />
                  View Demo
                </Button>
              </div>
            </div>

            {/* Features Grid */}
            <div className="mx-auto mt-20 max-w-7xl">
              <div className="grid grid-cols-1 gap-8 sm:grid-cols-2 lg:grid-cols-3">
                {features.map((feature) => (
                  <div key={feature.title} className="relative overflow-hidden rounded-2xl border bg-background p-8">
                    <div className="flex h-12 w-12 items-center justify-center rounded-lg bg-primary/10">
                      <feature.icon className="h-6 w-6 text-primary" />
                    </div>
                    <h3 className="mt-4 text-xl font-semibold">{feature.title}</h3>
                    <p className="mt-2 text-muted-foreground">{feature.description}</p>
                  </div>
                ))}
              </div>
            </div>

            {/* SDK Section */}
            <div className="mx-auto mt-20 max-w-2xl text-center">
              <h2 className="text-3xl font-bold">Integrate with Your Stack</h2>
              <div className="mt-8 flex justify-center gap-8">
                {sdks.map((sdk) => (
                  <div key={sdk.name} className="flex flex-col items-center gap-2">
                    <div className="flex h-16 w-16 items-center justify-center rounded-full bg-primary/10">
                      <sdk.icon className="h-8 w-8 text-primary" />
                    </div>
                    <span className="font-medium">{sdk.name}</span>
                  </div>
                ))}
              </div>
            </div>

            {/* Stats */}
            <div className="mx-auto mt-20 max-w-7xl">
              <dl className="grid grid-cols-1 gap-8 sm:grid-cols-2 lg:grid-cols-4">
                <div className="flex flex-col rounded-2xl border bg-background p-8">
                  <dt className="text-sm font-medium text-muted-foreground">Supported Platforms</dt>
                  <dd className="mt-1 flex items-baseline justify-between md:block lg:flex">
                    <div className="flex items-baseline text-3xl font-semibold">15+</div>
                  </dd>
                </div>
                <div className="flex flex-col rounded-2xl border bg-background p-8">
                  <dt className="text-sm font-medium text-muted-foreground">Data Centers</dt>
                  <dd className="mt-1 flex items-baseline justify-between md:block lg:flex">
                    <div className="flex items-baseline text-3xl font-semibold">Multi-DC</div>
                  </dd>
                </div>
                <div className="flex flex-col rounded-2xl border bg-background p-8">
                  <dt className="text-sm font-medium text-muted-foreground">Event Types</dt>
                  <dd className="mt-1 flex items-baseline justify-between md:block lg:flex">
                    <div className="flex items-baseline text-3xl font-semibold">100+</div>
                  </dd>
                </div>
                <div className="flex flex-col rounded-2xl border bg-background p-8">
                  <dt className="text-sm font-medium text-muted-foreground">Deployment</dt>
                  <dd className="mt-1 flex items-baseline justify-between md:block lg:flex">
                    <div className="flex items-baseline text-3xl font-semibold">BYOC</div>
                  </dd>
                </div>
              </dl>
            </div>
          </div>
        </div>
      </main>
  )
}

export default HeroSection