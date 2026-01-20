import Layout from '../components/Layout';
import BlogCard from '../components/BlogCard';
import EmailSignup from '../components/EmailSignup';
import { getAllPosts } from '../lib/posts';

export default function Home({ posts }) {
  return (
    <Layout
      title="Home"
      description="Learn how to automate marketing and business tasks with AI, Zapier, and Make - No coding required."
      canonical="https://tecmarketa.com"
    >
      {/* Hero Section */}
      <section className="py-12 text-center mb-12">
        <h1 className="text-5xl font-bold text-gray-900 mb-4">
          Automate Your Business Without Coding
        </h1>
        <p className="text-xl text-gray-700 max-w-2xl mx-auto mb-8">
          Learn how to use AI, Zapier, Make, and Airtable to save hours every week. 
          Written for non-technical makers and solopreneurs.
        </p>
        <div className="flex gap-4 justify-center">
          <a href="#latest" className="px-6 py-3 bg-blue-600 text-white rounded-lg font-bold hover:bg-blue-700">
            Start Reading
          </a>
          <a href="#newsletter" className="px-6 py-3 border-2 border-blue-600 text-blue-600 rounded-lg font-bold hover:bg-blue-50">
            Subscribe
          </a>
        </div>
      </section>

      {/* Latest Posts */}
      <section id="latest" className="mb-12">
        <h2 className="text-3xl font-bold mb-6">Latest Tutorials</h2>
        <div className="grid gap-6">
          {posts.map(post => (
            <BlogCard key={post.slug} post={post} />
          ))}
        </div>
      </section>

      {/* Newsletter */}
      <section id="newsletter">
        <EmailSignup />
      </section>

      {/* Affiliate Disclosure */}
      <section className="bg-yellow-50 border border-yellow-200 rounded-lg p-6 mt-12">
        <p className="text-sm text-gray-700">
          <strong>Disclosure:</strong> We earn commissions from Zapier, Make, Airtable, and other tools when you click links. 
          This helps fund our content at no extra cost to you. We only recommend tools we genuinely use.
        </p>
      </section>
    </Layout>
  );
}

export async function getStaticProps() {
  const posts = getAllPosts();
  return {
    props: { posts },
    revalidate: 3600, // Revalidate every hour
  };
}
