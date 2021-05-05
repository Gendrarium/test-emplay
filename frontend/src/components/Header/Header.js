import './Header.css'

function Header({title, subtitle}) {

  return (
    <header className="header">
      <div className="header__wrapper">
        <h1 className="header__title">{title}</h1>
        <p className="header__subtitle">{subtitle}</p>
      </div>
    </header>
  )
}

export default Header;
