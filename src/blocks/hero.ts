import { Block } from "payload/types";
import link from "../fields/link";

const Hero: Block = {
  slug: "hero",
  labels: {
    singular: "Hero",
    plural: "Hero",
  },
  fields: [
    {
      name: "title",
      label: "Section Title",
      type: "text",
    },
    {
      name: "subtitle",
      label: "Subtitle",
      type: "text",
    },
    {
      name: "hero_image",
      label: "Hero Image",
      type: "upload",
      relationTo: "media",
    },
    link,
  ],
};

export default Hero;
