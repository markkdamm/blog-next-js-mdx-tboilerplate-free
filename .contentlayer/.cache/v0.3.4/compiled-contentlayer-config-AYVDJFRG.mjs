// contentlayer.config.ts
import { defineDocumentType, makeSource } from "contentlayer/source-files";
var Article = defineDocumentType(() => ({
  name: "Article",
  filePathPattern: `**/*.md`,
  fields: {
    title: { type: "string", required: true },
    date: { type: "date", required: true },
    img: { type: "string", required: true },
    tag: { type: "string", required: true },
    pfp: { type: "string", required: true },
    author: { type: "string", required: true },
    url: { type: "string", required: true }
  },
  computedFields: {
    url: { type: "string", resolve: (post) => `/posts/${post._raw.flattenedPath}` }
  }
}));
var contentlayer_config_default = makeSource({ contentDirPath: "posts", documentTypes: [Article] });
export {
  Article,
  contentlayer_config_default as default
};
//# sourceMappingURL=compiled-contentlayer-config-AYVDJFRG.mjs.map
