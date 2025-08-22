import Controller from "../libs/Controller.js";
import { categories } from "../database/db.js";

export class GeneralController extends Controller {
  public homePage() {
    this.response.render("pages/home", { categoryList: categories });
  }
}
