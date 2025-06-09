// ==== 3. src/routes/students.js ====
import express from "express";
import {
  getAllStudents,
  getStudentById,
  createStudent,
  updateStudent,
  deleteStudent,
} from "../controllers/studentsController.js";
import validate from "../middleware/zodMiddleware.js";
import { studentSchema } from "../validators/studentSchema.js";

const router = express.Router();

router.get("/", getAllStudents);
router.get("/:id", getStudentById);
router.post("/", validate(studentSchema), createStudent);
router.put("/:id", validate(studentSchema), updateStudent);
router.delete("/:id", deleteStudent);

export default router;
