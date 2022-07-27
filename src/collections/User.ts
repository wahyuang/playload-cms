import { CollectionConfig } from "payload/types";
import { isAdmin } from "../utilities/user";

const Users: CollectionConfig = {
  slug: "user",
  auth: true,
  admin: {
    useAsTitle: "email",
  },
  access: {
    read: () => true,
    create: isAdmin,
    delete: isAdmin,
    update: isAdmin,
  },
  fields: [
    {
      name: "role",
      type: "select",
      options: [
        { label: "Admin", value: "admin" },
        { label: "User", value: "user" },
      ],
      required: true,
      defaultValue: "admin",
    },
  ],
};

export default Users;
