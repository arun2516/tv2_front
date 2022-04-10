import './App.css';
import Home from "../src/component/home/Home"
import Header from './component/header/Header';
import Footer from './component/footer/Footer';
import Login from './component/login/Login';
import {BrowserRouter as Router, Routes,Route, Navigate} from "react-router-dom"


function App() {
  let user = localStorage.getItem('user');
  return (
<div > 
    <Header/>
    <Router>
      <Routes>
        
        <Route path="/home" element={(user?<Home/>:<Navigate replace to="/"/>)}/>
        <Route path="/" element={<Login/>}/>
      </Routes>
    </Router>
    <Footer/>
</div>
  );
}

export default App;
