// import { drizzle }  from "drizzle-orm/neon-http";

// export const db = drizzle(process.env.DATABASE_URL!);


// import { drizzle } from "drizzle-orm/neon-http";
// import { neon } from "@neondatabase/serverless";

// const sql = neon(process.env.DATABASE_URL!);

// export const db = drizzle(sql);

import { drizzle } from "drizzle-orm/neon-http";
import { neon } from "@neondatabase/serverless";
import * as schema from "./schema";

const sql = neon(process.env.DATABASE_URL!);

export const db = drizzle(sql, { schema });