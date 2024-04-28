import React, { useState, useEffect } from "react";
import QuestionItem from "./QuestionItem";

function QuestionList() {

  const [questions, setQuestions] = useState([])

useEffect(() => {
fetch("http://localhost:4000/questions")
.then((resp) => resp.json())
.then((data) => (setQuestions(data)))
}, [])
console.log(questions)

function handleDeleteClick(id) {
  console.log(id)
questions.filter((question) => question.id !== id);
  fetch(`http://localhost:4000/questions/${id}`, {
    method: "DELETE",
  })
  .then((resp) => resp.json())
  .then((data) => setQuestions(data))
  .catch((error) => {
    console.error("Error fetching questions:", error);
  })
};

const questionDisplay = questions.map((question) => 
(
  <QuestionItem key={question.id} question={question} handleDeleteClick ={handleDeleteClick}/>
))

  return (
    <section>
      <h1>Quiz Questions</h1>
      <ul>{questionDisplay}</ul>
    </section>
  );
}

export default QuestionList;
