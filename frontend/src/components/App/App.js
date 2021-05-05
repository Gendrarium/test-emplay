import React from 'react';
import Header from '../Header/Header';
import Main from '../Main/Main';
import Footer from '../Footer/Footer';
import Popup from '../Popup/Popup';
import './App.css';

function App() {

  const [isPopupOpen, setIsPopupOpen] = React.useState(false);
  const [isSuccessOpen, setIsSuccessOpen] = React.useState(false);

  return (
    <>
      <Header/>
      <Main
        setIsPopupOpen={setIsPopupOpen}
        setIsSuccess={setIsSuccessOpen}
      />
      <Footer/>
      <Popup
        setIsPopupOpen={setIsPopupOpen}
        isPopupOpen={isPopupOpen}
        isSuccess={isSuccessOpen}
      />
    </>
  );
}

export default App;
