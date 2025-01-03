import Image from 'next/image'
import { getBlogPost } from '../../../lib/api'
import Comments from '../../../components/Comments'
import { PageProps } from '@/.next/types/app/layout'



export default function BlogPost({ params }: { params: { id: string } } & PageProps) {
  const post = getBlogPost(params.id)

  if (!post) {
    return <div>Post not found</div>
  }


  return (
    <article className="max-w-4xl mx-auto">
      <div className="relative h-[400px] rounded-2xl overflow-hidden mb-8">
        <Image 
          src={post.image} 
          alt={post.title} 
          width={1200} 
          height={600} 
          className="w-full h-full object-cover"
        />
      </div>
      <div className="bg-white rounded-xl shadow-sm border border-neutral-200 p-8">
        <h1 className="text-4xl font-bold mb-4 text-neutral-900">{post.title}</h1>
        <div className="flex items-center space-x-4 mb-8 text-sm text-neutral-500">
          <span>5 min read</span>
          <span>•</span>
          <span>Tech</span>
          <span>•</span> 
          <span>Aug 15, 2023</span>
        </div>
        <div className="prose prose-neutral max-w-none">
          <p className="text-neutral-600 text-lg leading-relaxed">{post.content}</p>
        </div>
        <Comments postId={post.id} />
      </div>
    </article>
  )
}

