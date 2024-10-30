import { Header } from "./components/Header";
import { Footer } from "./components/Footer";

import Home from "./screens/Home";
import About from "./screens/About";
import Curse from "./screens/Curse";
import Documentation from "./screens/Documentation";
import Contact from "./screens/Contact";

import { BrowserRouter, Routes, Route } from "react-router-dom";

const App = () => {
  return (
    <>
    <BrowserRouter>
      <Header />
          <Routes>
            <Route path="/" element={<Home/>}/>
            <Route path="/about" element={<About/>}/>
            <Route path="/curse" element={<Curse/>}/>
            <Route path="/documentation" element={<Documentation/>}/>
            <Route path="/contact" element={<Contact/>}/>
          </Routes>
    </BrowserRouter>
      <Footer />
    </>
  );
};

export default App;
