import './App.css';
import React, { Components } from "react"
import Header from "./Components/Header"
import MainContent from "./Components/MainContent"
import Footer from "./Components/Footer"

function App() {
  return (
    <div className="App">
        <div className="container">
            <div className='card'>
                <Header />
                <MainContent />
                <Footer />
            </div>
        </div>
    </div>
  );
}

export default App;
