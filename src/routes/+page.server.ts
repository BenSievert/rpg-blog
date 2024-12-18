import sql from '../postgres.server'

export async function load() {
  const response = await sql`SELECT version()`;
  const { version } = response[0];
  return {
    version,
  };
}