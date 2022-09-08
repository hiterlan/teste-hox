import { PrismaClient } from "@prisma/client";
const prisma = new PrismaClient();

async function Read() {
  try {
    const res = await prisma.product.findMany();
    return res;
  } catch (err) {
    console.log(err);
  } finally {
    async () => {
      await prisma.$disconnect();
    };
  }
}

export default Read;
