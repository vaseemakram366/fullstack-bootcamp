function QuestionCard({
    currentQuestion,
    showAnswer,
    setShowAnswer,
}) {
    if (!currentQuestion) {
        return (
            <div className="question-card">
                <p>
                    Select a category and generate a
                    question.
                </p>
            </div>
        );
    }

    return (
        <div className="question-card">
            <h2>Interview Question</h2>

            <p className="question">
                {currentQuestion.question}
            </p>

            {!showAnswer && (
                <button
                    className="show-btn"
                    onClick={() => setShowAnswer(true)}
                >
                    Show Answer
                </button>
            )}

            {showAnswer && (
                <div className="answer">
                    <strong>Answer:</strong>
                    <p>{currentQuestion.answer}</p>
                </div>
            )}
        </div>
    );
}

export default QuestionCard;