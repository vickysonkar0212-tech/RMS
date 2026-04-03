    const FacultyModel = require("../models/FacultyModel")

const create = async (req, res) => {

    try {

        const { 
            firstname,
            lastname,
            email,
            phoneNumber,
            gender,
            program,
            dateofbirth,
            address,
           course
 } = req.body;

const faculty = await FacultyModel.findOne({phoneNumber });


        if (faculty) {
            return res.status(400).json({ status: false, message: "Already Exist" })
        }
   

        const Faculty = new FacultyModel({
       firstname,
            lastname,
            email,
            phoneNumber,
            gender,
            course,
            dateofbirth,
            address,
            program,
           course

        })

        await Faculty.save()


        return res.status(200).json({ status: true, message: "Faculty created successfully!",})

    } catch (error) {
        return res.json({ status: false, error: error.message })

    }


}

const getAll = async (req, res) => {

     

    try {

    const faculties = await FacultyModel.find({});
//   if(!Student){
        if (faculties.length===0) {
            return res.status(400).json({ status: false, message: "StudentData does n't exist !" })

        }


        return res.status(200).json({ status: true, message: "Get All Faculty Data",data:faculties })

    } catch (error) {
        return res.status(500).json({ status: false, error: error.message })
    }
}

const getById = async (req, res) => {

    try {

const {id} =req.params;

        const faculty = await FacultyModel.findById(id.trim());

        if (!faculty) {
            return res.status(404).json({ status: false, message: "Faculty not exist" })

        }
      
        return res.status(200).json({ status: true, message: "Faculty Data Exist ", data:faculty})

    } catch (error) {
        return res.status(500).json({ status: false, error: error.message })
    }
}

const updateById = async (req, res) => {
  try {
    // const { id } = req.params;
    // const id = req.params.id.trim()
    const id = req.params.id;
    const updateData = req.body;

  
    const student = await FacultyModel.findByIdAndUpdate(id, updateData, {
      new: true
    });

   
    if (!student) {
      return res.status(404).json({ status: false, message: "Data not found or not updated" });
    }

    return res.status(200).json({
      status: true,
      message: "Updated successfully",
      data: student
    });
  } catch (error) {
    return res.status(500).json({
      status: false,
      message: error.message 
    });
  }
};


const     deleteById = async (req, res) => {

    try {

        const { id } = req.params;

        const faculty = await FacultyModel.findByIdAndDelete( id);

        if (!faculty) {
            return res.status(400).json({ status: false, message: "Not delete" })

        }
        return res.status(200).json({ status: true, message: "Deleted Successfully !" })

    } catch (error) {
        return res.status(500).json({ status: false, error: error.message })
    }
}

module.exports = {
    create,
    getAll,
    getById,
    updateById,
    deleteById,
    
    

}