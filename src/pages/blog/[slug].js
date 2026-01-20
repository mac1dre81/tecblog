import { useState } from 'react';
import Layout from '../../components/Layout';
import EmailSignup from '../../components/EmailSignup';
import { getPostBySlug, getPostSlugs } from '../../lib/posts';
import { marked } from 'marked';

export default function BlogPost({ post, canonicalUrl }) {
  return (
    <Layout
      title={post.meta.title}
      description={post.meta.excerpt}
      canonical={canonicalUrl}
    >
      <article>
        {/* Post Header */}
        <header className="mb-8">
          <h1 className="text-5xl font-bold mb-4">{post.meta.title}</h1>
          <div className="flex items-center justify-between text-gray-600 mb-4">
            <div>
              <span>{post.meta.date}</span>
              {post.meta.author && <span> by {post.meta.author}</span>}
            </div>
          </div>
          {post.meta.tags && (
            <div className="flex gap-2">
              {post.meta.tags.map(tag => (
                <span key={tag} className="bg-blue-100 text-blue-800 text-sm px-3 py-1 rounded">
                  {tag}
                </span>
              ))}
            </div>
          )}
        </header>

        {/* Post Content */}
        <div className="prose prose-lg max-w-none mb-12">
          <div dangerouslySetInnerHTML={{ __html: marked(post.content) }} />
        </div>

        {/* Email Signup */}
        <EmailSignup />

        {/* Affiliate Disclosure */}
        <div className="bg-yellow-50 border border-yellow-200 rounded-lg p-6 mt-12">
          <p className="text-sm text-gray-700">
            <strong>Disclosure:</strong> Some links in this post are affiliate links. 
            If you click and purchase, we earn a commission at no extra cost to you.
          </p>
        </div>
      </article>
    </Layout>
  );
}

export async function getStaticPaths() {
  const slugs = getPostSlugs();
  return {
    paths: slugs.map(slug => ({
      params: { slug },
    })),
    fallback: false,
  };
}

export async function getStaticProps({ params }) {
  const post = getPostBySlug(params.slug);
  return {
    props: {
      post,
      canonicalUrl: `https://tecmarketa.com/blog/${params.slug}`,
    },
    revalidate: 3600,
  };
}
