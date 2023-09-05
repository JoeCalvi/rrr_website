import * as bodyParser from "body-parser";
import * as express from "express";
import * as cors from "cors";
import { Logger } from "./logger/logger";
import Routes from "./routes/routes";
import { CorsOptions } from "cors";
import * as path from "path"; // Import path module

class App {
    public express: express.Application;
    public logger: Logger;

    constructor() {
        this.express = express();
        this.middleware();
        this.routes();
        this.logger = new Logger();
    }

    private middleware(): void {
        this.express.use(bodyParser.json());
        this.express.use(bodyParser.urlencoded({ extended: false }));

        // Serve static files from the 'client/dist' directory
        this.express.use(express.static(path.join(__dirname, "../client/dist")));

        const allowedOrigins = [
            'http://localhost:3080',
            'https://riverrockroofing.onrender.com',
            'https://www.riverrockroofingid.com'
        ];
        const options: cors.CorsOptions = {
            origin: allowedOrigins
        };

        this.express.use(cors(options));
    }

    private routes(): void {
        this.express.get("/", (req, res, next) => {
            res.sendFile(path.join(__dirname, "../../client/rrr_website/dist/index.html"));
        });

        // user route
        this.express.use("/api", Routes);

        // Catch-all route to serve index.html for client-side routing
        this.express.get("*", (req, res, next) => {
            res.sendFile(path.join(__dirname, "../../client/rrr_website/dist/index.html"));
        });
    }
}

export default new App().express;
