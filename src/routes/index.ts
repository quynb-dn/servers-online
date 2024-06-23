import { Express } from "express";

import { leadsRouter } from "./servers/servers.router";

function routes(app: Express) {
  app.use("/api/servers", leadsRouter);
}

export { routes };
