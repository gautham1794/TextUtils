// import logo from './logo.svg';
import './App.css';
import NavBar from './components/NavBar';
import TextForm from './components/TextForm';
import Alert from './components/Alert';
import About from './components/About';
import React,{useState} from 'react'

import {
  BrowserRouter as Router,
  Routes,
  Route,
  Link
} from "react-router-dom";

let name="Gautham";
function App() {
  const [mode, setmode] = useState('light');
  const [alert, setAlert] = useState(null);

  const showAlert=(message,type)=>{
      setAlert({
        msg:message,
        type:type
      });
      setTimeout(() => {
        setAlert(null)
      }, 2000);
  }
  const toggleMode=()=>{
    if(mode==="light"){
      setmode("dark");
      document.body.style.backgroundColor="#020636";
      showAlert("Dark mode has been enabled","success");
      // document.title="TextUtils - Dark Mode";
      
    }
    else{
      setmode("light");
      document.body.style.backgroundColor="white";
      showAlert("Light mode has been enabled","success");
      // document.title="TextUtils - Light Mode";
    }
  }
  return (
    <>
   <Router>
   <NavBar title="TextUtils" aboutText="About" mode={mode} toggleMode={toggleMode}/>
   <Alert alert={alert}/>
   <div className="container">
   <Routes>
      <Route exact path="/about" element={<About mode={mode}/>} />
      <Route exact path="/" element={<TextForm heading="Try TextUtils - word counter, character counter " mode={mode} showAlert={showAlert}/>} />
    </Routes>
   </div>
   </Router>
   </>
  );  
}


export default App;
