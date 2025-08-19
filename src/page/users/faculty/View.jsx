// const FacultyView = () => {



// return (
//     <>

//    <h1>hlo view</h1>
    
//     </>
// )

// }


// export default FacultyView;


import React, { useEffect, useState } from "react";
import axios from "axios"; // ✅ Required import

const View = () => {
  const [faculty, setFaculty] = useState([]);

  useEffect(() => {
    const fetch = async () => {
      
        const response = await axios.get("http://127.0.0.1:5200/faculty/getall");
        setFaculty(response.data.data);
        console.log(response.data)
   
    };

    fetch();
  },);

  return (
    <div>
      <h2>Data Fetch</h2>
      <ul>
        {faculty.map((faculty) => (
          <li key={faculty._id}>
            {faculty.firstname}
            
              {faculty.firstname}
            </li>
        ))}
      </ul>
    </div>
  );
};

export default View;
