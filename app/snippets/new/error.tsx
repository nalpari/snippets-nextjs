'use client'

interface SnippetCreateErrorProps {
  error: Error
  reset: () => void
}

export default function SnippetCreateError({ error }: SnippetCreateErrorProps) {
  return (
    <>
      <div>{error.message}</div>
    </>
  )
}
