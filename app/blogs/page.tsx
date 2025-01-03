import Image from 'next/image'
import Link from 'next/link'
import { getBlogPosts } from '../../lib/api'

export default function Blogs() {
  const posts = getBlogPosts()

  return (
    <div>
      <h1 className="text-3xl font-bold mb-8">All Blog Posts</h1>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
        {posts.map((post) => (
          <Link key={post.id} href={`/blogs/${post.id}`} className="bg-white rounded-lg shadow-md overflow-hidden">
            <Image src={post.image} alt={post.title} width={500} height={300} className="w-full h-48 object-cover" />
            <div className="p-6">
              <h2 className="text-xl font-semibold mb-2">{post.title}</h2>
              <p className="text-gray-600">{post.excerpt}</p>
            </div>
          </Link>
        ))}
      </div>
    </div>
  )
}

