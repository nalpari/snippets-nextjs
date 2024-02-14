"use client";

import { Editor } from "@monaco-editor/react";
import { Snippet } from "@prisma/client";

interface SnippetEditFormProps {
  snippet: Snippet;
}

export default function SnippetEditForm({ snippet }: SnippetEditFormProps) {
  return (
    <>
      {/* <div>Client compoennt has snippet with title: {snippet.title}</div> */}
      <Editor
        theme="vs-dark"
        height="30vh"
        defaultLanguage="javascript"
        defaultValue={snippet.code}
        options={{ minimap: { enabled: false } }}
      />
    </>
  );
}
