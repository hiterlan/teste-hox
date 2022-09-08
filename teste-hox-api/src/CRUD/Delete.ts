import { PrismaClient } from "@prisma/client";
const prisma = new PrismaClient();

async function Delete(id: number) {
  try {
    const res = await prisma.product.delete({
      where: {
        id: id,
      },
    });
    return res;
  } catch (err) {
    console.log(err);
  } finally {
    async () => {
      await prisma.$disconnect();
    };
  }
}

export default Delete;
