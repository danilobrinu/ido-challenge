"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.getToken = void 0;
exports.getToken = function (authHeader) {
    if (!authHeader)
        throw new Error('No authentication header');
    var parts = authHeader.split(' ');
    if (parts.length !== 2)
        throw new Error('No authorization token was found');
    var schema = parts[0], token = parts[1];
    if (!/^bearer$/i.test(schema))
        throw new Error('Invalid authorization header');
    if (!token.length)
        throw new Error('No authorization token was found');
    return token;
};
