import { createDirectus, rest, graphql, authentication } from "@directus/sdk";

// Client with REST support
const URL = process.env.NEXT_PUBLIC_DIRECTUS_URL;
const directusClient = createDirectus(URL)
  .with(rest())
  .with(authentication("cookie", { credentials: "include" }))
  .with(graphql({ credentials: "include" }))
  .with(rest({ credentials: "include" }));

export default directusClient;
