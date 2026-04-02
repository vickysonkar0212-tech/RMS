const StudentModel = require("../models/StudentModel")

const create = async (req, res) => {

    try {

        const { 
            firstname,
            lastname,
            email,
            phoneNumber,
            gender,
            password,
            dateOfbirth,
            address,
            program,
            course,
            guardianName
 } = req.body;

        const Exist = await StudentModel.findOne({
            $or: [
              { email },
              { phoneNumber }
            ]
         });

        if (Exist) {
            return res.status(400).json({ status: false, message: "Student with this email or phoneNumber already exists" })

         
        }
   

        const student = new StudentModel({
       firstname,
            lastname,
            email,
            phoneNumber,
            gender,
            password,
            dateOfbirth,
            address,
            program,
            course,
            guardianName

        })

       await student.save()
 return res.status(200).json({ status: true, message: "Student created successfully!", data:student,})

    } catch (error) {
        return res.status(500).json({ status: false, message: error.message })

    }


}

const getAll = async (req, res) => {

    try {

    const Student = await StudentModel.find({});
        if (Student.length === 0) {
            return res.status(200).json({ status: true, message: "No students found", data: [] })
        }

        return res.status(200).json({ status: true, message: "Get All Data", data: Student })

    } catch (error) {
        return res.status(500).json({ status: false, error: error.message })
    }
}

const getById = async (req, res) => {

    try {

const { id } = req.params;

        const Student = await StudentModel.findById(id.trim());

        if (!Student) {
            return res.status(404).json({ status: false, message: "User not exist" })

        }
        return res.status(200).json({ status: true, message: "login successfully", data:Student})

    } catch (error) {
        return res.status(500).json({ status: false, error: error.message })
    }
}

 const updateById = async (req, res) => {
  try {
    // const { id } = req.params;
    const id = req.params.id.trim()
    const updateData = req.body;

     const student = await StudentModel.findByIdAndUpdate(id, updateData, {
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

        const Student = await StudentModel.findByIdAndDelete(id.trim());

        if (!Student) {
        return res.status(404).json({ status: false, message: "Student not found" })

        }
        return res.status(200).json({ status: true, message: "Deleted Successfully !" })

    } catch (error) {
        return res.status(500).json({ status: false, error: error.mesaage })
    }
}

module.exports = {
    create,
    getAll,
    getById,
    updateById,
    deleteById
}
