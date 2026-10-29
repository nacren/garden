// Eleventy config. Input in src/, output to _site/.
// Markdown posts are NOT run through a template engine, so code and braces in
// posts are left exactly as written.

export default function (eleventyConfig) {
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
    markdownTemplateEngine: false,
    htmlTemplateEngine: "njk",
  };
}
