import Header from '../header/header';
import HeaderTabs from '../header-tabs/header-tabs';
import PlaceCard from '../place-card/place-card';

type PlaceCards = {
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
  }
}[]


function Main(): JSX.Element {
  const placeCards: PlaceCards = [
    {
      mark: 'Premium',
      price: 120,
      priceText: 'night',
      rate: 4,
      title: 'Beautiful &amp; luxurious apartment at great location',
      href: '#',
      type: 'Apartment',
      inBookmark: false,
      image: {
        src: 'img/apartment-01.jpg',
        alt: 'Place image',
      },
    },
    {
      price: 80,
      priceText: 'night',
      rate: 4,
      title: 'Wood and stone place',
      href: '#',
      type: 'Private room',
      inBookmark: true,
      image: {
        src: 'img/room.jpg',
        alt: 'Place image',
      },
    },
    {
      price: 132,
      priceText: 'night',
      rate: 4,
      title: 'Canal View Prinsengracht',
      href: '#',
      type: 'Apartment',
      inBookmark: false,
      image: {
        src: 'img/apartment-02.jpg',
        alt: 'Place image',
      },
    },
    {
      mark: 'Premium',
      price: 180,
      priceText: 'night',
      rate: 5,
      title: 'Nice, cozy, warm big bed apartment',
      href: '#',
      type: 'Apartment',
      inBookmark: false,
      image: {
        src: 'img/apartment-03.jpg',
        alt: 'Place image',
      },
    },
    {
      price: 80,
      priceText: 'night',
      rate: 4,
      title: 'Wood and stone place',
      href: '#',
      type: 'Private room',
      inBookmark: true,
      image: {
        src: 'img/room.jpg',
        alt: 'Place image',
      },
    },
  ];

  return (
    <div className="page page--gray page--main">
      <Header />

      <main className="page__main page__main--index">
        <h1 className="visually-hidden">Cities</h1>

        <HeaderTabs />

        <div className="cities">
          <div className="cities__places-container container">
            <section className="cities__places places">
              <h2 className="visually-hidden">Places</h2>
              <b className="places__found">312 places to stay in Amsterdam</b>
              <form className="places__sorting" action="#" method="get">
                <span className="places__sorting-caption">Sort by</span>
                <span className="places__sorting-type" tabIndex={0}>
                  Popular
                  <svg className="places__sorting-arrow" width="7" height="4">
                    <use xlinkHref="#icon-arrow-select"></use>
                  </svg>
                </span>
                <ul className="places__options places__options--custom places__options--opened">
                  <li className="places__option places__option--active" tabIndex={0}>Popular</li>
                  <li className="places__option" tabIndex={0}>Price: low to high</li>
                  <li className="places__option" tabIndex={0}>Price: high to low</li>
                  <li className="places__option" tabIndex={0}>Top rated first</li>
                </ul>
              </form>
              <div className="cities__places-list places__list tabs__content">

                {placeCards.map((card) => <PlaceCard card={card} key={Math.random() + Math.random()} />)}

              </div>
            </section>
            <div className="cities__right-section">
              <section className="cities__map map"></section>
            </div>
          </div>
        </div>
      </main>
    </div>
  );
}

export default Main;
