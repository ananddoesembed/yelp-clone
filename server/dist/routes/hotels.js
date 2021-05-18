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
exports.router = void 0;
const express_1 = __importDefault(require("express"));
const router = express_1.default.Router();
exports.router = router;
const db_1 = require("../db/db");
router.get('/getAllHotels', (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    try {
        const { rows } = yield db_1.db.query('SELECT * FROM HOTELS', []);
        res.send(rows);
    }
    catch (error) {
        console.error(error, req);
    }
}));
router.get('/getHotel/:id', (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    try {
        const { rows } = yield db_1.db.query('SELECT $2 FROM HOTELS WHERE ID = $1', [req.params.id, 'name']);
        res.send(rows);
    }
    catch (error) {
        console.error(error);
    }
}));
router.post('/addHotels', (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    try {
        const response = yield db_1.db.query('INSERT INTO hotels (name,location,price_range) VALUES($1,$2,$3)', [req.body.name, req.body.location, req.body.price_range]);
        res.send(response);
    }
    catch (error) {
        console.log(error);
    }
}));
router.put('/update', (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    try {
        const response = yield db_1.db.query('UPDATE hotels SET name=$1, location=$2, price_range=$3 WHERE ID=$4', [req.body.name, req.body.location, req.body.price_range, req.body.id]);
        res.send(response);
    }
    catch (error) {
        console.log(error);
    }
}));
router.delete('/deleteHotel/:id', (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    try {
        const response = yield db_1.db.query('DELETE FROM hotels WHERE  ID=$1', [req.params.id]);
        res.send(response);
    }
    catch (error) {
        console.log(error);
    }
}));
//# sourceMappingURL=hotels.js.map