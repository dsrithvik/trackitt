import {
    integer,
    numeric,
    pgTable,
    serial,
    varchar,
  } from 'drizzle-orm/pg-core' 
  // Budget schema
  export const Budgets = pgTable("budgets", {
    id: serial("id").primaryKey(),
    name: varchar("name").notNull(),
    amount: varchar("amount").notNull(), 
    icon: varchar("icon"), 
    createdBy: varchar("created_by").notNull(),
  });
  
  // Income schema
  export const Incomes = pgTable("incomes", {
    id: serial("id").primaryKey(),
    name: varchar("name").notNull(),
    amount: varchar("amount").notNull(), 
    icon: varchar("icon"), 
    createdBy: varchar("created_by").notNull(),
  });
  
  // Expenses schema
  export const Expenses = pgTable("expenses", {
    id: serial("id").primaryKey(),
    name: varchar("name").notNull(),
    amount: varchar("amount").notNull(), 
    budgetId: integer("budget_id").references(() => Budgets.id),
    createdBy: varchar("created_by").notNull(),
  });
  