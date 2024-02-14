'use client'

import { Editor } from '@monaco-editor/react'
import { Snippet } from '@prisma/client'
import { useState } from 'react'

interface SnippetEditFormProps {
  snippet: Snippet
}

export default function SnippetEditForm({ snippet }: SnippetEditFormProps) {
  const [code, setCode] = useState(snippet.code)

  function handleEditorChange(value: string = ''): void {
    // console.log("value", value);
    setCode(value)
  }

  return (
    <>
      {/* <div>Client compoennt has snippet with title: {snippet.title}</div> */}
      <Editor
        theme="vs-dark"
        height="30vh"
        defaultLanguage="javascript"
        defaultValue={code}
        options={{ minimap: { enabled: false } }}
        onChange={handleEditorChange}
      />
    </>
  )
}
