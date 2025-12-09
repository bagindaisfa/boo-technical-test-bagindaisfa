// components/CommentInput.js
import { useState } from "react";
import Image from "next/image";

export default function CommentInput({
  onSubmit,
  placeholder = "Add a comment...",
}) {
  const [comment, setComment] = useState("");

  const handleSubmit = (e) => {
    e.preventDefault();
    if (comment.trim()) {
      onSubmit(comment);
      setComment("");
    }
  };

  return (
    <form onSubmit={handleSubmit} className="mb-6">
      <div className="flex items-start space-x-3">
        <div className="w-10 h-10 rounded-full bg-gray-200 flex-shrink-0">
          <Image
            src="/avatar1.png"
            alt="avatarbaginda"
            width={40}
            height={40}
            className="w-full h-full object-cover"
            onError={(e) => {
              e.target.onerror = null;
              e.target.src =
                "data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 24 24' fill='%236B7280'%3E%3Cpath d='M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2zm0 3c1.66 0 3 1.34 3 3s-1.34 3-3 3-3-1.34-3-3 1.34-3 3-3zm0 14.2c-2.5 0-4.71-1.28-6-3.22.03-1.99 4-3.08 6-3.08 1.99 0 5.97 1.09 6 3.08-1.29 1.94-3.5 3.22-6 3.22z'/%3E%3C/svg%3E";
            }}
          />
        </div>
        <div className="flex-1 relative">
          <input
            type="text"
            value={comment}
            onChange={(e) => setComment(e.target.value)}
            placeholder={placeholder}
            className="w-full px-4 py-2 pr-12 border border-gray-300 rounded-full text-sm focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent"
          />
          <button
            type="submit"
            disabled={!comment.trim()}
            className={`absolute right-2 top-1/2 transform -translate-y-1/2 text-blue-500 font-medium text-sm ${
              !comment.trim()
                ? "opacity-50 cursor-not-allowed"
                : "hover:text-blue-600"
            }`}
          >
            Post
          </button>
        </div>
      </div>
    </form>
  );
}
