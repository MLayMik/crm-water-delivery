# ✅ CRM Water Delivery - Checklist (With Design Tasks)

---

## 🧱 1. Project Structure
- [x] Create folders: `entities`, `features`, `pages`, `widgets`
- [ ] Define models: `User`, `Client`, `DeliverySchedule`, `CourierRoute`
- [ ] Add enums (user roles, delivery status, etc.)

---

## 🎨 DESIGN: Global UI
- [x] Basic layout (header, sidebar, main area)
- [x] Basic components (buttons, checkmarks...)
- [x] Theme: dark
- [x] Fonts, spacing, button styles

---

## 🔐 2. Auth Page
- [x] LogIn / LogOn
- [x] Mock `POST /auth/login` (return JWT)
- [x] Save token to Pinia + localStorage
- [ ] Protect private routes

### 🎨 DESIGN: Login Paga
- [x] Centered login form (email, password)
- [x] "Login" button
- [x] Error message (invalid credentials - validation)

---

## 👥 3. Users CRUD
- [ ] List users (table)
- [ ] Add/edit modal
- [ ] Mock: GET, POST, PATCH, DELETE `/users`
- [ ] Write Vitest + MSW tests

### 🎨 DESIGN: Users Page
user - client, delivery guy or manager
- [ ] Table with: name, role, email (for admin/manager)
- [ ] Button: Add User
- [ ] Modal: create/edit user
- [ ] Delete confirmation dialog

---

## 🏢 4. Clients CRUD
- [ ] List clients (table)
- [ ] Add/edit modal
- [ ] Fields: name, address, contact
- [ ] Mock + test same as users

### 🎨 DESIGN: Clients Page
- [ ] Table with: name, contact, address
- [ ] Button: Add Client
- [ ] Modal: create/edit client
- [ ] Address input with map pin (via google maps, optional)

---

## 🚚 5. Deliveries CRUD
- [ ] Form: client + weekday + time
- [ ] Create delivery points
- [ ] Show next delivery (Pinia getter)

### 🎨 DESIGN: Deliveries Page
- [ ] Form: select client, day, time slot
- [ ] Table: delivery schedule
- [ ] Modal or drawer: create/edit delivery

---

## 🧭 6. Courier View
- [ ] Page: today’s route
- [ ] Checklist of deliveries
- [ ] Map (Leaflet or google maps):
  - [ ] Markers + route line
  - [ ] Button: build route (Directions API)

### 🎨 DESIGN: Courier Page
- [ ] List: address, client name, "delivered" checkbox
- [ ] Map: marker for each stop, route line (everything will be via google maps)
- [ ] Button: "Build route"

---

## 🎨 7. Polish & Portfolio
- [ ] Light/dark theme (CSS vars)
- [ ] Landing: "What CRM can do"
- [ ] Add README (screenshots + how to run)

### 🎨 DESIGN: Landing Page
- [ ] Headline: "CRM for Water Delivery"
- [ ] Description of features
- [ ] Screenshots or animations of app
- [ ] Call to Action (GitHub link or demo)

---

# 🔐 Roles and Permissions — CRM Water Delivery

## 👤 1. Admin / Manager

> Это основной пользователь. Управляет системой.

### 📄 Страницы:
- [ ] Login
- [ ] Dashboard (обзор заказов/доставок)
- [ ] Users Management
- [ ] Clients Management
- [ ] Deliveries Management
- [ ] Logout

### ✅ Может:
- [ ] Логиниться
- [ ] Видеть список всех пользователей
- [ ] Добавлять / редактировать / удалять пользователей
- [ ] Видеть список клиентов
- [ ] Добавлять / редактировать / удалять клиентов
- [ ] Создавать и управлять расписаниями доставок
- [ ] Видеть маршруты по клиентам
- [ ] Смотреть дашборд (сколько доставок сегодня и т.п.)

---

## 🚚 2. Courier (Доставщик)

> Видит только сегодняшние доставки и маршрут.

### 📄 Страницы:
- [ ] Login
- [ ] My Deliveries (Today Route)
- [ ] Logout

### ✅ Может:
- [ ] Логиниться
- [ ] Видеть список точек доставки на сегодня
- [ ] Отмечать доставку как "выполнено"
- [ ] Видеть карту с маршрутом (маршрутизация)
- [ ] Построить маршрут (по кнопке)
- [ ] Хранить прогресс доставки в localStorage

---

## 🧑‍💼 3. Client (Клиент)

> Может проверить своё расписание, историю доставок и оформить новую доставку

### 📄 Страницы:
- [ ] Login
- [ ] My Deliveries
- [ ] Logout

### ✅ Может:
- [ ] Логиниться
- [ ] Видеть свои будущие и прошлые доставки
- [ ] Посмотреть ближайшую дату и время
- [ ] Посмотреть адрес и детали доставки

---

## 📌 Технические детали

- [ ] Роль приходит с `POST /auth/login` как `role: 'admin' | 'courier' | 'client'`
- [ ] Создать middleware (или глобальную навигационную защиту) для роутера
- [ ] Добавить в Pinia `userStore` поле `role`
- [ ] Навигация / доступ — на основе `role`

---
