# 🍽️ Foodies Frontend

Foodies is a modern React-based frontend application built with Vite. It serves as the user interface for a
recipe-sharing platform, supporting user profiles, following functionality, recipe browsing, and responsive layout.

## 🔗 Live Demo

Check out the live website here: [https://foodies-pink.vercel.app](hhttps://foodies-pink.vercel.app)

> Note: Make sure you're logged in (if required) or that your backend is properly running for full functionality.

## 🧰 Tech Stack

- **React 19** with JSX
- **Vite** for fast development
- **Redux Toolkit** for state management
- **React Router v7**
- **Formik + Yup** for form handling and validation
- **ESLint** with custom config
- **Storybook** for UI components
- **Toast notifications** with `react-hot-toast`

---

## 🚀 Getting Started

### 1. Install dependencies

```bash
npm install
```

### 2. Configure environment variables

Create a `.env` file in the root directory based on the example:

```bash
cp .env.example .env
```

Then update the `.env` file:
```bash
VITE_API_BASE_URL=https://your-api-url.com
```

### 3. Run the app in development mode

```bash
npm run dev
```

### 4. Run Storybook

```bash
npm run storybook
```

### 5. Build for production

```bash
npm run build
```

---

## 📁 Project Structure

```
src/
├── assets/            # Static assets like icons and images
├── components/        # Shared UI components
├── constants/         # Shared constants
├── hooks/             # Custom React hooks
├── pages/             # Route-based page components
├── services/          # API services
├── store/             # Slices, store setup
└── utils/             # Reusable utility functions
```

---

## ✅ Code Quality

- Lint your code: `npm run lint`
- ESLint is configured via `eslint.config.js`
- Storybook includes visual tests for UI components

---

## 📐 Design System

If applicable, here's
the [Figma Design File](https://www.figma.com/design/TKl7kDNvwtz62RsuWNnQ5E/Foodies?node-id=0-1&p=f&t=25QJW9YlWYqqMzGc-0)  
_(Ask your team for access if the link doesn’t work.)_

---

## ⚙️ Requirements

- **Node.js v20+** is required (enforced via `engines` in `package.json`)
- Works with modern browsers and supports responsive breakpoints (mobile, tablet, desktop)

---