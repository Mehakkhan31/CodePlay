// import 'dotenv/config';
// import { defineConfig } from 'drizzle-kit';

// console.log("DB URL:", process.env.DATABASE_URL);

// export default defineConfig({
//     out: './drizzle',
//   schema: './config/schema.tsx',
//   dialect: 'postgresql',
//   dbCredentials: {
//     url: process.env.DATABASE_URL!,
//   },
// });


// import dotenv from "dotenv";
// import { defineConfig } from "drizzle-kit";

// dotenv.config({ path: "./.env" });

// console.log("DB URL:", process.env.DATABASE_URL);

// export default defineConfig({
//   out: "./drizzle",
//   schema: "./config/schema.ts", // ⚠️ also fix this (see below)
//   dialect: "postgresql",
//   dbCredentials: {
//     url: process.env.DATABASE_URL!,
//   },
// });

import dotenv from "dotenv";
import { defineConfig } from "drizzle-kit";

dotenv.config({ path: "./.env" });

if (!process.env.DATABASE_URL) {
  throw new Error("DATABASE_URL is not set in .env");
}

export default defineConfig({
  out: "./drizzle",
  schema: "./config/schema.ts",
  dialect: "postgresql",
  dbCredentials: {
    url: process.env.DATABASE_URL,
  },
});