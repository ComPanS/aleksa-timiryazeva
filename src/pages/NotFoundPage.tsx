import { Link } from 'react-router-dom'

export function NotFoundPage() {
  return (
    <section className="not-found">
      <p className="eyebrow">Ошибка 404</p>
      <h1>Такой страницы нет</h1>
      <p>Вернитесь на главную, чтобы посмотреть услуги или записаться.</p>
      <Link className="button button-primary" to="/">На главную</Link>
    </section>
  )
}
