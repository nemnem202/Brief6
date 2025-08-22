"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.UserController = void 0;
const tslib_1 = require("tslib");
const Controller_1 = tslib_1.__importDefault(require("../libs/Controller"));
const fs_1 = require("fs");
const path_1 = tslib_1.__importDefault(require("path"));
class UserController extends Controller_1.default {
    constructor() {
        super(...arguments);
        this.dbPath = path_1.default.join(__dirname, "../database/userDb.json");
        this.testUser = (userName, password, users) => {
            if (users.find((e) => e.userName === userName)) {
                return false;
            }
            return true;
        };
    }
    async createUser() {
        const userName = String(this.request.body.userName);
        const password = String(this.request.body.password);
        const data = await fs_1.promises.readFile(this.dbPath, "utf-8");
        const users = JSON.parse(data);
        if (!userName || !password || !this.testUser(userName, password, users)) {
            this.response.status(400).send("L'utilisateur ou le mot de passe est incorrect");
            return;
        }
        users.push({
            userName,
            password,
            messages: [],
        });
        await fs_1.promises.writeFile(this.dbPath, JSON.stringify(users, null, 2));
        this.response.status(201).json({ message: "Utilisateur créé" });
    }
}
exports.UserController = UserController;
