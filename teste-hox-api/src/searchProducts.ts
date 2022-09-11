import { PrismaClient } from "@prisma/client";
const prisma = new PrismaClient();

async function SearchProducts(name: string) {
  try {
    const res = await prisma.product.findMany({
      where: {
        name: {
          contains: name,
        },
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

export default SearchProducts;
