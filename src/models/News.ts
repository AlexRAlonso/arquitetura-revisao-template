export class News {
  constructor(
    private id: string,
    private title: string,
    private description: string,
    private publishedAt: string,
    private author: string
  ) {}

  public toDBModel(): NewsDBModel {
    return {
      id: this.id,
      title: this.title,
      description: this.description,
      published_at: this.publishedAt,
      author: this.author,
    };
  }
}

export interface NewsDBModel {
  id: string;
  title: string;
  description: string;
  published_at: string;
  author: string;
}
