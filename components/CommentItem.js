// components/CommentItem.js
import { useState } from 'react';
import Image from 'next/image';

export default function CommentItem({ comment, onLike, onReply, isReplying }) {
  const [isLiked, setIsLiked] = useState(comment.hasLiked);
  const [likeCount, setLikeCount] = useState(comment.likes);

  const handleLike = async () => {
    try {
      const response = await fetch('/api/comments', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({ 
          action: 'like',
          commentId: comment.id
        }),
      });
      
      const data = await response.json();
      setIsLiked(data.hasLiked);
      setLikeCount(data.likes);
      
      if (onLike) {
        onLike(comment.id, data);
      }
    } catch (error) {
      console.error('Error liking comment:', error);
    }
  };

  return (
    <div>
      <div className="flex items-start space-x-3">
        <div className="relative w-10 h-10 rounded-full overflow-hidden bg-gray-200 flex-shrink-0">
          <Image
            src={comment.user.avatar}
            alt={comment.user.name}
            width={40}
            height={40}
            className="w-full h-full object-cover"
            onError={(e) => {
                e.target.onerror = null;
                e.target.src = "data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 24 24' fill='%236B7280'%3E%3Cpath d='M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2zm0 3c1.66 0 3 1.34 3 3s-1.34 3-3 3-3-1.34-3-3 1.34-3 3-3zm0 14.2c-2.5 0-4.71-1.28-6-3.22.03-1.99 4-3.08 6-3.08 1.99 0 5.97 1.09 6 3.08-1.29 1.94-3.5 3.22-6 3.22z'/%3E%3C/svg%3E";
            }}
          />
        </div>
        
        <div className="flex-1">
          <div className="flex items-center space-x-2">
            <span className="font-medium text-sm">{comment.user.name}</span>
            <span className="text-xs text-gray-500">{comment.time}</span>
          </div>
          
          <p className="text-sm text-gray-800 mt-1">{comment.text}</p>
          
          <div className="flex items-center space-x-4 mt-2 text-xs text-gray-500">
            <button 
              onClick={handleLike}
              className={`flex items-center space-x-1 ${isLiked ? 'text-red-500' : 'hover:text-gray-700'}`}
            >
              <span>Like</span>
              {likeCount > 0 && <span>{likeCount}</span>}
            </button>
            
            <button 
              onClick={onReply}
              className="hover:text-gray-700"
            >
              Reply
            </button>
            
            {comment.replies > 0 && (
              <span className="text-blue-500 hover:underline cursor-pointer">
                {comment.replies} {comment.replies === 1 ? 'reply' : 'replies'}
              </span>
            )}
          </div>
        </div>
      </div>
    </div>
  );
}