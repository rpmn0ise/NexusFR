module.exports = function(eleventyConfig) {
  // Passthrough copy
  eleventyConfig.addPassthroughCopy("src/assets");

  // Collections
  eleventyConfig.addCollection("categories", function(collectionApi) {
    return collectionApi.getFilteredByGlob("src/categories/*.md");
  });

  eleventyConfig.addCollection("guides", function(collectionApi) {
    return collectionApi.getFilteredByGlob("src/guides/*.md");
  });

  // Filters
  eleventyConfig.addFilter("statusIcon", function(status) {
    const icons = { "ok": "✅", "dead": "❌", "unstable": "⚠️" };
    return icons[status] || "❓";
  });

  eleventyConfig.addFilter("tagIcon", function(tag) {
    const icons = { "fr": "🇫🇷", "fast": "⚡", "safe": "🛡️", "advanced": "🧠", "beginner": "👶" };
    return icons[tag] || tag;
  });

  eleventyConfig.addFilter("limit", function(arr, limit) {
    return arr.slice(0, limit);
  });

  // Si le site est sur username.github.io/nexus-fr/ → PATHPREFIX=/nexus-fr/
  // Si le site est sur username.github.io/           → pas besoin (défaut "/")
  const pathPrefix = process.env.PATHPREFIX || "/";

  return {
    pathPrefix,
    dir: {
      input: "src",
      output: "_site",
      includes: "_includes",
      data: "_data"
    },
    markdownTemplateEngine: "njk",
    htmlTemplateEngine: "njk"
  };
};
