import { AuthorDatabase } from "../database/AuthorDatabase";
import { Authors, AuthorDBModel } from "../models/Authors";

export class AuthorsBusiness {
  constructor(private AuthorsDatabase: AuthorDatabase) {}
  public getAuthors = async (): Promise<Authors[]> => {
    const authorsData = await this.AuthorsDatabase.getAuthors();

    const authors: Authors[] = authorsData.map((author) => {
      return new Authors(
        author.id,
        author.name,
        author.cpf,
      );
    });

    return authors;
  };
}
