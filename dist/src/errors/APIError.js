"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.ErrorCode = exports.APIError = void 0;
class APIError extends Error {
    constructor(code, message) {
        super('Error code: ' + code + ', message: ' + message);
    }
}
exports.APIError = APIError;
var ErrorCode;
(function (ErrorCode) {
    ErrorCode[ErrorCode["INVALID_INPUT"] = 1] = "INVALID_INPUT";
    ErrorCode[ErrorCode["UNKNOWN_ERROR"] = 2] = "UNKNOWN_ERROR";
})(ErrorCode = exports.ErrorCode || (exports.ErrorCode = {}));
