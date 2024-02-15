'use client'

import { useFormState } from 'react-dom'
import Link from 'next/link'
import { FaHome } from 'react-icons/fa'
import * as actions from '@/actions'

export default function SnippetCreatePage() {
  const [formState, action] = useFormState(actions.createSnippet, {
    message: '',
  })

  return (
    <div>
      <div className="flex justify-between items-center m-2">
        <h1 className="text-2xl font-bold py-2">Create a Snippet</h1>
        <Link className="border rounded border-slate-200 p-2" href="/">
          <FaHome />
        </Link>
      </div>
      <div className="m-2">
        <form action={action}>
          <div className="flex flex-col gap-4">
            <div className="flex gap-4">
              <label htmlFor="title" className="w-12">
                TITLE
              </label>
              <input
                type="text"
                id="title"
                name="title"
                className="border rounded p-2 w-full"
              />
            </div>

            <div className="flex gap-4">
              <label htmlFor="code" className="w-12">
                CODE
              </label>
              <textarea
                id="code"
                name="code"
                className="border rounded p-2 w-full h-32"
              />
            </div>

            {formState.message && (
              <div className="my-2 p-2 bg-red-200 border rounded border-red-400">
                {formState.message}
              </div>
            )}

            <button type="submit" className="rounded p-2 bg-blue-200">
              Create
            </button>
          </div>
        </form>
      </div>
    </div>
  )
}
