"use client";

import { useState } from "react";
import Link from "next/link";

export default function Navbar() {
  const [open, setOpen] = useState(false);

  return (
    <nav className="bg-white border-b shadow-sm sticky top-0 z-50">
      <div className="max-w-6xl mx-auto px-4 py-4 flex justify-between items-center">

        <Link href="/" className="text-2xl font-bold tracking-wide">
          MyStore
        </Link>

        <div className="hidden md:flex items-center space-x-8">
          <Link href="/" className="hover:text-gray-600">Home</Link>
          <Link href="/products" className="hover:text-gray-600">Products</Link>
          <Link href="/cart" className="hover:text-gray-600">Cart</Link>
        </div>

        <button
          onClick={() => setOpen(!open)}
          className="md:hidden focus:outline-none"
        >
          <svg
            className="w-7 h-7"
            fill="none"
            stroke="currentColor"
            strokeWidth={2}
            viewBox="0 0 24 24"
          >
            {open ? (
              <path strokeLinecap="round" strokeLinejoin="round" d="M6 18L18 6M6 6l12 12" />
            ) : (
              <path strokeLinecap="round" strokeLinejoin="round" d="M4 6h16M4 12h16M4 18h16" />
            )}
          </svg>
        </button>
      </div>

      {open && (
        <div className="md:hidden bg-white border-t shadow-sm">
          <Link href="/" className="block px-4 py-3 hover:bg-gray-100" onClick={() => setOpen(false)}>Home</Link>
          <Link href="/products" className="block px-4 py-3 hover:bg-gray-100" onClick={() => setOpen(false)}>Products</Link>
          <Link href="/cart" className="block px-4 py-3 hover:bg-gray-100" onClick={() => setOpen(false)}>Cart</Link>
        </div>
      )}
    </nav>
  );
}
