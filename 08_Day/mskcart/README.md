# React + Vite

This template provides a minimal setup to get React working in Vite with HMR and some ESLint rules.

Currently, two official plugins are available:

- [@vitejs/plugin-react](https://github.com/vitejs/vite-plugin-react/blob/main/packages/plugin-react) uses [Babel](https://babeljs.io/) for Fast Refresh
- [@vitejs/plugin-react-swc](https://github.com/vitejs/vite-plugin-react/blob/main/packages/plugin-react-swc) uses [SWC](https://swc.rs/) for Fast Refresh

## Expanding the ESLint configuration

If you are developing a production application, we recommend using TypeScript with type-aware lint rules enabled. Check out the [TS template](https://github.com/vitejs/vite/tree/main/packages/create-vite/template-react-ts) for information on how to integrate TypeScript and [`typescript-eslint`](https://typescript-eslint.io) in your project.


## Day 08 of learning react

This is the eighth day of learning react and today I learned how I can include an API and fetch contennt from it with the help of <strong>react props</strong>.

> React components use props to communicate with each other. Every parent component can pass some information to its child components by giving them props.

### Adding props to component in the component file

> The fist way to include props in your component is:
```
function MyComponent({name, age}) {
    retrun (
        <p>Persone name: {name}</p>
        <p>Persone age: {age}</p>
    )
}
```
> The second way to include props in your component is:
```
function MyComponent( props ) {
    return(
        <p>Persone name: {props.name}</p>
        <p>Persone age: {props.age}</p>
    )
}
```

### Passing prop values into the component as it is called inside another component

> While calling the component into another component (component nesting)
```
<MyComponent name="Rajat" age="25" />
```