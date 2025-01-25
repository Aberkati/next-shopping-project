"use server";
import { prisma } from "@/db/prisma";
import { convertToPlanObject } from "../utils";
import { LATEST_PRODUCTS_LIMIT } from "../constants";

// Get Latest products
export const getLatstProducts = async () => {
  const data = await prisma.product.findMany({
    take: LATEST_PRODUCTS_LIMIT,
    orderBy: { createdAt: "desc" },
  });
  return convertToPlanObject(data);
};

// Get single product by slu
export async function getProductBySlug(slug: string) {
  return await prisma.product.findFirst({
    where: { slug },
  });
}
