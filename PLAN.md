# ✅ CRM Water Delivery - Checklist (With Design Tasks)

---

## 📦 0. Setup (Day 1)
- [ ] Create Vue project (Vite + TS + pnpm)
- [ ] Add Vue Router, Pinia
- [ ] Setup ESLint, Prettier, Vitest
- [ ] Add MSW (mock `/api/ping`)

---

## 🧱 1. Project Structure
- [ ] Create folders: `entities`, `features`, `pages`, `widgets`
- [ ] Define models: `User`, `Client`, `DeliverySchedule`, `CourierRoute`
- [ ] Add enums (user roles, delivery status, etc.)

---

## 🎨 DESIGN: Global UI
- [ ] Basic layout (header, sidebar, main area)
- [ ] Theme: dark
- [ ] Fonts, spacing, button styles
- [ ] Loading states, empty states, error messages

---

## 🔐 2. Auth Page
- [ ] LogIn / LogOn
- [ ] Mock `POST /auth/login` (return JWT)
- [ ] Save token to Pinia + localStorage
- [ ] Protect private routes

### 🎨 DESIGN: Login Page
- [ ] Centered login form (email, password)
- [ ] "Login" button
- [ ] Error message (invalid credentials)

---

## 👥 3. Users CRUD
- [ ] List users (table)
- [ ] Add/edit modal
- [ ] Mock: GET, POST, PATCH, DELETE `/users`
- [ ] Write Vitest + MSW tests

### 🎨 DESIGN: Users Page
- [ ] Table with: name, role, email
- [ ] Button: Add User
- [ ] Modal: create/edit user
- [ ] Delete confirmation dialog

---

## 🏢 4. Clients CRUD
- [ ] List clients (table)
- [ ] Add/edit modal
- [ ] Fields: company name, address, contact
- [ ] Mock + test same as users

### 🎨 DESIGN: Clients Page
- [ ] Table with: company, contact, address
- [ ] Button: Add Client
- [ ] Modal: create/edit client
- [ ] Address input with map pin (optional)

---

## 🚚 5. Deliveries CRUD
- [ ] Form: client + weekday + time
- [ ] Create delivery points
- [ ] Show next delivery (Pinia getter)

### 🎨 DESIGN: Deliveries Page
- [ ] Form: select client, day, time slot
- [ ] Table: delivery schedule
- [ ] Modal or drawer: create/edit delivery
- [ ] Display "Next delivery" for client

---

## 🧭 6. Courier View
- [ ] Page: today’s route
- [ ] Checklist of deliveries
- [ ] Map (Leaflet):
  - [ ] Markers + route line
  - [ ] Button: build route (Directions API)

### 🎨 DESIGN: Courier Page
- [ ] List: address, client name, "delivered" checkbox
- [ ] Map: marker for each stop, route line
- [ ] Button: "Build route"
- [ ] Mobile-friendly layout

---

## 🎨 7. Polish & Portfolio
- [ ] Light/dark theme (CSS vars)
- [ ] Landing: "What CRM can do"
- [ ] Record demos (Loom)
- [ ] Add README (screenshots + how to run)

### 🎨 DESIGN: Landing Page
- [ ] Headline: "CRM for Water Delivery"
- [ ] Description of features
- [ ] Screenshots or animations of app
- [ ] Call to Action (GitHub link or demo)

---