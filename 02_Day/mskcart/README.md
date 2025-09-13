# React + Vite

This template provides a minimal setup to get React working in Vite with HMR and some ESLint rules.

Currently, two official plugins are available:

- [@vitejs/plugin-react](https://github.com/vitejs/vite-plugin-react/blob/main/packages/plugin-react) uses [Babel](https://babeljs.io/) for Fast Refresh
- [@vitejs/plugin-react-swc](https://github.com/vitejs/vite-plugin-react/blob/main/packages/plugin-react-swc) uses [SWC](https://swc.rs/) for Fast Refresh

## Expanding the ESLint configuration

If you are developing a production application, we recommend using TypeScript with type-aware lint rules enabled. Check out the [TS template](https://github.com/vitejs/vite/tree/main/packages/create-vite/template-react-ts) for information on how to integrate TypeScript and [`typescript-eslint`](https://typescript-eslint.io) in your project.

## Day 2 of learning react

Today we will see how we can install tailwind css in our react environment

- Go to this [website](https://tailwindcss.com/docs/installation/using-vite)
- Follow the steps given on the website, make sure to run the first command <code>npm install tailwindcss @tailwindcss/vite</code> in the same directory as your project or it will get installed elsewhere
- Copy the instructions and imports given on the website on the designated files
- In order for you to work with tailwind CSS you must:
    - Have prior knowledge about the framework
    - Use <code>className</code> prop instead of <code>class</code> attribute of html, <code>class</code> is a reserved keyword in react hence you cannot use it to declare classes to your components

>Note: You can additionaly install the <strong>Tailwind CSS Intellisense</strong> plugin into vs code, this will make working with tailwind a lot more easier.