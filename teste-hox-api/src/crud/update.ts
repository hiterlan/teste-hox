import { PrismaClient } from "@prisma/client";
const prisma = new PrismaClient();

async function Update(
  name: string,
  price: number,
  dt_fabric: Date,
  dt_validity: Date,
  id: number
) {
  try {
    const res = await prisma.product.update({
      where: {
        id: id,
      },
      data: {
        name: name,
        price: price,
        dt_fabric: dt_fabric,
        dt_validity: dt_validity,
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

export default Update;
