import { Fragment } from 'react'
import { useLanguage } from '../contexts/LanguageContext'
import Navbar from '../layouts/Navbar'

const Home = () => {
  const { lang, t } = useLanguage()

  return (
    <div className="page-home">
      <Navbar />

      <section className="hero">
        <div className="hero__decoration" aria-hidden="true">
          <div className="hero__glow" />
          <div className="hero__ring" />
        </div>

        <div className="hero__inner">
          <div className="hero__content" key={lang}>
            <span className="hero__eyebrow">{t.sub}</span>
            <h1 className="hero__title">{t.primary}</h1>
            <p className="hero__tagline">{t.tagline}</p>
          </div>

          <div className="hero__services" key={`services-${lang}`}>
            {t.services.map((s, i) => (
              <Fragment key={i}>
                {i > 0 && <span className="hero__sep" aria-hidden="true">/</span>}
                <span className="hero__service">{s}</span>
              </Fragment>
            ))}
          </div>

          <a
            className="hero__contact"
            href="mailto:isolux.official.tw@gmail.com"
            key={`contact-${lang}`}
          >
            <span className="hero__contact-label">{t.contact}</span>
            <span className="hero__contact-email">isolux.official.tw@gmail.com</span>
          </a>
        </div>
      </section>
    </div>
  )
}

export default Home
