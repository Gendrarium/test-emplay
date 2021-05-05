import { useParams } from 'react-router-dom';
import React from 'react';
import api from '../../utils/api';
import './Answer.css'

function Answer() {
  const [answer, setAnswer] = React.useState('');
  const { id } = useParams();

  React.useEffect(() =>{
    api.getAnswerById(id)
    .then((res) => {
      setAnswer(res || '');
    })
    .catch((err) => {
      console.log(err);
    })
  }, [id]);

  const {questions = [], answers = []} = answer;

  return (
    <main className="main">
      <section className="answer main__answer">
          <h2 className="answer__title">{answer.name}</h2>
          <div className="answer__container">
            <div className="answer__two-columns">
              {questions.map((i, id) => (
                <p className="answer__question" key={id}>{i}</p>
              ))}
            </div>
            <div className="answer__two-columns">
              {answers.map((i, id) => (
                <p className="answer__answer" key={id}>{i}</p>
              ))}
            </div>
          </div>
      </section>
    </main>
  )
}

export default Answer;
