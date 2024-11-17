
import Footer from "./components/Footer/Footer";
import Services from "./pages/Services/Services";
import { AppHeader } from './common/AppHeader';
import Home from "./pages/Home";
import { Suspense } from 'react';
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import Carrers from "./pages/Careers/Careers";
import AboutUs from "./pages/AboutUs/AboutUs";
function App() {
  return (
    <div className="App">
       <Router>
        <Suspense>
        <AppHeader/> 
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/services" element={<Services/>}/>
            <Route path="/aboutus" element={<AboutUs/>}/>
            <Route path="/careers" element={<Carrers/>}/>
          </Routes>
          </Suspense>
        </Router>
    </div>
  );
}

export default App;