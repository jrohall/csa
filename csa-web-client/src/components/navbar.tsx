import Link from "next/link";
import { useState } from "react";

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <nav className="flex items-center justify-between p-4 bg-gradient-to-b from-black to-transparent">
      <Link href="/">
        <img
          src="./csa-logo-full.png"
          className="h-16 w-auto sm:h-20"
          alt="CSA Logo"
        />
      </Link>
      <div className="flex items-center sm:hidden">
        <button
          className="px-3 py-2 rounded bg-gray-500 hover:bg-gray-700"
          onClick={() => setIsOpen(!isOpen)}
        >
          {isOpen ? (
            <svg
              xmlns="http://www.w3.org/2000/svg"
              className="h-6 w-6"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={2}
                d="M6 18L18 6M6 6l12 12"
              />
            </svg>
          ) : (
            <svg
              xmlns="http://www.w3.org/2000/svg"
              className="h-6 w-6"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={2}
                d="M4 6h16M4 12h16M4 18h16"
              />
            </svg>
          )}
        </button>
      </div>
      <ul
        className={`${
          isOpen ? "block" : "hidden"
        } sm:flex sm:items-center sm:gap-x-4 sm:bg-transparent sm:text-lg`}
      >
        <li>
          <Link href="/about">
            <p className="block px-3 py-2 rounded hover:bg-gray-500">About</p>
          </Link>
        </li>
        <li>
          <Link href="/contact">
            <p className="block px-3 py-2 rounded hover:bg-gray-500">Contact</p>
          </Link>
        </li>
      </ul>
    </nav>
  );
};

export default Navbar;

