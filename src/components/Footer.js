import Link from 'next/link';

export default function Footer() {
  return (
    <footer className="bg-gray-900 text-white py-12 mt-20">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-8">
          <div>
            <h3 className="font-bold text-lg mb-4">TecMarketa</h3>
            <p className="text-gray-400">AI & automation tutorials for non-technical makers.</p>
          </div>
          <div>
            <h4 className="font-bold mb-4">Links</h4>
            <ul className="space-y-2 text-gray-400">
              <li><Link href="/about"><span className="hover:text-white cursor-pointer">About</span></Link></li>
              <li><Link href="/privacy"><span className="hover:text-white cursor-pointer">Privacy</span></Link></li>
              <li><Link href="/affiliate-disclosure"><span className="hover:text-white cursor-pointer">Affiliate Disclosure</span></Link></li>
            </ul>
          </div>
          <div>
            <h4 className="font-bold mb-4">Contact</h4>
            <p className="text-gray-400">Have questions? <a href="mailto:hello@tecmarketa.com" className="text-blue-400 hover:text-blue-300">Email us</a></p>
          </div>
        </div>
        <div className="border-t border-gray-800 pt-8 text-center text-gray-400">
          <p>&copy; 2025 TecMarketa. All rights reserved.</p>
        </div>
      </div>
    </footer>
  );
}
