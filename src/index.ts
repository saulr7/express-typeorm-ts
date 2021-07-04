import Postgres from "./db/Postgres";
import Server from "./server/server";

const server = new Server()

Postgres.instance

server.start()