import { CollectionConfig } from "payload/types";
import featuredImage from "../fields/featuredImage";
import slug from "../fields/slug";

const Posts: CollectionConfig = {
  slug: "posts",
  admin: {
    useAsTitle: "post_title",
    defaultColumns: ["post_title", "status"],
  },
  fields: [
    {
      name: "title",
      label: "Post Title",
      type: "text",
      required: true,
      admin: {
        placeholder: "Post Title",
      },
      hooks: {},
    },
    {
      name: "content",
      label: "Post Content",
      type: "richText",
    },
    {
      name: "excerpt",
      label: "Excerpt",
      type: "textarea",
    },
    {
      name: "status",
      label: "Status",
      type: "select",
      options: [
        {
          value: "draft",
          label: "Draft",
        },
        {
          value: "publish",
          label: "Publish",
        },
      ],
      defaultValue: "draft",
      admin: {
        position: "sidebar",
      },
    },
    {
      name: "author",
      type: "relationship",
      relationTo: "users",
      admin: {
        position: "sidebar",
      },
      // defaultValues can use functions to return data to populate the create form and also when making POST requests the server will use the value or function to fill in any undefined fields before validation occurs
      defaultValue: ({ user }) => user.id,
    },
    slug(),
    featuredImage,
  ],
};

export default Posts;
