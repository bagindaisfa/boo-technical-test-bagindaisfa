import commentsData from '../../data/mockComments'


// Helper to clone the comments to avoid mutating the original data
const getComments = () => JSON.parse(JSON.stringify(commentsData));

export default function handler(req, res) {
  if (req.method === 'POST') {
    // Handle adding a new comment
    if (req.body.action === 'add') {
      const newComment = {
        id: 'c' + (commentsData.length + 1),
        user: { 
          name: 'You', 
          avatar: '/avatar-you.png',
          type: 'User',
          memberSince: 'Now',
          personalityType: 'YOU',
          zodiacSign: 'You'
        },
        text: req.body.text,
        time: 'Just now',
        likes: 0,
        replies: 0,
        hasLiked: false
      };
      commentsData.unshift(newComment);
      return res.status(201).json(newComment);
    }
    
    // Handle liking/unliking a comment
    if (req.body.action === 'like') {
      const { commentId } = req.body;
      const comments = getComments();
      const comment = comments.find(c => c.id === commentId);
      
      if (!comment) {
        return res.status(404).json({ error: 'Comment not found' });
      }
      
      if (comment.hasLiked) {
        comment.likes--;
        comment.hasLiked = false;
      } else {
        comment.likes++;
        comment.hasLiked = true;
      }
      
      // Update the original data (in a real app, this would be a database update)
      const index = commentsData.findIndex(c => c.id === commentId);
      if (index !== -1) {
        commentsData[index] = comment;
      }
      
      return res.status(200).json({ 
        likes: comment.likes, 
        hasLiked: comment.hasLiked 
      });
    }
  }
  
  // Default: return all comments
  res.status(200).json(getComments());
}
