import './styles/main.css'
import './styles/media.css'
import {BrowserRouter as Router, Routes, Route} from "react-router-dom";

import Navbar from "./components/navbar/Navbar";
import Home from "./pages/Home";
import Skills from "./pages/Skills";
import Contacts from "./pages/Contacts";
import Footer from "./components/footer/Footer";

import ScrollToTop from "./components/utils/ScrollToTop";

function App() {
    return (
        <div className="App">
            <Router>
                <ScrollToTop/>
                <Navbar/>
                <Home/>
                <Routes>
                    <Route path='/skills' element={<Skills/>}/>
                    <Route path='/contacts' element={<Contacts/>}/>
                </Routes>
                <Footer/>
            </Router>
        </div>
    );
}

export default App;
