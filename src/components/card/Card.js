function Card(props) {
  function handleClick() {
    props.onCardClick(props.card);
  }

  return (
    <li className="card">
      <img
        className="card__pic"
        src={props.card.link}
        alt={props.card.name}
        onClick={handleClick}
      />
      <button
        className="card__trashbox"
        type="button"
        aria-label="Удалить"
      ></button>
      <div className="card__head">
        <h2 className="card__title">{props.card.name}</h2>
        <div className="card__container">
          <button
            className="card__like"
            type="button"
            aria-label="Лайк"
          ></button>
          <span className="card__counter">{props.card.likes.length}</span>
        </div>
      </div>
    </li>
  );
}

export default Card;
