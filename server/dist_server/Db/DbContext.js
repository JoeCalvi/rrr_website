"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.dbContext = void 0;
var mongoose_1 = require("mongoose");
var User_1 = require("../models/User");
var Request_1 = require("../models/Request");
var DbContext = /** @class */ (function () {
    function DbContext() {
        this.Users = mongoose_1.default.model('User', User_1.UserSchema);
        this.Requests = mongoose_1.default.model('Request', Request_1.RequestSchema);
    }
    return DbContext;
}());
exports.dbContext = new DbContext();
//# sourceMappingURL=DbContext.js.map