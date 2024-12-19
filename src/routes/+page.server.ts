import sql from '../postgres.server'

export async function load() {
  const articles = await sql`SELECT * FROM articles`;
  return {
    articles
  };
}