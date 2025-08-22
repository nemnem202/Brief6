"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const tslib_1 = require("tslib");
const express_1 = tslib_1.__importDefault(require("express"));
const node_path_1 = tslib_1.__importDefault(require("node:path"));
const router_1 = tslib_1.__importDefault(require("./routes/router"));
const app = (0, express_1.default)();
const PORT = 3000;
app.set("view engine", "ejs");
app.use(express_1.default.json());
app.set("views", node_path_1.default.join(__dirname, "../src/views")); // si tu builds en TypeScript
app.use(express_1.default.static(node_path_1.default.join(__dirname, "../public")));
app.use(router_1.default);
// app.listen(PORT, () => {
//   console.log(`Serveur démarré sur http://localhost:${PORT}`);
// });
exports.default = app;
