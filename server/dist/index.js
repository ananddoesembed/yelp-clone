"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = __importDefault(require("express"));
require('dotenv').config();
const hotels_1 = require("./routes/hotels");
const morgan_1 = __importDefault(require("morgan"));
const server = express_1.default();
server.use(morgan_1.default("tiny"));
server.use(express_1.default.json());
server.use('/api', hotels_1.router);
server.use('/', (req, res) => {
    console.log(req.url, '404');
    res.sendStatus(404);
});
const PORT = process.env.PORT || 5000;
server.listen(PORT, () => {
    console.log('connected');
});
//# sourceMappingURL=index.js.map