import * as bodyParser from "body-parser";
import * as express from "express";
import { Logger } from "../logger/logger";
import User from "./user";
import { requestsService } from "../services/RequestsService";

class Routes {
    public express: express.Application;
    public logger: Logger;
    
    // array to hold users
    public users: any[];

    constructor() {
        this.express = express();
        this.middleware();
        this.routes();
        this.logger = new Logger();
    }

    private middleware(): void {
        this.express.use(bodyParser.json());
        this.express.use(bodyParser.urlencoded({ extended: false }));
    }

    private routes(): void {
        
        // user route
        this.express.use("/", User);

        this.express.post("/requests", async (req, res, next) => {
            try {
                const requestData = req.body
                const request = await requestsService.sendRequest(requestData);
                return res.send(request);
            } catch (error) {
                next(error)
            }
        });
    }
}

export default new Routes().express;