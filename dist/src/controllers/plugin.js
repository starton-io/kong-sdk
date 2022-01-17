"use strict";
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.PluginController = void 0;
const APIError_1 = require("../errors/APIError");
const base_1 = require("./base");
class PluginController extends base_1.BaseController {
    getResourcePath() {
        return 'plugins';
    }
    getPluginsForRoute(route) {
        return __awaiter(this, void 0, void 0, function* () {
            if (!route.name && !route.id) {
                throw new APIError_1.APIError(APIError_1.ErrorCode.INVALID_INPUT, 'Name or ID for route must be specified');
            }
            const nameOrID = route.id || route.name;
            return yield this.performRequest('get', `routes/${nameOrID}/plugins`);
        });
    }
}
exports.PluginController = PluginController;
