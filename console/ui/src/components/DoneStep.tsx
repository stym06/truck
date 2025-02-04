"use client"

import { useEffect, useState } from "react"
import { CheckCircle } from "lucide-react"
import { AnimatedButton } from "./AnimatedButton"

function CelebrationEffect() {
  return (
    <div className="absolute inset-0 pointer-events-none">
      {[...Array(20)].map((_, index) => (
        <div
          key={index}
          className="absolute w-2 h-2 rounded-full bg-primary"
          style={{
            left: `${Math.random() * 100}%`,
            top: `${Math.random() * 100}%`,
            animation: `celebrate ${1 + Math.random() * 2}s ease-out forwards`,
            animationDelay: `${Math.random() * 0.5}s`,
          }}
        />
      ))}
    </div>
  )
}

export function DoneStep() {
  const [showCelebration, setShowCelebration] = useState(true)

  useEffect(() => {
    const timer = setTimeout(() => {
      setShowCelebration(false)
    }, 3000)

    return () => clearTimeout(timer)
  }, [])

  return (
    <div className="space-y-6 text-center relative">
      {showCelebration && <CelebrationEffect />}
      <CheckCircle className="w-16 h-16 mx-auto text-primary" />
      <h2 className="text-2xl font-semibold">Congratulations!</h2>
      <p className="text-muted-foreground">Your project is now set up and ready to go.</p>
      <div className="flex justify-center">
        <AnimatedButton onClick={() => window.location.reload()} className="w-32">
          Start Over
        </AnimatedButton>
      </div>
    </div>
  )
}

