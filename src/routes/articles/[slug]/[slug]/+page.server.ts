import sql from "../../../../postgres.server";
import showDown from "showdown";
import type { PageServerLoad } from "./$types";

export const load: PageServerLoad = async ({ params }) => {
  const { title, content } = (
    await sql`SELECT *
			  FROM articles
			  WHERE id = ${params.slug}`
  )[0];
  const converter = new showDown.Converter();
  const html = converter.makeHtml(content);
  return {
    title,
    html,
  };
};
