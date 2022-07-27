import { buildConfig } from "payload/config";
import path from "path";
import seo from "@payloadcms/plugin-seo";
// import Examples from './collections/Examples';
import User from "./collections/User";
import Post from "./collections/Post";
import Media from "./collections/Media";
import Page from "./collections/Page";

export default buildConfig({
  serverURL: "http://localhost:9999",
  admin: {
    user: User.slug,
  },
  collections: [User, Post, Media, Page],
  upload: {
    limits: {
      fileSize: 5000000, // 2MB, written in bytes
    },
  },
  typescript: {
    outputFile: path.resolve(__dirname, "payload-types.ts"),
  },
  graphQL: {
    schemaOutputFile: path.resolve(__dirname, "generated-schema.graphql"),
  },
  plugins: [
    seo({
      collections: ["page"],
      generateTitle: ({ doc }) => `${doc.title.value} | Playload`,
    }),
  ],
});
