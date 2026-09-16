# GearUp Backend API Coverage & Audit Report

This document serves as the formal audit and architectural mapping between the **GearUp Frontend** and the **GearUp Backend API (Postman Collection)**. The Postman collection is strictly treated as the single source of truth for all available endpoints, query parameters, payloads, and response structures.

---

## 1. Page & Feature Audit Matrix

| Page / Feature                  | Route                                       | Purpose                                               | Data Required                                     | Required API Endpoint(s)                                                             | API Available |            Status             |
| :------------------------------ | :------------------------------------------ | :---------------------------------------------------- | :------------------------------------------------ | :----------------------------------------------------------------------------------- | :-----------: | :---------------------------: |
| **Login**                       | `/auth/login`                               | Authenticate users and issue JWT tokens               | email, password                                   | `POST /api/auth/login`                                                               |      Yes      |           **Ready**           |
| **Register**                    | `/auth/register`                            | Register new customer or provider account             | name, email, password, role                       | `POST /api/auth/register`                                                            |      Yes      |           **Ready**           |
| **Home Page**                   | `/`                                         | Showcase platform highlights, categories & gear       | Featured gear, active categories                  | `GET /api/gear`, `GET /api/category`                                                 |      Yes      |           **Ready**           |
| **Gear Listing**                | `/gear`                                     | Browse, filter, search, and paginate gear             | Gears list, filters (brand, price, category)      | `GET /api/gear`, `GET /api/category`                                                 |      Yes      |           **Ready**           |
| **Gear Details**                | `/gear/[id]`                                | Inspect specific gear, provider info & reviews        | Gear specifications, review history               | `GET /api/gear/:id`, `GET /api/gear/:id/reviews`                                     |      Yes      |           **Ready**           |
| **Gear Booking Modal / Action** | `/gear` or `/gear/[id]`                     | Rent equipment for specified dates                    | rentalDate, returnDate, gearItemId                | `POST /api/order`                                                                    |      Yes      |           **Ready**           |
| **User Dashboard Overview**     | `/dashboard/user`                           | View user metrics, current profile, and recent orders | User profile, customer order history, payments    | `GET /api/auth/me`, `GET /api/order`, `GET /api/payments`                            |      Yes      |           **Ready**           |
| **User Bookings**               | `/dashboard/user/bookings`                  | View booked gear, launch payment, leave reviews       | Order list, payment initiation, review submission | `GET /api/order`, `POST /api/payments/create`, `POST /api/rentals/:rentalId/reviews` |      Yes      |           **Ready**           |
| **Booking Tracking**            | `/dashboard/user/tracking`                  | Track status milestones of gear rentals               | Specific order details, rental status             | `GET /api/order/:id`, `GET /api/order`                                               |      Yes      |           **Ready**           |
| **User Profile View**           | `/dashboard/user/profile`                   | View customer profile and verified credentials        | Authenticated user profile                        | `GET /api/auth/me`                                                                   |      Yes      |           **Ready**           |
| **User Profile Update**         | `/dashboard/user/profile`                   | Update contact, address, or password                  | Profile update payload                            | _None (`PUT /api/auth/profile` does not exist)_                                      |      No       |    **Partially Supported**    |
| **Provider Dashboard Overview** | `/dashboard/provider`                       | View provider rentals, incoming orders, and revenue   | Provider orders, provider gear                    | `GET /api/provider/orders`, `GET /api/gear`                                          |      Yes      |           **Ready**           |
| **Provider Create Gear**        | `/dashboard/provider/gear/new`              | List new equipment for rent                           | Name, brand, price, categoryId, quantity, image   | `POST /api/gear/create`, `GET /api/category`                                         |      Yes      |           **Ready**           |
| **Provider My Gears**           | `/dashboard/provider/gear`                  | View, update, and delete provider inventory           | Provider gear list, edit/delete actions           | `GET /api/gear`, `PUT /api/gear/update/:id`, `DELETE /api/gear/delete/:id`           |      Yes      |           **Ready**           |
| **Provider Orders / Bookings**  | `/dashboard/provider/bookings`              | Manage customer reservations & update rental status   | Provider orders list, status update               | `GET /api/provider/orders`, `PATCH /api/provider/orders/:orderId`                    |      Yes      |           **Ready**           |
| **Admin Dashboard Overview**    | `/dashboard/admin`                          | Platform-wide overview of activity and volume         | Users, gears, rentals ledger                      | `GET /api/admin/users`, `GET /api/admin/gear`, `GET /api/admin/rentals`              |      Yes      |           **Ready**           |
| **Admin Users Management**      | `/dashboard/admin/users`                    | List platform users and suspend/activate accounts     | Users list, status update                         | `GET /api/admin/users`, `PATCH /api/admin/user/:id`                                  |      Yes      |           **Ready**           |
| **Admin Providers Management**  | `/dashboard/admin/providers`                | Manage equipment rental providers                     | Provider list, account status                     | `GET /api/admin/users` _(filtered by role=PROVIDER)_, `PATCH /api/admin/user/:id`    |      Yes      | **Ready** _(via Admin Users)_ |
| **Admin Gears Catalog**         | `/dashboard/admin/gears`                    | Moderate platform inventory and delist items          | All platform gears, delete action                 | `GET /api/admin/gear`, `DELETE /api/gear/delete/:id`                                 |      Yes      |           **Ready**           |
| **Admin Bookings Ledger**       | `/dashboard/admin/bookings`                 | Audit platform rental contracts and payments          | Platform rentals with customer & gear info        | `GET /api/admin/rentals`                                                             |      Yes      |           **Ready**           |
| **Admin Reviews & Reports**     | `/dashboard/admin/reviews`                  | Dispute moderation and flag resolution                | Moderation reports, review deletion               | _None (`GET /api/admin/reviews` or reports endpoint does not exist)_                 |      No       |          **Blocked**          |
| **Stripe Checkout & Payment**   | `/payments/*` or `/dashboard/user/bookings` | Initiate Stripe checkout and view payment receipt     | Order ID, checkout URL, payment status            | `POST /api/payments/create`, `GET /api/payments`, `GET /api/payments/:id`            |      Yes      |           **Ready**           |

