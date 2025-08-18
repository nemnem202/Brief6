import Controller from "../libs/Controller";
import { promises as fs } from "fs";
import path from "path";

export class UserController extends Controller {
  private dbPath = path.join(__dirname, "../database/userDb.json");

  public async createUser() {
    const userName = String(this.request.body.userName);
    const password = String(this.request.body.password);

    const data = await fs.readFile(this.dbPath, "utf-8");
    const users: Array<any> = JSON.parse(data);

    if (!userName || !password || !this.testUser(userName, password, users)) {
      this.response.status(400).send("L'utilisateur ou le mot de passe est incorrect");
      return;
    }

    users.push({
      userName,
      password,
      messages: [],
    });

    await fs.writeFile(this.dbPath, JSON.stringify(users, null, 2));

    this.response.status(201).json({ message: "Utilisateur créé" });
  }

  private testUser = (userName: string, password: string, users: Array<any>): boolean => {
    if (users.find((e) => e.userName === userName)) {
      return false;
    }

    return true;
  };
}
