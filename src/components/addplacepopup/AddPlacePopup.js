import { useState } from "react";
import PopupWithForm from "../popupwithform/PopupWithForm";

function AddPlacePopup(props) {
  const [placename, setPlacename] = useState("");
  const [linkplace, setLinkplace] = useState("");

  function onChangePlaceName(e) {
    setPlacename(e.target.value);
  }

  function onChangeLinkPlace(e) {
    setLinkplace(e.target.value);
  }

  function handleSubmit(e) {
    e.preventDefault();
    props.onAddPlace({
      name: placename,
      link: linkplace,
    });
    setPlacename("");
    setLinkplace("");
  }

  return (
    <PopupWithForm
      name="add-card"
      title="Новое место"
      button="Создать"
      onClose={props.onClose}
      isOpen={props.isOpen}
      onSubmit={handleSubmit}
    >
      <div className="popup__input-container">
        <input
          value={placename}
          onChange={onChangePlaceName}
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
          value={linkplace}
          onChange={onChangeLinkPlace}
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
  );
}

export default AddPlacePopup;
