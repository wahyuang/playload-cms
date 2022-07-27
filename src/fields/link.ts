import { Field } from "payload/types";

const link: Field = {
  name: "link",
  label: "Link",
  type: "group",
  fields: [
    {
      name: "use_custom",
      label: "Use Custom Url",
      type: "checkbox",
    },
    {
      type: "row",
      fields: [
        {
          name: "label",
          type: "text",
          label: "Link Label",
          defaultValue: "Click Me!",
          admin: {
            width: "50%",
            placeholder: "Your link label",
          },
        },
        {
          name: "internal_link",
          label: "Internal Link",
          type: "relationship",
          relationTo: ["page", "post"],
          admin: {
            width: "50%",
            condition: (_, siblingData) => !siblingData?.use_custom,
          },
        },
        {
          name: "custom_url",
          label: "Custom Url",
          type: "text",
          admin: {
            width: "50%",
            condition: (_, siblingData) => siblingData?.use_custom,
            placeholder: "https://...",
          },
        },
      ],
    },
  ],
};

export default link;
