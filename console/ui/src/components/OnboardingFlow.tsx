"use client"

import { useState } from "react"
import { Card, CardContent, CardHeader } from "./ui/card"
import { ProgressIndicator } from "./ProgressIndicator"
import { ProjectNameStep } from "./ProjectNameStep"
import { ApiDetailsStep } from "./ApiDetailsStep"
import { ListeningEventsStep } from "./ListeningEventsStep"
import { DoneStep } from "./DoneStep"

const steps = ["Project Name", "API Details", "Listening for Events", "Done"]

export default function OnboardingFlow() {
  const [currentStep, setCurrentStep] = useState(0)
  const [projectName, setProjectName] = useState("")

  const nextStep = () => setCurrentStep((prev) => Math.min(prev + 1, steps.length - 1))
  const prevStep = () => setCurrentStep((prev) => Math.max(prev - 1, 0))

  return (
    <Card className={`w-[600px] bg-white shadow-lg rounded-lg`}>
      <CardHeader className="text-xl antialiased ml-[25%] font-extralight">Onboard your first project now</CardHeader>
      <CardContent className="p-6">
      <ProgressIndicator steps={steps} currentStep={currentStep} />
      {currentStep === 0 && (
      <ProjectNameStep projectName={projectName} setProjectName={setProjectName} onNext={nextStep} />
      )}
      {currentStep === 1 && <ApiDetailsStep projectName={projectName} onNext={nextStep} onPrev={prevStep} />}
      {currentStep === 2 && <ListeningEventsStep onNext={nextStep} onPrev={prevStep} />}
      {currentStep === 3 && <DoneStep />}
    </CardContent>
    </Card>
  )
}