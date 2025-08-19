import { useParams, useNavigate } from "react-router-dom";
import toast from "react-hot-toast";
import { useEffect } from "react";
import { useDeleteMutation } from "../../../app/services/AuthApi";

const Remove = () => {
  const {id} = useParams();
  
  const navigate = useNavigate();
  const [Delete] =useDeleteMutation()
  const deleteStudent = async (id) => {
    try {
   const response = await Delete({id});
      toast.success("Student deleted successfully");
      navigate("/users/students");
      console.log( "delete" ,  response.data)
    } catch (err) {
      toast.error(err);
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
