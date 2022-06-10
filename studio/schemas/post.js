export default {
  title: "Post",
  name: "post",
  type: "document",
  fields: [
    {
      title: "Title",
      name: "title",
      type: "string",
      validation: (Rule) => [
        Rule.required().min(10).error("Title must be at leas 10 characters"),
        Rule.required().max(50).error("It's better to use short snappy title"),
      ],
    },
    {
      title: "Author",
      name: "author",
      type: "reference",
      to: [{ type: "author" }],
    },
    {
      title: "Excerpt",
      name: "excerpt",
      type: "text",
      validation: (Rule) =>
        Rule.max(120).error("Exerpt must be less than 120 characters"),
    },
    {
      title: "Content",
      name: "content",
      type: "text",
      validation: (Rule) => Rule.required().error("Content is required"),
    },
    {
      title: "Image",
      name: "image",
      type: "image",
      validation: (Rule) => Rule.required().error("Content is required"),
    },
  ],
};
