'use server'

import { revalidatePath } from 'next/cache'
import { redirect } from 'next/navigation'
import { db } from '@/db'

export async function updateSnippet(id: number, code: string) {
  const snippet = await db.snippet.update({
    where: {
      id,
    },
    data: {
      code,
    },
  })

  revalidatePath(`/snippets/${snippet.id}`)
  redirect(`/snippets/${snippet.id}`)
}

export async function deleteSnippet(id: number) {
  await db.snippet.delete({
    where: {
      id,
    },
  })

  revalidatePath('/')
  redirect('/')
}

export async function createSnippet(
  formState: { message: string },
  formData: FormData,
) {
  // 'use server'

  const title = formData.get('title') as string
  const code = formData.get('code') as string

  if (typeof title !== 'string' || title.length < 3) {
    return {
      message: 'Title must be at least 3 characters long',
    }
  }

  if (typeof code !== 'string' || code.length < 3) {
    return {
      message: 'Code must be at least 3 characters long',
    }
  }

  try {
    const snippet = await db.snippet.create({
      data: {
        title,
        code,
      },
    })

    // console.log(snippet)
    throw new Error('Not implemented')
  } catch (err: unknown) {
    if (err instanceof Error) {
      return {
        message: err.message,
      }
    } else {
      return {
        message: 'An unknown error occurred',
      }
    }
  }

  revalidatePath('/')
  redirect('/')
}
