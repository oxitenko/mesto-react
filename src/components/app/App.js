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
  const [selectedCard, setSelectedCard] = useState({});

  function handleCardClick(card) {
    setSelectedCard(card);
  }

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
    setSelectedCard({});
  }

  return (
    <div>
      <Header />
      <Main
        onEditProfile={handleEditProfileClick}
        onAddPlace={handleAddPlaceClick}
        onEditAvatar={handleEditAvatarClick}
        onCardClick={handleCardClick}
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

      <ImagePopup card={selectedCard} onClose={closeAllPopups} />
    </div>
  );
}

export default App;
