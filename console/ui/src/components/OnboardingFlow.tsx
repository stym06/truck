"use client"

import { useState, useEffect } from 'react'
import { Button } from '@/components/ui/button'
import { Input } from '@/components/ui/input'
import { Tabs, TabsContent, TabsList, TabsTrigger } from '@/components/ui/tabs'
import { Card } from '@/components/ui/card'
import { Alert, AlertDescription } from '@/components/ui/alert'
import { ClipboardCopyIcon, RocketIcon } from '@radix-ui/react-icons'

type OnboardingStep = 'project' | 'api-key' | 'usage' | 'verification'

export default function OnboardingFlow() {
  const [step, setStep] = useState<OnboardingStep>('project')
  const [projectName, setProjectName] = useState('')
  const [apiKey, setApiKey] = useState('')
  const [eventReceived, setEventReceived] = useState(false)
  const navigate = (path: string) => {
    console.log(path)
  }

  // Simulate API key generation
  const generateApiKey = async (name: string) => {
    // In real app, call your backend API
    const mockKey = `${name.toLowerCase().replace(/\s/g, '-')}_${btoa(Date.now().toString()).slice(-10)}`
    setApiKey(mockKey)
    setStep('api-key')
  }

  // Check for event verification
  useEffect(() => {
    if (step === 'verification') {
      const interval = setInterval(() => {
        // Check with backend if event was received
        if (eventReceived) {
          clearInterval(interval)
          navigate('/dashboard')
        }
      }, 3000)
      return () => clearInterval(interval)
    }
  }, [step, eventReceived])

  return (
    <div className="max-w-3xl mx-auto p-6 top-0">
      {step === 'project' && (
        <ProjectCreationStep
          projectName={projectName}
          setProjectName={setProjectName}
          onSubmit={() => generateApiKey(projectName)}
        />
      )}

      {step === 'api-key' && (
        <ApiKeyStep apiKey={apiKey} onContinue={() => setStep('usage')} />
      )}

      {step === 'usage' && (
        <UsageExamplesStep apiKey={apiKey} onContinue={() => setStep('verification')} />
      )}

      {step === 'verification' && (
        <VerificationStep 
          onSuccess={() => navigate('/dashboard')}
          onManualSkip={() => navigate('/dashboard')}
        />
      )}
    </div>
  )
}

interface ProjectCreationStepProps {
  projectName: string;
  setProjectName: (name: string) => void;
  onSubmit: () => void;
}

function ProjectCreationStep({ projectName, setProjectName, onSubmit }: ProjectCreationStepProps) {
  return (
    <Card className="p-6">
      <h2 className="text-2xl font-bold mb-4">Create Your Project</h2>
      <div className="space-y-4">
        <Input
          placeholder="Project Name"
          value={projectName}
          onChange={(e) => setProjectName(e.target.value)}
        />
        <Button onClick={onSubmit} disabled={!projectName.trim()}>
          Create Project
        </Button>
      </div>
    </Card>
  )
}

interface ApiKeyStepProps {
  apiKey: string;
  onContinue: () => void;
}

function ApiKeyStep({ apiKey, onContinue }: ApiKeyStepProps) {
  const copyToClipboard = () => {
    navigator.clipboard.writeText(apiKey)
  }

  return (
    <Card className="p-6">
      <h2 className="text-2xl font-bold mb-4">Your API Key</h2>
      <Alert className="mb-4">
        <AlertDescription className="flex items-center justify-between">
          <code>{apiKey}</code>
          <Button variant="ghost" size="icon" onClick={copyToClipboard}>
            <ClipboardCopyIcon className="h-4 w-4" />
          </Button>
        </AlertDescription>
      </Alert>
      <Button onClick={onContinue}>Continue</Button>
    </Card>
  )
}

interface UsageExamplesStepProps {
  apiKey: string;
  onContinue: () => void;
}

function UsageExamplesStep({ apiKey, onContinue }: UsageExamplesStepProps) {
  return (
    <Card className="p-6">
      <h2 className="text-2xl font-bold mb-4">How to Use</h2>
      <Tabs defaultValue="npm" className="w-full">
        <TabsList className="grid grid-cols-2 w-[400px] mb-4">
          <TabsTrigger value="npm">NPM</TabsTrigger>
          <TabsTrigger value="curl">cURL</TabsTrigger>
        </TabsList>
        
        <TabsContent value="npm">
          <pre className="p-4 bg-muted rounded-md">
            <code>
              {`npm install your-package\n\nimport { trackEvent } from 'your-package'\n\ntrackEvent('${apiKey}', 'your-event')`}
            </code>
          </pre>
        </TabsContent>
        
        <TabsContent value="curl">
          <pre className="p-4 bg-muted rounded-md">
            <code>
              {`curl -X POST https://api.yourservice.com/v1/events \\\n  -H "Authorization: Bearer ${apiKey}" \\\n  -d '{"event": "your-event"}'`}
            </code>
          </pre>
        </TabsContent>
      </Tabs>
      <Button className="mt-4" onClick={onContinue}>
        I've sent an event
      </Button>
    </Card>
  )
}

interface VerificationStepProps {
  onSuccess: () => void;
  onManualSkip: () => void;
}

function VerificationStep({ onSuccess, onManualSkip }: VerificationStepProps) {
  // Add actual event listening logic here
  const [isLoading, setIsLoading] = useState(true)

  return (
    <Card className="p-6 text-center">
      <h2 className="text-2xl font-bold mb-4">Waiting for your first event</h2>
      
      <div className="my-8">
        <RocketIcon className="h-16 w-16 animate-bounce" />
      </div>

      <div className="space-y-4">
        <p className="text-muted-foreground">
          {isLoading ? 'Listening for events...' : 'Event received!'}
        </p>
        <Button variant="outline" onClick={onManualSkip}>
          Skip verification
        </Button>
      </div>
    </Card>
  )
}