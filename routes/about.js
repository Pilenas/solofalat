import { Router } from "express";
import { aboutInfo } from "../config/about.js";

const router = Router();

router.get("/", (req, res) => {
  res.json(aboutInfo);
});

export default router;

//GET localhost:8080/about