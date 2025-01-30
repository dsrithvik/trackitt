export default {
  dialect: "postgresql",
  schema: "./utils/schema.js", // Path to your schema definition
    out: "./drizzle",
    dbCredentials: {
      url: process.env.DATABASE_URL,
      connectionString:
      process.env.DATABASE_URL,
    },
  };
  
