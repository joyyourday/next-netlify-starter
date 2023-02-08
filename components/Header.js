import Image from 'next/image'
import Link from 'next/link'

function Navbar() {
    return (
        <div>
           <header className="text-gray-600 body-font">
  <div className="container mx-auto flex flex-wrap p-5 flex-col md:flex-row items-center shadow-md">
    <a className="flex title-font font-medium items-center text-gray-900 mb-4 md:mb-0">
    <Image src='/logo.png' alt='Logo' width={400} height={60} />

      <span className="ml-3 text-xl"></span>
      
    </a>
    <nav className="md:mr-auto md:ml-4 md:py-1 md:pl-4 md:border-l space-x-3 md:border-gray-400	flex flex-wrap items-center text-base justify-center">
    <Link href="/hollywood" className="mr-5 hover:text-gray-900 text-blue-600 font-bold md:text-lg ">Hollywood</Link>
    <Link href="/bollywood" className="mr-5 hover:text-gray-900 text-blue-600 font-bold md:text-lg ">Bollywood</Link>
    <Link href="/adult" className="mr-5 hover:text-gray-900 text-blue-600 font-bold md:text-lg ">Adult</Link>
    <Link href="/about" className="mr-5 hover:text-gray-900 text-blue-600 font-bold md:text-lg ">About Us</Link>
    </nav>

  </div>
</header>
        </div>
    );
}

export default Navbar;