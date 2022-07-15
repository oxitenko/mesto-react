import Header from "../header/Header";
import Main from "../main/Main";
import Footer from "../footer/Footer";
import PopupWithForm from "../popupwithform/PopupWithForm";
import ImagePopup from "../imagepopup/ImagePopup";
import { useEffect, useState } from "react";
import api from "../../utils/Api";
import { CurrentUserContext } from "../contexts/CurrentUserContext";
import EditProfilePopup from "../editprofilepopup/EditProfilePopup";

function App() {
  const [isEditProfilePopupOpen, setIsEditProfilePopupOpen] = useState(false);
  const [isAddPlacePopupOpen, setIsAddPlacePopupOpen] = useState(false);
  const [isEditAvatarPopupOpen, setIsEditAvatarPopupOpen] = useState(false);
  const [selectedCard, setSelectedCard] = useState({});
  const [currentUser, setCurrentUser] = useState("");

  useEffect(() => {
    api
      .getUserInfo()
      .then((res) => setCurrentUser(res))
      .catch((err) => console.log(err));
  }, []);

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
    <CurrentUserContext.Provider value={currentUser}>
      <div>
        <Header />
        <Main
          onEditProfile={handleEditProfileClick}
          onAddPlace={handleAddPlaceClick}
          onEditAvatar={handleEditAvatarClick}
          onCardClick={handleCardClick}
        />
        <Footer />

        <EditProfilePopup
          isOpen={isEditProfilePopupOpen}
          onClose={closeAllPopups}
        />

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
    </CurrentUserContext.Provider>
  );
}

export default App;
