import React, { useEffect, useState } from "react";
import { Button, Form } from "react-bootstrap";
import { useParams } from "react-router-dom";
import axios from "axios";

export default function CategoryPage() {
  const [questions, setQuestions] = useState([]);
  const [results, setResults] = useState([]);
  const [score, setScore] = useState(null);
  const { categoryId } = useParams();

  useEffect(() => {
    axios
      .get(`/api/questions/${categoryId}`)
      .then((res) => setQuestions(res.data));
  }, [categoryId]);

  const submitHandler = async (e) => {
    e.preventDefault();
    const formdata = Object.fromEntries(new FormData(e.target));
    try {
      const result = await axios.post("/api/questions", formdata);
      setResults(result.data);
      const correctAnswers = result.data.filter(Boolean).length;
      setScore(correctAnswers);
    } catch (error) {
      console.error("Ошибка при отправке данных:", error);
    }
  };

  const getBorderColor = (index) => {
    if (results.length === 0) return "1px solid lightgray";
    return results[index] ? "2px solid green" : "2px solid red";
  };

  return (
    <Form onSubmit={submitHandler}>
      {questions.map((question, index) => {
        const answers = [
          question.incorrectAnswerFirst,
          question.incorrectAnswerSecond,
          question.incorrectAnswerThird,
          question.correctAnswer,
        ];
        const shuffle = (arr) => {
            const shuffled = [...arr]; 
            for (let i = shuffled.length - 1; i > 0; i--) {
              const j = Math.floor(Math.random() * (i + 1));
              [shuffled[i], shuffled[j]] = [shuffled[j], shuffled[i]]; 
            }
            return shuffled;
          };

const shuffledAnswers = shuffle(answers)

        return (
          <Form.Group
            key={question.id}
            style={{
              marginBottom: "20px",
              padding: "10px",
              border: getBorderColor(index),
              borderRadius: "8px",
              boxShadow: "0 0 10px rgba(0, 255, 255, 0.7)",
            }}
          >
            <Form.Label>
              <strong>{question.title}</strong>
            </Form.Label>
            <Form.Select
              aria-label="Default select example"
              name={question.title}
              disabled={results.length > 0}
            >
              <option value="" disabled selected>
                Выберите ответ
              </option>
              {shuffledAnswers.map((answer) => (
                <option key={answer} value={answer}>{answer}</option>
              ))}
            </Form.Select>
          </Form.Group>
        );
      })}

      <Button variant="primary" type="submit">
        Ответить
      </Button>

      {score !== null && (
        <div style={{ marginTop: "20px" }}>
          <h4>
            Ваш результат: {score} из {questions.length}
          </h4>
        </div>
      )}
    </Form>
  );
}
