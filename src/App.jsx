import { BrowserRouter, Routes, Route } from "react-router-dom";
import Home from "./page/Home";
import Students from "./page/users/students/ViewAll";
import StudentView from "./page/users/students/View";
import StudentEdit from "./page/users/students/Edit";
import StudentAdd from "./page/users/students/Add";

import Faculty from "./page/users/faculty/ViewAll";
import FacultyView from "./page/users/faculty/View";
import FacultyEdit from "./page/users/faculty/Edit";
import FacultyAdd from "./page/users/faculty/Add";

import Certificates from "./page/auth/certificates/Viewall";
import Result from "./page/auth/results/Viewall"
import './App.css';
import AppLayout from "./layouts/App";
import AuthLayout from "./layouts/Auth";
import Login from "./page/auth/Login";
import VerifyOTP from "./page/auth/VerifyOTP";
import Forgot from "./page/auth/Forgot";
import Reset from "./page/auth/Reset";
import  { Toaster } from 'react-hot-toast';
import Notfound from "./page/Notfound";
import List from "./page/users/students/List";
import Remove from "./page/users/students/Delete";
import Createorder from "./page/payment/Createorder";

function App() {
  return (

    <>
  

    
    <div><Toaster/> </div>
    
    <BrowserRouter>
      <Routes>
  
        <Route element={<AppLayout />}>
          <Route path="/" element={<Home />} />
          <Route path="/all" element={<List />} />
          <Route path="/users/students" element={<Students />} />
          <Route path="/users/students/:id" element={<StudentView />} />
          <Route path="/users/students/edit/:id" element={<StudentEdit />} />
  {/* <Route path="/users/students/delete/:id" element={<Remove />} /> */}
  <Route path="/users/students/remove/:id" element={<Remove />} />
          <Route path="/users/students/add" element={<StudentAdd />} />
          <Route path="/payment" element={<Createorder />} />


 <Route path="/faculty" element={<Faculty />} />
   <Route path="/faculty/view" element={<FacultyView />} />
   <Route path="/faculty/edit/:id" element={<FacultyEdit />} />
   <Route path="/faculty/add" element={<FacultyAdd />} />

  <Route path="/results" element={<Result />} />
    <Route path="/certificates" element={< Certificates />} />
        </Route>

        <Route element={<AuthLayout />}>

          <Route path="/login" element={<Login />} />
          <Route path="/verify" element={<VerifyOTP />} />
          <Route path="/forgot" element={<Forgot />} />
          <Route path="/reset" element={<Reset />} />
        </Route>

           <Route path="/notfound" element={<Notfound />} />
      </Routes>
    </BrowserRouter>

      </>
  );
}

export default App;
 