import { useEffect, useState } from "react"

/*
This is a custom hook, just like normal hooks this is nothing but a function
and this returns the whole method with basic javascript syntax so that it could
be used anywhere in the app.

As we clearly see here we can also use other hook inside of our custom hook
*/

function useCurrencyInfo(currency) {

    const [data, setData] = useState({})

    useEffect(() => {() => {
        fetch(`https://cdn.jsdelivr.net/npm/@fawazahmed0/currency-api@latest/v1/currencies/${currency}.json`)
        .then(res => res.json())
        .then(res => setData(res[currency]))
    }
    }, [currency])

    return data    
}

export default useCurrencyInfo