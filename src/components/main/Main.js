import { useEffect, useState } from "react";
import api from "../../utils/Api";

function Main(props) {
  const [userName, setUserName] = useState("");
  const [userDescription, setUserDescription] = useState("");
  const [userAvatar, setUserAvatar] = useState("");

  useEffect(() => {
    api
      .getUserInfo()
      .then((res) => {
        setUserName(res.name);
        setUserDescription(res.about);
        setUserAvatar(res.avatar);
      })
      .catch((err) => console.log(err));
  });

  return (
    <main>
      <section className="profile">
        <a
          className="profile__container"
          href="#avatar"
          onClick={props.onEditAvatar}
        >
          <img
            src={userAvatar}
            className="profile__avatar"
            alt="Аватар страницы"
          />
        </a>
        <div className="profile__item">
          <h1 className="profile__name">{userName}</h1>
          <button
            className="profile__button-edit"
            type="button"
            aria-label="Редактировать профиль"
            onClick={props.onEditProfile}
          ></button>
          <p className="profile__profi">{userDescription}</p>
        </div>
        <button
          className="profile__button-add"
          type="button"
          aria-label="Добавить фотографию"
          onClick={props.onAddPlace}
        ></button>
      </section>
      <section className="elements">
        <ul className="elements__container"></ul>
      </section>
    </main>
  );
}

export default Main;
