# GearUp Frontend - API Integration Documentation

This document maps all frontend pages and components to their corresponding backend API endpoints.

---

## 1. Authentication

| Feature / UI Component | Frontend File | Backend Endpoint | Method | Description |
|---|---|---|---|---|
| Registration Form | `components/auth/register-form.tsx` | `/api/auth/register` | `POST` | Register Customer/Provider account |
| Login Form | `components/auth/login-form.tsx` | `/api/auth/login` | `POST` | Authenticate & issue JWT tokens |
| Navbar Profile & Sidenav | `lib/auth-server.ts`, `components/navbar/nav-auth.tsx` | `/api/auth/me` | `GET` | Retrieve verified session & user profile |

---

## 2. Public & Customer Features

| Feature / UI Component | Frontend File | Backend Endpoint | Method | Description |
|---|---|---|---|---|
| Featured Gear Section | `components/home/featured-gear-section.tsx` | `/api/gear` | `GET` | Fetch items for platform showcase |
| Gear Catalog & Search | `components/gear/gear-listing-content.tsx` | `/api/gear` | `GET` | List gears with search/filters |
| Category Filters | `components/gear/gear-filters.tsx` | `/api/category` | `GET` | Retrieve category options |
| Gear Details Overview | `app/(main)/gear/[id]/page.tsx` | `/api/gear/:id` | `GET` | Detailed specs & provider info |
| Gear Reviews Section | `components/gear/gear-reviews-list.tsx` | `/api/gear/:id/reviews` | `GET` | List customer reviews for gear |
| Equipment Booking Card | `components/gear/gear-booking-card.tsx` | `/api/order` | `POST` | Reserve gear with rental dates |
| User Bookings Table | `components/dashboard/user/user-bookings-list.tsx` | `/api/order` | `GET` | Retrieve customer rental orders |
| Booking Milestone Tracker | `components/dashboard/user/tracking-interactive-view.tsx` | `/api/order/:id` | `GET` | Track rental progress milestones |
| Stripe Checkout Initiation | `components/dashboard/user/user-booking-item.tsx` | `/api/payments/create` | `POST` | Generate Stripe Checkout session |
| Customer Payments History | `components/dashboard/user/user-stats.tsx` | `/api/payments` | `GET` | Retrieve customer payments ledger |
| Leave Rental Review Modal | `components/dashboard/user/user-booking-review-form.tsx` | `/api/rentals/:rentalId/reviews` | `POST` | Submit rating & review for rental |

---

## 3. Provider Features

| Feature / UI Component | Frontend File | Backend Endpoint | Method | Description |
|---|---|---|---|---|
| Provider Dashboard Stats | `app/dashboard/provider/page.tsx` | `/api/provider/orders`, `/api/gear` | `GET` | Platform stats & rental overview |
| Create Gear Listing | `components/dashboard/provider/create-gear-form.tsx` | `/api/gear/create` | `POST` | List new equipment for rent |
| Category Dropdown | `components/dashboard/provider/create-gear-inputs.tsx` | `/api/category` | `GET` | Select gear category |
| Provider Inventory Table | `components/dashboard/provider/provider-gears-list.tsx` | `/api/gear` | `GET` | Manage provider equipment |
| Update Gear | `components/dashboard/provider/provider-gear-row.tsx` | `/api/gear/update/:id` | `PUT` | Edit price, title, or quantity |
| Delete Gear | `components/dashboard/provider/provider-gear-row.tsx` | `/api/gear/delete/:id` | `DELETE` | Delist item from inventory |
| Incoming Orders Table | `components/dashboard/provider/provider-bookings-table.tsx` | `/api/provider/orders` | `GET` | View reservations from customers |
| Update Order Status | `components/dashboard/provider/provider-booking-row.tsx` | `/api/provider/orders/:orderId` | `PATCH` | Update to CONFIRMED, PICKED_UP, etc. |

---

## 4. Admin Features

| Feature / UI Component | Frontend File | Backend Endpoint | Method | Description |
|---|---|---|---|---|
| Admin Dashboard Overview | `app/dashboard/admin/page.tsx` | `/api/admin/users`, `/api/admin/gear`, `/api/admin/rentals` | `GET` | Platform health & key statistics |
| User Management Table | `components/dashboard/admin/admin-users-table.tsx` | `/api/admin/users` | `GET` | List all platform members |
| Suspend/Activate User | `components/dashboard/admin/admin-user-row.tsx` | `/api/admin/user/:id` | `PATCH` | Toggle member account status |
| Platform Gears Audit | `components/dashboard/admin/admin-gears-table.tsx` | `/api/admin/gear` | `GET` | Inspect all platform equipment |
| Delist Platform Gear | `components/dashboard/admin/admin-gear-row.tsx` | `/api/gear/delete/:id` | `DELETE` | Remove non-compliant listings |
| Platform Bookings Ledger | `components/dashboard/admin/admin-bookings-table.tsx` | `/api/admin/rentals` | `GET` | Complete rental transaction ledger |

---

## 5. Payment Redirect Routes

| Frontend Route | File | Query Parameter | Purpose |
|---|---|---|---|
| `/payment/success` | `app/(main)/payment/success/page.tsx` | `session_id` | Displays confirmed payment & booking links |
| `/payment/cancel` | `app/(main)/payment/cancel/page.tsx` | None | Displays payment cancellation & retry options |
| `/payment/error` | `app/(main)/payment/error/page.tsx` | `message` | Graceful failure feedback & support links |

---

## 6. Admin Credentials for Testing

- **Email:** `admin@gmail.com`
- **Password:** `12345678`
- **Role:** `ADMIN`

