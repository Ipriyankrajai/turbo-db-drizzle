"use server";

import { db } from "@repo/db";
import { nameTable } from "@repo/db";

export const getNames = async () => {
  const result = await db.select().from(nameTable);
  return result;
};
