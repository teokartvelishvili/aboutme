
import './App.css';
import MainPage from './Pages/Main/Main';
import Projects from './Pages/MyProjects/Projects';
import Contact from './Pages/Contact/Contact';
import Layout from './Layouts/Layout';

import {  createBrowserRouter,
createRoutesFromElements,
Route,
RouterProvider,
} from "react-router-dom";


const router = createBrowserRouter(
  createRoutesFromElements(
    <>
      {/* <Route path="/signin" element={<SignIn />} />
      <Route path="/signup" element={<SignUp />} /> */}
     
      <Route path="/" element={(
      <Layout>
        <MainPage/> 
      </Layout>    
      )}
      />
       <Route path="/about" element={(
        <Layout><h1>About me</h1></Layout>
      )} />
     

      <Route path="/Projects" element={(
        <Layout><Projects/></Layout> 
      )} />
      
       {/* <Route path="/about" element={(
        <Layout><About/></Layout>
        
    
      )} /> */}
       <Route path="/contact" element={(
        <Layout><Contact/></Layout>
    
      )} />

      {/* <Route path="/edit-expense/:id" element={<AddExpense />} /> */}
    </>
  )
);


function App() {
  return <RouterProvider router={router}/>;
}

export default App;
