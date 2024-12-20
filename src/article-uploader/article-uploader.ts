import { config } from "dotenv";
import { readFile } from "fs/promises";

config({ path: "../../.env.development.local" });

import { neon } from "@neondatabase/serverless";

const connectionString: string = process.env.DATABASE_URL as string;
const sql = neon(connectionString);

const [title] = process.argv.slice(2);

readFile(`./${title}.md`, "utf8").then(async (content) => {
  const resp = await sql`INSERT INTO articles (title, content)
						 VALUES (${title}, ${content})`;
  console.log(resp);
});
