import { server } from "./deps.ts";

const port = Number(Deno.env.get("PORT") ?? 8080);

console.log(`Listening on localhost:${port}`);

server.serve(
  () => {
    return new Response("Hello World! This is Deno running on Northflank.\n");
  },
  { port }
);
