import express from "express";
import { AuthorsController } from "../controller/AuthorsController";
import { AuthorsBusiness } from "../business/AuthorsBusiness";
import { AuthorDatabase } from "../database/AuthorDatabase";

export const authorsRouter = express.Router();

const authorsController = new AuthorsController(
    new AuthorsBusiness(
        new AuthorDatabase()
    )
);

authorsRouter.get("/", authorsController.getAuthors);