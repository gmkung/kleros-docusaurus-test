import React, { useState } from 'react';
import styles from './InteractiveQuiz.module.css';

export interface QuizQuestion {
  id: number;
  question: string;
  options: {
    id: string;
    text: string;
  }[];
  correctAnswer: string;
  explanation: string;
}

interface InteractiveQuizProps {
  title: string;
  description: string;
  questions: QuizQuestion[];
  passingScore: number;
  onComplete?: (score: number, passed: boolean) => void;
}

const InteractiveQuiz: React.FC<InteractiveQuizProps> = ({
  title,
  description,
  questions,
  passingScore,
  onComplete
}) => {
  const [currentQuestion, setCurrentQuestion] = useState(0);
  const [selectedAnswers, setSelectedAnswers] = useState<Record<number, string>>({});
  const [showResults, setShowResults] = useState(false);
  const [quizStarted, setQuizStarted] = useState(false);

  const handleAnswerSelect = (questionId: number, answerId: string) => {
    setSelectedAnswers(prev => ({
      ...prev,
      [questionId]: answerId
    }));
  };

  const goToNextQuestion = () => {
    if (currentQuestion < questions.length - 1) {
      setCurrentQuestion(prev => prev + 1);
    }
  };

  const goToPrevQuestion = () => {
    if (currentQuestion > 0) {
      setCurrentQuestion(prev => prev - 1);
    }
  };

  const finishQuiz = () => {
    setShowResults(true);
    const score = calculateScore();
    const passed = score >= passingScore;
    if (onComplete) {
      onComplete(score, passed);
    }
  };

  const calculateScore = (): number => {
    let correct = 0;
    questions.forEach(question => {
      if (selectedAnswers[question.id] === question.correctAnswer) {
        correct++;
      }
    });
    return correct;
  };

  const resetQuiz = () => {
    setCurrentQuestion(0);
    setSelectedAnswers({});
    setShowResults(false);
    setQuizStarted(false);
  };

  const getScoreColor = (score: number): string => {
    const percentage = (score / questions.length) * 100;
    if (percentage >= 90) return '#4D00B4'; // Kleros purple for excellent
    if (percentage >= 80) return '#059669'; // Green for good
    if (percentage >= 60) return '#D97706'; // Orange for fair
    return '#DC2626'; // Red for needs improvement
  };

  const getScoreMessage = (score: number): string => {
    const percentage = (score / questions.length) * 100;
    if (percentage >= 90) return 'Excellent! You\'re ready to participate.';
    if (percentage >= 80) return 'Good job! Review missed topics and you\'ll be ready.';
    if (percentage >= 60) return 'Fair knowledge. Study the documentation more before proceeding.';
    return 'Needs improvement. Please review the materials thoroughly.';
  };

  if (!quizStarted) {
    return (
      <div className={styles.quizContainer}>
        <div className={styles.startScreen}>
          <h2 className={styles.quizTitle}>{title}</h2>
          <p className={styles.quizDescription}>{description}</p>
          
          <div className={styles.quizInfo}>
            <div className={styles.infoItem}>
              <strong>Questions:</strong> {questions.length}
            </div>
            <div className={styles.infoItem}>
              <strong>Passing Score:</strong> {passingScore}/{questions.length} ({Math.round((passingScore/questions.length)*100)}%)
            </div>
            <div className={styles.infoItem}>
              <strong>Time:</strong> No time limit
            </div>
          </div>

          <div className={styles.instructions}>
            <h3>Instructions:</h3>
            <ul>
              <li>Read each question carefully</li>
              <li>Select the best answer from the multiple choice options</li>
              <li>You can navigate back and forth between questions</li>
              <li>Review your answers before submitting</li>
              <li>You'll see explanations after completing the quiz</li>
            </ul>
          </div>

          <button 
            className={styles.startButton}
            onClick={() => setQuizStarted(true)}
          >
            Start Quiz
          </button>
        </div>
      </div>
    );
  }

  if (showResults) {
    const score = calculateScore();
    const percentage = Math.round((score / questions.length) * 100);
    const passed = score >= passingScore;

    return (
      <div className={styles.quizContainer}>
        <div className={styles.resultsScreen}>
          <h2 className={styles.resultsTitle}>Quiz Results</h2>
          
          <div className={styles.scoreDisplay}>
            <div 
              className={styles.scoreCircle}
              style={{ borderColor: getScoreColor(score) }}
            >
              <span className={styles.scoreNumber} style={{ color: getScoreColor(score) }}>
                {score}/{questions.length}
              </span>
              <span className={styles.scorePercentage}>
                {percentage}%
              </span>
            </div>
          </div>

          <div className={styles.scoreMessage} style={{ color: getScoreColor(score) }}>
            {getScoreMessage(score)}
          </div>

          {passed ? (
            <div className={styles.passMessage}>
              🎉 Congratulations! You passed the quiz!
            </div>
          ) : (
            <div className={styles.failMessage}>
              📚 Keep studying! Review the missed topics below.
            </div>
          )}

          <div className={styles.questionReview}>
            <h3>Question Review:</h3>
            {questions.map((question, index) => {
              const userAnswer = selectedAnswers[question.id];
              const isCorrect = userAnswer === question.correctAnswer;
              const selectedOption = question.options.find(opt => opt.id === userAnswer);
              const correctOption = question.options.find(opt => opt.id === question.correctAnswer);

              return (
                <div key={question.id} className={styles.reviewItem}>
                  <div className={styles.reviewHeader}>
                    <span className={styles.questionNumber}>Q{index + 1}</span>
                    <span className={isCorrect ? styles.correct : styles.incorrect}>
                      {isCorrect ? '✓' : '✗'}
                    </span>
                  </div>
                  <div className={styles.reviewQuestion}>{question.question}</div>
                  <div className={styles.reviewAnswers}>
                    <div className={`${styles.reviewAnswer} ${isCorrect ? styles.correctAnswer : styles.wrongAnswer}`}>
                      <strong>Your answer:</strong> {selectedOption?.text || 'Not answered'}
                    </div>
                    {!isCorrect && (
                      <div className={styles.reviewAnswer}>
                        <strong>Correct answer:</strong> {correctOption?.text}
                      </div>
                    )}
                  </div>
                  <div className={styles.explanation}>
                    <strong>Explanation:</strong> {question.explanation}
                  </div>
                </div>
              );
            })}
          </div>

          <div className={styles.resultActions}>
            <button className={styles.retakeButton} onClick={resetQuiz}>
              Retake Quiz
            </button>
          </div>
        </div>
      </div>
    );
  }

  const question = questions[currentQuestion];
  const progress = ((currentQuestion + 1) / questions.length) * 100;
  const allAnswered = questions.every(q => selectedAnswers[q.id]);

  return (
    <div className={styles.quizContainer}>
      <div className={styles.progressBar}>
        <div 
          className={styles.progressFill} 
          style={{ width: `${progress}%` }}
        />
      </div>
      
      <div className={styles.questionHeader}>
        <span className={styles.questionCounter}>
          Question {currentQuestion + 1} of {questions.length}
        </span>
      </div>

      <div className={styles.questionContent}>
        <h3 className={styles.questionText}>{question.question}</h3>
        
        <div className={styles.options}>
          {question.options.map((option) => (
            <label 
              key={option.id} 
              className={`${styles.option} ${
                selectedAnswers[question.id] === option.id ? styles.selected : ''
              }`}
            >
              <input
                type="radio"
                name={`question-${question.id}`}
                value={option.id}
                checked={selectedAnswers[question.id] === option.id}
                onChange={() => handleAnswerSelect(question.id, option.id)}
                className={styles.radioInput}
              />
              <span className={styles.optionText}>
                <strong>{option.id.toUpperCase()})</strong> {option.text}
              </span>
            </label>
          ))}
        </div>
      </div>

      <div className={styles.navigation}>
        <button 
          className={styles.navButton}
          onClick={goToPrevQuestion}
          disabled={currentQuestion === 0}
        >
          ← Previous
        </button>

        <div className={styles.questionDots}>
          {questions.map((_, index) => (
            <button
              key={index}
              className={`${styles.dot} ${
                index === currentQuestion ? styles.currentDot : ''
              } ${
                selectedAnswers[questions[index].id] ? styles.answeredDot : ''
              }`}
              onClick={() => setCurrentQuestion(index)}
            >
              {index + 1}
            </button>
          ))}
        </div>

        {currentQuestion === questions.length - 1 ? (
          <button 
            className={`${styles.navButton} ${styles.finishButton}`}
            onClick={finishQuiz}
            disabled={!allAnswered}
          >
            Finish Quiz
          </button>
        ) : (
          <button 
            className={styles.navButton}
            onClick={goToNextQuestion}
          >
            Next →
          </button>
        )}
      </div>

      {!allAnswered && currentQuestion === questions.length - 1 && (
        <div className={styles.warning}>
          ⚠️ Please answer all questions before finishing the quiz.
        </div>
      )}
    </div>
  );
};

export default InteractiveQuiz;