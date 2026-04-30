# InventoryPro — React + Next.js Inventory Management

InventoryPro is a lightweight inventory management dashboard built with Next.js 16, React 19, Tailwind CSS 4, and TypeScript. The app provides client-side product creation, editing, viewing, and deletion using browser `localStorage`.

## Key Features

- Add new inventory items with product name, SKU, category, tags, price, quantity, supplier, reorder level, and description
- Edit existing product details from the inventory list
- Delete products with immediate UI updates
- View product details in a modal, including pricing, stock analytics, and supplier info
- Dashboard cards for total products, category count, stock types, and average price
- Local browser persistence through `localStorage`
- Styled with Tailwind CSS and icon support via `lucide-react`

## App Structure

- `app/page.tsx` — Landing page / homepage with feature cards and hero section
- `app/addProduct/page.tsx` — Add product form and validation
- `app/editProduct/[id]/page.tsx` — Edit product page for existing inventory items
- `app/viewProduct/page.tsx` — Inventory list, product actions, and product detail modal
- `app/utils/type.ts` — Type definitions and selection lists for categories, tags, and stock status
- `app/components/` — Reusable UI components such as `Card`, `Navbar`, and `Slider`

## Routes

- `/` — Home / marketing-style landing page
- `/addProduct` — Add a new product to inventory
- `/viewProduct` — Inventory management dashboard and product list
- `/editProduct/[id]` — Edit a product by its ID

## Getting Started

### Requirements

- Node.js 20+ recommended
- npm installed

### Install Dependencies

```bash
npm install
```

### Run Development Server

```bash
npm run dev
```

Open `http://localhost:3000` in your browser.

## Available Scripts

- `npm run dev` — Start the development server
- `npm run build` — Build the production app
- `npm run start` — Start the production server after build
- `npm run lint` — Run ESLint checks

## Dependencies

- `next@16.2.1`
- `react@19.2.4`
- `react-dom@19.2.4`
- `tailwindcss@4`
- `lucide-react`
- `react-toastify`

## Notes

- Product data is stored in browser `localStorage`, so it persists across refreshes in the same browser only.
- There is no backend API integration in this version; all state is managed client-side.

## License

This project is provided as-is.
