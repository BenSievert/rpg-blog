import sql from "../postgres.server";

export async function load() {
  const articles = await sql`SELECT title, date_created, id
							 FROM articles
							 ORDER BY date_created DESC`;
  return {
    articles,
  };
}
