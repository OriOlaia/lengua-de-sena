import { Header } from "./components/Header";
import { Princip } from "./components/Princip";
import { Footer } from "./components/Footer";

import { Route, BrowserRouter,Routes, Router } from "react-router-dom";
import { Home } from "./screens/Home";
import { About } from "./screens/About";
import { Curse } from "./screens/Curse";
import { Documentation } from "./screens/Documentation";
import { Contact } from "./screens/Contact";


const App = () => {
  return (
    <>
    <BrowserRouter>
      <Header />
        <Router>
          <Routes>
            <Route path="/home" element={<Home/>}/>
            <Route path="/about" element={<About/>}/>
            <Route path="/curse" element={<Curse/>}/>
            <Route path="/documentation" element={<Documentation/>}/>
            <Route path="/contact" element={<Contact/>}/>
          </Routes>
        </Router>
    </BrowserRouter>
    
     
      <Princip />
      <Footer />
    </>
  );
};

export default App;
