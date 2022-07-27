import { Block } from "payload/types";
import link from "../fields/link";

const MediaText: Block = {
  slug: "media-text",
  labels: {
    singular: "Media Text",
    plural: "Media Text",
  },
  fields: [
    {
      name: "layout",
      type: "radio",
      options: [
        {
          value: "image-left",
          label: "Image on Left",
        },
        {
          value: "image-right",
          label: "Image on Right",
        },
      ],
      defaultValue: "image-left",
    },
    {
      type: "row",
      fields: [
        {
          name: "title",
          label: "Section Title",
          type: "text",
          admin: {
            width: "50%",
          },
        },
        {
          name: "subtitle",
          label: "Subtitle",
          type: "text",
          admin: {
            width: "50%",
          },
        },
      ],
    },
    {
      name: "text_content",
      label: "Content",
      type: "richText",
    },
    {
      name: "image",
      label: "Image",
      type: "upload",
      relationTo: "media",
    },
    link,
  ],
};

export default MediaText;
