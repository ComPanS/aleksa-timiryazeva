import { useEffect, useState } from 'react'
import { ArrowUpRight, Menu, X } from 'lucide-react'
import { Outlet } from 'react-router-dom'
import { bookingUrl, site } from '../content/site'

const asset = (path: string) => `${import.meta.env.BASE_URL}${path}`

const navigation = [
  { href: '#services', label: 'Услуги' },
  { href: '#works', label: 'Работы' },
  { href: '#reviews', label: 'Отзывы' },
  { href: '#contacts', label: 'Контакты' },
]

export function SiteLayout() {
  const [menuOpen, setMenuOpen] = useState(false)

  useEffect(() => {
    document.body.classList.toggle('menu-open', menuOpen)
    return () => document.body.classList.remove('menu-open')
  }, [menuOpen])

  return (
    <div className="site-shell">
      <header className="site-header">
        <a className="brand" href="#top" aria-label="Алекса, к началу страницы">
          <img src={asset('assets/aleksa-logo.jpg')} alt="" />
          <span>Алекса</span>
        </a>
        <nav className={menuOpen ? 'open' : ''} aria-label="Основная навигация">
          {navigation.map((item) => <a key={item.href} href={item.href} onClick={() => setMenuOpen(false)}>{item.label}</a>)}
          <a className="nav-booking" href={bookingUrl} target="_blank" rel="noreferrer">Записаться <ArrowUpRight aria-hidden="true" /></a>
        </nav>
        <button className="menu-toggle" type="button" aria-label={menuOpen ? 'Закрыть меню' : 'Открыть меню'} aria-expanded={menuOpen} onClick={() => setMenuOpen((open) => !open)}>
          {menuOpen ? <X aria-hidden="true" /> : <Menu aria-hidden="true" />}
        </button>
      </header>
      <main><Outlet /></main>
      <footer className="site-footer">
        <div className="footer-brand"><strong>{site.name}</strong><span>студия красоты</span></div>
        <p>{site.contact.address}</p>
        <p>© {new Date().getFullYear()} {site.legalName}</p>
      </footer>
    </div>
  )
}
