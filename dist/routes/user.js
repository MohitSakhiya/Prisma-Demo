"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
exports.__esModule = true;
var express_1 = __importDefault(require("express"));
var userController_1 = require("../controller/userController");
var routes = express_1["default"].Router();
routes.post('/register', userController_1.Register);
exports["default"] = routes;
//# sourceMappingURL=user.js.map