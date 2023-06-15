"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.UserSchema = void 0;
var mongoose_1 = require("mongoose");
var Schema = mongoose_1.default.Schema;
exports.UserSchema = new Schema({
    firstName: { type: String },
    lastName: { type: String },
    userName: { type: String }
});
//# sourceMappingURL=User.js.map