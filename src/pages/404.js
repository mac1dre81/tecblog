import Link from 'next/link';
import Layout from '../components/Layout';

export default function NotFound() {
  return (
    <Layout title="Page Not Found">
      <div className="text-center py-20">
        <h1 className="text-6xl font-bold text-gray-900 mb-4">404</h1>
        <p className="text-2xl text-gray-700 mb-8">Page not found</p>
        <Link href="/">
          <span className="text-blue-600 font-bold hover:underline cursor-pointer">
            ← Back to home
          </span>
        </Link>
      </div>
    </Layout>
  );
}
