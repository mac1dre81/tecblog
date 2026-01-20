import Link from 'next/link';

export default function BlogCard({ post }) {
  return (
    <article className="border border-gray-200 rounded-lg p-6 hover:shadow-lg transition-shadow">
      <div className="mb-3">
        <span className="text-sm text-gray-500">{post.meta.date}</span>
        {post.meta.tags && post.meta.tags.map(tag => (
          <span key={tag} className="ml-2 text-xs bg-blue-100 text-blue-800 px-2 py-1 rounded">
            {tag}
          </span>
        ))}
      </div>
      
      <Link href={`/blog/${post.slug}`}>
        <h2 className="text-2xl font-bold mb-3 text-gray-900 hover:text-blue-600 cursor-pointer">
          {post.meta.title}
        </h2>
      </Link>
      
      <p className="text-gray-700 mb-4">{post.meta.excerpt}</p>
      
      <Link href={`/blog/${post.slug}`}>
        <span className="text-blue-600 font-semibold hover:underline cursor-pointer">
          Read more →
        </span>
      </Link>
    </article>
  );
}
