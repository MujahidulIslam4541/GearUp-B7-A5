# GearUp - Rent Sports & Outdoor Gear Instantly 🏋️

GearUp is a modern, responsive Next.js web application for a sports and outdoor equipment rental service. Customers can browse available gear, select rental dates, and complete secure payments via Stripe. Providers manage their gear inventory and fulfill rental orders through an intuitive dashboard. Admins oversee the entire platform through a comprehensive moderation interface.

---

## 🔑 Admin Credentials (For Testing)

- **Email:** `admin@gmail.com`
- **Password:** `12345678`
- **Role:** `ADMIN`

### Customer Test Account

- **Email:** `rifat@gmail.com`
- **Password:** `12345678`
- **Role:** `USER`

### Provider Test Account

- **Email:** `provider@gmail.com`
- **Password:** `12345678`
- **Role:** `PROVIDER`

---

## 🚀 Tech Stack

- **Framework:** Next.js 16 (App Router)
- **Language:** TypeScript (Strict Mode)
- **Styling:** Tailwind CSS
- **Component Library:** ShadCN UI, Radix Primitives
- **Animations & Sidebar:** Animate UI Radix Sidebar
- **Authentication:** JWT in HTTP-Only Cookies + jsonwebtoken
- **Payment Gateway:** Stripe Checkout Integration
- **Package Manager:** Bun

---

## 📁 Key Documentation

- [`API_INTEGRATION.md`](./API_INTEGRATION.md) — Comprehensive mapping between frontend components and backend API endpoints.
- [`API_COVERAGE.md`](./API_COVERAGE.md) — Complete endpoint coverage audit based on backend Postman collection.

---

## 🛠️ Getting Started

```bash
# Install dependencies
bun install

# Run development server
bun dev

# Run TypeScript check
bun run typecheck

# Build for production
bun run build
```
