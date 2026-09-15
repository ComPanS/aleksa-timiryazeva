export type ServiceCategory = {
  id: string
  shortLabel: string
  title: string
  description: string
  services: Array<{ name: string; price: string }>
}

export const bookingUrl = 'https://yandex.ru/web-maps/webview?mode=booking&booking%5Bpermalink%5D=18927082438&booking%5Bstandalone%5D=true&source=partner-cta'

export const site = {
  name: 'Алекса',
  legalName: 'ООО «Нижегородская Цирюльня»',
  locale: 'ru',
  description: 'Салон красоты «Алекса» в Нижнем Новгороде: парикмахерские услуги, ногтевой сервис и косметология.',
  contact: {
    phone: '+7 (831) 280-83-27',
    phoneHref: 'tel:+78312808327',
    address: 'Нижний Новгород, улица Тимирязева, 7, корп. 1',
    hours: ['Пн–Сб 10:00–20:00', 'Вс 11:00–20:00'],
    map: 'https://yandex.ru/maps/org/18927082438',
    route: 'https://yandex.ru/maps?ll=43.998647%2C56.306099&mode=routes&rtext=~56.306099%2C43.998647&z=17',
    telegram: 'https://t.me/+79043910342',
    whatsapp: 'https://wa.me/79043910342',
    vk: 'https://vk.com/salon_aleksa_nn',
  },
  rating: {
    value: '4,8',
    ratings: 122,
    reviews: 78,
  },
}

export const serviceCategories: ServiceCategory[] = [
  {
    id: 'hair',
    shortLabel: 'Волосы',
    title: 'Стрижки и окрашивание',
    description: 'Форма, цвет и укладка — от обновления длины до сложного окрашивания.',
    services: [
      { name: 'Женская трендовая стрижка', price: '1 800 ₽' },
      { name: 'Мужская стрижка', price: '1 400 ₽' },
      { name: 'Окрашивание корней', price: '3 700 ₽' },
      { name: 'Окрашивание в один тон', price: '4 500–6 500 ₽' },
      { name: 'Креативное окрашивание', price: '9 000–12 500 ₽' },
      { name: 'Вечерняя укладка', price: '1 800–2 000 ₽' },
    ],
  },
  {
    id: 'nails',
    shortLabel: 'Ногти',
    title: 'Маникюр и педикюр',
    description: 'Классический и аппаратный уход, покрытие и аккуратная работа с формой.',
    services: [
      { name: 'Женский маникюр', price: '1 200 ₽' },
      { name: 'Мужской маникюр', price: '1 400 ₽' },
      { name: 'Маникюр с гель-лаком', price: '2 100–2 300 ₽' },
      { name: 'Аппаратный педикюр с покрытием', price: '2 200–2 900 ₽' },
      { name: 'Аппаратный педикюр без покрытия', price: '1 700–2 200 ₽' },
      { name: 'Мужской аппаратный педикюр', price: '2 700 ₽' },
    ],
  },
  {
    id: 'face',
    shortLabel: 'Лицо',
    title: 'Уходовая косметология',
    description: 'Чистки, пилинги и аппаратные процедуры с понятной продолжительностью и стоимостью.',
    services: [
      { name: 'Комбинированная чистка', price: '3 600 ₽' },
      { name: 'Чистка и пилинг', price: '4 100 ₽' },
      { name: 'RF-лифтинг', price: '2 500 ₽' },
      { name: 'Массаж лица', price: '2 300 ₽' },
      { name: 'Микротоки, 30–60 минут', price: '1 500–2 500 ₽' },
      { name: 'Уход «Сияние кожи»', price: '3 000 ₽' },
    ],
  },
  {
    id: 'injections',
    shortLabel: 'Инъекции',
    title: 'Инъекционная косметология',
    description: 'Процедуры проводятся по предварительной записи после подбора подходящего решения.',
    services: [
      { name: 'Биоревитализация', price: '8 000 ₽' },
      { name: 'Мезотерапия монопрепаратом', price: '2 900 ₽' },
      { name: 'Плазмолифтинг, 1–2 пробирки', price: '4 500–6 200 ₽' },
      { name: 'PDRN-BUSTER, 1–3 мл', price: '7 250–12 950 ₽' },
      { name: 'Филлер Stylage', price: '18 000 ₽' },
      { name: 'Spherogel Long Advance', price: '23 000 ₽' },
    ],
  },
  {
    id: 'brows',
    shortLabel: 'Взгляд',
    title: 'Брови и ресницы',
    description: 'Коррекция, окрашивание и ламинирование в рамках одного визита.',
    services: [
      { name: 'Коррекция бровей', price: '600 ₽' },
      { name: 'Коррекция и окрашивание', price: '1 200 ₽' },
      { name: 'Ламинирование, коррекция и окрашивание', price: '1 800 ₽' },
      { name: 'Ламинирование и окрашивание ресниц', price: '1 500 ₽' },
      { name: 'Окрашивание ресниц', price: '500 ₽' },
      { name: 'Мужская коррекция бровей', price: '1 000 ₽' },
    ],
  },
]

export const gallery = [
  { src: 'assets/salon-01.jpg', alt: 'Светлый маникюр с деликатным дизайном' },
  { src: 'assets/salon-02.jpg', alt: 'Укладка на длинные светлые волосы' },
  { src: 'assets/salon-03.jpg', alt: 'Гладкая стрижка каре' },
  { src: 'assets/salon-04.jpg', alt: 'Работа мастера по ресницам' },
  { src: 'assets/salon-05.jpg', alt: 'Результат наращивания ресниц' },
]

export const reviewTopics = [
  { label: 'Профессионализм', value: 96, count: 27 },
  { label: 'Маникюр', value: 100, count: 20 },
  { label: 'Атмосфера', value: 100, count: 18 },
  { label: 'Стрижки', value: 87, count: 15 },
]

export const reviews = [
  {
    text: 'Обслуживание на высоте. Персонал вежливый, профессионалы своего дела.',
    author: 'Татьяна С.',
    detail: 'причёска и макияж',
  },
  {
    text: 'Осталась довольна на 100%! Очень вежливая и внимательная девушка. Учла все пожелания.',
    author: 'Анна Климашова',
    detail: 'окрашивание',
  },
  {
    text: 'Сам салон красивый, уютный, доброжелательное отношение к клиентам. Рекомендую!',
    author: 'Екатерина Л.',
    detail: 'макияж и укладка',
  },
]

export const amenities = ['Парковка', 'Оплата картой', 'Wi-Fi', 'Подарочные сертификаты', 'Можно с питомцами', 'Доступный вход']
