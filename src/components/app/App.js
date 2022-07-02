import Header from "../header/Header";
import Main from "../main/Main";
import Footer from "../footer/Footer";
import PopupWithForm from "../popupwithform/PopupWithForm";
import ImagePopup from "../imagepopup/ImagePopup";
import { useState } from "react";

function App() {
  const [isEditProfilePopupOpen, setIsEditProfilePopupOpen] = useState(false);
  const [isAddPlacePopupOpen, setIsAddPlacePopupOpen] = useState(false);
  const [isEditAvatarPopupOpen, setIsEditAvatarPopupOpen] = useState(false);

  function handleEditAvatarClick() {
    setIsEditAvatarPopupOpen(true);
  }

  function handleEditProfileClick() {
    setIsEditProfilePopupOpen(true);
  }

  function handleAddPlaceClick() {
    setIsAddPlacePopupOpen(true);
  }

  function closeAllPopups() {
    setIsEditProfilePopupOpen(false);
    setIsAddPlacePopupOpen(false);
    setIsEditAvatarPopupOpen(false);
  }

  return (
    <div>
      <Header />
      <Main
        onEditProfile={handleEditProfileClick}
        onAddPlace={handleAddPlaceClick}
        onEditAvatar={handleEditAvatarClick}
      />
      <Footer />
      <PopupWithForm
        name="edit-card"
        title="Редактировать профиль"
        button="Сохранить"
        onClose={closeAllPopups}
        isOpen={isEditProfilePopupOpen}
      >
        <div className="popup__input-container">
          <input
            className="popup__input popup__input_enter_name"
            type="text"
            name="name"
            id="name-input"
            placeholder="Имя"
            minLength="2"
            maxLength="40"
            required
          />
          <span className="name-input-error"></span>
        </div>

        <div className="popup__input-container">
          <input
            className="popup__input popup__input_enter_job"
            type="text"
            name="profi"
            id="profi-input"
            placeholder="О себе"
            minLength="2"
            maxLength="200"
            required
          />
          <span className="profi-input-error"></span>
        </div>
      </PopupWithForm>

      <PopupWithForm
        name="add-card"
        title="Новое место"
        button="Создать"
        onClose={closeAllPopups}
        isOpen={isAddPlacePopupOpen}
      >
        <div className="popup__input-container">
          <input
            className="popup__input popup__input_enter_placename"
            type="text"
            name="placename"
            id="placename-input"
            placeholder="Название"
            minLength="2"
            maxLength="30"
            required
          />
          <span className="placename-input-error"></span>
        </div>

        <div className="popup__input-container">
          <input
            className="popup__input popup__input_enter_linkplace"
            type="url"
            name="linkplace"
            id="linkplace-input"
            placeholder="Ссылка на картинку"
            required
          />
          <span className="linkplace-input-error"></span>
        </div>
      </PopupWithForm>

      <PopupWithForm
        name="update-avatar"
        title="Обновить аватар"
        button="Сохранить"
        onClose={closeAllPopups}
        isOpen={isEditAvatarPopupOpen}
      >
        <div className="popup__input-container">
          <input
            className="popup__input popup__input_enter_avatar"
            type="url"
            name="avatar"
            id="avatar-input"
            placeholder="Ссылка на картинку"
            required
          />
          <span className="avatar-input-error"></span>
        </div>
      </PopupWithForm>

      <PopupWithForm
        name="delete-card"
        title="Вы уверены?"
        button="Да"
      ></PopupWithForm>

      <ImagePopup />

      <template className="template__card">
        <li className="card">
          <img className="card__pic" src="/" alt="/" />
          <button
            className="card__trashbox"
            type="button"
            aria-label="Удалить"
          ></button>
          <div className="card__head">
            <h2 className="card__title"></h2>
            <div className="card__container">
              <button
                className="card__like"
                type="button"
                aria-label="Лайк"
              ></button>
              <span className="card__counter"></span>
            </div>
          </div>
        </li>
      </template>
    </div>
  );
}

export default App;
