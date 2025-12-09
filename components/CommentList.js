// components/CommentList.js
import { useState } from 'react';
import CommentItem from './CommentItem';

export default function CommentList({ comments, onLike, onReply }) {
  const [replyingTo, setReplyingTo] = useState(null);
  const [replyText, setReplyText] = useState('');

  const handleReplySubmit = (commentId) => {
    if (replyText.trim()) {
      onReply(commentId, replyText);
      setReplyingTo(null);
      setReplyText('');
    }
  };

  return (
    <div className="space-y-4">
      {comments.map((comment) => (
        <div key={comment.id} className="bg-white rounded-xl shadow-sm p-4">
          <CommentItem 
            comment={comment} 
            onLike={onLike}
            onReply={() => setReplyingTo(replyingTo === comment.id ? null : comment.id)}
            isReplying={replyingTo === comment.id}
          />
          
          {replyingTo === comment.id && (
            <div className="mt-3 pl-12">
              <div className="flex space-x-2">
                <input
                  type="text"
                  value={replyText}
                  onChange={(e) => setReplyText(e.target.value)}
                  placeholder={`Reply to ${comment.user.name}...`}
                  className="flex-1 px-3 py-2 border border-gray-300 rounded-full text-sm focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent"
                />
                <button
                  onClick={() => handleReplySubmit(comment.id)}
                  className="bg-blue-500 hover:bg-blue-600 text-white px-4 py-1 rounded-full text-sm font-medium transition-colors"
                >
                  Reply
                </button>
              </div>
            </div>
          )}
        </div>
      ))}
    </div>
  );
}