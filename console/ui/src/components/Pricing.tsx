import { Check } from "lucide-react"
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardDescription, CardHeader, CardTitle, CardFooter } from "@/components/ui/card"

const tiers = [
  {
    name: "Free",
    price: "$0",
    description: "Perfect for getting started",
    features: ["Basic features", "1 user", "100 MB storage", "Email support"],
    cta: "Get Started",
    highlighted: false,
    popular: false,
  },
  {
    name: "Pro",
    price: "$20",
    period: "/month",
    description: "Best value for growing businesses",
    features: ["All Free features", "Unlimited users", "1 GB storage", "Priority support", "Advanced analytics"],
    cta: "Upgrade to Pro",
    highlighted: true,
    popular: true,
  },
  {
    name: "Enterprise",
    price: "Custom",
    description: "For large-scale organizations",
    features: [
      "All Pro features",
      "Unlimited storage",
      "24/7 phone support",
      "Custom integrations",
      "Dedicated account manager",
    ],
    cta: "Contact Sales",
    highlighted: false,
    popular: false,
  },
]

export default function Pricing() {
  return (
    <div className="container mx-auto px-4 py-16">
      <h2 className="text-3xl font-bold text-center mb-12">Choose Your Plan</h2>
      <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
        {tiers.map((tier) => (
          <Card
            key={tier.name}
            className={`flex flex-col relative ${tier.highlighted ? "border-primary shadow-lg scale-105 z-10" : "border-border"}`}
          >
            {tier.popular && (
              <div className="absolute top-0 left-1/2 transform -translate-x-1/2 -translate-y-1/2">
                <span className="bg-primary text-primary-foreground text-sm font-semibold py-1 px-3 rounded-full">
                  Most Popular
                </span>
              </div>
            )}
            <CardHeader>
              <CardTitle className="text-2xl">{tier.name}</CardTitle>
              <CardDescription>{tier.description}</CardDescription>
            </CardHeader>
            <CardContent className="flex-grow">
              <p className="text-4xl font-bold mb-4">
                {tier.price}
                {tier.period && <span className="text-lg font-normal">{tier.period}</span>}
              </p>
              <ul className="space-y-2">
                {tier.features.map((feature) => (
                  <li key={feature} className="flex items-center">
                    <Check className="h-5 w-5 text-primary mr-2" />
                    <span>{feature}</span>
                  </li>
                ))}
              </ul>
            </CardContent>
            <CardFooter>
              <Button className={`w-full ${tier.popular ? "bg-primary hover:bg-primary/90" : ""}`}>{tier.cta}</Button>
            </CardFooter>
          </Card>
        ))}
      </div>
    </div>
  )
}

