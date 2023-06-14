"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var http = require("http");
var app_1 = require("./app");
var logger_1 = require("./logger/logger");
var DbConfig_1 = require("./Db/DbConfig");
var port = 3080;
app_1.default.set("port", port);
var server = http.createServer(app_1.default);
server.listen(port);
var logger = new logger_1.Logger();
server.on("listening", function () {
    var addr = server.address();
    var bind = (typeof addr === "string") ? "pipe ".concat(addr) : "port ".concat(addr === null || addr === void 0 ? void 0 : addr.port);
    logger.info("Listening on ".concat(bind, "."));
});
DbConfig_1.DbConnection.connect();
module.exports = app_1.default;
//# sourceMappingURL=index.js.map