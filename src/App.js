// import { useState } from 'react';
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
   Link
 } from "react-router-dom";


function App() {
  const [mode, setMode] = useState("light"); //Whether dark mode is enabled or not
  const [alert, setAlert] = useState(null);

  const showAlert = (message, type) => {
    setAlert({ 
      msg: message,
      type: type,
    });
    setTimeout(() => {
      setAlert(null);
    }, 1500);
  };

  //Enable Dark Mode function
        const toggleMode = () => {
          if (mode === "light") {
            setMode("dark");
            document.body.style.backgroundColor = "gray";
            showAlert("Dark mode has beeen enabled", "success");
            document.title = "Textutils - Dark Mode";
          } else {
            setMode("light");
            document.body.style.backgroundColor = "white";
            showAlert("light mode has beeen enabled", "danger");
            document.title = "Textutils - Light Mode";
          }
        };

        // removeBodyClasse function remove navbar theme colour defaulty first 
        // const removeBodyClasses = ()=>{
        //   document.body.classList.remove('bg-primary'); 
        //   document.body.classList.remove('bg-secondary');
        //   document.body.classList.remove('bg-success');
        //   document.body.classList.remove('bg-danger');
        //   document.body.classList.remove('bg-warning');
        //   document.body.classList.remove('bg-dark');
        // }

  
        // toggleMode function take argument cls as className from navbar div className=d-flex and 
        //we set theme  
        //   const toggleMode = (cls) => {
        //     removeBodyClasses();
        //     console.log(cls);
        //     document.body.classList.add('bg-'+cls);
        //   if (mode === "light") {
        //     setMode("dark");
        //     document.body.style.backgroundColor = "gray";
        //     showAlert("Dark mode has beeen enabled", "success");
        //     document.title = "Textutils - Dark Mode";
        //   } else {
        //     setMode("light");
        //     document.body.style.backgroundColor = "white";
        //     showAlert("light mode has beeen enabled", "danger");
        //     document.title = "Textutils - Light Mode";
        //   }
        // };

  return (
    <>
      <Router> 
      {/* <Navbar title="TextUtils" aboutText="About TextUtils"/>  */}
      {/* <Navbar/>  */}
      <Navbar title="TextUtils" mode={mode} toggleMode={toggleMode} />
      <Alert alert={alert} />
      <div className="container my-3">
      <Switch> 
        {/* /users ---> Component 1
        /users/home --> Component 2 */}
        <Route exact path="/about"> 
          <About mode={mode}/> 
        </Route> 
        <Route exact path="/"> 
          <TextForm showAlert={showAlert} heading="Enter the text to analyze below" mode={mode} />
        </Route> 
      </Switch> 
      {/* <TextForm showAlert={showAlert} heading="Enter the text to analyze below" mode={mode} /> */}
      </div>
       </Router> 
      
      </>
  );
}

export default App;
