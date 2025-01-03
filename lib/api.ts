interface BlogPost {
    id: string
    title: string
    excerpt: string
    content: string
    image: string
  }
  
  const blogPosts: BlogPost[] = [
    {
      id: '1',
      title: 'Getting Started with Next.js',
      excerpt: 'Learn the basics of Next.js and start building amazing web applications.',
      content: 'Next.js is a powerful React framework that makes it easy to build server-side rendered and statically generated web applications...',
      image: '/blog-1.jpg'
    },
    {
      id: '2',
      title: 'The Power of Tailwind CSS',
      excerpt: 'Discover how Tailwind CSS can revolutionize your styling workflow.',
      content: 'Tailwind CSS is a utility-first CSS framework that allows you to rapidly build custom user interfaces...',
      image: '/blog-2.jpg'
    },
    {
      id: '3',
      title: 'Mastering TypeScript',
      excerpt: 'Take your JavaScript skills to the next level with TypeScript.',
      content: 'TypeScript is a typed superset of JavaScript that compiles to plain JavaScript, enabling you to write more robust and maintainable code...',
      image: '/blog-3.jpg'
    },
    {
      id: '4',
      title: 'The Art of Responsive Design',
      excerpt: 'Learn how to create beautiful, responsive websites that work on any device.',
      content: 'Responsive design is an approach to web design that makes web pages render well on a variety of devices and window or screen sizes...',
      image: '/blog-4.jpg'
    },
    {
      id: '5',
      title: 'Optimizing Web Performance',
      excerpt: 'Discover techniques to make your websites faster and more efficient.',
      content: 'Web performance optimization is the practice of improving the speed and efficiency of web pages...',
      image: '/blog-5.jpg'
    },
    {
      id: '6',
      title: 'Introduction to GraphQL',
      excerpt: 'Learn about GraphQL and how it can improve your API development.',
      content: 'GraphQL is a query language for APIs and a runtime for executing those queries with your existing data...',
      image: '/blog-6.jpg'
    },
  ]
  
  export function getBlogPosts(): BlogPost[] {
    return blogPosts
  }
  
  export function getBlogPost(id: string): BlogPost | undefined {
    return blogPosts.find(post => post.id === id)
  }
  
  