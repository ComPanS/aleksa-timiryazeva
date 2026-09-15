import { useState } from 'react'
import { ArrowDown, ArrowUpRight, Check, Clock3, MapPin, Phone, Star } from 'lucide-react'
import { amenities, bookingUrl, gallery, reviewTopics, reviews, serviceCategories, site } from '../content/site'

const asset = (path: string) => `${import.meta.env.BASE_URL}${path}`

export function HomePage() {
  const [activeCategory, setActiveCategory] = useState(serviceCategories[0].id)
  const active = serviceCategories.find((category) => category.id === activeCategory) ?? serviceCategories[0]

  return (
    <>
      <section className="hero" id="top">
        <img className="hero-photo" src={asset('assets/salon-cover.jpg')} alt="Интерьер салона красоты Алекса" />
        <div className="hero-shade" />
        <div className="hero-content">
          <div className="hero-brand">
            <img src={asset('assets/aleksa-logo.jpg')} alt="Алекса, студия красоты" />
          </div>
          <div className="hero-copy">
            <p className="eyebrow">Студия красоты · Нижний Новгород</p>
            <h1>Салон красоты «Алекса»</h1>
            <p className="hero-lede">Волосы, ногти и косметология в одном светлом пространстве на улице Тимирязева.</p>
            <div className="hero-actions">
              <a className="button button-primary" href={bookingUrl} target="_blank" rel="noreferrer">
                Записаться онлайн <ArrowUpRight aria-hidden="true" />
              </a>
              <a className="text-link text-link-light" href="#services">Смотреть услуги <ArrowDown aria-hidden="true" /></a>
            </div>
          </div>
          <div className="hero-facts" aria-label="Краткая информация">
            <span><Star aria-hidden="true" fill="currentColor" /> {site.rating.value} · {site.rating.reviews} отзывов</span>
            <span><Clock3 aria-hidden="true" /> Ежедневно до 20:00</span>
          </div>
        </div>
      </section>

      <section className="service-section" id="services">
        <div className="section-head section-head-wide">
          <p className="eyebrow">01 · Услуги и цены</p>
          <h2>Выберите своё направление</h2>
          <p>Точная стоимость зависит от выбранной услуги, длины волос или объёма работы. Итог можно уточнить при записи.</p>
        </div>
        <div className="service-browser">
          <div className="service-tabs" role="tablist" aria-label="Направления услуг">
            {serviceCategories.map((category, index) => (
              <button
                key={category.id}
                className={active.id === category.id ? 'active' : ''}
                role="tab"
                aria-selected={active.id === category.id}
                aria-controls="service-panel"
                onClick={() => setActiveCategory(category.id)}
              >
                <span>0{index + 1}</span>{category.shortLabel}
              </button>
            ))}
          </div>
          <div className="service-panel" id="service-panel" role="tabpanel">
            <div className="service-intro">
              <div>
                <h3>{active.title}</h3>
                <p>{active.description}</p>
              </div>
              <a className="text-link" href={bookingUrl} target="_blank" rel="noreferrer">Выбрать время <ArrowUpRight aria-hidden="true" /></a>
            </div>
            <div className="price-list">
              {active.services.map((service) => (
                <div className="price-row" key={service.name}>
                  <span>{service.name}</span>
                  <strong>{service.price}</strong>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      <section className="work-section" id="works">
        <div className="work-title">
          <p className="eyebrow eyebrow-light">02 · Работы и пространство</p>
          <h2>От первого штриха до готового образа</h2>
        </div>
        <div className="work-gallery" aria-label="Фотографии работ салона">
          {gallery.map((image, index) => (
            <figure className={`gallery-item gallery-item-${index + 1}`} key={image.src}>
              <img src={asset(image.src)} alt={image.alt} />
              <figcaption>0{index + 1}</figcaption>
            </figure>
          ))}
        </div>
      </section>

      <section className="trust-section" id="reviews">
        <div className="rating-summary">
          <p className="eyebrow">03 · Впечатления гостей</p>
          <div className="rating-number">{site.rating.value}</div>
          <div className="rating-stars" aria-label="Рейтинг 4,8 из 5">★★★★★</div>
          <p>{site.rating.ratings} оценки · {site.rating.reviews} отзывов</p>
          <a className="text-link" href={`${site.contact.map}/reviews/`} target="_blank" rel="noreferrer">Все отзывы <ArrowUpRight aria-hidden="true" /></a>
        </div>
        <div className="topic-list" aria-label="Что отмечают в отзывах">
          {reviewTopics.map((topic) => (
            <div className="topic" key={topic.label}>
              <div><strong>{topic.label}</strong><span>{topic.value}% · {topic.count}</span></div>
              <div className="topic-track"><span style={{ width: `${topic.value}%` }} /></div>
            </div>
          ))}
        </div>
      </section>

      <section className="quotes-section">
        <div className="section-head section-head-left">
          <p className="eyebrow">Говорят после визита</p>
          <h2>Про результат и отношение</h2>
        </div>
        <div className="quotes-grid">
          {reviews.map((review, index) => (
            <blockquote key={review.author}>
              <span className="quote-index">0{index + 1}</span>
              <p>«{review.text}»</p>
              <footer><strong>{review.author}</strong><span>{review.detail}</span></footer>
            </blockquote>
          ))}
        </div>
      </section>

      <section className="comfort-section">
        <div className="comfort-image">
          <img src={asset('assets/salon-06.jpg')} alt="Светлый зал салона Алекса" />
        </div>
        <div className="comfort-copy">
          <p className="eyebrow">04 · Комфорт</p>
          <h2>Всё нужное для спокойного визита</h2>
          <ul>
            {amenities.map((item) => <li key={item}><Check aria-hidden="true" />{item}</li>)}
          </ul>
        </div>
      </section>

      <section className="contact-section" id="contacts">
        <div className="contact-heading">
          <p className="eyebrow eyebrow-light">05 · Контакты</p>
          <h2>Встретимся на Тимирязева</h2>
          <a className="button button-light" href={bookingUrl} target="_blank" rel="noreferrer">
            Записаться онлайн <ArrowUpRight aria-hidden="true" />
          </a>
        </div>
        <div className="contact-details">
          <div className="contact-row">
            <MapPin aria-hidden="true" />
            <div><span>Адрес</span><strong>{site.contact.address}</strong><a href={site.contact.route} target="_blank" rel="noreferrer">Построить маршрут</a></div>
          </div>
          <div className="contact-row">
            <Clock3 aria-hidden="true" />
            <div><span>Режим работы</span>{site.contact.hours.map((line) => <strong key={line}>{line}</strong>)}</div>
          </div>
          <div className="contact-row">
            <Phone aria-hidden="true" />
            <div><span>Телефон</span><a className="contact-phone" href={site.contact.phoneHref}>{site.contact.phone}</a></div>
          </div>
          <div className="social-links">
            <a href={site.contact.telegram} target="_blank" rel="noreferrer">Telegram <ArrowUpRight aria-hidden="true" /></a>
            <a href={site.contact.whatsapp} target="_blank" rel="noreferrer">WhatsApp <ArrowUpRight aria-hidden="true" /></a>
            <a href={site.contact.vk} target="_blank" rel="noreferrer">ВКонтакте <ArrowUpRight aria-hidden="true" /></a>
          </div>
        </div>
      </section>
    </>
  )
}
