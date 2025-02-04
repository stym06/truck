"use client"

import { useState, useEffect } from "react"
import { Label } from "@/components/ui/label"
import { RadioGroup, RadioGroupItem } from "@/components/ui/radio-group"
import { Loader2 } from "lucide-react"
import { AnimatedButton } from "./AnimatedButton"

interface ListeningEventsStepProps {
  onNext: () => void
  onPrev: () => void
}

export function ListeningEventsStep({ onNext, onPrev }: ListeningEventsStepProps) {
  const [isListening, setIsListening] = useState(false)
  const [events, setEvents] = useState<string[]>([])
  const [selectedEvent, setSelectedEvent] = useState<string | null>(null)

  const handleListen = () => {
    setIsListening(true)
    setEvents([])
  }

  const handleStop = () => {
    setIsListening(false)
  }

  return (
    <div className="space-y-6">
      <h2 className="text-2xl font-semibold text-center">Step 3: Listening for Events</h2>
      <div className="space-y-4">
        <div className="flex justify-center space-x-4">
          <AnimatedButton onClick={handleListen} disabled={isListening}>
            Start Listening
          </AnimatedButton>
          <AnimatedButton onClick={handleStop} disabled={!isListening} variant="outline">
            Stop Listening
          </AnimatedButton>
        </div>
        <div className="h-40 overflow-y-auto border rounded-md p-4">
          {isListening && events.length === 0 && (
            <div className="flex items-center justify-center h-full">
              <Loader2 className="h-6 w-6 animate-spin text-primary" />
              <span className="ml-2">Waiting for events...</span>
            </div>
          )}
          {events.map((event, index) => (
            <div key={index} className="py-1 px-2 my-1 bg-muted rounded-md animate-fade-in">
              {event}
            </div>
          ))}
        </div>
        {events.length > 0 && (
          <div className="space-y-2">
            <Label>Select an event to handle:</Label>
            <RadioGroup value={selectedEvent || ""} onValueChange={setSelectedEvent}>
              {Array.from(new Set(events)).map((event) => (
                <div key={event} className="flex items-center space-x-2">
                  <RadioGroupItem value={event} id={event} />
                  <Label htmlFor={event}>{event}</Label>
                </div>
              ))}
            </RadioGroup>
          </div>
        )}
      </div>
      <div className="flex justify-between">
        <AnimatedButton onClick={onPrev} variant="outline">
          Previous
        </AnimatedButton>
        <AnimatedButton onClick={onNext}>
          { !isListening ? "Finish" : "Skip"}
        </AnimatedButton>
      </div>
    </div>
  )
}

