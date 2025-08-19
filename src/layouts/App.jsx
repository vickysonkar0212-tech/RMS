 import { Outlet, useNavigate } from "react-router-dom";
import Navbar from "../components/Navbar";
 import Sidebar from "../components/Sidebar";
 import Footer from "../components/Footer"
//  import { useNavigate } from "react-router-dom";
import { useEffect, useState } from "react";
import axios from "axios";
// import  { toast } from 'react-hot-toast';


 const AppLayout = () => {

  const[user,setuser] = useState()
  const navigate = useNavigate()

useEffect(() => {
  const token = localStorage.getItem("accesstoken");

  if (!token) {
    navigate("/login");
    return;
  }

  getUser(token);
}, []);


const getUser = async(token)=>{
  try {

axios.defaults.headers.common['Authorization'] = token;

    const response= await axios.get("http://127.0.0.1:5000/user/get")
    setuser(response.data)
    console.log(response)
  } catch (error) {
   console.log("error get",error?.response?.data?.message)
  }
}




    return(
        <>
        <div>
         <div id="layout-wrapper">
    <header id="page-topbar">
      <div className="layout-width">
      <Navbar user ={user}/>
      </div>
    </header>
 
    <Sidebar/>
 
  
    {/* ============================================================== */}
    {/* Start right Content here */}
    {/* ============================================================== */}
   
    <div className="main-content">
      <div className="page-content">
      
        <Outlet/>
        {/* container-fluid */}
      </div>
      {/* End Page-content */}   
     <Footer/>
    </div>
    {/* end main content*/}
  </div>
  {/* END layout-wrapper */}
 
  </div> 
        </>
    )
}
export default AppLayout;