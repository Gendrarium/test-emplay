import Question from '../Question/Question';
import {
  titles,
  valueOne,
  inputOne,
  valueTwo,
  inputTwo
} from '../../utils/const';
import api from '../../utils/api';
import React from 'react';
import './Main.css';

function Main() {
  const [values, setValues] = React.useState({});
  const [checked, setChecked] = React.useState([]);

  const handleChangeInput = (e) => {
    const input = e.target;
    const { value, name} = input;
    setValues({ ...values, [name]: value});
  }

  const handleChangeChechBox = (e) => {
    const input = e.target;
    const {value} = input;
    if (e.target.checked) {
      setChecked([...checked, value]);
    }
  }

  function handleSubmit(e) {
    e.preventDefault();

    api.sendAnswers({questions: titles})
      .then(
        console.log('привет')
      )
  }

  return (
    <main className="main">
      <section className="questions">
        <form className="questions__form" onSubmit={handleSubmit}>
          <Question
            type="text"
            title={titles[0]}
            name="name"
            handleChange={handleChangeInput}
            values={values}
          />
          <Question
            type="radio"
            title={titles[1]}
            name="vegetable"
            value={valueOne}
            input={inputOne}
            handleChange={handleChangeInput}
            values={values}
          />
          <Question
            type="checkbox"
            title={titles[2]}
            name="snack"
            value={valueTwo}
            input={inputTwo}
            handleChange={handleChangeChechBox}
            values={values}
          />
          <button className="questions__button"  type="submit">Отправить</button>
        </form>
      </section>
    </main>
  )
}

export default Main;
