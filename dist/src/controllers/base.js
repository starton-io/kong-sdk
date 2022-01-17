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
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.BaseController = void 0;
const axios_1 = __importDefault(require("axios"));
const APIError_1 = require("../errors/APIError");
class BaseController {
    constructor(config) {
        this._config = config;
    }
    performRequest(method, endpoint, data) {
        var _a;
        return __awaiter(this, void 0, void 0, function* () {
            const url = `${this._config.url}/${endpoint}`;
            let headers = {};
            if (this._config.kongAdminToken) {
                headers = {
                    "kong-admin-token": this._config.kongAdminToken
                };
            }
            try {
                const response = yield axios_1.default({
                    method,
                    url,
                    data,
                    headers
                });
                if ((_a = response.data) === null || _a === void 0 ? void 0 : _a.data) {
                    return response.data.data;
                }
                return response.data;
            }
            catch (e) {
                if (e.response != undefined) {
                    const error = e;
                    throw new APIError_1.APIError(error.response.status, `On processing route ${method.toUpperCase()} ${url}: ${error.message}`);
                }
                throw new APIError_1.APIError(APIError_1.ErrorCode.UNKNOWN_ERROR, `Unexpected error occurred performing the request: ${e.message}`);
            }
        });
    }
    create(resource) {
        return __awaiter(this, void 0, void 0, function* () {
            if (!resource.name) {
                throw new APIError_1.APIError(1, 'Resource name must be defined');
            }
            return this.performRequest('post', `${this.getResourcePath(resource)}`, resource);
        });
    }
    createOrUpdate(resource) {
        return __awaiter(this, void 0, void 0, function* () {
            if (!resource.name && !resource.id) {
                throw new APIError_1.APIError(1, 'Resource name or ID must be defined');
            }
            const nameOrID = resource.id || resource.name;
            delete resource.id;
            delete resource.name;
            return this.performRequest('put', `${this.getResourcePath(resource)}/${nameOrID}`, resource);
        });
    }
    update(resource) {
        return __awaiter(this, void 0, void 0, function* () {
            const nameOrID = resource.id || resource.name;
            return this.performRequest('patch', `${this.getResourcePath(resource)}/${nameOrID}`, resource);
        });
    }
    get(idOrName) {
        return __awaiter(this, void 0, void 0, function* () {
            if (idOrName) {
                return this.performRequest('get', `${this.getResourcePath()}/${idOrName}`);
            }
            return this.performRequest('get', this.getResourcePath());
        });
    }
    delete(idOrName) {
        return __awaiter(this, void 0, void 0, function* () {
            if (!idOrName) {
                throw new APIError_1.APIError(APIError_1.ErrorCode.INVALID_INPUT, 'An ID or name must be provided to delete a resource');
            }
            return this.performRequest('delete', `${this.getResourcePath()}/${idOrName}`);
        });
    }
}
exports.BaseController = BaseController;
