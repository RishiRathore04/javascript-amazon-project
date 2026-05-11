# JavaScript Amazon Project

This is a vanilla JavaScript e-commerce clone inspired by Amazon. It is a browser-based project built with HTML, CSS, and ES modules, and it demonstrates a full shopping flow: browsing products, adding items to a cart, reviewing checkout totals, and viewing order-related pages.

## Project Overview

The app is split into a few focused pages:

- The storefront loads products from a backend API and renders a product grid.
- The checkout page reads the cart, calculates totals, and shows delivery choices.
- The orders and tracking pages represent the post-purchase experience.
- Cart state is stored in `localStorage` so it survives page refreshes.
- Unit tests are included with Jasmine so you can validate the core logic.

If you are new to web projects, this repository is useful for learning how small modules work together to build a complete shopping experience.

## Screenshots

Home page:

![Home page screenshot](images/screenshots/home-page.png)

Checkout page:

![Checkout page screenshot](images/screenshots/checkout-page.png)

## Main Pages

- `amazon.html` - storefront with the searchable product grid and add-to-cart controls.
- `checkout.html` - checkout screen with order summary, shipping, and payment totals.
- `orders.html` - order history page.
- `tracking.html` - delivery tracking page.

## How The App Works

1. `scripts/amazon.js` loads product data from `https://supersimplebackend.dev/products`.
2. Each product is turned into a `Product`, `Clothing`, or `Appliance` object in `data/products.js`.
3. `data/cart.js` keeps the cart in memory and saves it to `localStorage`.
4. Checkout modules in `scripts/checkout/` render the header, order summary, and payment summary.
5. Shared styling lives under `styles/shared/`, while page-specific styles live under `styles/pages/`.

## Folder Guide

### `scripts/`

- `amazon.js` - renders the storefront and add-to-cart interactions.
- `checkout.js` - page entry point for checkout.
- `checkout/checkoutHeader.js` - renders the checkout header.
- `checkout/orderSummary.js` - renders cart items and delivery options.
- `checkout/paymentSummary.js` - renders totals and payment information.
- `utils/money.js` - formats currency values.

### `data/`

- `cart.js` - cart state, quantity updates, and persistence.
- `products.js` - product classes, product loading, and helper methods.
- `deliveryOptions.js` - shipping choices and delivery timing data.
- `orders.js` - order-related data helpers.
- `backend-practice.js`, `car.js`, `cart-class.js`, `cart-oops.js` - practice or experiment files.

### `styles/`

- `styles/shared/` - shared layout, typography, and header styles.
- `styles/pages/` - page-specific styles for Amazon, checkout, orders, and tracking.

### `images/`

- Product photos, logos, icons, rating stars, and supporting graphics.
- `images/screenshots/` contains the README screenshots.

### `tests/`

- Jasmine specs for cart, product, money, and checkout behavior.
- `tests/tests.html` is the test runner.
- `tests-simple/` contains a smaller money-format example.

### `backend/`

- `products.json` is included as reference project data.

## Beginner Setup

You do not need to install npm dependencies for this project. It is a static front-end app, so the only thing you need is a way to serve the files through a local web server.

### Option 1: VS Code Live Server

1. Open this folder in VS Code.
2. Install the Live Server extension if you do not already have it.
3. Right-click `amazon.html` and choose Open with Live Server.
4. The browser should open the storefront automatically.

### Option 2: Python local server

If you already have Python installed, you can start a simple server from the project root:

```bash
python -m http.server 8000
```

Then open this address in your browser:

```text
http://localhost:8000/amazon.html
```

Use the same server to open the other pages:

- `http://localhost:8000/checkout.html`
- `http://localhost:8000/orders.html`
- `http://localhost:8000/tracking.html`

## Running Tests

Open `tests/tests.html` through the same local server. The page loads Jasmine and runs the included specs in the browser.

## Useful Notes

- The product grid waits for the product fetch request to finish before rendering.
- The cart starts with sample items when nothing exists in `localStorage`.
- The app uses native ES module imports, so it works best when served over HTTP rather than opened directly from the file system.
- The repo includes a few practice files in `data/` that are not required for the main app flow.

## Technologies Used

- HTML5
- CSS3
- Vanilla JavaScript
- ES modules
- Browser `localStorage`
- Jasmine
