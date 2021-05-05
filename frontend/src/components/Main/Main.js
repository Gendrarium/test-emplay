import Question from '../Question/Question';
import {
  titles,
  names,
  valueOne,
  inputOne,
  valueTwo,
  inputTwo
} from '../../utils/const';
import api from '../../utils/api';
import React from 'react';
import './Main.css';

function Main({setIsPopupOpen, setIsSuccess}) {
  const [values, setValues] = React.useState({});

  const handleChangeInput = (e) => {
    const input = e.target;
    const { name, value } = input;
    if (input.type === 'radio') {
      const textContent = input.closest('.questions__label').textContent;
      setValues({ ...values, [name]: textContent});
    } else if (input.type === 'checkbox') {
      const textContent = input.closest('.questions__label').textContent;
      if (input.checked && (values[name].indexOf(textContent) === -1)) {
        setValues({ ...values, [name]: [...values[name], textContent]});
      } else {
        const newChecked = values[name].slice();
        newChecked.splice(newChecked.indexOf(textContent), 1);
        setValues({ ...values, [name]: newChecked});
      }
    } else {
      setValues({ ...values, [name]: value});
    }
  }

  function handleSubmit(e) {
    e.preventDefault();

    const answers = [];
    names.forEach((item)=> {
      if (Array.isArray(values[item])) {
        answers.push(values[item].join(', '));
      } else {
        answers.push(values[item]);
      }
    })

    api.sendAnswers({ questions: titles, answers: answers})
      .then((res)=>{
        if(res) {
          setIsSuccess(true)
        } else {
          setIsSuccess(false)
        }
        setIsPopupOpen(true);
      })
      .catch((err)=> {
        console.log(err);
        setIsSuccess(false)
        setIsPopupOpen(true);
      })
  }

  return (
    <main className="main">
      <section className="questions">
        <form className="questions__form" onSubmit={handleSubmit}>
          <Question
            type="text"
            title={titles[0]}
            name={names[0]}
            handleChange={handleChangeInput}
            values={values}
            setValues={setValues}
          />
          <Question
            type="radio"
            title={titles[1]}
            name={names[1]}
            value={valueOne}
            input={inputOne}
            handleChange={handleChangeInput}
            values={values}
            setValues={setValues}
          />
          <Question
            type="checkbox"
            title={titles[2]}
            name={names[2]}
            value={valueTwo}
            input={inputTwo}
            handleChange={handleChangeInput}
            values={values}
            setValues={setValues}
          />
          <button className="questions__button"  type="submit">Отправить</button>
        </form>
      </section>
    </main>
  )
}

export default Main;
