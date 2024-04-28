import React, { useState, useEffect } from "react";
import AdminNavBar from "./AdminNavBar";
import QuestionForm from "./QuestionForm";
import QuestionList from "./QuestionList";

function App() {
  const [page, setPage] = useState("List");
  const [formData, setFormData] = useState({
    prompt: "",
    answer1: "",
    answer2: "",
    answer3: "",
    answer4: "",
    correctIndex: 0,
  });

  function handleSubmit(event) {
    event.preventDefault();
    fetch("http://localhost:4000/questions", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({
        "prompt": formData.prompt,
        "answers": [formData.answer1, 
          formData.answer2, 
          formData.answer3, 
          formData.answer4],
        "correctIndex": formData.correctIndex
      })
    })
  }

  return (
    <main>
      <AdminNavBar onChangePage={setPage} />
      {page === "Form" ? 
      <QuestionForm 
      formData={formData} 
      setFormData={setFormData} 
      handleSubmit={handleSubmit} />
       : <QuestionList />}
    </main>
  );
}

export default App;
