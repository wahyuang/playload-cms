import { Block } from "payload/types";
import link from "../fields/link";

const CTAButton: Block = {
  slug: "cta-button",
  labels: {
    singular: "CTA Button",
    plural: "CTA Button",
  },
  fields: [link],
};

export default CTAButton;
