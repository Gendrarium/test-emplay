import React from 'react';
import { BrowserRouter, Route } from 'react-router-dom';
import Header from '../Header/Header';
import Main from '../Main/Main';
import Footer from '../Footer/Footer';
import Popup from '../Popup/Popup';
import Answers from '../Answers/Answers';
import Answer from '../Answer/Answer';
import './App.css';

function App() {

  const [isPopupOpen, setIsPopupOpen] = React.useState(false);
  const [isSuccessOpen, setIsSuccessOpen] = React.useState(false);

  return (
    <BrowserRouter>
      <Route exact path="/">
        <Header
          title="Опрос"
          subtitle="Пройдите опрос, нам ценно ваше мнение!"
        />
        <Main
          setIsPopupOpen={setIsPopupOpen}
          setIsSuccess={setIsSuccessOpen}
        />
      </Route>
      <Route exact path="/answers">
        <Header
        title="Страница с ответами"
        subtitle="Здесь можно посмотреть ответы пользователей"
        />
        <Answers/>
      </Route>
      <Route path='/answers/:id'>
        <Header
        title="Ответ"
        subtitle="Здесь можно посмотреть ответы"
        />
        <Answer/>
      </Route>
        <Footer/>
        <Popup
          setIsPopupOpen={setIsPopupOpen}
          isPopupOpen={isPopupOpen}
          isSuccess={isSuccessOpen}
        />
    </BrowserRouter>
  );
}

export default App;
