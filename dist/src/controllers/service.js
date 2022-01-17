"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.ServiceController = void 0;
const base_1 = require("./base");
class ServiceController extends base_1.BaseController {
    getResourcePath() {
        return 'services';
    }
}
exports.ServiceController = ServiceController;
