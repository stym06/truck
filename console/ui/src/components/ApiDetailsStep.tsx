"use client"

import { useState, useEffect } from "react"
import { Input } from "@/components/ui/input"
import { Label } from "@/components/ui/label"
import { AnimatedButton } from "./AnimatedButton"

interface ApiDetailsStepProps {
  projectName: string
  onNext: () => void
  onPrev: () => void
}

export function ApiDetailsStep({ projectName, onNext, onPrev }: ApiDetailsStepProps) {
  const [apiKey, setApiKey] = useState("")

  useEffect(() => {
    setApiKey(generateApiKey())
  }, [])

  const generateApiKey = () => {
    return "pk_" + Math.random().toString(36).substr(2, 9)
  }

  return (
    <div className="space-y-6">
      <h2 className="text-2xl font-semibold text-center">Step 2: API Details</h2>
      <div className="space-y-4">
        <div className="space-y-2">
          <Label htmlFor="apiKey">Your API Key</Label>
          <Input id="apiKey" value={apiKey} readOnly />
        </div>
        <div className="space-y-2">
          <Label>NPM Installation</Label>
          <pre className="bg-muted p-2 rounded-md overflow-x-auto">
            <code>npm install @{projectName}/sdk</code>
          </pre>
        </div>
        <div className="space-y-2">
          <Label>cURL for sending events</Label>
          <pre className="bg-muted p-2 rounded-md overflow-x-auto">
            <code>{`curl -X POST \\
  -H "Content-Type: application/json" \\
  -H "Authorization: Bearer ${apiKey}" \\
  -d '{"event": "user_signed_up", "properties": {"user_id": "123"}}' \\
  https://api.${projectName}.com/v1/events`}</code>
          </pre>
        </div>
      </div>
      <div className="flex justify-between">
        <AnimatedButton onClick={onPrev} variant="outline">
          Previous
        </AnimatedButton>
        <AnimatedButton onClick={onNext}>Next</AnimatedButton>
      </div>
    </div>
  )
}

