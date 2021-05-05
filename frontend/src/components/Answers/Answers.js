import api from '../../utils/api';
import React from 'react';
import { useHistory } from 'react-router-dom';
import './Answers.css';

function Answers() {
  const [answer, setAnswer] = React.useState([]);
  const history = useHistory();

  function handleButtonClick(e) {
    let id;
    for (let i=0; i<answer.length; i++) {
      if( answer[i].name === e.target.previousSibling.textContent) {
        id = answer[i]._id;
        break;
      }
    }
    history.push(`/answers/${id}`)
  }

  React.useEffect(() =>{
      api.getAnswers()
      .then((res) => {
        setAnswer(res);
      })
      .catch((err) => {
        console.log(err);
      })
  }, []);

  return (
    <main className="main">
      <section className="answers main__answers">
        {answer.map((item) => (
          <div className="answers__wrapper" key={item._id}>
            <h2 className="answers__title">{item.name}</h2>
            <button className="answers__button" onClick={handleButtonClick}>Посмотреть результаты</button>
          </div>
        ))}
      </section>
    </main>
  )
}

export default Answers;
