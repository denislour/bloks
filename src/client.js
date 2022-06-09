const sanityClient = require("@sanity/client");
const client = new sanityClient({
  projectId: "s5ld05h7",
  dataset: "production",
  apiVersion: "2021-03-25",
  useCdn: true,
});

export default client;
