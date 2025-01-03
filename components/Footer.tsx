import Link from 'next/link'

export function Footer() {
  return (
    <footer className="bg-white border-t border-neutral-200">
      <div className="container mx-auto px-4 py-12">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
          <div className="space-y-4">
            <h3 className="text-lg font-semibold text-neutral-900">Bloggy</h3>
            <p className="text-neutral-600">Discover stories, thinking, and expertise from writers on any topic.</p>
          </div>
          <div>
            <h4 className="font-semibold text-neutral-900 mb-4">Navigation</h4>
            <ul className="space-y-2">
              <li><Link href="/" className="text-neutral-600 hover:text-neutral-900">Home</Link></li>
              <li><Link href="/blogs" className="text-neutral-600 hover:text-neutral-900">Blogs</Link></li>
            </ul>
          </div>
          <div>
            <h4 className="font-semibold text-neutral-900 mb-4">Company</h4>
            <ul className="space-y-2">
              <li><Link href="/about" className="text-neutral-600 hover:text-neutral-900">About</Link></li>
              <li><Link href="/contact" className="text-neutral-600 hover:text-neutral-900">Contact</Link></li>
            </ul>
          </div>
          <div>
            <h4 className="font-semibold text-neutral-900 mb-4">Legal</h4>
            <ul className="space-y-2">
              <li><Link href="/privacy" className="text-neutral-600 hover:text-neutral-900">Privacy Policy</Link></li>
              <li><Link href="/terms" className="text-neutral-600 hover:text-neutral-900">Terms of Service</Link></li>
            </ul>
          </div>
        </div>
        <div className="mt-8 pt-8 border-t border-neutral-200">
          <p className="text-center text-neutral-600">© {new Date().getFullYear()} Bloggy. All rights reserved.</p>
        </div>
      </div>
    </footer>
  )
}

