import { useParams, useNavigate } from "react-router-dom";
import toast from "react-hot-toast";
import { useEffect } from "react";
import {   useDeleteStudentMutation } from "../../../app/services/AuthApi";

const Remove = () => {
  const {id} = useParams();
  
  const navigate = useNavigate();
  const [Delete] =  useDeleteStudentMutation()
  const deleteStudent = async (id) => {
    try {
  //  const response = await Delete({id});
  const response = await Delete(id).unwrap();
     console.log("DELETE RESPONSE 👉", response);
      toast.success("Student deleted successfully");
      navigate("/users/students");
      console.log( "delete" ,  response)
    } catch (err) {
   toast.error(err?.data?.message || "Delete failed");
      navigate("/users/students");
    }
  };

  useEffect(() => {
    if (window.confirm("Are you sure you want to delete this student?")) {
      deleteStudent(id);
    } else {
      navigate("/users/students");
    }
  }, [id, navigate]);

  return null;
};

export default Remove;
