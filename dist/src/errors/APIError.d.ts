export declare class APIError extends Error {
    constructor(code: number, message: string);
}
export declare enum ErrorCode {
    INVALID_INPUT = 1,
    UNKNOWN_ERROR = 2
}
