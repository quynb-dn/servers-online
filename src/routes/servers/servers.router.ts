import express from "express";

import { findServers } from "./servers.controller";

const leadsRouter = express.Router();

leadsRouter.get("/", findServers);

export { leadsRouter };
