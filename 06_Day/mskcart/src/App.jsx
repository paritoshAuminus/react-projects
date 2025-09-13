import { Route, Routes } from "react-router-dom";
import Footer from "./components/Footer";
import Header from "./components/Header";
import Home from "./pages/Home";
import About from "./pages/About";
import Nopage from "./pages/Nopage";
import Contact from "./pages/Contact";
import Members from "./pages/Members";
import Courses from "./pages/Courses";

const App = () => {
  return (
    <>
      <Header />

      <Routes>
        <Route path="/" element={ <Home /> } />
        <Route path="/about" element={ <About /> } />
        <Route path="/contact" element={ <Contact /> } />
        <Route path="/members" element={ <Members /> } />
        <Route path="/courses" element={<Courses />} />
        <Route path="*" element={ <Nopage /> } />
      </Routes>
      <Footer />
    </>
  )
}

export default App;