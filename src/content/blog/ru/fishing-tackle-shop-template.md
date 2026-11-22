---
title: 'Новый шаблон: Corcho — рыболовный магазин со сценой заброса, управляемой прокруткой'
description: 'Corcho — новый полный e-commerce шаблон для рыболовного магазина: сцена заброса, которая идёт при прокрутке, иллюстрации товаров, сгенерированные в SVG, настоящие фильтры каталога, конфигуратор снаряжения по видам рыбы и корзина, а также кабинет заказов и желаний — всё на собственных компонентах.'
date: '2026-11-22'
tag: 'Release'
heroImage: '/galaxy-bg.svg'
---

## Corcho: рыболовный магазин со сценой заброса, которая идёт при прокрутке, в девяти страницах

Corcho (`templates/fishing`) — полный e-commerce шаблон рыболовного магазина. У него собственный визуальный язык глубокого сине-зелёного и аква с характерной гротескной гарнитурой (Bricolage Grotesque), без фотографий, сеток иконок и облаков тегов: его держат сгенерированные иллюстрации товаров, анимация скролла и диаграмма по видам рыбы. Он собран только из собственных компонентов (`reusedComponents: []`).

---

### Corcho · Рыболовный магазин (`templates/fishing`)

- **Живой просмотр**: [/preview/fishing/](/preview/fishing/) · **Документация шаблона**: [/templates/fishing/](/templates/fishing/)
- **Публичный магазин (6 страниц)**: главная с главным экраном из медленно расходящихся кругов на воде и большим типографским списком категорий, затем закреплённая сцена, идущая как короткий фильм при прокрутке — небо меняется от первого света до полного дня, удилище взмахивает, леска летит дугой и сама прорисовывается, поплавок падает, расходятся круги и рыба берёт наживку — далее самые популярные товары и FAQ; магазин с поиском, категориями, максимальной ценой, наличием и сортировкой на иллюстрациях товаров, сгенерированных в SVG (удилища, катушки, приманки, леска, подсаки); страница товара, где селекторы опций меняют цену на лету; конфигуратор снаряжения по видам рыбы с диаграммой клёва за двенадцать месяцев, советами и рекомендованным снаряжением, которое можно отметить и добавить в корзину одним щелчком; корзина и оплата с прогрессом бесплатной доставки, промокодом и демо-оплатой; и вход для клиентов.
- **Кабинет клиента (3 страницы)**: главная с заказом в пути и его текстовой хронологией, цифрами клиента и «что клюёт в этом месяце» по сезонам видов; заказы с товарами, трекингом и возвратами в течение 30 дней, где показаны и заказы, оплаченные в этом браузере; и список желаний с действиями «в корзину» и «удалить».
- **Доступность по умолчанию**: нативные поля поиска, радио, диапазона, флажки и `<details>`, каждое число на рисунке дублируется текстом, live-регионы для каждого изменения, цели 44–48px, видимый фокус, текстовые эквиваленты каждого рисунка и поддержка `prefers-reduced-motion` (сцена показывает финальный кадр). Тёмная и светлая версии.
- **Страницы**: [Главная](/preview/fishing/) · [Магазин](/preview/fishing/tienda/) · [Товар](/preview/fishing/producto/) · [Конфигуратор](/preview/fishing/equipo/) · [Корзина](/preview/fishing/carrito/) · [Вход](/preview/fishing/acceso/) · [Обзор](/preview/fishing/cuenta/) · [Заказы](/preview/fishing/cuenta/pedidos/) · [Желания](/preview/fishing/cuenta/deseos/).
- **16 собственных компонентов**: [`FishHero`](/sections/fish-hero/), [`FishCast`](/sections/fish-cast/), [`FishShop`](/sections/fish-shop/), [`FishProduct`](/sections/fish-product/), [`FishKit`](/sections/fish-kit/), [`FishCart`](/sections/fish-cart/), [`FishFaq`](/sections/fish-faq/), [`FishFooter`](/sections/fish-footer/), [`FishArt`](/docs/fish-art/), [`FishAccountSummary`](/docs/fish-account-summary/), [`FishOrders`](/docs/fish-orders/), [`FishWishlist`](/docs/fish-wishlist/), [`FishAccountNav`](/docs/fish-account-nav/), [`FishAccountTopbar`](/docs/fish-account-topbar/), [`FishAccountHeading`](/docs/fish-account-heading/), и [`FishSignIn`](/docs/fish-sign-in/).

<div style="margin:1.25rem 0 2rem;border:1px solid var(--c-border,#2a2d3a);border-radius:12px;overflow:hidden;background:#0b0d13;">
  <iframe src="/preview/fishing/" title="Живой просмотр Corcho (главная)" loading="lazy" style="width:100%;height:380px;border:0;display:block;"></iframe>
</div>

<div style="margin:1.25rem 0 2rem;border:1px solid var(--c-border,#2a2d3a);border-radius:12px;overflow:hidden;background:#0b0d13;">
  <iframe src="/preview/fishing/equipo/" title="Живой просмотр Corcho (конфигуратор)" loading="lazy" style="width:100%;height:380px;border:0;display:block;"></iframe>
</div>
