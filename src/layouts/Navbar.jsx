import { useLanguage } from '../contexts/LanguageContext'

const Navbar = () => {
  const { t, toggle } = useLanguage()

  return (
    <nav className="navbar">
      <div className="navbar__logo">isolux</div>
      <button className="navbar__lang-toggle" onClick={toggle}>
        {t.toggle}
      </button>
    </nav>
  )
}

export default Navbar
