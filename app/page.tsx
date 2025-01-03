import Image from 'next/image'
import Link from 'next/link'
import { getBlogPosts } from '@/lib/api'

export default function Home() {
  const recentPosts = getBlogPosts().slice(0, 6)

  return (
    <div className="space-y-16">
      <section className="relative overflow-hidden rounded-2xl bg-neutral-900 text-white py-20 px-4">
        <div className="container mx-auto flex items-center justify-between relative z-10">
          <div className="max-w-2xl">
            <h1 className="text-5xl font-bold mb-6 leading-tight">Discover Stories That Matter</h1>
            <p className="text-xl mb-8 text-neutral-300">Join our community of writers and readers, sharing insights and experiences that inspire.</p>
            <Link 
              href="/blogs" 
              className="inline-block bg-white text-neutral-900 px-8 py-3 rounded-full font-semibold hover:bg-neutral-100 transition duration-300"
            >
              Start Reading
            </Link>
          </div>
          <div className="hidden lg:block">
            <Image 
              src="/hero-illustration.svg" 
              alt="Hero Illustration" 
              width={500} 
              height={400} 
              className="relative z-10"
            />
          </div>
        </div>
        <div className="absolute inset-0 bg-gradient-to-r from-blue-600 to-purple-600 opacity-50" />
      </section>

      <section className="recent-blogs">
        <h2 className="text-3xl font-bold mb-8 text-neutral-900">Recent Stories</h2>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {recentPosts.map((post, index) => (
            <Link 
              key={post.id} 
              href={`/blogs/${post.id}`} 
              className={`group bg-white rounded-xl shadow-sm overflow-hidden border border-neutral-200 hover:shadow-md transition-all duration-300 ${
                index === 3 ? 'md:col-span-2' : ''
              }`}
            >
              <div className="relative h-48 overflow-hidden">
                <Image 
                  src={post.image} 
                  alt={post.title} 
                  width={500} 
                  height={300} 
                  className="w-full h-full object-cover transition-transform duration-300 group-hover:scale-105"
                />
              </div>
              <div className="p-6">
                <h3 className="text-xl font-semibold mb-2 text-neutral-900">{post.title}</h3>
                <p className="text-neutral-600">{post.excerpt}</p>
                <div className="mt-4 flex items-center text-sm text-neutral-500">
                  <span>5 min read</span>
                  <span className="mx-2">•</span>
                  <span>Tech</span>
                </div>
              </div>
            </Link>
          ))}
        </div>
      </section>
    </div>
  )
}

