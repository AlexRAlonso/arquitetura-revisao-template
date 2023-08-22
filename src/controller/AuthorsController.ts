import { Request, Response } from "express";
import { AuthorsBusiness } from "../business/AuthorsBusiness";

export class AuthorsController {
  constructor(private authorsBusiness: AuthorsBusiness) {}

  public getAuthors = async (req: Request, res: Response): Promise<void> => {
    try {
      const result = await this.authorsBusiness.getAuthors();
      res.status(200).send(result);
    } catch (error: any) {
      res.status(400).send(error.message);
    }
  };
}
