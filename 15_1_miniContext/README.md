## Creating and using context in react
Today we will learn how to create context and use it

- Step 1 - Create a `filename.js` file in `context` folder inside the src
- Step 2 - Create a context with the react's `React.createContext()` method and store this context inside a variable; say `UserContext`
- Step 3 - Export that context out of the file using native js syntax `export default UserContext`

> In order to use this context we need to create something called a provider and wrap all the components (children) inside of it.
>
> This way you'll be able to use the context inside all the components without ever needing to do props drilling

    <UserContext (varibale inside of which the context is stored)>
        <ComponentOne />
        <ComponentTwo>
            <SubComponent></SubComponent>
        </ComponentTwo>
    </UserContext>