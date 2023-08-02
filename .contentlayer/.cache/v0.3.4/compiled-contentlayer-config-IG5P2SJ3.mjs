// contentlayer.config.ts
import { defineDocumentType, makeSource } from "contentlayer/source-files";
import remarkGfm from "remark-gfm";
import rehypeSlug from "rehype-slug";
import rehypeAutolinkHeadings from "rehype-autolink-headings";
import rehypePrism from "rehype-prism-plus";
import { rehypeAccessibleEmojis } from "rehype-accessible-emojis";
var Article = defineDocumentType(() => ({
  name: "Article",
  filePathPattern: `**/*.mdx`,
  contentType: "mdx",
  fields: {
    title: { type: "string", required: true },
    date: { type: "date", required: true },
    img: { type: "string", required: true },
    tag: { type: "string", required: true },
    pfp: { type: "string", required: true },
    author: { type: "string", required: true }
  },
  computedFields: {
    url: { type: "string", resolve: (post) => `/posts/${post._raw.flattenedPath}` }
  }
}));
var contentlayer_config_default = makeSource({ contentDirPath: "posts", documentTypes: [Article], mdx: { remarkPlugins: [remarkGfm], rehypePlugins: [rehypeSlug, rehypePrism, [
  rehypeAutolinkHeadings,
  {
    properties: {
      className: ["anchor"]
    }
  }
], rehypeAutolinkHeadings, rehypeAccessibleEmojis] } });
export {
  Article,
  contentlayer_config_default as default
};
//# sourceMappingURL=compiled-contentlayer-config-IG5P2SJ3.mjs.map
