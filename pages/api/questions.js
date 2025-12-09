import questionsData from '../../data/mockQuestions';

// Helper to clone the questions to avoid mutating the original data
const getQuestions = () => JSON.parse(JSON.stringify(questionsData));

export default function handler(req, res) {
  if (req.method === 'POST' && req.body.action === 'like') {
    // Handle liking/unliking the question
    const questions = getQuestions();
    const question = questions[0]; // Assuming we're only working with the first question
    
    if (question.hasLiked) {
      question.likes--;
      question.hasLiked = false;
    } else {
      question.likes++;
      question.hasLiked = true;
    }
    
    // Update the original data (in a real app, this would be a database update)
    questionsData[0] = question;
    
    return res.status(200).json({ 
      likes: question.likes, 
      hasLiked: question.hasLiked 
    });
  }
  
  // Default: return the first question
  res.status(200).json(getQuestions()[0]);
}
