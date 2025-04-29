# In-Life Employee Finder 🔎

## Project Setup

This project is a Vue 3 application built with TypeScript and Vite, featuring employee management functionalities. It uses Pinia for state management, Tailwind CSS for styling, and Vue Router for routing. 

---

## Install Dependencies

To install the necessary dependencies, run:

```bash
npm install
```

### Additional Dependencies:
1. **Vue Router**:
   ```bash
   npm install vue-router
   ```

2. **Pinia** (state management):
   ```bash
   npm install pinia
   ```

3. **Tailwind CSS** (for styling):
   ```bash
   npm install tailwindcss @tailwindcss/vite
   ```

4. **PostCSS Auto-Prefixer**:
   ```bash
   npm install -D @tailwindcss/postcss
   ```

5. **Vue Toastification** (for popups):
   ```bash
   npm install --save vue-toastification@next
   ```

6. **Biings Design System** (for UI components):
   ```bash
   npm install biings-ds
   ```

---

## Configuration

### Vite Configuration (`vite.config.ts`)

Make sure to configure **aliasing** for easier imports and enable the `Tailwind CSS` plugin.

1. **Alias configuration**:
In `vite.config.ts`, add:

```ts
import { defineConfig } from 'vite'
import vue from '@vitejs/plugin-vue'
import path from 'path'

export default defineConfig({
  plugins: [vue()],
  resolve: {
    alias: {
      "@": path.resolve(__dirname, "./src"),
    },
  },
})
```

2. **Tailwind CSS Configuration**:
Ensure your `vite.config.ts` includes the Tailwind plugin:

```ts
import tailwindcss from '@tailwindcss/vite'

export default defineConfig({
  plugins: [
    tailwindcss(),
  ],
})
```

### Tailwind CSS Setup

1. **CSS File** (`assets/css/main.css`):

```css
@import "tailwindcss";
```

2. **Link the CSS File in `index.html`**:

```html
<link href="/src/assets/css/main.css" rel="stylesheet">
```

### Tailwind CSS IntelliSense

Make sure you have **Tailwind CSS IntelliSense** enabled in your editor for a better development experience, including features like auto-completion and syntax highlighting.

---

## Declare Vue Module Type

In `vite-env.d.ts`, declare the `.vue` file module:

```ts
declare module '*.vue' {
  import type { DefineComponent } from 'vue'
  const component: DefineComponent<{}, {}, any>
  export default component
}
```

---

## Routing and Handling Not Found Pages

In case of a **404 error**, configure your routes in Vue Router as follows:

```ts
{
  path: '/:catchAll(.*)',
  name: 'not-found',
  component: NotFoundView,
}
```

---

## Pinia for State Management

Install **Pinia** for state management:

```bash
npm install pinia
```

Create a store in `stores/` to manage your employee data.

Example:

```ts
import { defineStore } from 'pinia';

export const useEmployeeStore = defineStore('employeeStore', () => {
  const employees = ref<EmployeeType[]>([]);

  const addEmployee = (newEmployee: EmployeeType) => {
    employees.value.push(newEmployee);
  }

  return { employees, addEmployee };
});
```

---


## Running the Project

To run the development server:

```bash
npm run dev
```

To build the project for production:

```bash
npm run build,
```
and make sure to have urls like this:

```
export default defineConfig({
  plugins: [vue(), tailwindcss()],
  resolve: {
    alias: {
      "@": fileURLToPath(new URL('./src', import.meta.url)),
      'url': 'url'
    },
  },
})
```

---
