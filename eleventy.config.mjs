import { HtmlBasePlugin } from "@11ty/eleventy";

export default function (eleventyConfig) {
  eleventyConfig.addPlugin(HtmlBasePlugin);
  eleventyConfig.addPassthroughCopy({ "src/assets": "assets" });

  eleventyConfig.addFilter("date", (value) => {
    const d = new Date(value);
    return d.toISOString().slice(0, 10);
  });

  eleventyConfig.addCollection("posts", (api) =>
    api.getFilteredByGlob("src/posts/*.md").sort((a, b) => b.date - a.date),
  );

  return {
    dir: { input: "src", includes: "_includes", data: "_data", output: "_site" },
    // Leave code examples and braces in Markdown untouched.
    markdownTemplateEngine: false,
    htmlTemplateEngine: "njk",
  };
}
