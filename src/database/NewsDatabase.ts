import { DeleteNewsInputDTO } from "../dtos/deleteNews.dto";
import { NewsDBModel } from "../models/News";
import { BaseDatabase } from "./BaseDatabase";

export class NewsDatabase extends BaseDatabase {
  private static NEWS_TABLE = "news";

  public getAllNews = async (): Promise<NewsDBModel[]> => {
    const result: NewsDBModel[] = await BaseDatabase.connection("news");
    return result;
  };

  public createNews = async (input: NewsDBModel): Promise<void> => {
    await BaseDatabase.connection(NewsDatabase.NEWS_TABLE).insert(input);
  };

  public editNews = async (input: NewsDBModel): Promise<void> => {
    await BaseDatabase.connection(NewsDatabase.NEWS_TABLE)
      .update(input)
      .where({ id: input.id });
  };

  public deleteNews = async (input: DeleteNewsInputDTO): Promise<void> => {
    await BaseDatabase.connection(NewsDatabase.NEWS_TABLE)
      .del()
      .where({ id: input.id });
  };
}
