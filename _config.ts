import lume from "lume/mod.ts";
import date from "lume/plugins/date.ts";
import feed from "lume/plugins/feed.ts";
import { type Page } from "lume/core/file.ts";
import { codeToHtml } from "npm:shiki";

async function addSyntaxHighlighting(pages: Page[]) {
  const langPrefix = "language-";

  for (const page of pages) {
    if (page.data.type !== "post") {
      continue;
    }
    const preElements = page.document?.querySelectorAll("pre") ?? [];
    for (const element of preElements) {
      const codeElement = element.querySelector("code");
      if (!codeElement) {
        continue;
      }
      const lang = codeElement.classList.values().find((cls) =>
        cls.startsWith(langPrefix)
      );
      if (!lang) {
        throw new Error(
          `Missing syntax highlighting language in ${page.src.path}`,
        );
      }
      element.outerHTML = await codeToHtml(element.innerText, {
        lang: lang.slice(langPrefix.length),
        themes: {
          dark: "vitesse-dark",
          light: "vitesse-light",
        },
      });
    }
  }
}

const site = lume();

site.use(date());

site.use(feed({
  output: ["/feed.xml"],
  query: "type=post",
  info: {
    title: "Blog | Kamil Ogórek",
    description:
      "Trying to make people's lives easier. API and Integrations Lead at @supabase. Previously @getsentry.",
    authorName: "Kamil Ogórek",
    authorUrl: "https://kamilogorek.com",
  },
}));

site.process([".html"], addSyntaxHighlighting);
site.copy("assets");
site.copy("cv.pdf");

export default site;
