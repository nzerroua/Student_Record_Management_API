// ==== 7. src/validators/studentSchema.js ====
import { z } from "zod";

export const studentSchema = z.object({
  name: z.string().min(1),
  email: z.string().email(),
  age: z.number().int().min(1).max(120),
  gpa: z.number().min(0).max(4.0),
});
