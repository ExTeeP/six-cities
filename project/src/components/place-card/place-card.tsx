type PlaceCard = {
  mark?: string,
  price: number,
  priceText: string,
  rate: number,
  title: string,
  href: string,
  type: string,
  inBookmark: boolean,
  image: {
    src: string,
    alt: string,
  },
}

type PlaceCardProps = {
  card: PlaceCard,
}

function getPercentRating(rating: number): string {
  if (rating >= 0 && rating <= 5) {
    return `${rating * 20}%`;
  }

  return '0%';
}

function markEl(markText: string): JSX.Element {
  return (
    <div className="place-card__mark">
      <span>{markText}</span>
    </div>
  );
}

function PlaceCard({card}: PlaceCardProps): JSX.Element {
  const {
    mark, price, priceText, rate, title, href, type, inBookmark, image,
  } = card;

  return (
    <article className="cities__place-card place-card">
      {mark && markEl(mark)}
      <div className="cities__image-wrapper place-card__image-wrapper">
        <a href={href}>
          <img className="place-card__image" src={image.src} width="260" height="200" alt={image.alt} />
        </a>
      </div>
      <div className="place-card__info">
        <div className="place-card__price-wrapper">
          <div className="place-card__price">
            <b className="place-card__price-value">&euro;{price}</b>
            <span className="place-card__price-text">&#47;&nbsp;{priceText}</span>
          </div>
          <button className={`place-card__bookmark-button ${inBookmark && 'place-card__bookmark-button--active'} button`} type="button">
            <svg className="place-card__bookmark-icon" width="18" height="19">
              <use xlinkHref="#icon-bookmark"></use>
            </svg>
            <span className="visually-hidden">{inBookmark ? 'In bookmarks' : 'To bookmarks'}</span>
          </button>
        </div>
        <div className="place-card__rating rating">
          <div className="place-card__stars rating__stars">
            <span style={{width: getPercentRating(rate)}}></span>
            <span className="visually-hidden">Rating: {rate} stars</span>
          </div>
        </div>
        <h2 className="place-card__name">
          <a href={href}>{title}</a>
        </h2>
        <p className="place-card__type">{type}</p>
      </div>
    </article>
  );
}

export default PlaceCard;
