import * as http from "http";
import App from "./app";
import { Logger } from "./logger/logger";
import { DbConnection } from "./Db/DbConfig";
import * as dotenv from 'dotenv';

dotenv.config();

const port = process.env.PORT || 3080;

App.set("port", port);
const server = http.createServer(App);
server.listen(port);

const logger = new Logger();

server.on("listening", function(): void {
    const addr = server.address();
    const bind = (typeof addr === "string") ? `pipe ${addr}` : `port ${addr?.port}`;
    logger.info(`Listening on ${bind}.`);
});

DbConnection.connect();

module.exports = App;