import { integer, pgTable, serial, text } from "drizzle-orm/pg-core";

export const nameTable = pgTable("name", {
  id: serial("id").primaryKey(),
  name: text("name").notNull(),
});
