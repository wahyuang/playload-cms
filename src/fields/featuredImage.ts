import { Field } from "payload/types";
// import deepMerge from "../utilities/deepMerge";

// type Slug = (fieldToUse?: string, overrides?: Partial<Field>) => Field;

// By dynamically building fields in code configurations are reusable and concise
const featuredImage: Field = {
  name: "featured_image",
  label: "Featured Image",
  type: "upload",
  relationTo: "media",
};

export default featuredImage;