---

## 2. APIs Available in Postman Collection

The following 18 endpoints are verified and available in the backend:

### Auth

1. `POST /api/auth/register` — Create account (`name`, `email`, `password`, `role`).
2. `POST /api/auth/login` — Sign in and receive `accessToken` + `refreshToken`.
3. `GET /api/auth/me` — Retrieve current authenticated user profile.

### Category

4. `POST /api/category` — Create equipment category (Admin).
5. `GET /api/category` — Retrieve all categories.
6. `PUT /api/category/:id` — Update category name (Admin).
7. `DELETE /api/category/:id` — Delete category (Admin).

### Gear

8. `POST /api/gear/create` — Create gear listing (`name`, `description`, `price`, `imageUrl`, `brand`, `quantity`, `categoryId`).
9. `GET /api/gear` — Retrieve all gear listings with query filters (`minPrice`, `maxPrice`, `brand`, `categoryId`).
10. `GET /api/gear/:id` — Retrieve specific gear details including provider and category.
11. `PUT /api/gear/update/:id` — Update gear details.
12. `DELETE /api/gear/delete/:id` — Delete gear listing.

### Admin

13. `GET /api/admin/users` — List platform users with pagination meta.
14. `PATCH /api/admin/user/:id` — Update user account status (`status`: `"active"` / `"SUSPENDED"`).
15. `GET /api/admin/gear` — List all platform gears with pagination meta.
16. `GET /api/admin/rentals` — List platform-wide rental ledger with customer and gear details.

### Orders / Customer Rentals

17. `POST /api/order` — Create rental booking (`rentalDate`, `returnDate`, `gearItemId`).
18. `GET /api/order` — Retrieve current customer's orders.
19. `GET /api/order/:id` — Retrieve specific order details.

### Reviews

20. `POST /api/rentals/:rentalId/reviews` — Submit review for rental (`rating`, `comment`).
21. `GET /api/gear/:gearId/reviews` — Retrieve all reviews for a specific gear.

### Provider

22. `GET /api/provider/orders` — Retrieve orders placed for provider's gear.
23. `PATCH /api/provider/orders/:orderId` — Update rental order status (`status`: e.g. `"confirmed"`, `"picked_up"`).

### Payment

