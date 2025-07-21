'use client'

import { createContext, useContext, ReactNode } from 'react'

interface Post {
  id: number
  title: string
  featuredImage: string | null
  link: string
}

interface PostsContextType {
  posts: Post[]
}

const PostsContext = createContext<PostsContextType>({ posts: [] })

export function PostsProvider({
  children,
  posts,
}: {
  children: ReactNode
  posts: Post[]
}) {
  return (
    <PostsContext.Provider value={{ posts }}>{children}</PostsContext.Provider>
  )
}

export function usePosts() {
  return useContext(PostsContext)
}
