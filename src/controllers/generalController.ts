import Controller from "../libs/Controller";

export class GeneralController extends Controller{

    public homePage() {
          this.response.render("pages/home");
    }
}