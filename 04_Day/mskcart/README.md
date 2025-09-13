# React + Vite

This template provides a minimal setup to get React working in Vite with HMR and some ESLint rules.

Currently, two official plugins are available:

- [@vitejs/plugin-react](https://github.com/vitejs/vite-plugin-react/blob/main/packages/plugin-react) uses [Babel](https://babeljs.io/) for Fast Refresh
- [@vitejs/plugin-react-swc](https://github.com/vitejs/vite-plugin-react/blob/main/packages/plugin-react-swc) uses [SWC](https://swc.rs/) for Fast Refresh

## Expanding the ESLint configuration

If you are developing a production application, we recommend using TypeScript with type-aware lint rules enabled. Check out the [TS template](https://github.com/vitejs/vite/tree/main/packages/create-vite/template-react-ts) for information on how to integrate TypeScript and [`typescript-eslint`](https://typescript-eslint.io) in your project.


## Day 04 of learning react

This is the fourth day of learning react and today I learned how I can use routing to connect multiple react components together

- First we install the react router dom module into the dependencies folder using <code>npm i -D react-router-dom</code> command, make sure to enter the vite project folder before running this command, this ensures it is installed in the right folder
- Then we use w3 schools/ChatGPT in order to access the routing feature
- The individual steps after successful installation include:
    - Adding this line to the <code>main.jsx</code> file; <code>import { BrowserRouter } from 'react-router-dom'</code>
    - After that enclose the <code>`<App>`</code> tag inside the <code>`<BrowserRouter>`</code> tag in <code>Main.jsx</code> file.
- If the preparations made were accurate, we can start working on adding different routes to the main <code>App.jsx</code> file.

### Route sample

<code>
`
import { Route, Routes } from "react-router-dom";
import Footer from "./components/Footer";
import Header from "./components/Header";
import Home from "./pages/Home";
import About from "./pages/About";
import Nopage from "./pages/Nopage";

const App = () => {
  return (
    <>
      <Header />

      <Routes>
        <Route path="/home" element={ <Home /> } />
        <Route path="/about" element={ <About /> } />
        <Route path="*" element={ <Nopage /> } />
      </Routes>
      
      <Footer />
    </>
  )
}

export default App;
`
</code>