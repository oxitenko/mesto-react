function ImagePopup() {
  return (
    <div className="popup popup_type_img-view">
      <div className="popup__content popup__content_element-imgview">
        <button
          className="popup__close-button popup__close-button_place_popupview"
          type="button"
          aria-label="Закрыть"
        ></button>
        <img className="popup__pic" src="/" alt="/" />
        <div className="popup__caption"></div>
      </div>
    </div>
  );
}

export default ImagePopup;
