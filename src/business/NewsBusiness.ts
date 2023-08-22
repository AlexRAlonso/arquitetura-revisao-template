import { AuthorDatabase } from "../database/AuthorDatabase";
import { NewsDatabase } from "../database/NewsDatabase";
import { CreateNewsInputDTO } from "../dtos/createNews.dto";
import { DeleteNewsInputDTO } from "../dtos/deleteNews.dto";
import { EditNewsInputDTO } from "../dtos/editNews.dto";
import { AuthorDBModel } from "../models/Authors";
import { News, NewsDBModel } from "../models/News";

export class NewsBusiness {
  constructor(private newsDatabase: NewsDatabase) {}
  public getAllNews = async (): Promise<News[]> => {
    const newsData = await this.newsDatabase.getAllNews();

    const news: News[] = newsData.map((news) => {
      return new News(
        news.id,
        news.title,
        news.description,
        news.published_at,
        news.author
      );
    });

    return news;
  };

  public create = async (input: CreateNewsInputDTO): Promise<void> => {
    const { title, description, author } = input;

    const authorDatabase = new AuthorDatabase();
    const authors: AuthorDBModel[] = await authorDatabase.getAuthors();
    const authorExists = authors.find((element) => element.id === author);
    if (!authorExists) {
      throw new Error("Invalid Author ID");
    }

    const id: string = "n" + Math.floor(Math.random() * 256).toString();
    const today = new Date().toISOString();
    const news = new News(id, title, description, today, author);
    await this.newsDatabase.createNews(news.toDBModel());
  };

  public edit = async (input: EditNewsInputDTO): Promise<void> => {
    const { id, title, description } = input;
    const news: NewsDBModel[] = await this.newsDatabase.getAllNews();
    const newsIdExists = news.find((element) => element.id === id);
    if (!newsIdExists) {
      throw new Error("News not found");
    }

    const today = new Date().toISOString();
    const newsUpdate = new News(
      id,
      title || newsIdExists.title,
      description || newsIdExists.description,
      today,
      newsIdExists.author
    );
    await this.newsDatabase.editNews(newsUpdate.toDBModel());
  };

  public delete = async (input: DeleteNewsInputDTO): Promise<void> => {
    const { id } = input;
    const news: NewsDBModel[] = await this.newsDatabase.getAllNews();
    const newsIdExists = news.find((element) => element.id === id);
    if (!newsIdExists) {
      throw new Error("News not found");
    }
    await this.newsDatabase.deleteNews(input);
  };
}
