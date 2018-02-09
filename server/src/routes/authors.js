import { Router } from "express";
import Table from "../table";

let router = Router();

let authors = new Table("authors");

router.get("/", (req, res) => {});

authors.getAll().then(authors => {
  res.json(authors);
});

router.get("/create", (req, res) => {
  let author = {
    id: 1,
    name: "Jacey",
    email: "j@j.com"
  };

  authors.insert(author).then(id => {
    res.json(id);
  });
});

export default router;
