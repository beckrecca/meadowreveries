import Link from 'next/link';

export default function LearnCTA() {
	return (
		<div className="mx-auto text-center p-2 mb-8">
          <button
            className="p-3 rounded text-black bg-milkweed hover:text-black hover:bg-ladycardinal font-bold"
            >
            <Link 
              href="/learn/handling-wool"
              className="text-black hover:text-black"
              >
              Get Started
            </Link>
          </button>
        </div>
	);
}