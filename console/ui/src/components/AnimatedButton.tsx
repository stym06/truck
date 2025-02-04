"use client"

import { useState } from "react"
import { Button } from "@/components/ui/button"
import { Loader2 } from "lucide-react"
import type React from "react" // Added import for React

interface AnimatedButtonProps extends React.ComponentProps<typeof Button> {
  loadingText?: string
}

export function AnimatedButton({ children, loadingText = "Loading...", ...props }: AnimatedButtonProps) {
  const [isLoading, setIsLoading] = useState(false)

  const handleClick = async (event: React.MouseEvent<HTMLButtonElement>) => {
    if (props.onClick) {
      setIsLoading(true)
      await new Promise((resolve) => setTimeout(resolve, 1000)) // Simulating async operation
      props.onClick(event)
      setIsLoading(false)
    }
  }

  return (
    <Button
      {...props}
      className={`button-hover ${props.className || ""} ${isLoading ? "animate-bubble" : ""}`}
      onClick={handleClick}
      disabled={isLoading || props.disabled}
    >
      {isLoading ? (
        <>
          <Loader2 className="mr-2 h-4 w-4 animate-spin" />
          {loadingText}
        </>
      ) : (
        children
      )}
    </Button>
  )
}

