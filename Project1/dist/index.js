"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = __importDefault(require("express"));
const users_1 = __importDefault(require("./routes/users"));
const app = (0, express_1.default)();
const PORT = 3000;
app.use('/api/users', users_1.default);
app.get('/api/users', (req, resp) => {
    resp.send([{
            name: 'Tushar',
            ID: 1031055
        }]);
});
app.listen(PORT, () => {
    console.log(`Server is ??? Running on ${PORT}`);
});
