---
title: 'Новый шаблон: Barro — магазин кроссовых мотоциклов с прыжком при прокрутке'
description: 'Barro — новый полный e-commerce шаблон для магазина кроссовых мотоциклов: мотоцикл, который едет и прыгает при прокрутке, мотоциклы и экипировка, нарисованные в SVG, настоящие фильтры каталога, сравнение мотоциклов, симулятор финансирования и гараж с учётом обслуживания — всё на собственных компонентах.'
date: '2026-11-22'
tag: 'Release'
heroImage: '/galaxy-bg.svg'
---

## Barro: магазин кроссовых мотоциклов, где мотоцикл прыгает при прокрутке, в девяти страницах

Barro (`templates/motocross`) — полный e-commerce шаблон магазина кроссовых мотоциклов. У него собственный визуальный язык асфальтово-чёрного и огненно-оранжевого с ударной узкой гарнитурой (Barlow Condensed), без фотографий, сеток иконок и облаков тегов: его держат сгенерированные иллюстрации мотоциклов, анимация скролла и шкалы сравнения. Он собран только из собственных компонентов (`reusedComponents: []`).

---

### Barro · Кросс: мотоциклы и экипировка (`templates/motocross`)

- **Живой просмотр**: [/preview/motocross/](/preview/motocross/) · **Документация шаблона**: [/templates/motocross/](/templates/motocross/)
- **Публичный магазин (6 страниц)**: главная с главным экраном из быстрых диагональных полос скорости и большим типографским списком категорий, затем закреплённая сцена, идущая как короткий фильм при прокрутке — мотоцикл едет по грунтовой трассе на закате, горы проплывают с двумя скоростями, колёса вращаются, появляется трамплин, и мотоцикл прыгает, наклоняется в воздухе и приземляется в пыли — далее популярные товары и FAQ; магазин с поиском, категориями, максимальной ценой, наличием и сортировкой на мотоциклах, шлемах, ботинках, перчатках, джерси и запчастях, нарисованных в SVG; страница товара, где селекторы опций (цвет, размер, пакет мастерской) меняют цену на лету; «ваш мотоцикл» со сравнением до трёх моделей (шкалы относительно лучшего значения, победитель каждой строки словами), симулятором финансирования с диаграммой основного долга и процентов по годам и таблицей размеров, рекомендующей размер по вашим меркам; корзина и оплата с прогрессом бесплатной доставки, промокодом и демо-оплатой; и вход для гонщиков.
- **Кабинет клиента (3 страницы)**: главная с заказом в пути и его текстовой хронологией, а также «ваш гараж»: для каждого мотоцикла моточасы и каждая работа по обслуживанию в виде шкалы часов с последнего ТО относительно интервала со статусом словами (в порядке, скоро, пора) — добавьте два часа трассы, и шкалы сдвинутся; заказы с товарами, трекингом и возвратами в течение 30 дней, где показаны и заказы, оплаченные в этом браузере; и список желаний.
- **Доступность по умолчанию**: нативные поля поиска, радио, диапазона, флажки и `<details>`, настоящая таблица сравнения `<table>` с заголовками строк и столбцов, каждое число на рисунке дублируется текстом, статусы — слова (не только цвет), live-регионы для каждого изменения, цели 44–48px, видимый фокус и поддержка `prefers-reduced-motion` (сцена показывает неподвижный кадр в середине прыжка). Тёмная и светлая версии.
- **Страницы**: [Главная](/preview/motocross/) · [Магазин](/preview/motocross/tienda/) · [Товар](/preview/motocross/producto/) · [Ваш мотоцикл](/preview/motocross/tu-moto/) · [Корзина](/preview/motocross/carrito/) · [Вход](/preview/motocross/acceso/) · [Обзор](/preview/motocross/cuenta/) · [Заказы](/preview/motocross/cuenta/pedidos/) · [Желания](/preview/motocross/cuenta/deseos/).
- **18 собственных компонентов**: [`MotoHero`](/sections/moto-hero/), [`MotoRide`](/sections/moto-ride/), [`MotoShop`](/sections/moto-shop/), [`MotoProduct`](/sections/moto-product/), [`MotoCompare`](/sections/moto-compare/), [`MotoFinance`](/sections/moto-finance/), [`MotoSizeGuide`](/sections/moto-size-guide/), [`MotoCart`](/sections/moto-cart/), [`MotoFaq`](/sections/moto-faq/), [`MotoFooter`](/sections/moto-footer/), [`MotoArt`](/docs/moto-art/), [`MotoAccountSummary`](/docs/moto-account-summary/), [`MotoOrders`](/docs/moto-orders/), [`MotoWishlist`](/docs/moto-wishlist/), [`MotoAccountNav`](/docs/moto-account-nav/), [`MotoAccountTopbar`](/docs/moto-account-topbar/), [`MotoAccountHeading`](/docs/moto-account-heading/), и [`MotoSignIn`](/docs/moto-sign-in/).

<div style="margin:1.25rem 0 2rem;border:1px solid var(--c-border,#2a2d3a);border-radius:12px;overflow:hidden;background:#0b0d13;">
  <iframe src="/preview/motocross/" title="Живой просмотр Barro (главная)" loading="lazy" style="width:100%;height:380px;border:0;display:block;"></iframe>
</div>

<div style="margin:1.25rem 0 2rem;border:1px solid var(--c-border,#2a2d3a);border-radius:12px;overflow:hidden;background:#0b0d13;">
  <iframe src="/preview/motocross/tu-moto/" title="Живой просмотр Barro (сравнение и финансирование)" loading="lazy" style="width:100%;height:380px;border:0;display:block;"></iframe>
</div>
