"use client"

import { useState } from "react"
import { Input } from "@/components/ui/input"
import { Label } from "./ui/label"
import { AnimatedButton } from "./AnimatedButton"

interface ProjectNameStepProps {
  projectName: string
  setProjectName: (name: string) => void
  onNext: () => void
}

export function ProjectNameStep({ projectName, setProjectName, onNext }: ProjectNameStepProps) {
  const [error, setError] = useState("")

  const handleNext = () => {
    if (projectName.trim() === "") {
      setError("Project name is required")
    } else {
      setError("")
      onNext()
    }
  }

  return (
    <div className="space-y-6">
      <div className="space-y-4 max-w-md mx-auto">
        <Input
          id="projectName"
          value={projectName}
          onChange={(e) => setProjectName(e.target.value)}
          placeholder="Enter a project name..."
          className="w-full"
        />
        {error && <p className="text-destructive text-sm">{error}</p>}
      </div>
      <div className="flex justify-center">
        <AnimatedButton onClick={handleNext} className="w-32">
          Next
        </AnimatedButton>
      </div>
    </div>
  )
}

