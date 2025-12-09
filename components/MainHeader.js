// components/MainHeader.js
import { useState } from 'react';
import Link from 'next/link';

export default function MainHeader() {
  const [searchQuery, setSearchQuery] = useState('');

  return (
    <header className="bg-white shadow-sm">
      <div className="max-w-7xl mx-auto px-4 py-4 sm:px-6 lg:px-8 flex justify-between items-center">
        <div className="flex-1 max-w-2xl">
          <div className="relative">
            <input
              type="text"
              placeholder="Search for universes, questions, or users..."
              className="w-full bg-gray-100 rounded-full px-4 py-2 pl-10 focus:outline-none focus:ring-2 focus:ring-blue-500"
              value={searchQuery}
              onChange={(e) => setSearchQuery(e.target.value)}
            />
            <span className="absolute left-3 top-2 text-gray-500">🔍</span>
          </div>
        </div>
        <div className="ml-4 flex items-center">
          <div className="bg-blue-50 text-blue-600 px-3 py-1 rounded-full text-sm font-medium mr-4">
            250
          </div>
          <div className="relative">
            <button className="flex items-center space-x-2">
              <div className="w-8 h-8 rounded-full bg-gray-300"></div>
              <span className="hidden md:inline">Baginda Isfa</span>
              <span>▼</span>
            </button>
          </div>
        </div>
      </div>
    </header>
  );
}