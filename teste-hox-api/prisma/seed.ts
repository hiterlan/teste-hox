import { PrismaClient } from "@prisma/client";
import { initialValue } from "../src/seed-data/initialValue";
const prisma = new PrismaClient();

async function main() {
  const products = await prisma.product.createMany({
    data: initialValue,
  });
}

main()
  .then(async () => {
    await prisma.$disconnect();
  })
  .catch(async (e) => {
    console.error(e);
    await prisma.$disconnect();
    process.exit(1);
  });
