import Link from 'next/link';

export default function Header() {
  return (
    <header className="bg-white border-b border-gray-200 sticky top-0 z-50">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center py-4">
          <Link href="/">
            <span className="text-2xl font-bold text-blue-600 cursor-pointer">
              TecMarketa
            </span>
          </Link>
          <nav className="flex gap-6">
            <Link href="/"><span className="text-gray-700 hover:text-blue-600 cursor-pointer">Home</span></Link>
            <Link href="/about"><span className="text-gray-700 hover:text-blue-600 cursor-pointer">About</span></Link>
            <Link href="/privacy"><span className="text-gray-700 hover:text-blue-600 cursor-pointer">Privacy</span></Link>
          </nav>
        </div>
      </div>
    </header>
  );
}
