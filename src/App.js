import React, { useState, useEffect } from 'react';
import './App.css';
import MainPage from './Pages/Main/Main';
import Projects from './Pages/MyProjects/Projects';
import Contact from './Pages/Contact/Contact';
import Layout from './Layouts/Layout.jsx';
import { ThemeContext } from '../src/Hooks/ThemeContecs.js';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import AboutMe from './Pages/AboutMe/AboutMe.jsx';

function App() {
  const [theme, setTheme] = useState('light');
  const [showAll, setShowAll] = useState(false); // State to manage the display of all pages

  useEffect(() => {
    const appEl = document.getElementById('app');
    if (appEl) {
      appEl.className = theme;
    }
  }, [theme]);

  const toggleTheme = () => {
    setTheme((prevTheme) => (prevTheme === 'dark' ? 'light' : 'dark'));
  };

  const handleShowAll = () => {
    setShowAll(true); // Set showAll to true to display all pages and hide the button
  };

  return (
    <Router>
      <div className="App" id="app">
        <ThemeContext.Provider value={{ theme, toggleTheme }}>
          {showAll ? (
            // When showAll is true, render all pages together
            <Layout>
              <MainPage />
              <Projects />
              <AboutMe />
              <Contact />
            </Layout>
          ) : (
            // Normal routing
            <Routes>
              <Route
                path="/"
                element={
                  <Layout>
                    <MainPage />
                  </Layout>
                }
              />
                <Route
                  path="/projects"
                  element={
                    <Layout>
                      <Projects />
                    </Layout>
                  }
                />
              <Route
                path="/about"
                element={
                  <Layout>
                    <AboutMe />
                  </Layout>
                }
              />
              <Route
                path="/contact"
                element={
                  <Layout>
                    <Contact />
                  </Layout>
                }
              />
            </Routes>
          )}

          {/* Render the arrow button only when showAll is false */}
          {!showAll && (
            <div className="arrow-button" onClick={handleShowAll}>
              Click for all pages
            </div>
          )}
        </ThemeContext.Provider>
      </div>
    </Router>
  );
}

export default App;





// import React, {useState, useEffect} from 'react';
// import './App.css';
// import '../src/Hooks/ThemeContecs.js'
// import MainPage from './Pages/Main/Main';
// import Projects from './Pages/MyProjects/Projects';
// import Contact from './Pages/Contact/Contact';
// import Layout from './Layouts/Layout';
// import { ThemeContext } from "../src/Hooks/ThemeContecs.js";

// // import {  createBrowserRouter,
// // createRoutesFromElements,
// // Route,
// // RouterProvider,
// // Routes,
// // } from "react-router-dom";
// import { BrowserRouter as Router, Route, Routes } from "react-router-dom";

// function App() {
//   // const [language, setLanguage] = useState("ge");
//   const [theme, setTheme] = useState("light");

//   // useEffect(() => {
//   //   document.body.className = language;
//   // }, [language]);

//   useEffect(() => {
//     const appEl = document.getElementById("app");
//     if (appEl) {
//       appEl.className = theme;
//     }
//   }, [theme]);
//   const toggleTheme = () => {
//     setTheme((prevTheme) => (prevTheme === "dark" ? "light" : "dark"));
//   };

//   return (
//     <div className="App" id="app">
//       {/* <LanguageContext.Provider value={{ language, setLanguage }}> */}
//         <ThemeContext.Provider value={{ theme, toggleTheme }}>
//           <Routes>
//                 <Route
//                   path="/"
//                   element={
//                     <Layout>
//                       <MainPage/>              
//                     </Layout>
//                   }
//                 />
//                 <Route
//                   path="/about"
//                   element={
//                     <Layout>
//                   <h1>About me</h1>
//                     </Layout>
//                   }
//                 />
//                 <Route
//                   path="/Projects"
//                   element={
//                     <Layout>
//                   <Projects/>
//                     </Layout>
//                   }
//                 />

//                 <Route
//                   path="/contact"
//                   element={
//                     <Layout>
//                   <Contact/>
//                     </Layout>
//                   }
//                 />
//                 </Routes>
//         </ThemeContext.Provider>
//       {/* </LanguageContext.Provider> */}
//     </div>
//   );
// }


// export default App;

// const router = createBrowserRouter(
//   createRoutesFromElements(
//     <>
//       {/* <Route path="/signin" element={<SignIn />} />
//       <Route path="/signup" element={<SignUp />} /> */}
     
//       <Route path="/" element={(
//       <Layout>
//         <MainPage/> 
//       </Layout>    
//       )}
//       />
//        <Route path="/about" element={(
//         <Layout><h1>About me</h1></Layout>
//       )} />
     

//       <Route path="/Projects" element={(
//         <Layout><Projects/></Layout> 
//       )} />
      
//        {/* <Route path="/about" element={(
//         <Layout><About/></Layout>
        
    
//       )} /> */}
//        <Route path="/contact" element={(
//         <Layout><Contact/></Layout>
    
//       )} />

//       {/* <Route path="/edit-expense/:id" element={<AddExpense />} /> */}
//     </>
//   )
// );


// function App() {
//   return <RouterProvider router={router}/>;
// }

// export default App;
