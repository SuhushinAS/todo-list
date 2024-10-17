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
  - [ ] Редактировать персональные данные
  - [ ] Создават свои доски
- Наблюдатель
  - [x] Посмотреть список досок
  - [ ] Посмотреть список задач в бэклоге
  - [ ] Посмотреть спсиок задач в работе
  - [ ] Посмотреть список выполненных задач
- Админ
  - [ ] Наблюдатель
  - [ ] Менят статус задач
  - [ ] Создавать/редактировать/удалять задачи

## Модель данных

```typescript
export type TTask = {
  boardId: string;
  createdAt: Timestamp;
  createdBy: string;
  id: string;
  priority: 'high' | 'low';
  status: 'active' | 'aone' | 'todo';
  title: string;
  updatedAt: Timestamp;
  updatedBy: string;
};
```

```typescript
export type TBoard = {
  createdAt: Timestamp;
  createdBy: string;
  id: string;
  title: string;
  updatedAt: Timestamp;
  updatedBy: string;
};
```

```typescript
export type TUser = {
  id: string;
  name: string;
};
```

```typescript
export type TPermission = {
  id: string;
  name: string;
};
```

```typescript
export type TRole = {
  id: string;
  name: string;
  permissionIds: string[]
};
```

```typescript
export type TBoardUserMap = {
  boardId: string;
  roleId: string;
  userId: string;
};
```

## Права

- Task
  - Create
  - Read
  - Update
  - Delete
- Board
  - Create
  - Read
  - Update
  - Delete
