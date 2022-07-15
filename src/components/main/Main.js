import { useEffect, useState, useContext } from "react";
import api from "../../utils/Api";
import Card from "../card/Card";
import { CurrentUserContext } from "../contexts/CurrentUserContext";

function Main(props) {
  const [cards, setCards] = useState([]);
  const value = useContext(CurrentUserContext);

  function handleCardLike(card) {
    const isLiked = card.likes.some((i) => i._id === value._id);
    if (!isLiked) {
      api
        .likeCard(card)
        .then((res) => {
          setCards((state) => state.map((c) => (c._id === card._id ? res : c)));
        })
        .catch((err) => console.log(err));
    }
    if (isLiked) {
      api
        .deleteLike(card)
        .then((res) => {
          setCards((state) => state.map((c) => (c._id === card._id ? res : c)));
        })
        .catch((err) => console.log(err));
    }
  }

  function handleCardDelete(card) {
    api
      .deleteCard(card)
      .then((res) => {
        setCards((state) => state.filter((d) => d._id !== card._id && res));
      })
      .catch((err) => console.log(err));
  }

  useEffect(() => {
    api
      .getCards()
      .then((res) => {
        setCards(res);
      })
      .catch((err) => console.log(err));
  }, []);

  return (
    <main>
      <section className="profile">
        <a
          className="profile__container"
          href="#avatar"
          onClick={props.onEditAvatar}
        >
          <img
            src={value.avatar}
            className="profile__avatar"
            alt="Аватар страницы"
          />
        </a>
        <div className="profile__item">
          <h1 className="profile__name">{value.name}</h1>
          <button
            className="profile__button-edit"
            type="button"
            aria-label="Редактировать профиль"
            onClick={props.onEditProfile}
          ></button>
          <p className="profile__profi">{value.about}</p>
        </div>
        <button
          className="profile__button-add"
          type="button"
          aria-label="Добавить фотографию"
          onClick={props.onAddPlace}
        ></button>
      </section>
      <section className="elements">
        <ul className="elements__container">
          {cards.map((item) => {
            return (
              <Card
                key={item._id}
                card={item}
                onCardClick={props.onCardClick}
                onCardLike={handleCardLike}
                onCardDelete={handleCardDelete}
              />
            );
          })}
        </ul>
      </section>
    </main>
  );
}

export default Main;
