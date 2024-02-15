import { db } from '@/db'
import Link from 'next/link'
import { FaReadme, FaSave } from 'react-icons/fa'

export const dynamic = 'force-dynamic'

export default async function Home() {
  const snippets = await db.snippet.findMany()

  const renderedSnippets = snippets.map((snippet) => (
    <Link
      href={`/snippets/${snippet.id}`}
      className="flex border rounded p-2 m-2 justify-between items-center"
      key={snippet.id}
    >
      <h3>{snippet.title}</h3>
      <div>
        <FaReadme />
      </div>
    </Link>
  ))

  return (
    <>
      <div>
        <div className="flex justify-between items-center m-2">
          <h1 className="text-2xl font-bold py-2">Snippets</h1>
          <Link
            className="border rounded border-slate-200 p-2"
            href="/snippets/new"
          >
            <FaSave />
          </Link>
        </div>
        <div>{renderedSnippets}</div>
      </div>
    </>
  )
}
