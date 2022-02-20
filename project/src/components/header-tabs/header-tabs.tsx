type HeaderTabItem = {
  name: string,
  href: string,
  isActive?: boolean,
}

function HeaderTabs(): JSX.Element {
  const tabsItems: HeaderTabItem[] = [
    {
      name: 'Paris',
      href: '#',
      isActive: false,
    },
    {
      name: 'Cologne',
      href: '#',
      isActive: false,
    },
    {
      name: 'Brussels',
      href: '#',
      isActive: false,
    },
    {
      name: 'Amsterdam',
      href: '#',
      isActive: true,
    },
    {
      name: 'Dusseldorf',
      href: '#',
      isActive: false,
    },
  ];

  return (
    <div className="tabs">
      <section className="locations container">
        <ul className="locations__list tabs__list">
          {tabsItems.map((it) => (
            <li className="locations__item" key={Math.random() + Math.random()}>
              <a className={`locations__item-link tabs__item ${it.isActive && 'tabs__item--active'}`} href={it.href}>
                <span>{it.name}</span>
              </a>
            </li>
          ))}
        </ul>
      </section>
    </div>
  );
}

export default HeaderTabs;
