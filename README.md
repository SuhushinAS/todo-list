# Список дел

## Как использовать

### Требования

Должна быть установлена NodeJS
[Как установить Node.js](https://www.digitalocean.com/community/tutorials/node-js-ubuntu-18-04-ru#Установка-при-помощи-nvm)

### Установка

Устанавливаем пакеты

```
npm ci
```

## Запуск в режиме разработчика

Запуск в dev-сервера (будет доступен по адресу http://0.0.0.0:8000/)

```
npm run start
```

Сборка проекта

```
npm run build
```

## Разработка

### Структура папок

* `app` - Корень приложения;
* `fonts` - Шрифты;
* `helpers` - Хелперы;
* `icons` - Иконки;
* `images` - Картинки;
* `modules` - Модули;
* `styles` - Стили.

### Модули

#### Структура модуля

* `actions` - экшены;
* `api` - апи;
* `components` - компоненты;
* `constatnts` - константы;
* `reducers` - редьюсеры;
* `selectors` - селекторы;
* `types` - типы;

Структурируются по сущностям

## Сценарии

- Пользователь
  - [ ] Редактировать персоняльные данные
- Наблюдатель
  - [ ] Посмотреть список дел в бэклоге
  - [ ] Посмотреть спсиок дел в работе
  - [ ] Посмотреть список выполненных дел
- Админ
  - [ ] Наблюдатель
  - [ ] Менят статус дел
  - [ ] Создавать/редактировать/удалять дела

## Модель данных

- todo
  - createdAt: Date
  - createdBy: string
  - id: string
  - priority: Low/High
  - status: Todo/Active/Done
  - title: string
  - updatedAt: Date
  - updatedBy: string
- board
  - createdAt: Date
  - createdBy: string
  - id: string
  - title: string
  - updatedAt: Date
  - updatedBy: string
- user
  - id: string
  - name: string
- permission
  - id: string
  - name: string
- role
  - id: string
  - name: string
  - permissionIds: string[]
- boardUserMap
  - roleId: string
  - userId: string
  - boardId: string

## Права

- Todo
  - Create
  - Read
  - Update
  - Delete
- Board
  - Create
  - Read
  - Update
  - Delete
