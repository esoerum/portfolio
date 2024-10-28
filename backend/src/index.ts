import app  from "./app";
import { env } from "./lib/env";
//import { port } from "./config";

import { serve } from "@hono/node-server";

console.log(`Server is running on port ${env.PORT}`);

serve({
  fetch: app.fetch,
  port: env.PORT,
});