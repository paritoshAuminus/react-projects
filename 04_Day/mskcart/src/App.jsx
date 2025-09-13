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