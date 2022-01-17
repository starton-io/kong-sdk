"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.TargetController = void 0;
const base_1 = require("./base");
class TargetController extends base_1.BaseController {
    getResourcePath(parentResource) {
        if (!parentResource) {
            throw new Error('Operation not supported: GET and DELETE targets are currently not supported.');
        }
        if (!parentResource.upstream) {
            throw new Error('Upstream must be provided for this operation');
        }
        // Get the upstream
        const upstream = parentResource.upstream;
        delete parentResource.upstream;
        return `upstreams/${upstream.id}/targets`;
    }
}
exports.TargetController = TargetController;
