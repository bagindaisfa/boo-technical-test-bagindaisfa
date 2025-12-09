// pages/questions/[id].js
import { useEffect, useState } from "react";
import { useRouter } from "next/router";
import Header from "../../components/Header";
import QuestionCard from "../../components/QuestionCard";
import CommentList from "../../components/CommentList";
import CommentInput from "../../components/CommentInput";
import { LikeIcon, CommentIcon, ShareIcon } from "../../components/Icons";

export default function QuestionPage() {
  const router = useRouter();
  const [question, setQuestion] = useState(null);
  const [comments, setComments] = useState([]);
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const [questionRes, commentsRes] = await Promise.all([
          fetch("/api/questions").then((res) => res.json()),
          fetch("/api/comments").then((res) => res.json()),
        ]);

        setQuestion(questionRes);
        setComments(commentsRes);
      } catch (error) {
        console.error("Error fetching data:", error);
      } finally {
        setIsLoading(false);
      }
    };

    fetchData();
  }, []);

  const handleAddComment = async (text) => {
    try {
      const response = await fetch("/api/comments", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({
          action: "add",
          text,
        }),
      });

      const newComment = await response.json();
      setComments((prev) => [newComment, ...prev]);
    } catch (error) {
      console.error("Error adding comment:", error);
    }
  };

  const handleLikeComment = async (commentId, data) => {
    setComments((prev) =>
      prev.map((comment) =>
        comment.id === commentId
          ? {
              ...comment,
              likes: data.likes,
              hasLiked: data.hasLiked,
            }
          : comment
      )
    );
  };

  const handleReply = async (commentId, text) => {
    console.log(`Reply to ${commentId}: ${text}`);
  };

  const handleBack = () => {
    router.back();
  };

  if (isLoading) {
    return (
      <div className="min-h-screen bg-gray-50 flex items-center justify-center">
        <div className="animate-spin rounded-full h-12 w-12 border-t-2 border-b-2 border-blue-500"></div>
      </div>
    );
  }

  if (!question) {
    return (
      <div className="min-h-screen bg-gray-50 flex items-center justify-center">
        <p className="text-gray-500">Question not found</p>
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-gray-50 pb-24">
      <div className="max-w-2xl mx-auto p-4">
        <Header
          user={question.user}
          description={question.description}
          joinText={question.joinText}
          onBack={handleBack}
        />

        <QuestionCard question={question} onLike={() => {}} />

        <div className="mt-6">
          <CommentInput
            onSubmit={handleAddComment}
            placeholder="Add your comment..."
          />

          <div className="mb-4">
            <h3 className="font-medium text-gray-900">
              {question.comments.toLocaleString()}{" "}
              {question.comments === 1 ? "Comment" : "Comments"}
            </h3>
          </div>

          <CommentList
            comments={comments}
            onLike={handleLikeComment}
            onReply={handleReply}
          />
        </div>
      </div>

      {/* Bottom navigation */}
      <div className="fixed bottom-6 left-0 right-0 flex justify-center pointer-events-none">
        <div className="px-6 py-3 rounded-full bg-black/40 backdrop-blur-md shadow-[0_0_20px_rgba(0,255,255,0.05)] flex gap-6 text-white/70 text-sm pointer-events-auto">
          <button className="flex items-center space-x-1 hover:text-white">
            <LikeIcon className="w-5 h-5" />
            <span>Like</span>
          </button>
          <button className="flex items-center space-x-1 hover:text-white">
            <CommentIcon className="w-5 h-5" />
            <span>Comment</span>
          </button>
          <button className="flex items-center space-x-1 hover:text-white">
            <ShareIcon className="w-5 h-5" />
            <span>Share</span>
          </button>
        </div>
      </div>
    </div>
  );
}
