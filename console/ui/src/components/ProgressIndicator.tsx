"use client"

import { ChevronRight } from "lucide-react"

interface ProgressIndicatorProps {
  steps: string[]
  currentStep: number
}

export function ProgressIndicator({ steps, currentStep }: ProgressIndicatorProps) {
  return (
    <div className="flex items-center justify-between mb-8">
      {steps.map((step, index) => (
        <div key={step} className="flex items-center">
          <div className="flex flex-col items-center step-hover">
            <div
              className={`w-8 h-8 rounded-full flex items-center justify-center text-sm font-medium transition-colors duration-200 ${
                index <= currentStep ? "bg-sidebar-primary text-primary-foreground" : "bg-muted text-muted-foreground"
              }`}
            >
              {index + 1}
            </div>
            <span className="text-xs mt-2 text-muted-foreground">{step}</span>
          </div>
          {index < steps.length - 1 && (
            <ChevronRight
              className={`w-4 h-4 mx-2 transition-colors duration-200 ${
                index < currentStep ? "text-primary" : "text-muted-foreground"
              }`}
            />
          )}
        </div>
      ))}
    </div>
  )
}

