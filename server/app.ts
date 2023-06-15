import * as bodyParser from "body-parser";
import * as express from "express";
import * as cors from "cors";
import { Logger } from "./logger/logger";
import Routes from "./routes/routes";
import { CorsOptions } from "cors";

class App {

    public express: express.Application;
    public logger: Logger;

    // array to hold users
    public users: any[];

    constructor() {
        this.express = express();
        this.middleware();
        this.routes();
        this.users = [];
        this.logger = new Logger();
    }

    // Configure Express middleware
    private middleware(): void {
        this.express.use(bodyParser.json());
        this.express.use(bodyParser.urlencoded({ extended: false }));
        this.express.use(express.static(process.cwd() + "/client/dist/"));

        const allowedOrigins = [
            'http://localhost:3080',
            'https://riverrockroofing.onrender.com'
        ];
        const options: cors.CorsOptions = {
            origin: allowedOrigins
        };

        this.express.use(cors(options));
    }

    private routes(): void {

        this.express.get("/", (req, res, next) => {
            res.sendFile(process.cwd() + "/client/rrr_website/dist/index.html");
        });

        // user route
        this.express.use("/api", Routes);

        // handle undefined routes
        this.express.use("*", (req, res, next) => {
            res.send("Make sure URL is correct.");
        });
    }
}

export default new App().express;