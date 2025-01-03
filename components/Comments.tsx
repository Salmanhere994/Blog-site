'use client'

import { useState, useEffect } from 'react'

interface Comment {
  id: string
  text: string
  author: string
  createdAt: string
}

export default function Comments({ postId }: { postId: string }) {
  const [comments, setComments] = useState<Comment[]>([])
  const [newComment, setNewComment] = useState('')
  const [author, setAuthor] = useState('')

  useEffect(() => {
    const storedComments = localStorage.getItem(`comments-${postId}`)
    if (storedComments) {
      setComments(JSON.parse(storedComments))
    }
  }, [postId])

  useEffect(() => {
    localStorage.setItem(`comments-${postId}`, JSON.stringify(comments))
  }, [comments, postId])

  const addComment = (e: React.FormEvent) => {
    e.preventDefault()
    if (newComment.trim() && author.trim()) {
      const comment: Comment = {
        id: Date.now().toString(),
        text: newComment.trim(),
        author: author.trim(),
        createdAt: new Date().toISOString()
      }
      setComments([comment, ...comments])
      setNewComment('')
      setAuthor('')
    }
  }

  const deleteComment = (id: string) => {
    setComments(comments.filter(comment => comment.id !== id))
  }

  return (
    <div className="mt-12">
      <h2 className="text-2xl font-bold mb-6 text-neutral-900">Comments</h2>
      <form onSubmit={addComment} className="space-y-4 mb-8">
        <div>
          <input
            type="text"
            value={author}
            onChange={(e) => setAuthor(e.target.value)}
            placeholder="Your name"
            className="w-full p-3 border border-neutral-200 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
            required
          />
        </div>
        <div>
          <textarea
            value={newComment}
            onChange={(e) => setNewComment(e.target.value)}
            placeholder="Add a comment..."
            className="w-full p-3 border border-neutral-200 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500 min-h-[100px]"
            required
          />
        </div>
        <button 
          type="submit" 
          className="bg-blue-600 text-white px-6 py-2 rounded-lg hover:bg-blue-700 transition-colors"
        >
          Add Comment
        </button>
      </form>
      <div className="space-y-6">
        {comments.map(comment => (
          <div key={comment.id} className="bg-neutral-50 p-4 rounded-lg border border-neutral-200">
            <div className="flex justify-between items-start mb-2">
              <div>
                <p className="font-semibold text-neutral-900">{comment.author}</p>
                <p className="text-sm text-neutral-500">
                  {new Date(comment.createdAt).toLocaleDateString()}
                </p>
              </div>
              <button
                onClick={() => deleteComment(comment.id)}
                className="text-red-600 text-sm hover:text-red-700 transition-colors"
              >
                Delete
              </button>
            </div>
            <p className="text-neutral-600">{comment.text}</p>
          </div>
        ))}
      </div>
    </div>
  )
}

