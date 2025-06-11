// src/app/not-found.tsx
'use client';

import Link from 'next/link';

export default function NotFound() {
    return (
        <div className="min-h-screen flex flex-col items-center justify-center p-8 text-center">
            <h1 className="text-6xl font-bold text-gray-800">404</h1>
            <p className="mt-4 text-xl text-gray-600">Page not found.</p>
            <Link href="/" className="mt-6 text-blue-500 hover:underline">
                Go back home
            </Link>
        </div>
    );
}
