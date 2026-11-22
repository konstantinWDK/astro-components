---
title: 'Новый шаблон: Telón — театральная касса с занавесом при скролле и выбором мест'
description: 'Telón — новый полный e-commerce шаблон для продажи театральных билетов: занавес, раздвигающийся при скролле, сгенерированные афиши, интерактивный план мест, корзина с удержанием десять минут и кошелёк билетов — всё на собственных компонентах.'
date: '2026-11-22'
tag: 'Release'
heroImage: '/galaxy-bg.svg'
---

## Telón: касса, где занавес поднимается при скролле, в восьми страницах

Telón (`templates/theater`) — полный e-commerce шаблон театральной кассы. У него собственный визуальный язык тёмного вина и красного занавеса с классической дисплейной антиквой (Playfair Display), без фотографий, сеток иконок и облаков тегов: его держат сгенерированные афиши, анимация скролла и план мест. Он собран только из собственных компонентов (`reusedComponents: []`).

---

### Telón · Театральные билеты (`templates/theater`)

- **Живой просмотр**: [/preview/theater/](/preview/theater/) · **Документация шаблона**: [/templates/theater/](/templates/theater/)
- **Публичный магазин (5 страниц)**: главная, где в главном экране сцена с двумя бархатными занавесами раздвигается при скролле (анимация привязана к прогрессу прокрутки, прожектор следует за курсором), бегущая строка, афиша недели и FAQ; афиша с поиском, фильтром по жанру и сортировкой на афишах, сгенерированных в SVG из палитры и зерна каждого спектакля; страница спектакля с сеансами и интерактивным планом зала, где занятые места отключены, цены зависят от зоны, можно выбрать до шести мест, а кнопка «лучшие места рядом» выбирает ряд для компании; корзина и оплата с удержанием десять минут, освобождающим места по истечении, промокодом, итогами на лету и демо-оплатой; и вход для клиентов.
- **Кабинет клиента (3 страницы)**: главная с ближайшим спектаклем в виде огромной даты с обратным отсчётом рядом с афишей и предложениями; кошелёк билетов с классическими перфорированными билетами, код которых открывается на весь экран в нативном диалоге для сканирования у входа; и заказы с действиями замены и возврата, где показаны и заказы, оплаченные в этом браузере.
- **Доступность по умолчанию**: каждое место — нативный чекбокс в метке с рядом, номером, зоной, ценой и состоянием текстом; план прокручивается в фокусируемой области, а «лучшие места рядом» — альтернатива для клавиатуры; live-регионы для каждого изменения, цели 44–48px, видимый фокус, текстовые эквиваленты каждого рисунка и поддержка `prefers-reduced-motion` (занавес уже открыт). Тёмная и светлая версии.
- **Страницы**: [Главная](/preview/theater/) · [Афиша](/preview/theater/cartelera/) · [Спектакль и места](/preview/theater/espectaculo/) · [Корзина](/preview/theater/carrito/) · [Вход](/preview/theater/acceso/) · [Обзор](/preview/theater/cuenta/) · [Билеты](/preview/theater/cuenta/entradas/) · [Заказы](/preview/theater/cuenta/pedidos/).
- **16 собственных компонентов**: [`TheaHero`](/sections/thea-hero/), [`TheaMarquee`](/sections/thea-marquee/), [`TheaShows`](/sections/thea-shows/), [`TheaShowDetail`](/sections/thea-show-detail/), [`TheaCart`](/sections/thea-cart/), [`TheaFaq`](/sections/thea-faq/), [`TheaFooter`](/sections/thea-footer/), [`TheaPoster`](/docs/thea-poster/), [`TheaSeatMap`](/docs/thea-seat-map/), [`TheaTickets`](/docs/thea-tickets/), [`TheaAccountSummary`](/docs/thea-account-summary/), [`TheaOrders`](/docs/thea-orders/), [`TheaAccountNav`](/docs/thea-account-nav/), [`TheaAccountTopbar`](/docs/thea-account-topbar/), [`TheaAccountHeading`](/docs/thea-account-heading/), и [`TheaSignIn`](/docs/thea-sign-in/).

<div style="margin:1.25rem 0 2rem;border:1px solid var(--c-border,#2a2d3a);border-radius:12px;overflow:hidden;background:#0b0d13;">
  <iframe src="/preview/theater/" title="Живой просмотр Telón (главная)" loading="lazy" style="width:100%;height:380px;border:0;display:block;"></iframe>
</div>

<div style="margin:1.25rem 0 2rem;border:1px solid var(--c-border,#2a2d3a);border-radius:12px;overflow:hidden;background:#0b0d13;">
  <iframe src="/preview/theater/espectaculo/" title="Живой просмотр Telón (план мест)" loading="lazy" style="width:100%;height:380px;border:0;display:block;"></iframe>
</div>
