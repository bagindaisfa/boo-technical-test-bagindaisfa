// components/Header.js
import Image from 'next/image';
import Link from 'next/link';

export default function Header({ user, description, joinText, onBack }) {
  return (
    <div className="mb-6">
      <div className="flex items-center justify-between mb-2">
        <button 
          onClick={onBack}
          className="text-gray-500 hover:text-gray-700"
        >
          ← Back
        </button>
        <Link 
          href="/join" 
          className="bg-blue-500 hover:bg-blue-600 text-white text-sm font-medium px-4 py-1.5 rounded-full transition-colors"
        >
          {joinText}
        </Link>
      </div>
      
      <div className="flex items-start space-x-3">
        <div className="relative w-12 h-12 rounded-full overflow-hidden bg-gray-200">
          {user.avatar && (
            <Image
              src={user.avatar}
              alt={user.name}
              width={48}
              height={48}
              className="object-cover"
            />
          )}
        </div>
        
        <div>
          <h1 className="text-lg font-semibold text-gray-900">{user.name}</h1>
          <div className="flex items-center space-x-2 text-sm text-gray-500">
            <span>{user.type}</span>
            <span>•</span>
            <span>{user.memberSince}</span>
            {user.personalityType && user.personalityType !== 'Community' && (
              <>
                <span>•</span>
                <span>{user.personalityType}</span>
              </>
            )}
            {user.zodiacSign && user.zodiacSign !== 'Community' && (
              <>
                <span>•</span>
                <span>{user.zodiacSign}</span>
              </>
            )}
            {user.awards > 0 && (
              <span className="text-yellow-500 ml-1">🏆 {user.awards}</span>
            )}
          </div>
          {description && (
            <p className="text-sm text-gray-600 mt-1">{description}</p>
          )}
        </div>
      </div>
    </div>
  );
}