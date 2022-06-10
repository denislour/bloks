export default {
  title: "Author",
  name: "author",
  type: "document",
  fields: [
    {
      title: "Full Name",
      name: "fullname",
      type: "string",
      validation: (Rule) => Rule.required().error("Full Name is required"),
    },
    {
      title: "Short Bio",
      name: "short_bio",
      type: "text",
    },
    {
      title: "Avatar",
      name: "avatar",
      type: "image",
      validation: (Rule) => Rule.required().error("Avatar is required"),
    },
  ],
};
