import express from "express";
import { NewsController } from "../controller/NewsController";
import { NewsBusiness } from "../business/NewsBusiness";
import { NewsDatabase } from "../database/NewsDatabase";

export const newsRouter = express.Router();

const newsController = new NewsController(
    new NewsBusiness(
        new NewsDatabase()
    )
);

newsRouter.get("/", newsController.getNews);
newsRouter.post("/", newsController.createNews);
newsRouter.put("/:id", newsController.editNews);
newsRouter.delete("/:id", newsController.deleteNews);
