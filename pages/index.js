// pages/index.js
import Link from 'next/link';

export default function Home() {
  return (
    <div className="min-h-screen bg-gray-50">
      
      <div className="max-w-7xl mx-auto px-4 py-6 sm:px-6 lg:px-8">
        <div className="bg-white rounded-lg shadow p-6">
          <div className="text-center mb-12">
          <h1 className="text-4xl font-bold text-gray-900 mb-4">Boo</h1>
          <p className="text-gray-600">Join the conversation and share your thoughts</p>
        </div>

        <div className="bg-white rounded-2xl shadow-md p-6 mb-8">
          <div className="flex items-center justify-between mb-6">
            <h2 className="text-xl font-semibold text-gray-900">Popular Questions</h2>
            <Link 
              href="/questions/dwsQOX" 
              className="text-blue-500 hover:text-blue-600 font-medium"
            >
              View all
            </Link>
          </div>

          <div className="space-y-6">
            <Link 
              href="/questions/dwsQOX" 
              className="block group p-4 rounded-xl border border-gray-100 hover:border-blue-200 hover:bg-blue-50 transition-colors"
            >
              <div className="flex items-center space-x-3 mb-3">
                <div className="w-10 h-10 rounded-full bg-blue-100 flex items-center justify-center text-blue-500 font-medium">
                  Q
                </div>
                <div>
                  <h3 className="font-medium text-gray-900 group-hover:text-blue-600">
                    What would you choose: a relationship full of adventures or a peaceful one?
                  </h3>
                  <div className="flex items-center text-sm text-gray-500 mt-1">
                    <span>Questions Community</span>
                    <span className="mx-2">•</span>
                    <span>595 likes</span>
                    <span className="mx-2">•</span>
                    <span>4,076 comments</span>
                  </div>
                </div>
              </div>
            </Link>

            {/* Add more sample questions here */}
          </div>
        </div>

        <div className="text-center">
          <Link 
            href="/questions/dwsQOX"
            className="inline-block bg-blue-500 hover:bg-blue-600 text-white font-medium px-6 py-3 rounded-full transition-colors"
          >
            View Question
          </Link>
        </div>
        </div>
      </div>
    </div>
  );
}