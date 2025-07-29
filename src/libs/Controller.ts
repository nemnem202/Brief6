import { Request, Response } from "express";

abstract class Controller {
    constructor(protected request: Request, protected response: Response) {
    }

    public respond(
    ) {
        console.log('empty response sent')
        this.response.send('empty response')
    }
}

export default Controller;