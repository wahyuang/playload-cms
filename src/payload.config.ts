import { buildConfig } from "payload/config";
import path from "path";
// import Examples from './collections/Examples';
import Users from "./collections/Users";
import Posts from "./collections/Posts";
import Media from "./collections/Media";

export default buildConfig({
  serverURL: "http://localhost:9999",
  admin: {
    user: Users.slug,
  },
  collections: [
    Users,
    Posts,
    Media,
    // Add Collections here
    // Examples,
  ],
  typescript: {
    outputFile: path.resolve(__dirname, "payload-types.ts"),
  },
  graphQL: {
    schemaOutputFile: path.resolve(__dirname, "generated-schema.graphql"),
  },
});
