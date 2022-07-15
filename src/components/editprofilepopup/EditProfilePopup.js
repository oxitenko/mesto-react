import { useContext, useEffect, useState } from "react";
import { CurrentUserContext } from "../contexts/CurrentUserContext";
import PopupWithForm from "../popupwithform/PopupWithForm";

function EditProfilePopup(props) {
  const [name, setName] = useState("");
  const [description, setDescription] = useState("");
  const value = useContext(CurrentUserContext);

  function handleChangeName(e) {
    setName(e.target.value);
  }

  function handleChangeDescription(e) {
    setDescription(e.target.value);
  }

  useEffect(() => {
    setName(value.name);
    setDescription(value.about);
  }, [value]);

  return (
    <PopupWithForm
      name="edit-card"
      title="Редактировать профиль"
      button="Сохранить"
      onClose={props.onClose}
      isOpen={props.isOpen}
    >
      <div className="popup__input-container">
        <input
          value={name}
          onChange={handleChangeName}
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
          value={description}
          onChange={handleChangeDescription}
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
  );
}

export default EditProfilePopup;
