import Head from 'next/head';
import Header from './Header';
import Footer from './Footer';

export default function Layout({ children, title, description, canonical }) {
  return (
    <>
      <Head>
        <title>{title ? `${title} | TecMarketa` : 'TecMarketa - AI & Automation Tutorials'}</title>
        <meta name="description" content={description || 'How to automate marketing and business tasks with AI, Zapier, and Make - No coding required.'} />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <meta charSet="utf-8" />
        {canonical && <link rel="canonical" href={canonical} />}
        
        {/* Open Graph */}
        <meta property="og:title" content={title || 'TecMarketa'} />
        <meta property="og:description" content={description || 'AI & automation tutorials for non-technical makers'} />
        <meta property="og:type" content="website" />
        
        {/* Twitter Card */}
        <meta name="twitter:card" content="summary_large_image" />
        <meta name="twitter:title" content={title || 'TecMarketa'} />
        
        {/* Favicon */}
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <div className="min-h-screen flex flex-col bg-white">
        <Header />
        <main className="flex-grow max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 py-12 w-full">
          {children}
        </main>
        <Footer />
      </div>
    </>
  );
}
