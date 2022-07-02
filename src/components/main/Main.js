function Main(props) {
  return (
    <main>
      <section className="profile">
        <a
          className="profile__container"
          href="#avatar"
          onClick={props.onEditAvatar}
        >
          <img className="profile__avatar" src="/" alt="Аватар страницы" />
        </a>
        <div className="profile__item">
          <h1 className="profile__name">Hideo Kolima</h1>
          <button
            className="profile__button-edit"
            type="button"
            aria-label="Редактировать профиль"
            onClick={props.onEditProfile}
          ></button>
          <p className="profile__profi">Game developer</p>
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
