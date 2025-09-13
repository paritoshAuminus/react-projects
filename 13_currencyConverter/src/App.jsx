import { InputBox } from "./components"
import useCurrencyInfo from "./hooks/useCurrencyInfo"


function App() {

  useCurrencyInfo()

  return (
    <>
    <InputBox />
    </>
  )
}

export default App
