"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.GeneralController = void 0;
const Controller_1 = __importDefault(require("../libs/Controller"));
const db_1 = require("../database/db");
class GeneralController extends Controller_1.default {
    homePage() {
        this.response.render("pages/home", { categoryList: db_1.categories });
    }
}
exports.GeneralController = GeneralController;
