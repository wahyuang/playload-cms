import { buildConfig } from "payload/config";
import path from "path";
// import Examples from './collections/Examples';
import User from "./collections/User";
import Post from "./collections/Post";
import Media from "./collections/Media";

export default buildConfig({
  serverURL: "http://localhost:9999",
  admin: {
    user: User.slug,
  },
  collections: [
    User,
    Post,
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
