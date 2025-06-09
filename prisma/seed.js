import { PrismaClient } from "@prisma/client";
import { faker } from "@faker-js/faker";

const prisma = new PrismaClient();

const seed = async () => {
  console.log("⏳ Seeding 1,000 students...");
  const students = [];

  for (let i = 0; i < 1000; i++) {
    students.push({
      name: faker.person.fullName(),
      email: faker.internet.email(),
      age: faker.number.int({ min: 18, max: 30 }),
      gpa: parseFloat(
        faker.number.float({ min: 0.0, max: 4.0, precision: 0.01 }).toFixed(2)
      ),
    });
  }

  await prisma.student.createMany({ data: students });
  console.log("✅ Done seeding.");
};

seed()
  .catch((err) => {
    console.error("❌ Seeding failed:", err);
  })
  .finally(() => prisma.$disconnect());
