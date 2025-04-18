"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = require("express");
const users_1 = require("../handlers/users");
const router = (0, express_1.Router)();
// We need to go to actually /api/users
router.get("/", users_1.getUSers);
exports.default = router;
