"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var bodyParser = require("body-parser");
var express = require("express");
var cors = require("cors");
var logger_1 = require("./logger/logger");
var routes_1 = require("./routes/routes");
var App = /** @class */ (function () {
    function App() {
        this.express = express();
        this.middleware();
        this.routes();
        this.users = [];
        this.logger = new logger_1.Logger();
    }
    // Configure Express middleware
    App.prototype.middleware = function () {
        this.express.use(bodyParser.json());
        this.express.use(bodyParser.urlencoded({ extended: false }));
        this.express.use(express.static(process.cwd() + "/client/dist/"));
        this.express.use(cors()); // Enable CORS for all routes
    };
    App.prototype.routes = function () {
        this.express.get("/", function (req, res, next) {
            res.sendFile(process.cwd() + "/client/rrr_website/dist/index.html");
        });
        // user route
        this.express.use("/api", routes_1.default);
        // handle undefined routes
        this.express.use("*", function (req, res, next) {
            res.send("Make sure URL is correct.");
        });
    };
    return App;
}());
exports.default = new App().express;
//# sourceMappingURL=app.js.map