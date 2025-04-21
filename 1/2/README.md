# AI Community Landing Page

Современный лендинг для сообщества AI Community, где автоматизация превращается в прибыль.

![Пример лендинга](screenshot.jpg)

## Как посмотреть сайт

Есть несколько способов увидеть, как выглядит лендинг:

1. **Запустить проект локально:**
   - Установите Node.js (если не установлен)
   - Выполните команды в терминале:
   ```bash
   cd 1/2
   npm install
   npm run dev
   ```
   - Откройте браузер по адресу http://localhost:3000

2. **Посмотреть файловую структуру:**
   - Все страницы и компоненты находятся в папке `app`
   - Основной лендинг находится в файле `app/(marketing)/page.tsx`
   - Шапка и подвал в `app/_components/layout/`

3. **Воспользоваться онлайн-редактором кода:**
   - Вы можете загрузить файлы на CodeSandbox или StackBlitz для предварительного просмотра

## Технологии

- Next.js 14 (App Router)
- TypeScript
- Tailwind CSS
- shadcn/ui

## Структура проекта

```
app/
  (auth)/           # Страницы авторизации
    login/
    register/
  (dashboard)/      # Страницы личного кабинета
    profile/
    settings/
  (marketing)/      # Главные страницы сайта
    about/          # О нас
    pricing/        # Тарифы
    page.tsx        # Главная страница (лендинг)
  chat/             # Чат
  _components/      # Общие компоненты
    ui/             # UI компоненты (button, input и т.д.)
    layout/         # Компоненты шаблона (header, footer)
  layout.tsx        # Корневой шаблон
lib/               # Библиотеки и утилиты
```

## Запуск проекта

```bash
# Установка зависимостей
npm install

# Запуск в режиме разработки
npm run dev

# Сборка для продакшна
npm run build

# Запуск продакшн-сборки
npm run start
```

## Для разработчиков

Проект использует следующие инструменты:

- Tailwind CSS для стилизации
- shadcn/ui для компонентов
- TypeScript для типизации
- Next.js App Router для маршрутизации

## Контакты

- Telegram: [@neiro_void](https://t.me/neiro_void)
- Кейсы и агентная автоматизация: [@foresight_aitechnology](https://t.me/foresight_aitechnology)