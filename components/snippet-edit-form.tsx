'use client'

import { useState } from 'react'
import { Snippet } from '@prisma/client'
import { Editor } from '@monaco-editor/react'
import * as actions from '@/actions'

interface SnippetEditFormProps {
  snippet: Snippet
}

export default function SnippetEditForm({ snippet }: SnippetEditFormProps) {
  const [code, setCode] = useState(snippet.code)

  function handleEditorChange(value: string = ''): void {
    // console.log("value", value);
    setCode(value)
  }

  const editSnippetAction = actions.updateSnippet.bind(null, snippet.id, code)

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
      <form action={editSnippetAction}>
        <button type="submit" className="p-2 border border-blue-400 rounded">
          SAVE
        </button>
      </form>
    </>
  )
}
