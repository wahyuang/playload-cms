import { CollectionConfig } from "payload/types";

const Media: CollectionConfig = {
  slug: "media",
  access: {
    read: (): boolean => true, // Everyone can read Media
  },
  upload: {
    adminThumbnail: "thumbnail",
    staticURL: "/uploads",
    staticDir: "../uploads",
    imageSizes: [
      {
        name: "thumbnail",
        width: 300,
        height: 300,
      },
      {
        name: "medium",
        width: 640,
        height: 640,
      },
      {
        name: "large",
        width: 1200,
        height: null,
      },
    ],
  },
  fields: [
    {
      name: "alt",
      label: "Alt Text",
      type: "text",
      required: true,
    },
  ],
};

export default Media;
