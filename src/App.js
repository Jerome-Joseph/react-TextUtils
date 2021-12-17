import "./App.css";
import About from "./components/About";
import Navbar from "./components/Navbar";
import TextForm from "./components/TextForm";
import React, { useState } from "react";
import Alert from "./components/Alert";
import {
  BrowserRouter as Router,
  Switch,
  Route,
} from "react-router-dom";

function App() {
  const [mode, setMode] = useState('light');
  const [alert, setAlert] = useState(null)
  document.title = 'TextUtils'

  const showAlert=(message,type)=>{
    setAlert({
      message:message,
      type:type
    })
    setTimeout(() => {
      setAlert(null); 
    }, 1500);
  }

  const toggleMode =() =>{
    if(mode==='light'){
      setMode('dark')
      document.body.style.backgroundColor='grey'
      showAlert("Dark mode Enabled!",'success')
    }
    else{
      setMode('light')
      document.body.style.backgroundColor='white'
      showAlert("Light mode Enabled!",'success')
    }
  }


  return (
    <>
    <Router> 
      <Navbar title="TextUtils" aboutText="About Us" mode={mode} toggleMode={toggleMode}/>
      <Alert showAlert={showAlert} alert={alert}/>
      <div className="container my-3" >
      <Switch>
          <Route exact path="/about">
            <About mode={mode} />
          </Route>
          <Route exact path="/">
          <TextForm heading="Enter your text here to Analyze" mode={mode} showAlert={showAlert}/>
          </Route>
        </Switch>
      </div>
      </Router>
    </>
  );
}

export default App;
