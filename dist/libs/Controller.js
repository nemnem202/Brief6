"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
class Controller {
    constructor(request, response) {
        this.request = request;
        this.response = response;
    }
    respond() {
        console.log("empty response sent");
        this.response.send("empty response");
    }
}
exports.default = Controller;