24. `POST /api/payments/create` — Create Stripe checkout session (`orderId`). Returns `{ checkoutUrl }`.
25. `GET /api/payments` — Retrieve customer's payment history.
26. `GET /api/payments/:id` — Retrieve specific payment record.

---

## 3. Pages Ready for Integration

- **`/auth/login`**: Full login flow with HTTP-only cookies and role-based redirect.
- **`/auth/register`**: Full registration flow with role support (`user` or `provider`).
- **`/gear`**: Dynamic gear catalog using `GET /api/gear` and categories from `GET /api/category`.
- **`/dashboard/user`**: Displays real profile (`GET /api/auth/me`), recent orders (`GET /api/order`), and payment summary (`GET /api/payments`).
- **`/dashboard/user/bookings`**: Lists real customer bookings (`GET /api/order`), offers "Pay Now" with Stripe (`POST /api/payments/create`), and review dialog (`POST /api/rentals/:rentalId/reviews`).
- **`/dashboard/user/tracking`**: Real order tracking milestones (`GET /api/order/:id`).
- **`/dashboard/provider`**: Overview with real provider orders (`GET /api/provider/orders`).
- **`/dashboard/provider/gear/new`**: Create gear listing using `POST /api/gear/create` and `GET /api/category`.
- **`/dashboard/provider/gear`**: Inventory management with `PUT /api/gear/update/:id` and `DELETE /api/gear/delete/:id`.
- **`/dashboard/provider/bookings`**: Provider bookings table with live status updates using `PATCH /api/provider/orders/:orderId`.
- **`/dashboard/admin`**: Live platform stats aggregated from real admin endpoints (`GET /api/admin/users`, `GET /api/admin/gear`, `GET /api/admin/rentals`).
- **`/dashboard/admin/users`**: Real user directory with `PATCH /api/admin/user/:id` suspend/activate toggles.
- **`/dashboard/admin/providers`**: Provider directory derived from `GET /api/admin/users` filtered by `role === "PROVIDER"`.
- **`/dashboard/admin/gears`**: Platform gears catalog with `DELETE /api/gear/delete/:id`.
- **`/dashboard/admin/bookings`**: Platform rentals ledger via `GET /api/admin/rentals`.

---

## 4. Pages Partially Supported

- **`/dashboard/user/profile`**:
  - **Supported**: Viewing current authenticated user profile (`id`, `name`, `email`, `role`, `status`, `createdAt`) via `GET /api/auth/me`.
  - **Missing**: Profile mutation endpoint (`PUT /api/auth/profile` or `PATCH /api/auth/me`) does not exist in the collection.
  - **Resolution**: Form fields display live user info with read-only/informative state indicating server profile updates are managed by system administrator.

---

## 5. Pages Missing Required APIs

- **`/dashboard/admin/reviews`**:
  - **Missing**: There is no platform moderation endpoint (e.g. `GET /api/admin/reviews`, `GET /api/reports`, or `DELETE /api/reviews/:id`) in the Postman collection.
  - **Resolution**: Keep page layout for UX completeness, but display clean informational notice that moderation APIs are pending backend implementation. Do not use fake API requests.

---

## 6. Missing Backend APIs (Documentation Only)

1. **User Profile Update (`PATCH /api/auth/me` or `PUT /api/auth/profile`)**:
   - Needed to update name, contact phone, or address for existing accounts.
2. **Refresh Token Flow (`POST /api/auth/refresh-token`)**:
   - No refresh token exchange endpoint exists in the Postman collection. Session duration relies on access token validity.
3. **Admin Dispute Moderation (`GET /api/admin/reviews`, `DELETE /api/reviews/:id`)**:
   - Needed for centralized content moderation of user reviews.
4. **Dedicated Provider Filter (`GET /api/provider/gears` or `GET /api/gear?providerId=...`)**:
   - Provider inventory currently retrieved via `GET /api/gear` filtered by `providerId`.

---

## 7. Pages/Features to Reconsider or Simplify

- **Static Mock Data in Dashboard**: All hardcoded `MOCK_BOOKINGS`, `MOCK_USERS`, `MOCK_PROVIDERS` are replaced with real backend API calls.
- **Admin Review Moderation UI**: Replaced mock data with honest "No reported reviews pending — backend moderation API not deployed" state to avoid inventing fake data.
