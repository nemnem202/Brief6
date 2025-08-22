import Controller from "../libs/Controller";
import { categories } from "../database/db";

export class GeneralController extends Controller {

    public homePage() {
        this.response.render("pages/home", { categoryList: categories });
    }
}