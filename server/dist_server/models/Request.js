"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.RequestSchema = void 0;
var mongoose_1 = require("mongoose");
var Schema = mongoose_1.default.Schema;
exports.RequestSchema = new Schema({
    name: { type: String, required: true },
    phone: { type: String, required: true },
    email: { type: String, required: true },
    description: { type: String, required: true },
    repair: { type: Boolean, default: false },
    replace: { type: Boolean, default: false },
    type: { type: String, default: "N/A" },
    color: { type: String, default: "N/A" },
    job: { type: String, default: "" }
});
//# sourceMappingURL=Request.js.map