
const express = require("express")
const router = express.Router()
const StudentController = require("../controller/StudentController")
router.post("/", StudentController.create)
router.get("/getAll" , StudentController.getAll)
router.get("/get/:id" , StudentController.getById)
router.put("/update/:id" , StudentController.updateById)
router.delete("/:id" , StudentController.deleteById)
module.exports = router
