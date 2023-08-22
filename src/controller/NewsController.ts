import { Request, Response } from "express";
import { NewsBusiness } from "../business/NewsBusiness";
import { CreateNewsSchema } from "../dtos/createNews.dto";
import { EditNewsSchema } from "../dtos/editNews.dto";
import { DeleteNewsSchema } from "../dtos/deleteNews.dto";

export class NewsController {
  constructor(private newsBusiness: NewsBusiness) {}

  public getNews = async (req: Request, res: Response): Promise<void> => {
    try {
      const result = await this.newsBusiness.getAllNews();
      res.status(200).send(result);
    } catch (error: any) {
      res.status(400).send(error.message);
    }
  };

  public createNews = async (req: Request, res: Response) => {
    try {
      const input = CreateNewsSchema.parse({
        title: req.body.title,
        description: req.body.description,
        author: req.body.author,
      });
      const result = await this.newsBusiness.create(input);
      res.status(201).send("News added!");
    } catch (error: any) {
      res.status(400).send(error.message);
    }
  };

  public editNews = async (req: Request, res: Response) => {
    try {
      const input = EditNewsSchema.parse({
        id: req.params.id,
        title: req.body.title,
        description: req.body.description,
      });
      const result = await this.newsBusiness.edit(input);
      res.status(201).send("News updated!");
    } catch (error: any) {
      res.status(400).send(error.message);
    }
  };

  public deleteNews = async (req: Request, res: Response) => {
    try {
      const input = DeleteNewsSchema.parse({
        id: req.params.id,
      });
      const result = await this.newsBusiness.delete(input);
      res.status(200).send("News deleted");
    } catch (error: any) {
      res.status(400).send(error.message);
    }
  };
}
