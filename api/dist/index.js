"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = __importDefault(require("express"));
const router = express_1.default.Router();
const port = 8000;
const app = (0, express_1.default)();
app.get('/', (req, res) => {
    res.send('hello from express + ts');
});
app.listen(port, () => {
    console.log(`Listening on ${port}`);
});
