import { CollectionConfig } from "payload/types";
import Hero from "../blocks/hero";
import slug from "../fields/slug";
import { isAdmin } from "../utilities/user";

const Page: CollectionConfig = {
  slug: "page",
  labels: {
    singular: "Page",
    plural: "Pages",
  },
  access: {
    read: () => true,
  },
  admin: {
    useAsTitle: "title",
    defaultColumns: ["title"],
  },
  fields: [
    {
      type: "text",
      name: "title",
      label: "Page Title",
    },
    slug(),
    {
      name: "blocks",
      type: "blocks",
      label: "Layout",
      blocks: [Hero],
    },
    {
      type: "relationship",
      relationTo: "user",
      name: "author",
      label: "Author",
      admin: {
        position: "sidebar",
      },
      access: {
        read: () => true,
        update: isAdmin,
        create: isAdmin,
      },
      defaultValue: ({ user }) => user.id,
    },
  ],
};

export default Page;
