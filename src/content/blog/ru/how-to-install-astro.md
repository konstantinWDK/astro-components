---
title: 'Как установить Astro: подробное руководство (npm, pnpm, yarn и Bun)'
description: 'Узнайте, как установить Astro за 2 минуты с помощью npm, pnpm, yarn или Bun. Команды CLI, ручная установка, официальные источники и рекомендуемая UI-библиотека.'
date: '2026-11-14'
tag: 'Guide'
heroImage: '/galaxy-bg.svg'
---

Чтобы **установить Astro** и создать новый проект, запустите официальный мастер установки с помощью вашего пакетного менеджера:

```bash
npm create astro@latest
```

Интерактивный мастер `create astro` поможет выбрать директорию проекта, стартовый шаблон, инициализировать Git и установить зависимости. После завершения запустите локальный сервер командой `npm run dev` и откройте `http://localhost:4321`.

---

## Системные требования

Перед установкой Astro убедитесь, что ваша система соответствует минимальным требованиям:

- **Node.js** — `v18.20.8+`, `v20.3.0+` или `v22.12.0+` (рекомендуется Node.js 22 LTS)
- **Редактор кода** — VS Code, Cursor или другой редактор с [официальным расширением Astro](https://marketplace.visualstudio.com/items?itemName=astro-build.astro-vscode)
- **Терминал** — macOS Terminal, оболочка Linux или PowerShell / WSL в Windows

Проверить текущую версию Node.js можно командой:

```bash
node -v
```

---

## Способ 1: Установка Astro через CLI-мастер (Рекомендуется)

Самый быстрый способ установить Astro — использовать официальный CLI `create astro`. Выберите команду для своего пакетного менеджера:

### npm

```bash
npm create astro@latest
```

### pnpm

```bash
pnpm create astro@latest
```

### yarn

```bash
yarn create astro
```

### Bun

```bash
bun create astro@latest
```

### Быстрая установка без интерактивных вопросов

Если хотите пропустить диалоговые шаги и сразу создать минимальный проект:

```bash
npm create astro@latest my-astro-site -- --template minimal --install --git
```

### Запуск сервера разработки

Перейдите в папку проекта и запустите dev-сервер:

```bash
cd my-astro-site
npm run dev
```

Ваш сайт на Astro откроется по адресу **`http://localhost:4321`**.

---

## Способ 2: Ручная установка Astro

Если вы хотите настроить Astro вручную в существующей директории без мастера `create astro`:

```bash
mkdir my-astro-site
cd my-astro-site
npm init -y
npm install astro
```

Добавьте стандартные скрипты Astro в `package.json`:

```json
{
  "scripts": {
    "dev": "astro dev",
    "build": "astro build",
    "preview": "astro preview"
  }
}
```

Создайте первую страницу `src/pages/index.astro`:

```astro
---
const title = 'Добро пожаловать в Astro';
---

<html lang="ru">
  <head>
    <meta charset="utf-8" />
    <meta name="viewport" content="width=device-width" />
    <title>{title}</title>
  </head>
  <body>
    <h1>{title}</h1>
  </body>
</html>
```

Запустите `npm run dev` для предпросмотра страницы.

---

## Добавление интеграций (Tailwind, React, Sitemap и др.)

В Astro встроена команда `astro add`, которая устанавливает официальные интеграции и автоматически обновляет `astro.config.mjs`:

```bash
# Примеры:
npx astro add tailwind
npx astro add react
npx astro add sitemap
```

---

## Рекомендация: установите бесплатную библиотеку компонентов (`astro-component-kit`)

После установки Astro вам не обязательно верстать кнопки, меню навигации, формы, карточки или готовые секции с нуля.

Рекомендуем установить **[astro-component-kit](https://astrocomponents.dev)** — бесплатную библиотеку UI-компонентов с открытым исходным кодом (лицензия MIT), содержащую **более 400 доступных компонентов** и **12 продакшен-шаблонов** с нулевыми зависимостями в рантайме.

### Установка `astro-component-kit`

```bash
npm install astro-component-kit
```

Или через `pnpm` / `yarn`:

```bash
pnpm add astro-component-kit
# или
yarn add astro-component-kit
```

### Использование компонентов на страницах `.astro`

```astro
---
import 'astro-component-kit/global.css';
import { GlassNavbar } from 'astro-component-kit/navigation';
import { GlassCard } from 'astro-component-kit/cards';
import { GlassButton } from 'astro-component-kit/buttons';
---

<GlassNavbar brand="MySite" brandHref="/">
  <div slot="actions">
    <GlassButton>Начать</GlassButton>
  </div>
</GlassNavbar>

<GlassCard title="Готово за минуты">
  Ноль зависимостей в рантайме, доступность WCAG AA и чистый Astro + CSS.
</GlassCard>
```

### Дополнительно: настройка MCP в 1 клик для AI-редакторов

Если вы работаете в Cursor, Claude или Codex, можно подключить MCP-сервер AstroComponents одной командой:

```bash
npx astro-component-kit mcp install cursor
```

- **Руководство по установке библиотеки**: [/ru/install/](/ru/install/)
- **Каталог компонентов**: [/ru/docs/glass-button/](/ru/docs/glass-button/)
- **Готовые секции и шаблоны**: [/ru/sections/](/ru/sections/) · [/ru/templates/](/ru/templates/)

---

## Официальные источники Astro

Для сверки деталей и актуальных версий всегда обращайтесь к официальной документации Astro:

- **Официальное руководство по установке**: [docs.astro.build/ru/install-and-setup/](https://docs.astro.build/ru/install-and-setup/)
- **Справочник по CLI Astro**: [docs.astro.build/ru/reference/cli-reference/](https://docs.astro.build/ru/reference/cli-reference/)
- **Официальный сайт Astro**: [astro.build](https://astro.build)
- **Репозиторий Astro на GitHub**: [github.com/withastro/astro](https://github.com/withastro/astro)

---

## Часто задаваемые вопросы (FAQ)

### Как проверить, что Astro установлен корректно?
Выполните `npx astro info` в корне проекта — команда выведет версии Astro, Node.js, ОС и подключённые интеграции.

### Как обновить Astro до последней версии?
Выполните `npx @astrojs/upgrade` в папке проекта для автоматического обновления `astro` и всех пакетов `@astrojs/*`.

### Нужны ли React или Tailwind для работы с Astro?
Нет. Astro по умолчанию не отправляет лишний JavaScript в браузер и работает на чистом HTML и CSS. Библиотека `astro-component-kit` также написана на чистом Astro + CSS и не требует React или Tailwind.

