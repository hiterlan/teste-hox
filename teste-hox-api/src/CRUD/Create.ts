import { PrismaClient } from "@prisma/client";
const prisma = new PrismaClient();

async function Create(
  name: string,
  price: number,
  dt_fabric: Date,
  dt_validity: Date
) {
  try {
    const res = await prisma.product.create({
      data: {
        name: name,
        dt_fabric: dt_fabric,
        dt_validity: dt_validity,
        price: price,
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

export default Create;
