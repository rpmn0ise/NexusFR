module.exports = function(eleventyConfig) {

  eleventyConfig.addPassthroughCopy("src/assets");

  eleventyConfig.addCollection("guides", function(collectionApi) {
    return collectionApi.getFilteredByGlob("src/guides/*.md");
  });

  // Ressources = collection d'items Eleventy (item.data = frontmatter)
  eleventyConfig.addCollection("resources", function(collectionApi) {
    return collectionApi.getFilteredByGlob("src/resources/**/*.md");
  });

  // Filtre : par catégorie (reçoit array d'items Eleventy)
  eleventyConfig.addFilter("byCat", function(items, category) {
    return (items || []).filter(item => item.data && item.data.category === category);
  });

  // Filtre : par sous-catégorie
  eleventyConfig.addFilter("bySub", function(items, subcategory) {
    return (items || []).filter(item => item.data && item.data.subcategory === subcategory);
  });

  // Filtre : essentiels seulement
  eleventyConfig.addFilter("essential", function(items) {
    return (items || []).filter(item => item.data && item.data.essential === true);
  });

  // Filtre : non essentiels
  eleventyConfig.addFilter("notEssential", function(items) {
    return (items || []).filter(item => item.data && item.data.essential !== true);
  });

  eleventyConfig.addFilter("limit", function(arr, limit) {
    return (arr || []).slice(0, limit);
  });

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
