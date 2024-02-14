import { db } from "@/db";
import Link from "next/link";
import { notFound } from "next/navigation";
import { FaHome, FaTrash, FaUserEdit } from "react-icons/fa";

interface SnippetShowPageProps {
  params: {
    id: string;
  };
}

export default async function SnippetShowPage(props: SnippetShowPageProps) {
  const snippet = await db.snippet.findUnique({
    where: {
      id: parseInt(props.params.id),
    },
  });

  if (!snippet) {
    return notFound();
  }

  return (
    <>
      <div>
        <div className="flex justify-between items-center m-2">
          <h1 className="text-2xl font-bold py-2">Snippets</h1>
          <div className="flex gap-1">
            <Link className="border rounded border-slate-200 p-2" href="/">
              <FaHome />
            </Link>
            <Link
              className="border rounded border-slate-200 p-2"
              href={`/snippets/${snippet.id}/edit`}
            >
              <FaUserEdit />
            </Link>
            <Link
              className="border rounded border-slate-200 p-2"
              href={`/snippets/${snippet.id}/edit`}
            >
              <FaTrash />
            </Link>
          </div>
        </div>
        <div className="flex flex-col gap-4 m-2">
          <h1 className="italic font-bold">{snippet.title}</h1>
          <pre className="border border-gray-200 bg-gray-200 rounded p-4">
            {snippet.code}
          </pre>
        </div>
      </div>
    </>
  );
}
