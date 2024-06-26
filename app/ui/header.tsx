import Link from 'next/link';

export default function Header() {
	return (
		<nav className="flex items-center justify-between flex-wrap bg-paper p-6">
	      <div className="flex items-center flex-shrink-0 text-aster mr-6">
	        <img className="fill-current mr-6" src="/assets/img/meadow_reveries_sheep.png"/>
	        <Link className="font-semibold text-xl tracking-tight" href="/">Meadow Reveries</Link>
	      </div>
	      <div className="block lg:hidden">
	        <button className="flex items-center px-3 py-2 border rounded text-black border-black hover:text-fern hover:border-fern">
	          <svg className="fill-current h-3 w-3" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg"><title>Menu</title><path d="M0 3h20v2H0V3zm0 6h20v2H0V9zm0 6h20v2H0v-2z"/></svg>
	        </button>
	      </div>
	      <div className="w-full block flex-grow lg:flex lg:items-center lg:w-auto">
	        <div className="lg:flex-grow lg:text-right">
	          <Link href="/shop" className="block mt-4 lg:inline-block lg:mt-0 text-black hover:text-aster mr-4">
	            Shop
	          </Link>
	          <Link href="/learn" className="block mt-4 lg:inline-block lg:mt-0 text-black hover:text-aster mr-4">
	            Learn
	          </Link>
	          <Link href="/about" className="block mt-4 lg:inline-block lg:mt-0 text-black hover:text-aster">
	            About
	          </Link>
	        </div>
	      </div>
	    </nav>
	)
}