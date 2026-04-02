import { useEffect, useState } from "react";

const StudentView = () => {
  const [students,setStudent] = useState('')
 useEffect (()=>{
const fetch = async()=>{
    const res =await axios.post(`http://127.0.0.1:5200/faculty/getAll`)
  setStudent(res.data)
}

    fetch()  
 },[])
return (
    <>
    

    
    </>
)

}
export default StudentView;