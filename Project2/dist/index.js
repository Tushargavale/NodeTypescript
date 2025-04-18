"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = __importDefault(require("express"));
// import usersRouter from './routes/users'
const app = (0, express_1.default)();
const PORT = 3000;
// app.use('/api/users',usersRouter)
app.get('/', (req, resp) => {
    resp.send({ message: 'Server is Started' });
});
app.listen(PORT, () => {
    console.log(`Server is ??? Running on ${PORT}`);
});
