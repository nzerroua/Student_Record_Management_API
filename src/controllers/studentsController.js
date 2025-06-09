// ==== 4. src/controllers/studentsController.js ====
import { PrismaClient } from "@prisma/client";
const prisma = new PrismaClient();

export const getAllStudents = async (req, res, next) => {
  try {
    const students = await prisma.student.findMany();
    res.json(students);
  } catch (err) {
    next(err);
  }
};

export const getStudentById = async (req, res, next) => {
  try {
    const student = await prisma.student.findUnique({
      where: { id: +req.params.id },
    });
    if (!student) return res.status(404).json({ error: "Student not found" });
    res.json(student);
  } catch (err) {
    next(err);
  }
};

export const createStudent = async (req, res, next) => {
  try {
    const student = await prisma.student.create({ data: req.body });
    res.status(201).json(student);
  } catch (err) {
    next(err);
  }
};

export const updateStudent = async (req, res, next) => {
  try {
    const id = +req.params.id;
    const exists = await prisma.student.findUnique({ where: { id } });
    if (!exists) return res.status(404).json({ error: "Student not found" });

    const student = await prisma.student.update({
      where: { id },
      data: req.body,
    });
    res.json(student);
  } catch (err) {
    next(err);
  }
};

export const deleteStudent = async (req, res, next) => {
  try {
    const id = +req.params.id;
    const exists = await prisma.student.findUnique({ where: { id } });
    if (!exists) return res.status(404).json({ error: "Student not found" });

    await prisma.student.delete({ where: { id } });
    res.status(204).end();
  } catch (err) {
    next(err);
  }
};
