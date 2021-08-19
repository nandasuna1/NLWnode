import express from "express";
import "reflect-metadata"

import "./database";
const app = express();



app.listen(3000, () => {
    console.log("o servidor rodando na porta 3000");
})