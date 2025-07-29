import { Request, Response } from "express";

abstract class Controller {
    constructor(protected request: Request, protected response: Response, private viewPath?:string, private viewParams?: { [key: string]: any }) {
    }

    public respond(
    ) {
        console.log('empty response sent')
        if (this.viewPath)  this.response.render(this.viewPath, this.viewParams)
    }
}

export default Controller;