"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.UpstreamController = void 0;
const base_1 = require("./base");
class UpstreamController extends base_1.BaseController {
    getResourcePath() {
        return 'upstreams';
    }
}
exports.UpstreamController = UpstreamController;
