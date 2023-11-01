# Airbnb клон. Стек: Next.js 13: React, Tailwind, Prisma, MongoDB, NextAuth.

<a href="https://github-production-user-asset-6210df.s3.amazonaws.com/64312144/246891702-15470137-b6b7-4b00-bec5-07ed17e0b912.jpg" target="_blank">
  <img src="https://github-production-user-asset-6210df.s3.amazonaws.com/64312144/246891702-15470137-b6b7-4b00-bec5-07ed17e0b912.jpg" width="1400"/>
</a>

Airbnb клон.
Стек: Next.js 13: React, Tailwind, Prisma, MongoDB, NextAuth.

[Пример](https://airbnb-clone-flame-one.vercel.app)

Features:

- Анимация и эффекты на Tailwind
- Полная отзывчивость
- Аутентификация учетных данных
- Google-аутентификация
- Аутентификация на Гитхабе
- Загрузка изображений с помощью Cloudinary CDN.
- Проверка и обработка клиентской формы с использованием формы реагирования.
- Обработка ошибок сервера с помощью React-Toast.
- Календари с диапазоном реагирующих дат
- Состояние загрузки страницы
- Состояние пустой страницы
- Система бронирования/бронирования
- Отмена бронирования гостя
- Отмена бронирования владельцем
- Создание и удаление свойств
- Расчет цены
- Система избранного
- Общие фильтры URL-адресов

### Prerequisites

**Node version 16.x**

### Cloning the repository

```shell
git clone https://github.com/Israpilow/airbnb-clone.git
```

### Install packages

```shell
npm i
```

### Setup .env file


```js
DATABASE_URL=
GOOGLE_CLIENT_ID=
GOOGLE_CLIENT_SECRET=
GITHUB_ID=
GITHUB_SECRET=
NEXTAUTH_SECRET=
```

### Setup Prisma

```shell
npx prisma db push

```

### Start the app

```shell
npm run dev
```

## Available commands

Running commands with npm `npm run [command]`

| command         | description                              |
| :-------------- | :--------------------------------------- |
| `dev`           | Starts a development instance of the app |
