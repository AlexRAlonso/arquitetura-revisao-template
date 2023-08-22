import { AuthorDBModel } from "../models/Authors";
import { BaseDatabase } from "./BaseDatabase";

export class AuthorDatabase extends BaseDatabase {
  private static AUTHORS_TABLE = "authors";

  public getAuthors = async (): Promise<AuthorDBModel[]> => {
    const result: AuthorDBModel[] = await BaseDatabase.connection("authors");
    return result;
  };
}
