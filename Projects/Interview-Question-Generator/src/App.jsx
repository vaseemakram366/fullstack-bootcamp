import { useState } from "react";
import Header from "./components/Header";
import CategoryButtons from "./components/CategoryButtons";
import ActionButton from "./components/ActionButton";
import QuestionCard from "./components/QuestionCard";
import questions from "./data/questions";

function App() {
  const [selectedCategory, setSelectedCategory] = useState("");
  const [currentQuestion, setCurrentQuestion] = useState(null);
  const [showAnswer, setShowAnswer] = useState(false);

  function generateQuestion() {
    if (!selectedCategory) {
      alert("Please select a category first");
      return;
    }

    const categoryQuestions = questions[selectedCategory];

    const randomIndex = Math.floor(
      Math.random() * categoryQuestions.length
    );

    const randomQuestion =
      categoryQuestions[randomIndex];

    setCurrentQuestion(randomQuestion);
    setShowAnswer(false);
  }

  return (
    <>
      <Header />

      <CategoryButtons
        setSelectedCategory={setSelectedCategory}
      />

      <div className="selected-category">
        <h3>
          Selected Category:{" "}
          {selectedCategory || "None"}
        </h3>
      </div>

      <ActionButton
        generateQuestion={generateQuestion}
      />

      <QuestionCard
        currentQuestion={currentQuestion}
        showAnswer={showAnswer}
        setShowAnswer={setShowAnswer}
      />
    </>
  );
}

export default App;