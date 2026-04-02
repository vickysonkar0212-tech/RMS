const express = require("express")

const FacultyController = require("../controller/FacultyController")



const router = express.Router()

router.post("/create" , FacultyController.create)
router.get("/getAll" , FacultyController.getAll)
router.get("/get/:id" , FacultyController.getById)
router.put("/update/:id" , FacultyController.updateById)
router.delete("/:id" , FacultyController.deleteById)
module.exports = FacultyRoutes = router