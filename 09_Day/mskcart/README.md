# React + Vite

This template provides a minimal setup to get React working in Vite with HMR and some ESLint rules.

Currently, two official plugins are available:

- [@vitejs/plugin-react](https://github.com/vitejs/vite-plugin-react/blob/main/packages/plugin-react) uses [Babel](https://babeljs.io/) for Fast Refresh
- [@vitejs/plugin-react-swc](https://github.com/vitejs/vite-plugin-react/blob/main/packages/plugin-react-swc) uses [SWC](https://swc.rs/) for Fast Refresh

## Expanding the ESLint configuration

If you are developing a production application, we recommend using TypeScript with type-aware lint rules enabled. Check out the [TS template](https://github.com/vitejs/vite/tree/main/packages/create-vite/template-react-ts) for information on how to integrate TypeScript and [`typescript-eslint`](https://typescript-eslint.io) in your project.


## Day 09 of learning react

This is the ninth day of learning react and today we will learn how we can do dynamic routing.

> Dynamic routing is a procedure in which we use <code>useParams</code> in order to inspect the <code>url</code> in real time. Whenever the url changes either using react <code>`<Link>`</code>, useParams searches for the designated value of the predefned key in the path inside the value of <em>to</em> property of the Link.

> Dynamic routing is similar to normal routing and uses <code>react-router-dom</code>, but it is different in the sense that it use <code>useParams</code> in order to inspect the URL.

### Using useParams in order to coduct Dynamic Routing

```
<div>
    <div>
        <Link to={"/course/" + course.id} >
            Go somewhere
        </Link>
    </div>
</div>
```
