"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
var express_1 = __importDefault(require("express"));
var jsonwebtoken_1 = __importDefault(require("jsonwebtoken"));
var get_token_1 = require("../utils/get-token");
var router = express_1.default.Router();
var SECRET_KEY = process.env.SECRET_KEY || 'foo';
router.get('/', function (_req, res) {
    res.json({ message: '¡Hola Mundo!' });
});
router.post('/login', function (req, res) {
    var payload = req.body;
    var token = jsonwebtoken_1.default.sign(payload, SECRET_KEY);
    res.json({ token: token });
});
router.get('/verify', function (req, res) {
    try {
        jsonwebtoken_1.default.verify(get_token_1.getToken(req.headers.authorization), SECRET_KEY);
        res.send({ message: 'verificado' });
    }
    catch (e) {
        res.status(401).json({ message: 'token no valido' });
    }
});
exports.default = router;
