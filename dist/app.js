"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = __importDefault(require("express"));
const node_path_1 = __importDefault(require("node:path"));
const router_1 = __importDefault(require("./routes/router"));
const app = (0, express_1.default)();
const PORT = process.env.PORT || 3000;
app.set("view engine", "ejs");
app.use(express_1.default.json());
app.set("views", node_path_1.default.join(process.cwd(), "src/views"));
app.use(express_1.default.static(node_path_1.default.join(__dirname, "public")));
app.use(router_1.default);
app.listen(PORT, () => console.log(`Server running on port ${PORT}`));
