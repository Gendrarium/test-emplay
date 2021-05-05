import './Popup.css'

function Popup({isPopupOpen, setIsPopupOpen, isSuccess}) {

  function handleCloseOverlay (e) {
    if (e.target.className === 'popup popup_display_visible') {
      setIsPopupOpen(false);
    }
  }

  return (
    <div className={`popup ${isPopupOpen ? 'popup_display_visible' : ''}`} onClick={handleCloseOverlay}>
      <div className="popup__container">
        <h2 className="popup__title">{isSuccess ? 'Спасибо за участие в опросе!' : 'Ошибка!'}</h2>
        <p className="popup__subtitle">{isSuccess ? 'Данные сохранены.' : 'Где-то что-то сломалось, попробуйте ещё раз позднее'}</p>
      </div>
    </div>
  );
}


export default Popup;
