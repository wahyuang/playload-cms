import { Block } from "payload/types";

const TextContent: Block = {
  slug: "text-content",
  fields: [
    {
      name: "text_content",
      label: "Text Content",
      type: "richText",
    },
  ],
};

export default TextContent;
